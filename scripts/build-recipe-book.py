"""Build the practical A5 recipe book from the same TR/EN data as the website."""
import os, json, subprocess, pathlib, html
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A5
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pypdf import PdfReader

ROOT=pathlib.Path(__file__).resolve().parents[1]
NODE=os.environ.get('CYGNUS_NODE',r'C:\Users\ASUS\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe')
code='const fs=require("fs"),vm=require("vm"),c={};c.window=c;vm.createContext(c);for(const f of ["content","recipes","recipe-book"])vm.runInContext(fs.readFileSync("js/"+f+".js","utf8"),c);process.stdout.write(JSON.stringify({chapters:c.CHAPTERS,sources:c.SOURCES,recipes:c.BOOK_RECIPES}));'
data=json.loads(subprocess.check_output([NODE,'-e',code],cwd=ROOT))
for name,file in [('BookSerif','georgia.ttf'),('BookItalic','georgiai.ttf'),('BookSans','arial.ttf'),('BookBold','arialbd.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(pathlib.Path(r'C:\Windows\Fonts')/file)))
pdfmetrics.registerFontFamily('BookSans',normal='BookSans',bold='BookBold',italic='BookSans',boldItalic='BookBold')
W,H=A5; M=34; BW=W-2*M
INK=HexColor('#293c30'); MUTED=HexColor('#69745f'); PAPER=HexColor('#f5f2e9'); LINE=HexColor('#d0d5c4')
BODY=ParagraphStyle('Body',fontName='BookSans',fontSize=9.2,leading=13.7,textColor=INK)
TITLE=ParagraphStyle('Title',fontName='BookSerif',fontSize=23,leading=28,textColor=INK)
SMALL=ParagraphStyle('Small',fontName='BookSans',fontSize=7.7,leading=11,textColor=MUTED)
OUT=ROOT/'output'/'pdf'/'cygnus-aloe-recipe-book-tr-en.pdf'; OUT.parent.mkdir(parents=True,exist_ok=True)
c=canvas.Canvas(str(OUT),pagesize=A5);c.setTitle('CYGNUS - Aloe Tarif Kitabı / The Aloe Recipe Book');c.setAuthor('CYGNUS')
page=1; used=[]

def draw_paragraph(text,y,style=BODY,gap=10):
    p=Paragraph(text,style);_,height=p.wrap(BW,H)
    if y-height<48: raise ValueError(f'Page {page}: overflow by {48-(y-height):.1f} pt')
    p.drawOn(c,M,y-height);return y-height-gap

def page_base(lang,label):
    c.setFillColor(PAPER);c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(MUTED);c.setFont('BookSans',6.5);c.drawString(M,H-30,'CYGNUS / THE ALOE RECIPE BOOK');c.drawRightString(W-M,H-30,lang.upper()+' / '+label)
    c.setStrokeColor(LINE);c.line(M,29,W-M,29)
    c.setFont('BookSans',6.2);c.drawString(M,18,'GROW WITH CARE. CREATE WITH KNOWLEDGE.');c.drawRightString(W-M,18,f'{page:02d}')

for lang in ['tr','en']:
    en=lang=='en'; page_base(lang,'BEAUTY & CARE')
    c.setFillColor(INK);c.setFont('BookSerif',25);c.drawCentredString(W/2,H-110,'CYGNUS')
    c.setStrokeColor(MUTED);c.setLineWidth(.8)
    for x2,y2 in [(-60,120),(-18,173),(30,149),(69,95)]:
        side=1 if x2>=0 else -1
        p=c.beginPath();p.moveTo(W/2,H-330)
        p.curveTo(W/2+x2*.35,H-330+y2*.65,W/2+x2*.8,H-330+y2*.94,W/2+x2,H-330+y2)
        p.curveTo(W/2+x2*.95+side*7,H-330+y2*.4,W/2+x2*.2+side*8,H-330+y2*.1,W/2,H-330)
        p.close();c.setFillColor(HexColor('#e8ebdc'));c.drawPath(p,stroke=1,fill=1)
    c.rect(W/2-25,H-375,50,45,stroke=1,fill=0)
    y=draw_paragraph('The Aloe<br/>Recipe Book' if en else 'Aloe<br/>Tarif Kitabı',H-400,TITLE)
    y=draw_paragraph('Gel preparation · Face · Hair · Body' if en else 'Jel hazırlama · Yüz · Saç · Vücut',y-5,SMALL)
    y=draw_paragraph('Practical cosmetic education, plant care and a referenced guide to benefits. Not medical treatment.' if en else 'Pratik kozmetik kullanım, bitki bakımı ve faydalara ilişkin kaynaklı bilgi. Tıbbi tedavi değildir.',y,SMALL)
    c.showPage();page+=1
    for ch in data['chapters']:
        r=next((r for r in data['recipes'] if r['id']==ch.get('recipeId')),None)
        page_base(lang,'RECIPE' if r else 'GUIDE')
        y=draw_paragraph(html.escape(ch['title'][lang]),H-66,TITLE,gap=16)
        if r:
            y=draw_paragraph(html.escape(r['summary'][lang]),y,SMALL,gap=10)
            y=draw_paragraph(('<b>Ingredients</b>' if en else '<b>Malzemeler</b>')+'<br/>'+('<br/>'.join('• '+html.escape(t) for t in r['ingredients'][lang])),y,BODY,gap=12)
            for i,step in enumerate(r['steps'][lang],1):
                y=draw_paragraph(f'<b>{i:02d}.</b> '+html.escape(step),y,BODY,gap=6)
            y=draw_paragraph(('<b>Caution</b>: ' if en else '<b>Dikkat</b>: ')+html.escape(r['caution'][lang]),y-3,SMALL,gap=7)
            y=draw_paragraph('Read the preparation, safety and freshness pages before use.' if en else 'Kullanmadan önce hazırlık, güvenlik ve tazelik sayfalarını okuyun.',y,SMALL,gap=0)
        else:
            for p in ch['paras'][lang]:y=draw_paragraph(html.escape(p),y)
            if ch['id']=='sources':
                for src in data['sources']:
                    link='<link href="'+html.escape(src['url'],quote=True)+'" color="#425a3e"><b>'+html.escape(src['title'])+'</b></link>'
                    y=draw_paragraph(link+'<br/>'+html.escape(src['note'][lang]),y,SMALL,gap=9)
            elif y>160:
                c.setFillColor(MUTED);c.setFont('BookItalic',9);c.drawString(M,y-15,'My notes' if en else 'Notlarım')
                c.setStrokeColor(LINE)
                for yy in range(int(y-32),62,-23):c.line(M,yy,W-M,yy)
        used.append((page,lang,ch['id'],round(y,1)));c.showPage();page+=1
c.save()
reader=PdfReader(str(OUT))
assert len(reader.pages)==24,len(reader.pages)
text=' '.join(('\n'.join(p.extract_text() or '' for p in reader.pages)).split())
for r in data['recipes']:
    for lang in ['tr','en']:assert ' '.join(r['title'][lang].split()) in text,r['title'][lang]
print(json.dumps({'path':str(OUT),'pages':len(reader.pages),'lowest_content_y':min(x[3] for x in used),'checks':'All 12 recipe titles present; no page overflow.'},ensure_ascii=False))
