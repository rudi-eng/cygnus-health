// Beauty concepts lead the studio. Topical instructions stay unpublished.
window.RECIPES = [
  {
    id:'window-pause',cat:'home',minutes:3,gelTsp:0,
    title:{tr:'Pencere önünde üç dakika',en:'Three minutes by the window'},
    summary:{tr:'Günün küçük bir bölümünü büyüyen bir şeye ayırın.',en:'Give a little of your day to something growing.'},
    gel:{tr:'Bitkiniz ve sakin bir köşe',en:'Your plant and a quiet corner'},
    steps:{tr:['Bitkinizin yanında rahatça oturun.','Işığın yapraklarda bıraktığı gölgeyi izleyin.','Dün fark etmediğiniz bir detayı bulun. Yaprağı koparmayın.','İsterseniz pasaportunuza tek cümle ekleyin.'],en:['Sit comfortably beside your plant.','Notice the shadows the light makes on its leaves.','Find one detail you missed yesterday. Leave every leaf intact.','Add a single sentence to your passport if you like.']},
    caution:{tr:'Bitki mevcut yerinde kalsın; sert güneşe taşımayın.',en:'Leave the plant in its usual spot, away from harsh sun.'}
  },
  {
    id:'first-portrait',cat:'method',minutes:5,gelTsp:0,
    title:{tr:'İlk botanik portre',en:'The first botanical portrait'},
    summary:{tr:'Gelecekte dönüp bakacağınız ilk kare.',en:'A first photograph for your future self.'},
    gel:{tr:'Telefon veya fotoğraf makinesi',en:'A phone or camera'},
    steps:{tr:['Bitkiyi doğal, dolaylı ışıkta fotoğraflayın.','Saksının tamamı ve yaprak uçları kadrajda olsun.','Tarihi ve gözlemlediğiniz yaprak sayısını not edin.','Fotoğrafı pasaportunuza yükleyin. Her ay aynı açıyı deneyin.'],en:['Photograph the plant in natural, indirect light.','Include the whole pot and leaf tips in the frame.','Note the date and the leaf count you observe.','Upload it to your passport. Try the same angle each month.']},
    caution:{tr:'Fotoğraftan kesin tür veya sağlık sonucu çıkarmayın.',en:'A photograph alone cannot confirm species or plant health.'}
  },
  {
    id:'soil-listening',cat:'method',minutes:5,gelTsp:0,
    title:{tr:'Toprağı dinlemek',en:'Listen to the soil'},
    summary:{tr:'Sulamayı bir alışkanlık değil, bir gözlem haline getirin.',en:'Make watering an observation, rather than a habit.'},
    gel:{tr:'Bitkiniz, drenajlı saksı',en:'Your plant in a pot with drainage'},
    steps:{tr:['Toprağın alt kısımları dahil kuruluğunu kontrol edin.','Nemliyse bugün su vermeyin.','Kuruysa sulayın, fazla suyun tamamen süzülmesini bekleyin.','Pasaporta kontrolü veya sulamayı doğru etiketle kaydedin.'],en:['Check dryness through the growing medium, including lower down.','If still damp, skip watering today.','If dry, water and allow the excess to drain completely.','Record a check or watering in your passport using the matching label.']},
    caution:{tr:'Kontrol hatırlatıcısı sabit sulama takvimi değildir.',en:'A check reminder is not a fixed watering schedule.'}
  },
  {
    id:'leaf-sketch',cat:'home',minutes:10,gelTsp:0,
    title:{tr:'Bir yaprağın çizgileri',en:'Lines of a leaf'},
    summary:{tr:'Benekler, kenarlar ve yalnızca sizin fark ettiğiniz şekiller.',en:'Speckles, edges, and shapes only you notice.'},
    gel:{tr:'Kâğıt ve kalem',en:'Paper and a pencil'},
    steps:{tr:['Bitkiye dokunmadan bir yaprak seçin.','Dış hattını yavaşça çizin.','Beneklerden ve kenarlardan birkaç detay ekleyin.','Çiziminizin tarihini atın. Güzel olması gerekmiyor; size ait olması yeter.'],en:['Choose a leaf to observe without touching it.','Trace its outline slowly on paper.','Add a few speckles and edge details.','Date your drawing. It does not have to be perfect; it only has to be yours.']},
    caution:{tr:'Dikenli kenarlara dikkat edin. Çizim için yaprak kesmeyin.',en:'Mind the pointed edges. Do not cut a leaf for your drawing.'}
  },
  {
    id:'monthly-letter',cat:'home',minutes:8,gelTsp:0,
    title:{tr:'Gelecek aya bir mektup',en:'A letter to next month'},
    summary:{tr:'Bugünün küçük değişikliklerini yarına saklayın.',en:'Keep today’s little changes for tomorrow.'},
    gel:{tr:'Botanik günlüğünüz',en:'Your botanical journal'},
    steps:{tr:['Bugün gördüğünüz bir gelişmeyi yazın.','Işığı, toprağı ve mevsimi not edin.','Gelecek ay neyi merak ettiğinizi ekleyin.','Pasaportunuza kaydedin ve bir gözlem hatırlatıcısı indirin.'],en:['Write down one change you noticed today.','Note the light, soil and season.','Add something you are curious to see next month.','Save it to your passport and download an observation reminder.']},
    caution:{tr:'Büyüme hızı bitkiye ve koşullara bağlıdır.',en:'Growth depends on the individual plant and its conditions.'}
  },
  {
    id:'adoption-ritual',cat:'home',minutes:5,gelTsp:0,
    title:{tr:'Bir isim, bir başlangıç',en:'A name, a beginning'},
    summary:{tr:'Küçük bitkinizi kendi hikâyenizin parçası yapın.',en:'Make your little plant part of your own story.'},
    gel:{tr:'Pasaport ve bir isim fikri',en:'Your passport and a name idea'},
    steps:{tr:['Bitkinize bir isim seçin.','Geliş gününü pasaportuna kaydedin.','Pencere önünde güvenli bir yer bulun.','Sahiplenme kartınızı yazdırın ve ilk fotoğrafı ekleyin.'],en:['Choose a name for your plant.','Record its arrival date in the passport.','Find a safe place near a window.','Print your adoption card and add the first photograph.']},
    caution:{tr:'Bitkiyi çocukların ve evcil hayvanların ulaşamayacağı yerde tutun.',en:'Keep the plant out of reach of children and pets.'}
  }
];

