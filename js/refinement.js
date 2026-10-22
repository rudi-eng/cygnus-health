/* Additive editorial refinements. Cart, recipe and passport data stay intact. */
function productShots() {
  return [
    ['assets/living-aloe-concept.jpg', ui().alts.hero],
    ['assets/kit-concept.jpg', say('Bitki, kraft kutu, günlük ve kartlar; yapay zekâ set konsepti','Plant, kraft box, journal and cards; AI kit concept')],
    ['assets/journal-concept.jpg', say('Açık botanik günlük, sahiplenme kartı ve QR etiketi; yapay zekâ baskı konsepti','Open botanical journal, adoption card and QR tag; AI print concept')],
    ['assets/leaf-concept.jpg', say('Dar, benekli ve ince dişli aloe yaprakları; yapay zekâ yaşam tarzı görseli','Narrow speckled aloe leaves with fine serrations; AI lifestyle image')]
  ];
}
function editorialPhoto(file, tr, en, css='') {
  return '<figure class="editorial-photo '+css+'"><img src="assets/'+file+'-concept.jpg" srcset="assets/'+file+'-concept-640.jpg 640w, assets/'+file+'-concept.jpg 1440w" sizes="(max-width: 700px) 100vw, 60vw" width="1440" height="960" loading="lazy" decoding="async" alt="'+esc(say(tr,en))+'"><figcaption>'+say('Yapay zekâ görsel konsepti · gerçek ürün fotoğrafı değildir','AI visual concept · not an actual product photograph')+'</figcaption></figure>';
}
function renderKitContents() {
  return '<section class="wrap editorial-section complete-kit" aria-labelledby="kit-heading"><div class="section-heading"><div><p class="kicker">02 / '+say('KUTUNUN İÇİNDEKİ DÜNYA','A LITTLE WORLD, INSIDE THE BOX')+'</p><h2 id="kit-heading">'+say('Bir hediye.<br><em>Yaşayan bir başlangıç.</em>','A gift to open.<br><em>A beginning to grow.</em>')+'</h2></div><p>'+say('Yaşayan Aloe Güzellik Seti, pencerenizde büyüyecek küçük bir bitkiyi; kâğıt, bilgi ve kişisel bir hikâyeyle buluşturur.','The Living Aloe Beauty Kit brings a little life to your windowsill, with thoughtful paper companions, practical knowledge and a story of your own.')+'</p></div><div class="unboxing-layout">'+editorialPhoto('kit','Genç aloe, kraft koruyucu kutu, basılı günlük ve bakım kartları; set konsepti','Young aloe, protective kraft box, printed journal and care cards; kit concept')+'<div class="contents-list"><p class="kicker">'+say('ÖZENLE BİR ARAYA GELDİ','THOUGHTFULLY GATHERED')+'</p><ol>'+ui().shop.includes.map((x,i)=>'<li><span>'+String(i+1).padStart(2,'0')+'</span>'+esc(x)+'</li>').join('')+'</ol>'+arrowLink('#/shop',say('Seti keşfet','Discover the kit'))+'<p class="fine">'+say('Genç bitki hemen hasat edilemez. Görseller baskı ve ambalaj konseptidir; nihai ayrıntıları siparişte teyit edin.','The young plant cannot be harvested immediately. Images illustrate print and packaging concepts; confirm final details when ordering.')+'</p></div></div></section>';
}
let journalSpread=0;
function journalSpreadContent() {
  const ch=window.CARE_CHAPTERS[journalSpread];
  return '<div class="journal-preview-copy"><p class="kicker">'+say('ALOE GÜNLÜĞÜ / ','ALOE JOURNAL / ')+String(journalSpread+1).padStart(2,'0')+'</p><h3>'+esc(tx(ch.title))+'</h3><p>'+esc(txList(ch.paras)[0])+'</p><span class="fine">'+(journalSpread+1)+' / '+window.CARE_CHAPTERS.length+' '+say('bölüm','chapters')+'</span></div>';
}
function renderJournalFeature() {
  return '<section class="journal-showcase no-print"><div class="wrap editorial-section"><div class="section-heading"><div><p class="kicker">03 / '+say('ALOE GÜNLÜĞÜ','THE ALOE JOURNAL')+'</p><h2>'+say('Küçük bir kitap.<br><em>Büyüyen bir dünya.</em>','Little pages.<br><em>A world to grow into.</em>')+'</h2></div><p>'+say('24 sayfalık, A5, Türkçe–İngilizce botanik günlük: ışık ve topraktan olgunluğa, dikkatli hazırlıktan kendi büyüme notlarınıza. Pratik 24 sayfalık tarif kitabı da sizi bekliyor.','A 24-page A5 Turkish–English botanical journal, from light and soil to maturity, preparation precautions and your own growing notes. Keep exploring with the companion 24-page practical recipe book.')+'</p></div><div class="journal-preview">'+editorialPhoto('journal','Botanik çizimler ve büyüme günlüğüyle açık kitapçık; baskı konsepti','Open booklet with botanical illustrations and growth diary; print concept')+'<div class="journal-reading"><div id="journal-spread" aria-live="polite">'+journalSpreadContent()+'</div><div class="journal-controls"><button type="button" data-action="journal-prev" aria-label="'+say('Önceki bölüm','Previous chapter')+'">←</button><span>'+say('Sayfaları keşfet','Turn a little page')+'</span><button type="button" data-action="journal-next" aria-label="'+say('Sonraki bölüm','Next chapter')+'">→</button></div><a class="editorial-link" href="output/pdf/cygnus-botanical-journal-tr-en.pdf" download>'+say('Botanik günlüğü indir · PDF','Download the botanical journal · PDF')+' ↗</a>'+arrowLink('#/booklet',say('Tarif kitabını da oku','Read the recipe book, too'))+'</div></div></div></section>';
}
function renderStudioFeature() {
  return '<section class="wrap editorial-section studio-feature"><div><p class="kicker">05 / '+say('BOTANİK TARİF STÜDYOSU','THE BOTANICAL RECIPE STUDIO')+'</p><h2>'+say('Merakla keşfet.<br><em>Özenle yaklaş.</em>','A little curiosity.<br><em>A thoughtful ritual.</em>')+'</h2><p>'+say('Jel hazırlama, yüz, saç ve vücut için iki dilli eğitim fikirleri. Miktarlar, araçlar, adımlar ve her tarifin sınırları aynı yerde. Bitkinizi kesmeden başlayabileceğiniz ritüeller de burada.','Explore bilingual educational ideas for gel preparation, face, hair and body, with quantities, equipment, steps and precautions. Begin today with rituals that leave your little plant intact.')+'</p><p class="studio-precaution">'+say('Ev fikirleri test edilmiş kozmetik formüller değildir. Yetiştirici bitkiyi Aloe vera olarak tanımlar; bu bağımsız bir doğrulama veya cilt güvenliği onayı değildir. Genç kit bitkisini hasat etmeyin.','Home ideas are not tested cosmetic formulations. The grower identifies the plant as Aloe vera; this is not independent verification or skincare-safety approval. Do not harvest the young kit plant.')+'</p><div class="studio-links">'+arrowLink('#/recipes',say('Stüdyoya gir','Enter the studio'))+arrowLink('#/booklet/before-start',say('Önce güvenlik','Start with safety'))+'</div></div>'+editorialPhoto('studio','Temiz kaşık, boş cam kap ve botanik not defteri; eğitim amaçlı yaşam tarzı konsepti, aksesuarlar sete dahil değildir','Clean spoon, empty glass bowl and botanical notebook; educational lifestyle concept, accessories are not included in the kit')+'</section>';
}
function renderLeafInterlude() {
  return '<section class="leaf-interlude wrap">'+editorialPhoto('leaf','Doğal küçük yavrularıyla dar, ince dişli, beyaz benekli aloe yapraklarının yakın görünümü; yaşam tarzı konsepti','Close view of narrow serrated speckled aloe leaves with natural small offsets; lifestyle concept')+'<div><p class="kicker">'+say('YAVAŞÇA FARK ET','NOTICE THE LITTLE THINGS')+'</p><p class="leaf-quote">'+say('Yeni bir yaprak.<br>Sabah güneşi.<br><em>Size ait küçük bir dünya.</em>','One new leaf.<br>The morning light.<br><em>A little world of your own.</em>')+'</p><p class="fine">'+say('Yetiştiricinin Türkiye’de büyüttüğü gerçek bitkilerden ilhamla. Her bitkinin biçimi ve büyümesi farklıdır.','Inspired by the grower’s real plants in Türkiye. Every plant has its own shape and pace.')+'</p></div></section>';
}
function renderHomeFAQ() {
  return '<section class="wrap editorial-section home-faq"><div><p class="kicker">09 / '+say('KÜÇÜK SORULAR','LITTLE QUESTIONS')+'</p><h2>'+say('Büyümeden önce<br><em>bilmek güzeldir.</em>','A few things<br><em>before you grow.</em>')+'</h2></div><div class="faq">'+ui().shop.faqs.slice(0,6).map(f=>'<details><summary>'+esc(f.q)+'</summary><p>'+esc(f.a)+'</p></details>').join('')+'</div></section><section class="final-invitation"><div class="wrap"><p class="kicker">CYGNUS / LIVING BOTANICALS</p><h2>'+say('Güzel bir şey<br><em>birlikte büyüsün.</em>','Let something<br><em>beautiful begin.</em>')+'</h2><p>'+esc(productName())+' · '+esc(formatTL(window.CYGNUS_CONFIG.priceTL))+'</p><a class="btn" href="#/shop">'+say('Yaşayan setinizi keşfedin','Find your living kit')+' ↗</a><p class="fine">'+say('Kargo ve ödeme satıcıyla teyit edilir.','Delivery and payment confirmed with the seller.')+'</p></div></section>';
}
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-action]');
  if(!button||!['journal-prev','journal-next'].includes(button.dataset.action))return;
  journalSpread=(journalSpread+(button.dataset.action==='journal-next'?1:-1)+window.CARE_CHAPTERS.length)%window.CARE_CHAPTERS.length;
  document.getElementById('journal-spread').innerHTML=journalSpreadContent();
});
for(const lang of ['tr','en']) {
  const c=window.COPY[lang],en=lang==='en';
  c.meta.home={title:en?'Beauty begins with something you grow. — CYGNUS':'Güzellik, büyüttüğünüz bir şeyle başlar. — CYGNUS',desc:en?'The CYGNUS Living Aloe Beauty Kit: a young living plant, printed botanical journal, practical recipe book and private plant passport. Grown in Türkiye.':'CYGNUS Yaşayan Aloe Güzellik Seti: genç bir bitki, basılı botanik günlük, pratik tarif kitabı ve kişisel bitki pasaportu. Türkiye’de yetişti.'};
  c.shop.lede=en?'A little living aloe, thoughtful printed companions and a digital plant passport. A botanical self-care experience to grow into, beginning in a 7 cm plastic nursery pot.':'Küçük bir canlı aloe, özenli basılı rehberler ve dijital bitki pasaportu. 7 cm plastik üretim saksısında başlayan, sizinle büyüyen botanik bir kişisel bakım deneyimi.';
  c.shop.includes=en?[
    'One healthy young aloe-type plant; Aloe vera according to the grower, not independently verified',
    'One 7 cm plastic nursery pot with drainage and suitable potting medium',
    'Printed plant-care guide and illustrated botanical journal / recipe booklet',
    'Quick care card and personal plant adoption card',
    'QR link to the digital care guide and local plant passport',
    'Recyclable protective kraft gift packaging'
  ]:[
    'Bir sağlıklı genç aloe tipi bitki; yetiştiriciye göre Aloe vera, bağımsız doğrulama değildir',
    'Drenajlı 7 cm plastik üretim saksısı ve uygun yetiştirme ortamı',
    'Basılı bitki bakım rehberi ve resimli botanik günlük / tarif kitapçığı',
    'Hızlı bakım kartı ve kişisel bitki sahiplenme kartı',
    'Dijital bakım rehberi ve yerel bitki pasaportu için QR bağlantısı',
    'Geri dönüştürülebilir koruyucu kraft hediye ambalajı'
  ];
  c.shop.faqs[0].a=en?'The young plant in its 7 cm plastic nursery pot, growing medium, printed care guide, illustrated botanical booklet, quick care and adoption cards, QR link and recyclable protective packaging. Lifestyle props are not included. Confirm final printed and packaging details with the seller.':'7 cm plastik üretim saksısında genç bitki, yetiştirme ortamı, basılı bakım rehberi, resimli botanik kitapçığı, hızlı bakım ve sahiplenme kartları, QR bağlantısı ve geri dönüştürülebilir koruyucu ambalaj. Yaşam tarzı aksesuarları dahil değildir. Nihai baskı ve ambalaj ayrıntılarını satıcıyla teyit edin.';
  c.shop.photo=en?'AI-generated product and packaging concepts, not actual inventory photographs. Actual plants vary. The supplied pot is 7 cm plastic; confirm final print and packaging details with the seller.':'Yapay zekâ ürün ve ambalaj konseptleri; gerçek stok fotoğrafları değildir. Bitkiler farklılık gösterir. Gönderilen saksı 7 cm plastiktir; nihai baskı ve ambalaj ayrıntılarını satıcıyla teyit edin.';
}
