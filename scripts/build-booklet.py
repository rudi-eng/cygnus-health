"""Build the A5 bilingual journal, A5 adoption card and a local passport QR SVG."""
import json, subprocess, pathlib, html, os
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A5
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF, renderSVG

ROOT = pathlib.Path(__file__).resolve().parents[1]
NODE = os.environ.get('CYGNUS_NODE', r'C:\Users\ASUS\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe')
raw = subprocess.check_output([NODE, '-e', 'const fs=require("fs"),vm=require("vm"),c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync("js/content.js","utf8"),c);process.stdout.write(JSON.stringify({chapters:c.window.CHAPTERS,sources:c.window.SOURCES}));'], cwd=ROOT)
data = json.loads(raw)
OUT=ROOT/'output'/'pdf'; OUT.mkdir(parents=True,exist_ok=True)
for name,file in [('Georgia','georgia.ttf'),('GeorgiaItalic','georgiai.ttf'),('Arial','arial.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(pathlib.Path(r'C:\Windows\Fonts')/file)))
W,H=A5; M=35
INK=HexColor('#2d4231'); MUTED=HexColor('#738066'); PAPER=HexColor('#f6f3e8'); LINE=HexColor('#ced3be')
style=ParagraphStyle('body',fontName='Arial',fontSize=10,leading=16,textColor=INK,spaceAfter=14)
titleStyle=ParagraphStyle('title',fontName='Georgia',fontSize=28,leading=33,textColor=INK)
tinyStyle=ParagraphStyle('tiny',fontName='Arial',fontSize=8,leading=12,textColor=MUTED)

def paragraph(c,text,x,y,width,sty=style):
    p=Paragraph(text,sty); _,height=p.wrap(width,H);p.drawOn(c,x,y-height);return y-height-14

def plant(c,x,y,s=1):
    c.saveState();c.translate(x,y);c.scale(s,s);c.setStrokeColor(MUTED);c.setLineWidth(.8);c.setFillColor(HexColor('#e5e9d8'))
    curves=[(0,5,-45,50,-50,100,-9,83,0,5),(0,5,35,75,50,100,36,38,0,5),(0,5,-20,80,-10,145,14,87,0,5),(0,5,12,80,25,121,34,52,0,5),(0,5,-42,27,-76,44,-27,50,0,5)]
    for a,b,c1,d,e,f,g,h,i,j in curves:
        p=c.beginPath();p.moveTo(a,b);p.curveTo(c1,d,e,f,g,h);p.lineTo(i,j);c.drawPath(p,stroke=1,fill=1)
    p=c.beginPath();p.moveTo(-29,0);p.lineTo(29,0);p.lineTo(21,-43);p.lineTo(-21,-43);p.close();c.drawPath(p,stroke=1,fill=0);c.rect(-32,0,64,7,fill=0)
    c.restoreState()

def base(c,page,tag):
    c.setFillColor(PAPER);c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(INK);c.setFont('Arial',7);c.drawString(M,H-M,'CYGNUS / BOTANICAL JOURNAL')
    c.setFillColor(MUTED);c.drawRightString(W-M,H-M,tag)
    c.setStrokeColor(LINE);c.line(M,29,W-M,29)
    c.setFont('Arial',6.5);c.drawString(M,18,'GROW. NOTICE. REPEAT.');c.drawRightString(W-M,18,str(page).zfill(2))

def qr(size=100):
    widget=QrCodeWidget('https://cygnus.health/#/passport',barLevel='M')
    x1,y1,x2,y2=widget.getBounds();w=x2-x1;h=y2-y1
    d=Drawing(size,size,transform=[size/w,0,0,size/h,0,0]);d.add(widget);return d

pdf=OUT/'cygnus-botanical-journal-tr-en.pdf'
c=canvas.Canvas(str(pdf),pagesize=A5);c.setTitle('CYGNUS - Botanik Günlük / The Botanical Journal');c.setAuthor('CYGNUS')
page=1
for lang in ['tr','en']:
    base(c,page,lang.upper());c.setFont('Georgia',24);c.setFillColor(INK);c.drawCentredString(W/2,H-116,'CYGNUS')
    plant(c,W/2,H/2+5,.98)
    heading='Botanik Günlük' if lang=='tr' else 'The Botanical Journal'
    c.setFont('Georgia',25);c.drawCentredString(W/2,172,heading)
    c.setFont('GeorgiaItalic',12);c.setFillColor(MUTED);c.drawCentredString(W/2,144,'Biraz bitki. Biraz sihir.' if lang=='tr' else 'A little plant. A little magic.')
    paragraph(c,'Bakım, gözlem ve size ait küçük bir hikâye.' if lang=='tr' else 'Care, discovery, and a little story of your own.',M,111,W-2*M,tinyStyle)
    c.showPage();page+=1
    for index,ch in enumerate(data['chapters']):
        base(c,page,lang.upper());plant(c,W-M-18,H-82,.22);y=H-78
        c.setFont('Arial',8);c.setFillColor(MUTED);c.drawString(M,y,f'{index+1:02d} / FIELD NOTES');y-=23
        y=paragraph(c,html.escape(ch['title'][lang]),M,y,W-2*M,titleStyle)-12
        for p in ch['paras'][lang]:
            y=paragraph(c,html.escape(p),M,y,W-2*M)
        if ch['id']=='sources':
            for src in data['sources']:
                y=paragraph(c,'<b>'+html.escape(src['title'])+'</b><br/>'+html.escape(src['note'][lang])+'<br/><link href="'+html.escape(src['url'])+'" color="#526847">'+html.escape(src['url'])+'</link>',M,y,W-2*M,tinyStyle)
            y=paragraph(c,'Kaynaklar 22 Ekim 2026 tarihinde kontrol edildi.' if lang=='tr' else 'Sources checked on 22 October 2026.',M,y,W-2*M,tinyStyle)
        elif ch['id']=='diary':
            c.setStrokeColor(LINE)
            for liney in range(int(y-14),60,-26):c.line(M,liney,W-M,liney)
        else:
            if y>160:
                c.setStrokeColor(LINE);c.line(M,y-10,W-M,y-10)
                c.setFont('GeorgiaItalic',10);c.setFillColor(MUTED);c.drawString(M,y-33,'Küçük notlarım' if lang=='tr' else 'My little field notes')
                for liney in range(int(y-53),67,-26):c.setStrokeColor(LINE);c.line(M,liney,W-M,liney)
        if y<48:raise ValueError(f'Page overflow: {lang} / {ch["id"]}: {y}')
        c.showPage();page+=1
c.save()

card=OUT/'cygnus-adoption-card-tr-en.pdf'
c=canvas.Canvas(str(card),pagesize=A5);c.setTitle('CYGNUS - Plant adoption card');c.setAuthor('CYGNUS')
base(c,1,'PLANT PASSPORT');c.setFillColor(INK);c.setFont('Georgia',25);c.drawCentredString(W/2,H-100,'CYGNUS')
c.setFont('GeorgiaItalic',14);c.drawCentredString(W/2,H-130,'Merhaba, küçük dostum.');c.drawCentredString(W/2,H-152,'Hello, little one.')
plant(c,W/2,H-250,.45)
y=H-309
for label in ['Bitkimin adı / My plant’s name','Birlikte ilk günümüz / Our first day','Pencere köşemiz / Our little corner']:
    c.setFont('Arial',8);c.setFillColor(MUTED);c.drawString(M,y,label);c.setStrokeColor(LINE);c.line(M,y-23,W-M,y-23);y-=55
renderPDF.draw(qr(70),c,M,51)
paragraph(c,'<b>Pasaportunuzu açın / Open your passport</b><br/>cygnus.health/#/passport<br/>Bu cihazda saklanır. / Saved on this device.',M+84,109,W-2*M-84,tinyStyle)
c.showPage();c.save()
renderSVG.drawToFile(qr(220),str(ROOT/'assets'/'passport-qr.svg'))
print(json.dumps({'journal':str(pdf),'pages':page-1,'card':str(card)},ensure_ascii=False))