const beautyConcepts = [
  {id:'pre-wash-aloe-mask',cat:'hair',title:{tr:'Yıkama öncesi aloe saç maskesi',en:'The pre-wash aloe hair mask'},summary:{tr:'Yıkama gününü özel bir güzellik anına dönüştüren, durulanan saç maskesi fikri.',en:'A rinse-out mask idea that turns wash day into a little beauty ritual.'}},
  {id:'aloe-hair-conditioner',cat:'hair',title:{tr:'Duşta aloe saç bakım ritüeli',en:'The aloe shower hair ritual'},summary:{tr:'Saç boyları için duş rutinine eşlik edecek aloe temalı bir bakım konsepti.',en:'An aloe-inspired conditioner concept for the lengths of the hair, as part of a shower routine.'}},
  {id:'aloe-curl-styling',cat:'hair',title:{tr:'Aloe ile bukle şekillendirme',en:'The aloe curl-styling concept'},summary:{tr:'Bukle rutini için aloe temalı bir şekillendirici fikri. Formül ve performans henüz değerlendirilmedi.',en:'An aloe-inspired styling idea for a curl routine. Formulation and performance have not been assessed.'}},
  {id:'aloe-face-mask',cat:'skin',title:{tr:'Küçük bir aloe yüz maskesi anı',en:'A little aloe face-mask moment'},summary:{tr:'Akşam bakımına eşlik edecek tek kullanımlık, durulanan maske fikri.',en:'A single-use, rinse-off mask concept to accompany an evening beauty ritual.'}},
  {id:'aloe-hand-care',cat:'skin',title:{tr:'Aloe el bakım molası',en:'The aloe hand-care pause'},summary:{tr:'Gün içinde kendinize ayıracağınız küçük bir el bakım ritüeli fikri.',en:'A hand-care concept for a small moment of beauty in the middle of the day.'}},
  {id:'aloe-body-care',cat:'skin',title:{tr:'Duş sonrası aloe vücut bakımı',en:'The after-shower aloe body ritual'},summary:{tr:'Duş sonrası rutini tamamlayacak aloe temalı bir vücut bakım konsepti.',en:'An aloe-inspired body-care concept to complete an after-shower routine.'}}
];
window.RECIPES = beautyConcepts.map(concept=>({...concept,concept:true,gelTsp:0})).concat(window.RECIPES);
