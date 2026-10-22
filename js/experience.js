/* CYGNUS editorial pages and private, device-local plant journal. */
function say(tr, en) { return getLang() === 'en' ? en : tr; }
function todayISO() {
  const d = new Date();
  return [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-');
}
function validDay(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
  const d = new Date(value+'T12:00:00');
  return !isNaN(d) && d.getFullYear()===Number(value.slice(0,4)) && d.getMonth()+1===Number(value.slice(5,7)) && d.getDate()===Number(value.slice(8,10)) && value <= todayISO();
}
function prettyDay(value) {
  if (!validDay(value)) return '—';
  return new Intl.DateTimeFormat(getLang()==='en'?'en-GB':'tr-TR',{day:'numeric',month:'long',year:'numeric'}).format(new Date(value+'T12:00:00'));
}
function sprig(stage) {
  const n = stage || 2;
  const leaves = ['M80 133 Q35 100 29 52 Q67 77 80 133','M80 133 Q110 78 131 64 Q121 116 80 133','M80 133 Q58 70 68 19 Q91 65 80 133','M80 133 Q93 71 103 38 Q115 100 80 133','M80 133 Q49 121 15 100 Q52 96 80 133','M80 133 Q114 108 145 103 Q122 132 80 133'];
  return '<svg class="botanical-drawing" viewBox="0 0 160 190" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="1.25">'+leaves.slice(0,n===1?3:n===2?5:6).map(p=>'<path d="'+p+'" fill="currentColor" fill-opacity=".045"/>').join('')+'<path d="M55 140h51l-7 39H63zM52 133h57v7H52z"/><path d="M72 142v31m17-31v31" opacity=".4"/></g></svg>';
}
function arrowLink(href,label) { return '<a class="editorial-link" href="'+href+'">'+esc(label)+' <span aria-hidden="true">↗</span></a>'; }
function conceptNote() { return '<figcaption>'+esc(say('Yapay zekâ ürün konsepti · gerçek bitkiler farklılık gösterir','AI product concept · actual plants will vary'))+'</figcaption>'; }

function renderHome() {
  return '<section class="botanical-hero wrap"><div class="botanical-intro"><p class="kicker"><span class="tiny-sun" aria-hidden="true">✳</span> '+esc(say('YAŞAYAN BOTANİK KOLEKSİYONU','THE LIVING BOTANICAL COLLECTION'))+'</p>'
    +'<h1>'+say('Güzellik,<br>büyüttüğünüz bir şeyle<br><em>başlar.</em>','Beauty begins<br>with something<br><em>you grow.</em>')+'</h1>'
    +'<p class="hero-description">'+esc(say('Küçük bir aloe. Biraz sabır. Doğal kişisel bakıma yepyeni bir yaklaşım.','A little aloe plant. A little patience. A whole new approach to natural self-care.'))+'</p>'
    +'<div class="hero-actions"><a class="btn" href="#/shop">'+esc(say('Yaşayan seti keşfet','Discover the living kit'))+' <span aria-hidden="true">↗</span></a>'+arrowLink('#/story',say('Hikâyemiz','Our little story'))+'</div>'
    +'<div class="hero-footnote"><span class="fine-leaf" aria-hidden="true">⌁</span><p>'+esc(say('Türkiye’de özenle yetişti. Evinizde büyümeye hazır.','Grown with care in Türkiye. Ready to grow with you.'))+'</p></div></div>'
    +'<figure class="botanical-photo"><div class="photo-frame"><img src="assets/living-aloe-concept.jpg" alt="'+esc(ui().alts.hero)+'" width="1086" height="1448" fetchpriority="high"><div class="round-seal" aria-hidden="true"><span>CYGNUS</span>✳<small>'+say('ÖZENLE BÜYÜR','GROWN WITH CARE')+'</small></div><div class="photo-label"><span>01 / ALOE</span><em>'+esc(say('Küçük bir başlangıç.','A little beginning.'))+'</em></div></div>'+conceptNote()+'</figure></section>'
    +'<div class="promise-strip"><div class="wrap"><span>'+say('CANLI BİR BİTKİ','A LIVING LITTLE PLANT')+'</span><i aria-hidden="true">✳</i><span>'+say('7 CM PLASTİK ÜRETİM SAKSISI','7 CM PLASTIC NURSERY POT')+'</span><i aria-hidden="true">✳</i><span>'+say('TÜRKÇE & İNGİLİZCE','TURKISH & ENGLISH')+'</span><i aria-hidden="true">✳</i><span>'+say('SİZE AİT BİR HİKÂYE','A STORY OF YOUR OWN')+'</span></div></div>'
    +'<section class="wrap editorial-section"><div class="section-heading"><div><p class="kicker">01 / '+say('KÜÇÜK DÜNYANIZ','YOUR LITTLE WORLD')+'</p><h2>'+say('Biraz bitki.<br><em>Birçok güzel şey.</em>','A little plant.<br><em>So much possibility.</em>')+'</h2></div><p>'+esc(say('Hazır bir güzellik ürünü değil; sizinle büyüyen bir deneyim. Kutunun içindeki her şey bu yolculuğun bir parçası.','A growing experience, beginning with a real plant. Everything inside is a companion for the journey.'))+'</p></div>'
    +'<div class="kit-editorial"><a href="#/shop" class="kit-piece plant-piece"><div class="kit-image"><img src="assets/living-aloe-concept.jpg" alt="'+esc(ui().alts.hero)+'" loading="lazy" width="1086" height="1448"><span class="piece-no">01</span></div><div class="piece-copy"><h3>'+say('Yaşayan aloe','Your living aloe')+'</h3><p>'+say('7 cm plastik saksıda, özeninizi bekleyen genç bir bitki.','A young plant in a 7 cm plastic pot, waiting for your care.')+'</p></div></a>'
    +'<a href="#/booklet" class="kit-piece"><div class="kit-image journal-still"><div class="little-book"><small>CYGNUS</small>'+sprig(3)+'<strong>'+say('Aloe<br>Tarif Kitabı','The Aloe<br>Recipe Book')+'</strong><span>GROW · NOTICE · REPEAT</span></div><span class="piece-no">02</span></div><div class="piece-copy"><h3>'+say('Aloe tarif kitabı','The aloe recipe book')+'</h3><p>'+say('Jel hazırlama, yüz ve saç uygulamaları, faydalar ve bilinçli bakım. İki dilde.','Gel preparation, face and hair applications, benefits and informed care. In two languages.')+'</p></div></a>'
    +'<a href="#/passport" class="kit-piece"><div class="kit-image passport-still"><div class="mini-passport"><span>CYGNUS / BOTANICAL PASSPORT</span>'+sprig(1)+'<em>'+say('Merhaba, küçük dostum.','Hello, little one.')+'</em><hr><small>'+say('BİTKİMİN ADI','MY PLANT’S NAME')+'</small><div class="handwriting">Luna</div></div><span class="piece-no">03</span></div><div class="piece-copy"><h3>'+say('Bitki pasaportunuz','Your plant passport')+'</h3><p>'+say('Bir isim, ilk fotoğraf ve birlikte yazacağınız bir hikâye.','A name, a first photograph, and a story you will write together.')+'</p></div></a></div>'
    +'<div class="kit-bottom"><p>'+esc(say('Yaşayan Aloe Güzellik Seti · ','The Living Aloe Beauty Kit · '))+esc(formatTL(window.ASLANA_CONFIG.priceTL))+'<small>'+say('Kargo ayrıca teyit edilir.','Delivery confirmed separately.')+'</small></p>'+arrowLink('#/shop',say('Kutunun içini keşfet','Explore what’s inside'))+'</div></section>'
    +renderKitContents()+renderJournalFeature()
    +'<section class="growing-section"><div class="wrap growing-layout"><div><p class="kicker">04 / '+say('YAVAŞ BÜYÜYEN SİHİR','SLOW-GROWING MAGIC')+'</p><h2>'+say('Güzel şeyler<br><em>zaman ister.</em>','Beautiful things<br><em>take a little time.</em>')+'</h2><p>'+say('Bu genç bitki bir başlangıç. Ona bir pencere, biraz özen ve kendi hızında büyüme şansı verin.','This young plant is a beginning. Give it a window, a little care, and the freedom to grow at its own pace.')+'</p><div class="growth-tabs" role="group" aria-label="'+esc(say('Büyüme aşamaları','Growth stages'))+'">'+[say('Hoş geldin','Hello, little one'),say('Yerleşiyoruz','Settling in'),say('Yeni büyüme','New beginnings')].map((s,i)=>'<button type="button" data-action="growth" data-stage="'+i+'" aria-pressed="'+(Number(window.__growth||0)===i)+'">0'+(i+1)+' <span>'+s+'</span></button>').join('')+'</div></div><div id="growth-panel">'+growthPanel(Number(window.__growth||0))+'</div></div></section>'
    +renderStudioFeature()
    +'<section class="wrap editorial-section journal-feature"><div class="journal-display"><div class="journal-open"><div><small>CYGNUS / FIELD NOTES</small>'+sprig(3)+'<span>ALOE · '+say('GÖZLEM NO.','OBSERVATION NO.')+' 01</span></div><div><p class="kicker">'+say('BÜYÜK KÜÇÜK ANLAR','THE LITTLE MOMENTS')+'</p><h3>'+say('Bugün ne<br>fark ettiniz?','What did you<br>notice today?')+'</h3><div class="journal-lines"></div><em>'+say('Her yeni yaprak, küçük bir kutlama.','Every new leaf, a little celebration.')+'</em></div></div></div><div><p class="kicker">06 / '+say('SADECE SİZE AİT','SOMETHING OF YOUR OWN')+'</p><h2>'+say('Her bitkinin<br><em>bir hikâyesi var.</em>','Every plant has<br><em>a little story.</em>')+'</h2><p>'+say('Sizinki eve geldiği gün başlar. Bir isim verin. İlk fotoğrafını çekin. Yeni yaprakları not edin. Küçük köşenizin büyümesini izleyin.','Yours begins the day it arrives. Give it a name. Take its first photograph. Notice the new leaves. Watch your little corner of nature grow.')+'</p>'+arrowLink('#/passport',say('Bitkimle tanışalım','Meet my little plant'))+'<p class="fine privacy-note">'+say('Kişisel günlük · bu cihazda saklanır · hesap gerekmez','A private journal · saved on this device · no account needed')+'</p></div></section>'
    +renderLeafInterlude()
    +'<section class="story-band"><div class="wrap"><p class="kicker">'+say('TÜRKİYE’DEN, ÖZENLE','FROM TÜRKİYE, WITH CARE')+'</p><h2>'+say('Bizim bitkilerimizden,<br><em>sizin evinize.</em>','From our plants,<br><em>to your home.</em>')+'</h2><p>'+say('Her şey elimizde büyüyen aloe bitkileriyle başladı. Şimdi bu küçük mutluluğu, birer bitkiyle paylaşıyoruz.','It began with the aloe plants we were already growing. Now we are sharing that little joy, one living plant at a time.')+'</p>'+arrowLink('#/story',say('CYGNUS’un hikâyesi','The story of CYGNUS'))+'</div></section>'+renderHomeFAQ();
}
function growthPanel(i) {
  const titles=[say('Bir pencere. Bir isim.','A window. A name.'),say('Kök salmak için alan.','Room to put down roots.'),say('Bir yeni yaprak daha.','One more little leaf.')];
  const body=[say('Kutuyu açın, parlak dolaylı ışıkta bir yer seçin ve ilk fotoğrafı kaydedin. Toprak nemliyse su eklemeyin.','Unpack, choose a spot in bright indirect light, and record your first photo. If the soil is damp, skip watering.'),say('Toprağı kontrol ederek sulayın, gelişimi izleyin. Her bitki farklı hızda yerleşir; acele etmeye gerek yok.','Check the soil before watering and watch for changes. Each plant settles in at its own pace. There is no hurry.'),say('Yeni yaprakları ve kökleri not edin. Büyüme bir kutlamadır; hasat izni değildir. Olgunluk ve uygunluk için tarif kitabını okuyun.','Notice new leaves and roots. Growth is something to celebrate; it does not approve harvesting. Read the recipe book for maturity and suitability guidance.')];
  return '<div class="growth-illustration">'+sprig(i+1)+'<span class="orbit-note">'+say('kendi hızında büyür','growing at its own pace')+'</span></div><div class="growth-caption" aria-live="polite"><span>0'+(i+1)+'</span><div><h3>'+titles[i]+'</h3><p>'+body[i]+'</p><small>'+say('Aşama çizimi · kesin bir zaman çizelgesi değil','Stage illustration · no fixed timeline')+'</small></div></div>';
}

const PASSPORT_KEY='cygnus-passport-v1';
function emptyPassport() { return {version:1,profile:{name:'',adopted:'',city:''},entries:[]}; }
function normalizePassport(value) {
  if (!value || value.version!==1 || !value.profile || typeof value.profile.name!=='string' || !Array.isArray(value.entries) || value.entries.length>120) throw new Error('invalid');
  const profile={name:value.profile.name.trim().slice(0,40),adopted:validDay(value.profile.adopted)?value.profile.adopted:'',city:String(value.profile.city||'').slice(0,60)};
  if (profile.name && !profile.adopted) throw new Error('invalid-date');
  const entries=value.entries.map((e,i)=>{
    if (!e || !validDay(e.date) || (profile.adopted && e.date<profile.adopted) || typeof e.note!=='string') throw new Error('invalid');
    const photo=typeof e.photo==='string' && /^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(e.photo) && e.photo.length<=320000 ? e.photo : '';
    if (e.photo && !photo) throw new Error('invalid-photo');
    return {id:String(e.id||i).replace(/[^a-zA-Z0-9-]/g,'').slice(0,60)||String(i),date:e.date,note:e.note.slice(0,800),leaves:e.leaves===''||e.leaves==null?'':Math.max(0,Math.min(200,Math.round(Number(e.leaves)||0))),kind:['note','water','check','leaf'].includes(e.kind)?e.kind:'note',photo};
  });
  if (entries.filter(e=>e.photo).length>12 || new Set(entries.map(e=>e.id)).size!==entries.length) throw new Error('invalid');
  return {version:1,profile,entries};
}
function getPassport() {
  try { const raw=localStorage.getItem(PASSPORT_KEY);const p=raw?normalizePassport(JSON.parse(raw)):emptyPassport();window.__passportReadError=false;return p; }
  catch(e) { window.__passportReadError=true; return emptyPassport(); }
}
function savePassport(value) {
  try { localStorage.setItem(PASSPORT_KEY,JSON.stringify(normalizePassport(value))); window.__passportReadError=false; return true; }
  catch(e) { passportStatus(say('Kaydedilemedi. Tarayıcı depolaması kapalı veya dolu olabilir. Fotoğrafı kaldırıp deneyin; mevcut günlüğü yedekleyin.','Could not save. Browser storage may be blocked or full. Try without the photo, and back up your existing journal.'),true); return false; }
}
function passportStatus(message,error) {
  const el=document.getElementById('passport-status');
  if (el) {el.textContent=message;el.classList.toggle('error',!!error);}
  else toast(message);
}
function passportMilestones(p) {
  return [
    {title:say('Bir isim, bir başlangıç','A name, a beginning'),done:!!p.profile.name,detail:say('Pasaportunuzu oluşturun.','Create your plant’s passport.')},
    {title:say('İlk portre','The first portrait'),done:p.entries.some(e=>e.photo),detail:say('İlk fotoğrafınızı ekleyin.','Add your first photograph.')},
    {title:say('Özenin ritmi','A rhythm of care'),done:p.entries.some(e=>e.kind==='check'||e.kind==='water'),detail:say('Bir toprak kontrolü kaydedin.','Record a soil check or watering.')},
    {title:say('Yeni bir yaprak','A new little leaf'),done:p.entries.some(e=>e.kind==='leaf'),detail:say('Gerçekten gördüğünüz yeni yaprağı not edin.','Log a new leaf you actually observe.')}
  ];
}
function renderPassport() {
  const p=getPassport(), f=p.profile;
  const entries=[...p.entries].sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id));
  const photo=entries.find(e=>e.photo);
  const kinds={note:say('Gözlem','Observation'),check:say('Toprak kontrolü','Soil check'),water:say('Sulama','Watering'),leaf:say('Yeni yaprak','New leaf')};
  const diary=entries.map(e=>'<article class="diary-entry">'+(e.photo?'<img src="'+e.photo+'" alt="'+esc(say('Bitki günlüğü fotoğrafı','Plant journal photo'))+'" loading="lazy">':'')+'<div><p class="kicker">'+esc(kinds[e.kind])+' · '+esc(prettyDay(e.date))+'</p><p class="entry-note">'+esc(e.note)+'</p>'+(e.leaves!==''?'<small>'+esc(say('Gözlemlenen yaprak: ','Leaves observed: '))+e.leaves+'</small>':'')+'<button type="button" class="text-link no-print" data-action="delete-entry" data-id="'+esc(e.id)+'">'+say('Kaydı kaldır','Remove entry')+'</button></div></article>').join('');
  return '<section class="wrap page-head"><p class="kicker">CYGNUS / '+say('BOTANİK PASAPORT','BOTANICAL PASSPORT')+'</p><h1>'+say('Merhaba,<br><em>küçük dostum.</em>','Hello,<br><em>little one.</em>')+'</h1><p class="lede">'+say('Her bitkinin bir hikâyesi var. Burada sizinkini büyütün.','Every plant has a little story. Grow yours here.')+'</p><p class="local-notice">'+say('Günlüğünüz yalnızca bu cihazdaki tarayıcıda saklanır. Fotoğraflar yüklenmez veya paylaşılmaz. Verilerinizi korumak için düzenli yedek alın.','Your journal stays in this browser on this device. Photos are not uploaded or shared. Export a backup regularly to keep your memories safe.')+'</p></section>'
    +'<section class="wrap passport-layout"><aside class="passport-card"><div class="passport-top"><strong>CYGNUS</strong><span>BOTANICAL PASSPORT / 01</span></div><div class="passport-portrait">'+(photo?'<img src="'+photo.photo+'" alt="'+esc(f.name)+'">':sprig(2))+'</div><p class="kicker">'+say('BİTKİMİN ADI','MY PLANT’S NAME')+'</p><h2>'+esc(f.name||say('Hikâyeniz burada başlar','Your story begins here'))+'</h2><dl><div><dt>'+say('Birlikte ilk günümüz','Our first day')+'</dt><dd>'+esc(prettyDay(f.adopted))+'</dd></div><div><dt>'+say('Evimiz','Our little corner')+'</dt><dd>'+esc(f.city||'—')+'</dd></div><div><dt>'+say('Köken','Origin')+'</dt><dd>'+say('Türkiye · yetiştirici bilgisi','Türkiye · grower supplied')+'</dd></div></dl><span class="passport-stamp">✳<small>GROW WITH CARE</small></span><p class="fine">'+say('Aloe vera · yetiştirici tanımlaması','Aloe vera · grower identified')+'</p></aside>'
    +'<div class="passport-workspace"><form id="passport-profile" class="journal-form"><p class="kicker">01 / '+say('TANIŞALIM','LET’S GET ACQUAINTED')+'</p><h2>'+say('Bir isimle başlar.','It begins with a name.')+'</h2><label>'+say('Bitkinizin adı','Your plant’s name')+'<input name="plantName" value="'+esc(f.name)+'" maxlength="40" required placeholder="Luna, Ada, Filiz…"></label><div class="pair"><label>'+say('Sahiplendiğiniz gün','Adoption day')+'<input name="adopted" type="date" max="'+todayISO()+'" value="'+esc(f.adopted)+'" required></label><label>'+say('Şehir / pencere köşesi','City / window corner')+'<input name="city" value="'+esc(f.city)+'" maxlength="60" placeholder="'+esc(say('İzmir, doğu penceresi','İzmir, east window'))+'"></label></div><button class="btn" type="submit">'+say('Pasaportumu kaydet','Save my passport')+'</button></form>'
    +'<div id="passport-status" class="passport-status" role="status" aria-live="polite">'+(window.__passportReadError?say('Kaydedilmiş veriler okunamıyor veya depolama kapalı. Önce bir yedeği geri yüklemeyi deneyin.','Saved data could not be read, or storage is blocked. Try restoring a backup first.'):'')+'</div>'
    +'<div class="milestone-list">'+passportMilestones(p).map(m=>'<div class="milestone '+(m.done?'earned':'')+'"><span aria-hidden="true">'+(m.done?'✳':'○')+'</span><div><h3>'+esc(m.title)+'</h3><p>'+esc(m.detail)+'</p></div><span class="sr-only">'+(m.done?say('Tamamlandı','Completed'):say('Henüz tamamlanmadı','Not yet completed'))+'</span></div>').join('')+'</div>'
    +'<form id="passport-entry" class="journal-form"><p class="kicker">02 / '+say('KÜÇÜK BİR NOT','A LITTLE FIELD NOTE')+'</p><h2>'+say('Bugün ne fark ettiniz?','What did you notice today?')+'</h2><div class="pair"><label>'+say('Tarih','Date')+'<input name="entryDate" type="date" max="'+todayISO()+'" value="'+todayISO()+'" required></label><label>'+say('Not türü','Kind of note')+'<select name="kind">'+Object.entries(kinds).map(([k,v])=>'<option value="'+k+'">'+esc(v)+'</option>').join('')+'</select></label></div><label>'+say('Gözleminiz','Your observation')+'<textarea name="note" rows="3" maxlength="800" required placeholder="'+esc(say('Yeni bir yaprak gördüm…','I spotted a new leaf…'))+'"></textarea></label><div class="pair"><label>'+say('Yaprak sayısı (isteğe bağlı)','Leaf count (optional)')+'<input name="leaves" type="number" min="0" max="200" step="1"></label><label>'+say('Fotoğraf (isteğe bağlı)','Photo (optional)')+'<input id="plant-photo" type="file" accept="image/jpeg,image/png,image/webp"><small>'+say('JPEG, PNG, WebP · en fazla 8 MB · 12 fotoğraf saklanabilir','JPEG, PNG, WebP · up to 8 MB · room for 12 photos')+'</small></label></div><p id="photo-status" class="fine" role="status"></p><img id="photo-preview" class="photo-preview" alt="'+esc(say('Seçilen fotoğrafın önizlemesi','Selected photo preview'))+'" hidden><button class="btn" type="submit">'+say('Günlüğe ekle','Add to my journal')+'</button></form>'
    +'<div class="backup-tools no-print"><button type="button" class="btn ghost" data-action="export-passport">'+say('Yedeği indir','Export backup')+'</button><label class="file-button">'+say('Yedeği geri yükle','Restore backup')+'<input id="passport-import" type="file" accept="application/json,.json"></label><button type="button" class="text-link" data-action="print-passport">'+say('Sahiplenme kartını yazdır','Print adoption card')+'</button><button type="button" class="text-link" data-action="ics">'+say('Kontrol hatırlatıcısı indir','Download check reminder')+'</button></div><div id="import-preview"></div></div></section>'
    +'<section class="wrap diary-section"><div class="section-heading"><div><p class="kicker">03 / '+say('YAŞAYAN GÜNLÜĞÜNÜZ','YOUR LIVING JOURNAL')+'</p><h2>'+say('Birlikte büyüyen anılar.','Little memories, growing.')+'</h2></div><span>'+p.entries.length+' '+say('kayıt','entries')+'</span></div><div class="diary-grid">'+(diary||'<div class="diary-empty">'+sprig(1)+'<h3>'+say('İlk sayfa sizi bekliyor.','The first page is waiting.')+'</h3><p>'+say('Bir fotoğraf, küçük bir not. Hepsi bu.','A photograph, a little note. That is all it takes.')+'</p></div>')+'</div></section>';
}

