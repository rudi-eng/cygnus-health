/* Shared source for the practical TR/EN book and website. Grower confirms Aloe vera. */
const bookText = (tr,en)=>({tr,en});
const recipe = (id,cat,minutes,gelTsp,tr,en)=>({id,cat,minutes,gelTsp,practical:true,title:bookText(tr.title,en.title),summary:bookText(tr.summary,en.summary),gel:bookText(tr.gel,en.gel),ingredients:bookText(tr.ingredients,en.ingredients),steps:bookText(tr.steps,en.steps),caution:bookText(tr.caution,en.caution)});
window.BOOK_RECIPES = [
  recipe('fresh-gel','method',15,0,{
    title:'Berrak iç yaprak jeli hazırlama',summary:'Olgun, doğru tanımlanmış Aloe vera yaprağının berrak iç kısmını ayırmak.',gel:'Olgun bitkiden 1 sağlıklı dış yaprak',
    ingredients:['Doğru tanımlanmış, sağlıklı ve olgun Aloe vera yaprağı; 7 cm genç bitkiyi kesmeyin.','İçilebilir akan su; temiz bıçak, kesme tahtası, kaşık ve küçük kap.'],
    steps:['Ellerinizi ve araçları temizleyin. Bıçağı yalnızca bir yetişkin kullansın.','Olgun bitkiden bir sağlıklı dış yaprak alın; merkezi ve kökleri zedelemeyin. Yaprağın dışını akan suyla yıkayın.','Kesilince çıkan sarı lateksi kullanmayın. Süre tutarak akıtmak bütün lateksin uzaklaştığını kanıtlamaz.','Dikenli kenarları ve yeşil kabuğun tamamını dikkatle ayırın. Kabuğun hemen altındaki tabakayı karışıma katmayın.','Temiz kaşıkla yalnızca berrak iç filetoyu alın ve içilebilir akan suyla durulayın.','Küçük bir miktarı temiz kapta kaşıkla ezin. Kabuk veya sarı sıvıyla kirlenen, hasarlı ya da küflü malzemeyi kullanmayın.','Yalnızca tek uygulama için gereken miktarı hazırlayın. Hemen kullanın ve kalanı atın.'],
    caution:'Dış kullanım eğitimi içindir. Evde ayırmak jeli steril yapmaz veya aloin miktarını doğrulamaz. Sarı lateks ve bütün yaprak karışımı kullanılmaz; tüketilmez.'
  },{
    title:'Preparing clear inner-leaf gel',summary:'Separating the clear inner fillet of a mature, correctly identified Aloe vera leaf.',gel:'1 healthy outer leaf from a mature plant',
    ingredients:['A healthy, mature, correctly identified Aloe vera leaf; do not cut the young 7 cm kit plant.','Potable running water; a clean knife, board, spoon and small bowl.'],
    steps:['Clean your hands and equipment. An adult should handle the knife.','Take one healthy outer leaf from a mature plant without damaging its centre or roots. Wash the outside under running water.','Do not use the yellow latex released by the cut. Timed draining does not prove that all latex has been removed.','Carefully remove the toothed edges and all green rind. Keep the tissue immediately beneath the rind out of the preparation.','Lift out only the clear inner fillet with a clean spoon and rinse it under potable running water.','Mash a small portion in a clean bowl. Do not use material contaminated with rind or yellow sap, damaged tissue, or mould.','Prepare only the amount needed for one application. Use immediately and discard what remains.'],
    caution:'External-use education only. Home filleting does not sterilize gel or verify its aloin level. Do not use yellow latex or a blended whole leaf; do not ingest.'
  }),
  recipe('face-gel','skin',5,.5,{
    title:'Sade, durulanan yüz jeli',summary:'Az malzemeli bir güzellik uygulaması: sade jel dokusunu denemek. Tedavi veya kanıtlanmış nemlendirme vaadi değildir.',gel:'Yaklaşık ½ çay kaşığı',
    ingredients:['Yaklaşık ½ çay kaşığı yeni hazırlanmış berrak iç jel.','Durulamak için temiz ılık su.'],
    steps:['Önce “Başlamadan önce” bölümünü okuyun. Bu uygulama yalnızca sağlıklı, tahrişsiz yetişkin cildi içindir.','Yüzü nazikçe temizleyin. Göz çevresi, göz kapakları ve dudaklardan uzak durun.','Küçük bir sağlam cilt alanına çok ince bir tabaka yayın; ovalamayın.','İlk kısa denemeyi 5 dakikayla sınırlayın, ardından tamamen durulayın. Yanma, kaşıntı veya kızarma olursa hemen yıkayın.','Kalan hazırlığı atın. Cildiniz alışık olduğu nemlendiriciyi gerektiriyorsa o ürünün talimatını izleyin.'],
    caution:'Ev yapımı, test edilmiş bir kozmetik formül değildir. Akne, egzama, güneş yanığı, açık yara veya enfekte cilde tedavi amacıyla uygulanmaz. 5 dakika güvenlik garantisi değildir.'
  },{
    title:'Plain rinse-off face gel',summary:'A minimal beauty application to explore plain gel texture. This is not a treatment or a proven moisturizing formula.',gel:'About ½ teaspoon',
    ingredients:['About ½ teaspoon of freshly prepared clear inner gel.','Clean lukewarm water for rinsing.'],
    steps:['Read “Before you begin” first. Use only on healthy, unbroken, non-irritated adult skin.','Cleanse gently. Keep away from the eye area, eyelids and lips.','Spread a very thin layer on a small area of intact skin without rubbing.','Limit the first short trial to 5 minutes, then rinse thoroughly. Wash off immediately if it burns, itches or reddens.','Discard the remaining preparation. Follow the label of your usual moisturizer if you need one afterwards.'],
    caution:'This is not a tested cosmetic formulation. Do not use it to treat acne, eczema, sunburn, open wounds or infected skin. Five minutes is not a safety guarantee.'
  }),
  recipe('hand-gel','skin',5,1,{
    title:'Eller için kısa jel molası',summary:'El sırtında kısa ve durulanan bir bakım denemesi. Bir bariyer kremi yerine geçmez.',gel:'En fazla 1 çay kaşığı',
    ingredients:['En fazla 1 çay kaşığı taze berrak iç jel.','Temiz ılık su ve temiz havlu.'],
    steps:['“Başlamadan önce” bölümünü okuyun. Çatlak, kesik veya tahriş varsa uygulamayın.','Az miktarı el sırtındaki küçük, sağlam bir alana ince yayın.','5 dakika içinde durulayın; herhangi bir rahatsızlıkta hemen yıkayın.','Nazikçe kurulayın. Kalan jeli atın; cildinizin ihtiyaç duyduğu normal el kremini kendi etiketiyle kullanın.'],
    caution:'Eldiven altında veya gece boyunca bırakmayın. Tahrişli, çatlak ellerin tedavisi değildir.'
  },{
    title:'A short hand-care gel pause',summary:'A brief rinse-off trial on the backs of the hands. It does not replace a barrier cream.',gel:'Up to 1 teaspoon',
    ingredients:['Up to 1 teaspoon of fresh clear inner gel.','Clean lukewarm water and a clean towel.'],
    steps:['Read “Before you begin”. Skip this if the skin is cracked, cut or irritated.','Spread a small amount thinly over a small intact area on the back of a hand.','Rinse within 5 minutes, or immediately if uncomfortable.','Pat dry and discard the remaining gel. Use your usual hand cream according to its label if needed.'],
    caution:'Do not leave under gloves or overnight. This is not treatment for cracked or irritated hands.'
  }),
  recipe('body-gel','skin',5,2,{
    title:'Duş sonrası durulanan vücut jeli',summary:'Küçük bir kol veya bacak alanında jel dokusunu keşfetmek; tüm vücut veya güneş sonrası tedavi değildir.',gel:'En fazla 2 çay kaşığı',
    ingredients:['En fazla 2 çay kaşığı taze berrak iç jel.','Durulamak için temiz su.'],
    steps:['“Başlamadan önce” bölümünü okuyun. Yeni tıraş edilmiş, yanmış veya tahrişli cilde uygulamayın.','Az miktarı yalnızca küçük, sağlam bir kol veya bacak alanına yayın.','İlk denemede 5 dakika içinde tamamen durulayın. Rahatsızlık olursa hemen yıkayın.','Kalan hazırlığı atın. Normal vücut bakımınızı ürün etiketine göre sürdürün.'],
    caution:'Güneş kremi değildir. Güneş yanığı, kabarcık, yara veya enfeksiyona uygulanmaz. Ev yapımı jeli büyük cilt alanlarına yaymayın.'
  },{
    title:'An after-shower rinse-off body gel',summary:'Explore gel texture on a small arm or leg area; this is not a full-body or after-sun treatment.',gel:'Up to 2 teaspoons',
    ingredients:['Up to 2 teaspoons of fresh clear inner gel.','Clean water for rinsing.'],
    steps:['Read “Before you begin”. Skip freshly shaved, burned or irritated skin.','Spread a little gel on only a small, intact area of an arm or leg.','For the first trial, rinse it all off within 5 minutes. Wash off sooner if uncomfortable.','Discard the remaining preparation. Continue your usual body-care products according to their labels.'],
    caution:'This is not sunscreen. Do not apply to sunburn, blisters, wounds or infection, or spread homemade gel over large skin areas.'
  }),
  recipe('hair-mask','hair',10,1,{
    title:'Saç boylarına yıkama öncesi jel',summary:'Saç boylarında kısa, durulanan bir doku denemesi. Saç uzaması veya dökülmeye karşı tedavi vaadi yoktur.',gel:'Kısa bir saç tutamı için 1 çay kaşığı',
    ingredients:['Kısa bir tutam için yaklaşık 1 çay kaşığı taze berrak iç jel.','Temiz su ve her zamanki şampuanınız.'],
    steps:['Önce güvenlik bölümünü okuyun. Küçük bir tutamla başlayın.','Tutamın boylarını ve uçlarını hafifçe nemlendirin.','Az miktar jeli saç derisine, yüze ve gözlere değdirmeden yalnızca tutama dağıtın.','En fazla 5–10 dakika sonra tamamen durulayın. Kalıntı varsa şampuanınızın etiketine göre yıkayın.','Kalan jeli atın. Sertleşme, dolaşma veya rahatsızlık olursa tekrar kullanmayın.'],
    caution:'Saç derisindeki kaşıntı, kepek, yara veya saç dökülmesini tedavi etmek için kullanılmaz. Gece boyunca veya kapalı bone altında bırakılmaz.'
  },{
    title:'Pre-wash gel for hair lengths',summary:'A short rinse-out texture trial on the hair lengths. No hair-growth or hair-loss treatment promise.',gel:'1 teaspoon for a small section',
    ingredients:['About 1 teaspoon of fresh clear inner gel for a small section.','Clean water and your usual shampoo.'],
    steps:['Read the safety section and start with a small section of hair.','Lightly dampen its lengths and ends.','Distribute a little gel through that section only, avoiding the scalp, face and eyes.','Rinse thoroughly after no more than 5–10 minutes. If residue remains, use your shampoo according to its label.','Discard the remaining gel. Do not repeat if it causes stiffness, tangling or discomfort.'],
    caution:'Not a treatment for scalp itching, dandruff, sores or hair loss. Do not leave overnight or under an occlusive cap.'
  }),
  recipe('hair-rinse','hair',5,1,{
    title:'Tek kullanımlık aloe saç durulaması',summary:'Taze jeli saç boylarına daha kolay dağıtmak için seyreltilmiş, hemen durulanan bir karışım.',gel:'1 çay kaşığı',
    ingredients:['1 çay kaşığı taze berrak iç jel.','3 yemek kaşığı içilebilir su; temiz küçük kap.'],
    steps:['Güvenlik bölümünü okuyun. Küçük bir saç tutamıyla başlayın.','Jel ve suyu temiz kapta karıştırın; hazır bir kozmetik ürünün şişesine su eklemeyin.','Karışımı hazırladığınız anda yalnızca tutamın boy ve uçlarına dağıtın.','Bekletmeden temiz suyla tamamen durulayın; gözlerden ve saç derisinden uzak tutun.','Kalan seyreltilmiş karışımı hemen atın. Sprey şişesinde veya buzdolabında saklamayın.'],
    caution:'Saçın nasıl hissedeceği değişebilir; yumuşaklık veya parlaklık garantisi yoktur. Tahriş veya kalıntı varsa bırakın.'
  },{
    title:'A single-use aloe hair rinse',summary:'A diluted, immediately rinsed mixture to distribute fresh gel through hair lengths more easily.',gel:'1 teaspoon',
    ingredients:['1 teaspoon of fresh clear inner gel.','3 tablespoons of potable water and a clean small bowl.'],
    steps:['Read the safety section and begin with a small section of hair.','Mix gel and water in the clean bowl; do not add water to a bottled cosmetic product.','Apply as soon as mixed, to that section’s lengths and ends only.','Rinse thoroughly straight away with clean water, avoiding the scalp and eyes.','Discard all remaining diluted mixture immediately. Do not keep it in a spray bottle or refrigerate it for later.'],
    caution:'Hair feel varies; softness or shine is not guaranteed. Stop if it causes irritation or residue.'
  })
];
window.RECIPES = window.BOOK_RECIPES.concat(window.RECIPES.map(r=>({...r,cat:'home'})));
const section=(id,tr,en,trP,enP)=>({id,title:bookText(tr,en),paras:bookText(trP,enP)});
const welcome=section('welcome','Bitkiniz, tarifleriniz, güzellik ritüeliniz','Your plant, your recipes, your beauty ritual',[
  'Yaşayan Aloe Ritüel Seti, 7 cm plastik saksıda genç bir bitkiyi bu tarif kitabıyla bir araya getirir. Yetiştirici bitkiyi Aloe vera olarak tanımlar. Bu, bağımsız bir laboratuvar veya güvenlik sertifikası değildir.',
  'Bu küçük bitkiden bugün yaprak almayın. Taze jel yöntemi sağlıklı, iyi gelişmiş ve doğru tanımlanmış olgun Aloe vera içindir. Uygun yaprak yoksa bitkinizi büyütün; hazır kozmetik aloe ürünü kullanıyorsanız bu ev tarifleri yerine kendi etiketini izleyin.',
  'Parlak dolaylı ışık, drenaj ve kuruyan toprağı gözlemlemek büyümenin temelidir. Ayrıntılı bakım rehberi ile bitki pasaportu sitede sizi bekliyor.'
],[
  'The Living Aloe Ritual Kit pairs a young plant in a 7 cm plastic pot with this recipe book. The grower identifies the plant as Aloe vera; this is not independent laboratory or safety certification.',
  'Do not harvest this little plant now. Fresh-gel preparation is for a healthy, well-established, mature and correctly identified Aloe vera. If suitable leaves are unavailable, keep growing the plant. If using a finished cosmetic aloe product, follow its own label instead of these homemade recipes.',
  'Bright indirect light, drainage and checking dry soil support growth. Find the full care guide and private plant passport on the website.'
]);
const before=section('before-start','Başlamadan önce','Before you begin',[
  'Bunlar yetişkinlerin sağlam cilt veya saç boyları için evde deneyebileceği kozmetik fikirlerdir; test edilmiş formül, tıbbi tedavi veya kişiye özel öneri değildir. Alerji, hassas cilt veya devam eden bir cilt sorununuz varsa önce dermatoloğa danışın.',
  'AAD, yeni cilt bakım ürünlerini küçük bir alanda günde iki kez 7–10 gün denemeyi; durulanan ürünleri beş dakika veya etiketteki süre sonunda yıkamayı önerir. Bu bitmiş ürün rehberi, değişken ev yapımı jel partilerini güvenli ilan etmez. Test için aynı taze karışımı günlerce saklamayın.',
  'Yanma, kaşıntı veya kızarıklıkta hemen yıkayın ve bırakın. Göz, dudak, ağız, genital bölge, yara, enfeksiyon ve yanıklarda kullanmayın. Aloe tüketilmez; çocuklardan ve evcil hayvanlardan uzak tutulur.'
],[
  'These are home cosmetic ideas for adult intact skin or hair lengths, not tested formulations, medical treatments or personal advice. Ask a dermatologist first if you have allergies, sensitive skin or an ongoing skin condition.',
  'AAD advises testing new skin-care products on a small spot twice daily for 7–10 days; rinse-off products are washed away after five minutes or their labelled time. This finished-product guidance does not validate variable homemade batches. Do not keep one fresh mixture for days of testing.',
  'Wash off and stop if burning, itching or redness occurs. Avoid eyes, lips, mouth, genitals, wounds, infection and burns. Do not ingest aloe; keep it from children and pets.'
]);
const freshness=section('freshness','Taze hazırlık ve temizlik','Fresh preparation and clean handling',[
  'Taze jel korunmuş bir krem değildir. Temiz araçlar ve eller kullanın; tek kişilik küçük miktarı hazırladıktan hemen sonra uygulayın ve artanı atın. Koku veya görünüm tek başına mikrobiyolojik güvenlik testi değildir.',
  'Bu kitap raf ömrü, buzdolabında günlerce saklama veya dondurarak güvenli koruma süresi vermez. Su eklemek korunmuş bir kozmetiğin koruyucusunu da seyreltebilir; ürün şişesinde karışım yapmayın.',
  'Limon suyu, esansiyel yağ, parfüm veya başka mutfak malzemeleri eklemeyin. Daha karmaşık ya da saklanabilir ürünler için uygun formül, koruyucu sistem ve test gerekir.'
],[
  'Fresh gel is not a preserved cream. Work with clean equipment and hands, prepare a small personal portion, use it immediately and discard leftovers. Smell and appearance are not microbial safety tests.',
  'This book provides no shelf life, multi-day refrigerator storage or safe freezing period. Adding water can also dilute a finished cosmetic’s preservatives; do not mix inside a product bottle.',
  'Do not add lemon juice, essential oils, perfume or other kitchen ingredients. More complex or storable products need suitable formulation, preservation and testing.'
]);
const benefits=section('benefits','Faydalar: araştırma ne söylüyor?','Benefits: what does research say?',[
  'Güzellik: Aloe içeren kozmetik formüllerde cilt nemi araştırılmıştır. Bu sonuçlar ev yapımı taze jel tariflerinin aynı etkiyi gösterdiğini kanıtlamaz. Buradaki yüz ve vücut uygulamaları basit jel dokusunu denemek içindir; saç tarifleri de uzama, kepek tedavisi veya garanti parlaklık vaat etmez.',
  'Tıbbi bilgi: NCCIH, bazı aloe ürünleriyle yanık iyileşmesi ve başka tedavilere ek akne uygulamalarında araştırma bulguları bildirir. Bu, kitin jeliyle yanık veya hastalık tedavisi yapabileceğiniz anlamına gelmez. Bu kitap tıbbi uygulama tarifi vermez; yanık, yara veya süren cilt sorunu için sağlık uzmanına başvurun.'
],[
  'Beauty: skin hydration has been studied in cosmetic formulations containing aloe. Those findings do not establish the same effects for these fresh homemade preparations. The face and body ideas explore gel texture; the hair recipes promise neither growth, dandruff treatment nor guaranteed shine.',
  'Medical information: NCCIH reports research on some aloe products for burn healing and for acne alongside other treatment. This does not mean gel from this kit can treat burns or disease. This book gives no medical-treatment recipe; seek professional care for burns, wounds or persistent skin problems.'
]);
const sources=section('sources','Kaynaklar ve kapsam','Sources and scope',[
  'Kaynaklar 22 Ekim 2026 tarihinde kontrol edildi. Araştırmalar tariflerin klinik olarak test edildiği veya evde jel ayırmanın steril ürün verdiği anlamına gelmez.'
],[
  'Sources checked on 22 October 2026. Research references do not mean these recipes were clinically tested or that home filleting creates a sterile product.'
]);
const recipeChapters=window.BOOK_RECIPES.map(r=>({id:r.id,recipeId:r.id,title:r.title,paras:bookText([r.summary.tr,'Miktar: '+r.gel.tr,'Malzemeler: '+r.ingredients.tr.join(' '),'Dikkat: '+r.caution.tr],[r.summary.en,'Amount: '+r.gel.en,'Ingredients: '+r.ingredients.en.join(' '),'Caution: '+r.caution.en]),steps:r.steps}));
window.CHAPTERS=[welcome,before,freshness,...recipeChapters,benefits,sources];
window.SOURCES=[
 {title:'NCCIH · Aloe Vera',url:'https://www.nccih.nih.gov/health/aloe-vera',note:bookText('Araştırma bulguları, jel/lateks ayrımı ve riskler.','Research, gel/latex distinctions and risks.')},
 {title:'AAD · How to test skin care products',url:'https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products/',note:bookText('Bitmiş cilt bakım ürünlerini küçük alanda deneme rehberi.','Small-area testing guidance for finished skin-care products.')},
 {title:'FDA · Microbiological Safety and Cosmetics',url:'https://www.fda.gov/cosmetics/potential-contaminants-cosmetics/microbiological-safety-and-cosmetics',note:bookText('Kirlenme, su ve koruyucu sistemler.','Contamination, water and preservation.')},
 {title:'Aloe vera leaf composition (2019)',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6826699/',note:bookText('İç fileto, kabuk ve lateksin ayrımı.','Inner fillet, rind and latex are distinct materials.')},
 {title:'Dal’Belo et al. (2006) · Cosmetic aloe formulations',url:'https://doi.org/10.1111/j.0909-752x.2006.00155.x',note:bookText('Kozmetik formüllerde nemlendirme araştırması; bu tariflerin testi değil.','Hydration research on cosmetic formulations, not testing of these recipes.')},
 {title:'RHS · Aloe vera',url:'https://www.rhs.org.uk/plants/981/aloe-vera/details',note:bookText('Bitki yetiştirme bilgisi.','Growing guidance.')},
 {title:'ASPCA · Aloe',url:'https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/aloe',note:bookText('Evcil hayvan güvenliği.','Pet safety.')}
];
for(const lang of ['tr','en']){
  const c=window.COPY[lang],isEn=lang==='en';
  c.nav.recipes=isEn?'Recipes':'Tarifler';c.nav.booklet=isEn?'The recipe book':'Tarif kitabı';
  c.cats={all:isEn?'All':'Tümü',method:isEn?'Gel preparation':'Jel hazırlama',skin:isEn?'Face & body':'Yüz & vücut',hair:isEn?'Hair':'Saç',home:isEn?'Plant rituals':'Bitki ritüelleri',saved:isEn?'Saved':'Kayıtlı'};
  c.common.back=isEn?'Back to recipes':'Tariflere dön';c.common.ingredients=isEn?'Ingredients':'Malzemeler';
  c.common.updated=isEn?'Recipe-book sources checked: 22 October 2026.':'Tarif kitabı kaynakları: 22 Ekim 2026.';
  c.meta.recipes={title:isEn?'Aloe recipes — CYGNUS':'Aloe tarifleri — CYGNUS',desc:isEn?'Clear-gel preparation and practical face, hair and body recipes. External cosmetic education, not medical treatment.':'Berrak jel hazırlama ve yüz, saç, vücut tarifleri. Dış kullanım eğitimi; tıbbi tedavi değildir.'};
  c.meta.booklet={title:isEn?'The Aloe Recipe Book — CYGNUS':'Aloe Tarif Kitabı — CYGNUS',desc:c.meta.recipes.desc};
  c.bookletPage={kicker:isEn?'THE ALOE RECIPE BOOK':'ALOE TARİF KİTABI',lede:isEn?'A practical Turkish/English companion: gel preparation, face, hair and body applications, plant care and a referenced chapter on benefits and medical evidence.':'Pratik, Türkçe/İngilizce bir rehber: jel hazırlama, yüz, saç ve vücut uygulamaları, bitki bakımı ve faydalarla tıbbi kanıtları açıklayan kaynaklı bir bölüm.',disclaimer:isEn?'For adult external cosmetic education. Use only correctly identified, suitable mature Aloe vera. Do not harvest the young kit plant. These home ideas are not tested formulations or medical treatments.':'Yetişkinlerin dış kozmetik kullanımı için eğitim. Yalnızca doğru tanımlanmış, uygun olgun Aloe vera kullanılır. Genç kit bitkisini kesmeyin. Ev fikirleri test edilmiş formül veya tıbbi tedavi değildir.'};
  Object.assign(c.recipesPage,{kicker:isEn?'ALOE / THE RECIPE COLLECTION':'ALOE / TARİF KOLEKSİYONU',lede:isEn?'Make clear inner-leaf gel and explore simple rinse-off face, hair and body applications. Each practical recipe includes quantities, equipment and steps. Plant rituals remain here too.':'Berrak iç yaprak jelini hazırlayın; yüz, saç ve vücut için basit, durulanan uygulamaları keşfedin. Pratik tariflerde miktar, araç ve adımlar bulunur. Bitki ritüelleri de burada.',search:isEn?'Find a recipe':'Tarif ara',gelNeed:isEn?'Gel amount':'Jel miktarı',noticeTitle:isEn?'Read the preparation and safety pages first':'Önce hazırlık ve güvenlik sayfalarını okuyun',notice:isEn?'Use only suitable mature Aloe vera; the grower identifies the kit as Aloe vera, but its young plant is not ready for harvesting. Fresh gel is not sterile or preserved. These are home cosmetic ideas, not medical-treatment recipes.':'Yalnızca uygun olgun Aloe vera kullanın; yetiştirici kiti Aloe vera olarak tanımlar ancak genç bitki hasada hazır değildir. Taze jel steril veya korunmuş değildir. Bunlar evde kozmetik kullanım fikirleridir, tıbbi tedavi tarifleri değildir.'});
  c.shop.lede=isEn?'A young living Aloe vera in a 7 cm plastic pot, a practical bilingual aloe recipe book and a digital plant passport. Grow your future ingredient and discover gel preparation and beauty uses.':'7 cm plastik saksıda genç Aloe vera, pratik iki dilli aloe tarif kitabı ve dijital bitki pasaportu. Gelecekte kullanacağınız bitkiyi büyütün; jel hazırlamayı ve güzellik uygulamalarını keşfedin.';
  c.shop.includes[2]=isEn?'The practical aloe recipe book in your selected language':'Seçtiğiniz dilde pratik aloe tarif kitabı';
  c.shop.faqs[1].a=isEn?'No. This is a young plant that must grow first. Fresh-leaf recipes are for a healthy, established, mature Aloe vera. Read the book’s preparation and safety guidance; age or leaf count alone cannot establish cosmetic safety.':'Hayır. Bu genç bitki önce büyümeli. Taze yaprak tarifleri sağlıklı, yerleşmiş, olgun Aloe vera içindir. Kitaptaki hazırlık ve güvenlik rehberini okuyun; yaş veya yaprak sayısı kozmetik güvenliği kanıtlamaz.';
  c.carePage.readyYes=isEn?'Observations saved. The grower identifies the plant as Aloe vera. The young kit plant must still grow; use the book’s maturity, preparation and suitability guidance rather than treating these ticks as permission to harvest.':'Gözlemler kaydedildi. Yetiştirici bitkiyi Aloe vera olarak tanımlar. Genç kit bitkisi yine de büyümeli; bu işaretleri hasat izni saymak yerine kitaptaki olgunluk, hazırlık ve uygunluk rehberini okuyun.';
  c.footer.medical=isEn?'Living aloe, practical beauty recipes and informed care. No medical-treatment claims.':'Yaşayan aloe, pratik güzellik tarifleri ve bilinçli bakım. Tıbbi tedavi iddiası yoktur.';
}