function renderGreenhouse() {
  const p=getPassport(), ms=passportMilestones(p), done=ms.filter(m=>m.done).length;
  return '<section class="wrap page-head greenhouse-head"><p class="kicker">CYGNUS / '+say('SERA','THE GREENHOUSE')+'</p><h1>'+say('Küçük şeyler,<br><em>birlikte büyür.</em>','Little things,<br><em>grow together.</em>')+'</h1><p class="lede">'+say('Bugün size ait bir köşe. Yarın, birlikte büyüyen hikâyeler için bir buluşma yeri.','Today, a corner of your own. One day, a gathering place for stories that grow together.')+'</p></section><section class="wrap greenhouse-grid"><article class="greenhouse-own"><p class="kicker">'+say('SİZİN PENCERENİZ','YOUR WINDOWSILL')+'</p>'+sprig(Math.max(1,done))+'<h2>'+esc(p.profile.name||say('Küçük aloe’niz','Your little aloe'))+'</h2><p>'+done+' / 4 '+say('gözlem rozeti','observation badges')+'</p><div class="badge-row">'+ms.map(m=>'<span class="'+(m.done?'earned':'')+'" title="'+esc(m.title)+'" aria-label="'+esc(m.title+(m.done?say(' · tamamlandı',' · completed'):say(' · bekliyor',' · pending')))+'">✳</span>').join('')+'</div>'+arrowLink('#/passport',say('Günlüğüme dön','Visit my journal'))+'</article><article class="future-garden"><p class="kicker">'+say('TOPLULUK KONSEPTİ · HENÜZ AÇIK DEĞİL','COMMUNITY CONCEPT · NOT OPEN YET')+'</p><h2>'+say('Birlikte büyüteceğimiz<br><em>bir bahçe.</em>','A garden we will<br><em>grow together.</em>')+'</h2><p>'+say('Bitki fotoğrafları, yeni yaprak kutlamaları ve pencere önü hikâyeleri için bir yer hayal ediyoruz. Topluluk paylaşımı henüz yok; kişisel fotoğraflarınız burada yayımlanmaz.','We imagine a place for plant portraits, new-leaf celebrations, and stories from the windowsill. Community sharing is not available yet; your private photos are not published here.')+'</p><ul><li>'+say('Bitki portreleri ve büyüme hikâyeleri','Plant portraits and growing stories')+'</li><li>'+say('Şehirlere ve mevsimlere göre bakım sohbetleri','Care conversations across cities and seasons')+'</li><li>'+say('Güvenli hesaplar ve moderasyonla açılacak','To open with secure accounts and moderation')+'</li></ul>'+arrowLink('#/care',say('Şimdilik bakım köşesini keşfet','Explore the care corner for now'))+'</article></section>';
}
function renderStory() {
  return '<section class="wrap editorial-section story-page"><div><p class="kicker">CYGNUS / '+say('HİKÂYEMİZ','OUR LITTLE STORY')+'</p><h1>'+say('Her şey<br><em>bir bitkiyle başladı.</em>','It all began<br><em>with a little plant.</em>')+'</h1><p class="lede">'+say('Türkiye’de yetiştirdiğimiz aloe bitkileri, paylaşmak istediğimiz küçük bir fikre dönüştü.','The aloe plants we grow in Türkiye became a little idea we wanted to share.')+'</p><p>'+say('CYGNUS, bir pencere köşesine hayat getiren genç bir aloe ile başlıyor. Birkaç basit malzeme: drenajlı küçük bir saksı, açık ve özenli bir bakım rehberi, kendi hikâyenizi yazabileceğiniz bir günlük.','CYGNUS begins with a young aloe that brings a little life to a windowsill. A few simple things: a small pot with drainage, a thoughtful care guide, and a journal for a story of your own.')+'</p><p>'+say('Güzelliğin bir kısmının büyütmekte olduğuna inanıyoruz. Bir yeni yaprak fark etmekte, bir fotoğraf saklamakta ve başka bir canlının kendi zamanına saygı duymakta.','We believe some of the beauty is in growing. In noticing a new leaf, keeping a photograph, and respecting another living thing’s own sense of time.')+'</p>'+arrowLink('#/shop',say('Kendi hikâyenizi başlatın','Begin a story of your own'))+'</div><figure class="story-photo"><img src="assets/living-aloe-concept.jpg" width="1086" height="1448" alt="'+esc(ui().alts.hero)+'">'+conceptNote()+'</figure></section><section class="wrap story-values"><article><span>01</span><h2>'+say('Yaşayan.','Living.')+'</h2><p>'+say('Her biri farklı bir genç bitki. Hazır hasat vaadi vermeden.','A young plant with its own character. Given time to grow before harvesting is even considered.')+'</p></article><article><span>02</span><h2>'+say('Kişisel.','Personal.')+'</h2><p>'+say('İsmini siz koyun, notları siz yazın. Pasaportunuz bu cihazda size ait kalsın.','You choose the name and write the notes. Your passport stays yours, on this device.')+'</p></article><article><span>03</span><h2>'+say('Özenli.','Thoughtful.')+'</h2><p>'+say('Şeffaf ürün bilgisi. Sertifikasız organik iddiası yok. Pratik tarifler, taze hazırlık ve gerçekçi fayda bilgisi.','Clear product details. No unverified organic claims. Practical recipes, fresh preparation and realistic benefit information.')+'</p></article></section>';
}

let pendingPhoto='', pendingPhotoTask=null, pendingImport=null;
async function preparePhoto(file) {
  if (!file) return '';
  if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size>8*1024*1024) throw new Error(say('JPEG, PNG veya WebP seçin (en fazla 8 MB).','Choose JPEG, PNG or WebP (up to 8 MB).'));
  const url=URL.createObjectURL(file);
  try {
    const img=new Image(); img.src=url; await img.decode();
    const scale=Math.min(1,850/Math.max(img.width,img.height));
    const canvas=document.createElement('canvas'); canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));
    const ctx=canvas.getContext('2d');ctx.fillStyle='#f5f2e9';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
    let result=canvas.toDataURL('image/jpeg',.72);
    if (result.length>320000) result=canvas.toDataURL('image/jpeg',.45);
    if (result.length>320000) throw new Error(say('Bu fotoğraf hâlâ çok büyük. Daha küçük bir fotoğraf deneyin.','This photo is still too large. Try a smaller photograph.'));
    return result;
  } finally {URL.revokeObjectURL(url);}
}
function downloadFile(filename,text,type) {
  const url=URL.createObjectURL(new Blob([text],{type})), a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function resetPassportDraft() {pendingPhoto='';pendingPhotoTask=null;pendingImport=null;}
document.addEventListener('change',async event=>{
  if (event.target.id==='plant-photo') {
    pendingPhoto='';const status=document.getElementById('photo-status'),preview=document.getElementById('photo-preview');preview.hidden=true;
    status.textContent=say('Fotoğraf hazırlanıyor…','Preparing your photo…');
    const task=preparePhoto(event.target.files[0]);pendingPhotoTask=task;
    try {const result=await task;if(pendingPhotoTask!==task)return;pendingPhoto=result;preview.src=result;preview.hidden=!result;status.textContent=result?say('Fotoğraf hazır. Kaydetmek için günlüğe ekleyin.','Photo ready. Add the entry to save it.'):'';}
    catch(e){if(pendingPhotoTask!==task)return;event.target.value='';status.textContent=e.message||say('Fotoğraf açılamadı.','Could not open this photo.');}
    finally {if(pendingPhotoTask===task)pendingPhotoTask=null;}
  }
  if (event.target.id==='passport-import') {
    const file=event.target.files[0];if(!file)return;
    try {
      if(file.size>5*1024*1024)throw new Error('size');
      pendingImport=normalizePassport(JSON.parse(await file.text()));
      document.getElementById('import-preview').innerHTML='<aside class="disclaimer"><p>'+esc(say('Bu yedek mevcut pasaportunuzun yerini alacak: ','This backup will replace the current passport: ')+pendingImport.profile.name+' · '+pendingImport.entries.length+say(' kayıt. Önce mevcut günlüğü dışa aktarabilirsiniz.',' entries. You can export the current journal first.'))+'</p><div class="hero-actions"><button class="btn" type="button" data-action="confirm-import">'+say('Bu yedeği geri yükle','Restore this backup')+'</button><button class="btn ghost" type="button" data-action="cancel-import">'+say('Vazgeç','Cancel')+'</button></div></aside>';
    } catch(e){pendingImport=null;passportStatus(say('Yedek okunamadı. Geçerli bir Cygnus JSON yedeği seçin (en fazla 5 MB).','Could not read this backup. Choose a valid Cygnus JSON backup (up to 5 MB).'),true);}
    event.target.value='';
  }
});
document.addEventListener('submit',async event=>{
  if(!['passport-profile','passport-entry'].includes(event.target.id))return;
  event.preventDefault();const form=event.target,fields=new FormData(form),p=getPassport();
  if(form.id==='passport-profile') {
    const name=String(fields.get('plantName')||'').trim(),adopted=String(fields.get('adopted')||'');
    if(!name||!validDay(adopted)){passportStatus(say('Bir isim ve geçerli bir sahiplenme tarihi ekleyin.','Add a name and a valid adoption date.'),true);return;}
    if(p.entries.some(e=>e.date<adopted)){passportStatus(say('Sahiplenme tarihi mevcut günlük kayıtlarından sonra olamaz.','Adoption day cannot be later than an existing journal entry.'),true);return;}
    p.profile={name:name.slice(0,40),adopted,city:String(fields.get('city')||'').trim().slice(0,60)};
  } else {
    if(!p.profile.name){passportStatus(say('Önce yukarıdaki pasaportu kaydedin.','Save the passport above first.'),true);return;}
    if(pendingPhotoTask){passportStatus(say('Fotoğraf hazırlanıyor. Hazır olunca tekrar ekleyin.','Your photo is being prepared. Add the entry once it is ready.'),true);return;}
    const date=String(fields.get('entryDate')||''),note=String(fields.get('note')||'').trim();
    if(!validDay(date)||date<p.profile.adopted||!note){passportStatus(say('Bir not ve sahiplenme gününden önce olmayan geçerli bir tarih girin.','Enter a note and a valid date on or after adoption.'),true);return;}
    if(p.entries.length>=120||(pendingPhoto&&p.entries.filter(e=>e.photo).length>=12)){passportStatus(say('Bu günlük 120 kayıt ve 12 fotoğraf saklar. Önce yedek alın ve eski bir kaydı kaldırın.','This journal holds 120 entries and 12 photos. Export a backup and remove an older entry first.'),true);return;}
    p.entries.push({id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9),date,note:note.slice(0,800),leaves:fields.get('leaves')||'',kind:fields.get('kind'),photo:pendingPhoto});
  }
  if(savePassport(p)){mount({keepScroll:true});passportStatus(say('Kaydedildi. Küçük hikâyeniz büyüyor.','Saved. Your little story is growing.'));}
});
document.addEventListener('click',event=>{
  const el=event.target.closest('[data-action]');if(!el)return;
  const action=el.dataset.action;
  if(action==='growth'){window.__growth=Math.max(0,Math.min(2,Number(el.dataset.stage)||0));document.querySelectorAll('[data-action="growth"]').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));document.getElementById('growth-panel').innerHTML=growthPanel(window.__growth);}
  if(action==='delete-entry'){const p=getPassport();p.entries=p.entries.filter(e=>e.id!==el.dataset.id);if(savePassport(p))mount({keepScroll:true});}
  if(action==='export-passport')downloadFile('cygnus-passport-'+todayISO()+'.json',JSON.stringify(getPassport(),null,2),'application/json');
  if(action==='confirm-import'&&pendingImport){if(savePassport(pendingImport)){mount({keepScroll:true});passportStatus(say('Yedek geri yüklendi.','Backup restored.'));}}
  if(action==='cancel-import'){pendingImport=null;document.getElementById('import-preview').innerHTML='';}
  if(action==='print-passport'){document.body.classList.add('print-passport');window.print();document.body.classList.remove('print-passport');}
});
