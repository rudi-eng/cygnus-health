function ui() {
  return window.COPY[getLang()] || window.COPY.tr;
}

function tx(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[getLang()] || value.tr || "";
}

function txList(value) {
  if (!value) return [];
  const list = value[getLang()] || value.tr || [];
  return Array.isArray(list) ? list : [];
}

function productName() {
  return getLang() === "en" ? "The Living Aloe Beauty Kit" : "Yaşayan Aloe Güzellik Seti";
}

function bookletLabel(code) {
  const map = ui().bookletOpt || {};
  return map[normalizeBooklet(code)] || "";
}

function sizeLabel(cm) {
  const n = normalizeSize(cm);
  return getLang() === "en" ? n + " cm planter" : n + " cm saksı";
}

function catLabel(cat) {
  const map = ui().cats || {};
  return map[cat] || cat;
}

window.COPY = {
  "tr": {
    "meta": {
      "home": {
        "title": "Biraz bitki. Biraz sihir. — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "shop": {
        "title": "Yaşayan Aloe Güzellik Seti — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "booklet": {
        "title": "Botanik günlük — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "recipes": {
        "title": "Ritüel stüdyosu — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "care": {
        "title": "Bakım rehberi — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "order": {
        "title": "Sepet ve sipariş — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "passport": {
        "title": "Bitki pasaportum — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "greenhouse": {
        "title": "Sera — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      },
      "story": {
        "title": "Hikâyemiz — CYGNUS",
        "desc": "Türkiye’de yetişen genç bir aloe, 7 cm plastik saksı, botanik günlük ve kişisel bitki pasaportu. Biraz bitki. Biraz sihir."
      }
    },
    "nav": {
      "shop": "Yaşayan set",
      "booklet": "Botanik günlük",
      "recipes": "Ritüel stüdyosu",
      "care": "Bakım rehberi"
    },
    "cats": {
      "all": "Tümü",
      "method": "Gözlem",
      "skin": "Günlük",
      "hair": "Yaratıcılık",
      "home": "Ev",
      "saved": "Kayıtlı"
    },
    "bookletOpt": {
      "tr": "Türkçe kitapçık",
      "en": "İngilizce kitapçık",
      "both": "Türkçe ve İngilizce"
    },
    "common": {
      "skip": "İçeriğe geç",
      "menu": "Menü",
      "cart": "Sepet",
      "sources": "Kaynaklar",
      "updated": "Bakım ve güvenlik kaynakları: 21 Ekim 2026.",
      "back": "Ritüellere dön",
      "print": "Yazdır",
      "minutes": "dakika",
      "caution": "Dikkat",
      "steps": "Adımlar"
    },
    "smallCallout": "Küçük bir başlangıç: drenajlı 7 cm plastik üretim saksısında genç bir aloe. Önce büyütelim; bu bitki yaprak hasadı için hazır değil.",
    "shop": {
      "kicker": "YAŞAYAN BOTANİK KOLEKSİYONU · NO. 01",
      "lede": "Bir bitkiden fazlası: evinizde yavaşça büyüyen küçük bir ritüel. Türkiye’de yetişen genç bir aloe, botanik günlük ve size ait bir bitki pasaportu.",
      "bookTitle": "Kitapçık",
      "qty": "Adet",
      "add": "Sepete ekle",
      "added": "Sepete eklendi",
      "includesTitle": "Bu fiyata dahil",
      "includes": [
        "7 cm drenajlı plastik üretim saksısında bir genç aloe",
        "Sukulent yetiştirme ortamı",
        "Seçtiğiniz dilde botanik bakım kitapçığı",
        "Bitkinizin adını ve gelişini kaydedebileceğiniz sahiplenme kartı",
        "Kişisel dijital pasaport ve bakım rehberi için QR bağlantısı"
      ],
      "ship": "Kargo fiyata dahil değildir. Ödeme ve kargo, sipariş mesajında netleşir.",
      "photo": "Yapay zekâyla oluşturulmuş ürün konsepti. Gerçek bitkinin şekli değişir; gönderilen saksı 7 cm plastik üretim saksısıdır.",
      "faqTitle": "Kısa sorular",
      "faqs": [
        {
          "q": "Tam olarak ne geliyor?",
          "a": "7 cm plastik üretim saksısında genç bir aloe, bakım kitapçığı ve sahiplenme kartı. Dekoratif saksı, kumaş ve fotoğraftaki diğer aksesuarlar dahil değildir."
        },
        {
          "q": "Hemen yaprak kullanabilir miyim?",
          "a": "Hayır. Bu genç bitki önce büyümeli. Ayrıca türü ve kozmetik kullanıma uygunluğu doğrulanmadığı için hasat ve cilde uygulama talimatları kapalıdır. Yaş veya yaprak sayısı tek başına onay sayılmaz."
        },
        {
          "q": "Nasıl sipariş verilir?",
          "a": "Sepetinizi oluşturun ve sipariş metnini hazırlayın. Satıcıyla ödeme, stok ve kargoyu teyit ettikten sonra sipariş kesinleşir. Bu sitede kart ödemesi alınmaz. Satıcı iletişimi henüz eklenmemişse metni yalnızca kaydedebilirsiniz."
        },
        {
          "q": "Kargo, iade ve hasarlı bitki?",
          "a": "Kargo bölgesi, ücret, gönderim günü ve hasar/iade koşulları satıcıyla siparişten önce teyit edilir. Henüz sabit bir teslimat süresi veya ücretsiz değişim taahhüdü yoktur."
        },
        {
          "q": "Evcil hayvanlar için uygun mu?",
          "a": "Aloe çiğnenirse evcil hayvanlar için tehlikeli olabilir. Çocukların ve hayvanların ulaşamayacağı bir yerde büyütün. Yenildiğinden şüphelenirseniz veterinere danışın."
        },
        {
          "q": "Pasaport nerede saklanıyor?",
          "a": "Bu tarayıcıda, bu cihazda. Hesap veya bulut eşitlemesi yok. Fotoğraf ve notlarınızı düzenli olarak dışa aktarın; tarayıcı verileri temizlenirse kaybolabilir."
        },
        {
          "q": "Organik sertifikalı mı?",
          "a": "Organik sertifikası iddiasında bulunmuyoruz. Canlı bir bitki ve eğitim materyali sunuyoruz; hazır kozmetik satmıyoruz."
        }
      ]
    },
    "bookletPage": {
      "kicker": "KÜÇÜK BİR BOTANİK KİTAP",
      "lede": "Büyütmek, gözlemlemek ve yavaşlamak için bir yol arkadaşı. Türkçe veya İngilizce okuyun, yazdırın ve kendi notlarınızı ekleyin.",
      "disclaimer": "Bu rehber bitki bakımı ve genel eğitim içindir. Bitkinin türü ve kozmetik uygunluğu doğrulanana kadar yaprak kesmeyin, cilde uygulamayın ve tüketmeyin."
    },
    "recipesPage": {
      "kicker": "RİTÜEL STÜDYOSU",
      "lede": "Küçük, sakin ritüeller. Bitkinize dokunmadan da başlayabilirsiniz. Cilde uygulanan aloe tarifleri, tür doğrulaması ve güvenlik incelemesi tamamlanana kadar kapalıdır.",
      "search": "Bir ritüel ara",
      "gelTitle": "Elinizdeki jel",
      "gel1": "1 çay kaşığı",
      "gel3": "1 yemek kaşığı",
      "gel6": "2 yemek kaşığı",
      "gelHelp": "Bitki büyüyüp bir yaprak verince, o yaprak çoğu zaman 1–2 yemek kaşığı jel verir. Küçük porsiyonlar tek yaprağa sığsın diye yazıldı.",
      "empty": "Burada henüz bir ritüel yok. Başka bir filtre deneyin.",
      "fav": "Kaydet",
      "favOn": "Kayıtlı",
      "gelNeed": "Gerekenler",
      "hidden": "Daha çok jel isteyen tarifler gizlendi."
    },
    "carePage": {
      "kicker": "05  —  Bakım",
      "lede": "Küçük saksı az toprak tutar. Fazla su, kuraklıktan daha çabuk çürütür.",
      "weekTitle": "İlk hafta",
      "weekLede": "Yeni gelen bitkiyi yerinden oynatmayın ve ıslak toprağa su eklemeyin.",
      "waterTitle": "Su",
      "waterSteps": [
        "Parmağınızı toprağa sokun. Dip kuru değilse su vermeyin.",
        "Kuruysa, delikten su çıkana kadar sulayın.",
        "On dakika sonra altlıktaki suyu dökün.",
        "Yaprakların birleştiği göbeğe su doldurmayın."
      ],
      "lightTitle": "Işık",
      "light": "Parlak, dolaylı ışık ister. Doğu penceresi uygundur. Güney penceresinde tül perde kullanın. Öğle güneşine yapışık cam yaprağı yakar. Yapraklar uzayıp soluyorsa ışık azdır. Birden karanlık köşeden sert güneşe taşımayın.",
      "tempTitle": "Sıcaklık",
      "temp": "Rahat aralık yaklaşık 15–27 °C'dir. 10 °C altına düşmesin. Don bitkiyi bitirir. Kaloriferin sıcak üflemesinden ve soğuk cama yapışık durmasından kaçının.",
      "seasonTitle": "Yıl içinde",
      "seasons": [
        {
          "t": "İlkbahar",
          "d": "Büyüme başlar. Işık artar. Toprak kuruyunca sulayın."
        },
        {
          "t": "Yaz",
          "d": "Küçük saksı daha çabuk kurur. Yine de takvimle değil, parmakla kontrol edin. Öğle güneşini kesin."
        },
        {
          "t": "Sonbahar",
          "d": "Su aralığı açılır. Yapraklar dolgunsa acele etmeyin."
        },
        {
          "t": "Kış",
          "d": "Neredeyse dinlenir. Toprak ıslaksa hiç sulamayın. İçeride tutun."
        }
      ],
      "cityTitle": "Bulunduğunuz şehir",
      "cityLede": "Kısa bir iklim notu. Yine de asıl ölçü toprağın kuru olup olmadığıdır.",
      "cityPrompt": "Bir şehir seçin.",
      "symTitle": "Bir sorun seçin",
      "symPrompt": "Gördüğünüz hale en yakın olanı seçin.",
      "readyTitle": "Büyümeyi gözlemle",
      "readyLede": "Bunlar gözlem notlarıdır. Hiçbiri hasat veya cilde uygulama onayı vermez.",
      "readyYes": "Gözlemler kaydedildi. Büyümeyi takip etmeye devam edin. Tür ve kullanım uygunluğu doğrulanana kadar hasat talimatları kapalıdır.",
      "readyNo": "Her bitki kendi hızında büyür. Yeni kökleri, yaprakları ve sağlıklı gelişimi not edin; bir takvim hasat izni vermez.",
      "ics": "Üç haftada bir kontrolü takvime ekle",
      "icsDone": "Takvim dosyası indi. Su, ancak toprak kuruysa verilir.",
      "repotTitle": "Saksı değiştirmek",
      "repot": "Acele etmeyin. Kökler alttaki delikten çıkınca bir boy büyük saksıya geçin. Bir anda büyük saksıya almayın. Geniş toprakta su uzun kalır ve küçük kök çürür. Yeni saksıda da drenaj deliği olsun. Taşıdıktan sonra birkaç gün su vermeyin."
    },
    "order": {
      "kicker": "06  —  Sipariş",
      "lede": "Mesaj bu sayfada hazırlanır. Bir sunucuya gönderilmez.",
      "empty": "Sepet boş.",
      "browse": "Mağazaya dön",
      "remove": "Çıkar",
      "summary": "Özet",
      "ship": "Kargo ayrıca netleşir.",
      "pay": "Ödeme, mesajın ardından kararlaştırılır.",
      "formTitle": "Nereye gelsin",
      "name": "Ad",
      "phone": "Telefon",
      "city": "İl",
      "district": "İlçe",
      "address": "Adres",
      "note": "Not",
      "prepare": "Sipariş metnini hazırla",
      "copy": "Metni kopyala",
      "whatsapp": "WhatsApp ile gönder",
      "copied": "Kopyalandı",
      "noNumber": "Satıcı iletişimi henüz eklenmedi. Metni kaydedebilirsiniz; henüz sipariş gönderilmez.",
      "preview": "Hazır mesaj",
      "errors": {
        "name": "Ad en az iki karakter olsun.",
        "phone": "Telefon en az 10 rakam olsun.",
        "city": "İl yazın.",
        "address": "Adres en az sekiz karakter olsun.",
        "cart": "Sepet boş."
      }
    },
    "orderMsg": {
      "no": "Sipariş no",
      "total": "Tutar",
      "ship": "Kargo ve ödeme bu mesajdan sonra netleşir.",
      "name": "Ad",
      "phone": "Telefon",
      "city": "İl",
      "district": "İlçe",
      "address": "Adres",
      "note": "Not"
    },
    "alts": {
      "hero": "Güneşli pencere önünde ince benekli yaprakları olan genç aloe ve plastik üretim saksısı; yapay zekâ konsepti",
      "booklet": "Botanik günlük konsepti",
      "window": "Güneşli pencerede aloe konsepti",
      "gel": "Aloe yaprağı"
    },
    "footer": {
      "blurb": "Türkiye’de büyüyen küçük bir fikir. Evinizde büyüyen güzel bir başlangıç.",
      "medical": "Bir canlı bitki ve bakım deneyimi. Kozmetik tarifler inceleme bekliyor.",
      "pets": "Çocukların ve evcil hayvanların ulaşamayacağı bir yerde büyütün.",
      "year": "© 2026 CYGNUS · Özenle büyütüldü.",
      "productOf": "Biraz bitki. Biraz sihir."
    }
  },
  "en": {
    "meta": {
      "home": {
        "title": "A little plant. A little magic. — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "shop": {
        "title": "The Living Aloe Beauty Kit — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "booklet": {
        "title": "Botanical journal — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "recipes": {
        "title": "Ritual studio — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "care": {
        "title": "Care guide — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "order": {
        "title": "Basket and order — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "passport": {
        "title": "My plant passport — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "greenhouse": {
        "title": "The greenhouse — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      },
      "story": {
        "title": "Our story — CYGNUS",
        "desc": "A young aloe grown in Türkiye, a 7 cm plastic nursery pot, a botanical journal and your own plant passport. A little plant. A little magic."
      }
    },
    "nav": {
      "shop": "The living kit",
      "booklet": "Botanical journal",
      "recipes": "Ritual studio",
      "care": "Care guide"
    },
    "cats": {
      "all": "All rituals",
      "method": "Observe",
      "skin": "Journal",
      "hair": "Create",
      "home": "At home",
      "saved": "Saved"
    },
    "bookletOpt": {
      "tr": "Turkish booklet",
      "en": "English booklet",
      "both": "Turkish and English"
    },
    "common": {
      "skip": "Skip to content",
      "menu": "Menu",
      "cart": "Cart",
      "sources": "Sources",
      "updated": "Care and safety sources checked: 21 October 2026.",
      "back": "Back to the rituals",
      "print": "Print",
      "minutes": "minutes",
      "caution": "Caution",
      "steps": "Steps"
    },
    "smallCallout": "A little beginning: a young aloe in a 7 cm plastic nursery pot with drainage. Let it grow first; this plant is not ready for leaf harvesting.",
    "shop": {
      "kicker": "THE LIVING BOTANICAL COLLECTION · NO. 01",
      "lede": "More than a little plant: a quiet ritual that grows with you. A young aloe grown in Türkiye, a botanical journal, and a plant passport of your own.",
      "bookTitle": "Booklet",
      "qty": "Quantity",
      "add": "Add to cart",
      "added": "Added to cart",
      "includesTitle": "Included in the price",
      "includes": [
        "One young aloe in a 7 cm plastic nursery pot with drainage",
        "Succulent growing medium",
        "A printed botanical care booklet in your chosen language",
        "An adoption card for your plant’s name and arrival date",
        "A QR link to your personal digital passport and care guide"
      ],
      "ship": "Shipping is not included. Payment and shipping are confirmed in the order message.",
      "photo": "AI-generated product concept. Actual plants vary; the supplied pot is a 7 cm plastic nursery pot.",
      "faqTitle": "Short questions",
      "faqs": [
        {
          "q": "What exactly is included?",
          "a": "One young aloe in a 7 cm plastic nursery pot, a care booklet and an adoption card. Decorative pots, fabric and other styling props are not included."
        },
        {
          "q": "Can I use a leaf straight away?",
          "a": "No. This young plant needs to grow first. Harvesting and topical recipes are also unavailable until its species and cosmetic suitability are confirmed. Age or leaf count alone is not approval."
        },
        {
          "q": "How do I place an order?",
          "a": "Build your basket and prepare the order message. The order is confirmed only after arranging stock, payment and delivery with the seller. There is no card payment on this website. If seller contact is not configured, you can only save the message."
        },
        {
          "q": "Delivery, returns and plant damage?",
          "a": "Confirm the delivery area, charge, dispatch day and damage/return terms with the seller before ordering. There is no fixed delivery time or free replacement promise yet."
        },
        {
          "q": "Is it suitable around pets?",
          "a": "Chewing aloe may be harmful to pets. Grow it out of reach of children and animals. Contact a veterinarian if you suspect ingestion."
        },
        {
          "q": "Where is my passport stored?",
          "a": "In this browser on this device. There is no account or cloud sync. Export photos and notes regularly; clearing browser data can remove them."
        },
        {
          "q": "Is it certified organic?",
          "a": "We make no organic certification claim. This is a living plant with educational materials, rather than a prepared cosmetic."
        }
      ]
    },
    "bookletPage": {
      "kicker": "A LITTLE BOTANICAL BOOK",
      "lede": "A companion for growing, noticing, and slowing down. Read in Turkish or English, print a copy, and make room for your own notes.",
      "disclaimer": "For plant care and general education. Do not harvest, apply to skin or consume this plant while its species and suitability for cosmetic use remain unconfirmed."
    },
    "recipesPage": {
      "kicker": "THE RITUAL STUDIO",
      "lede": "Small rituals, slower days. Begin without taking a leaf. Topical aloe recipes remain locked until species identification and safety review are complete.",
      "search": "Find a little ritual",
      "gelTitle": "Gel you have",
      "gel1": "1 teaspoon",
      "gel3": "1 tablespoon",
      "gel6": "2 tablespoons",
      "gelHelp": "When the plant is mature enough for one leaf, that leaf often gives 1–2 tablespoons of gel. The portions are small so one leaf can cover them.",
      "empty": "No rituals here yet. Try another filter.",
      "fav": "Save",
      "favOn": "Saved",
      "gelNeed": "You’ll need",
      "hidden": "Recipes that need more gel are hidden."
    },
    "carePage": {
      "kicker": "05  —  Care",
      "lede": "A small pot holds little soil. Too much water rots it faster than a dry week does.",
      "weekTitle": "First week",
      "weekLede": "Do not move a new plant around, and do not add water to damp soil.",
      "waterTitle": "Water",
      "waterSteps": [
        "Push a finger into the soil. If the bottom is still damp, do not water.",
        "If it is dry, water until it runs from the hole.",
        "After ten minutes, empty the saucer.",
        "Do not pour water into the crown where the leaves meet."
      ],
      "lightTitle": "Light",
      "light": "It wants bright, indirect light. An east window is a good place. On a south window, use a sheer curtain. Glass in midday sun scorches a leaf. Long, pale leaves mean too little light. Do not move it from a dark corner straight into hard sun.",
      "tempTitle": "Temperature",
      "temp": "It is comfortable at about 15–27 °C. Keep it above 10 °C. Frost finishes it. Keep it out of a radiator's hot blast and off freezing window glass.",
      "seasonTitle": "Through the year",
      "seasons": [
        {
          "t": "Spring",
          "d": "Growth starts. Light increases. Water when the soil is dry."
        },
        {
          "t": "Summer",
          "d": "A small pot dries faster. Still test with a finger, not a calendar. Soften the midday sun."
        },
        {
          "t": "Autumn",
          "d": "Leave longer gaps between waterings. If the leaves are plump, wait."
        },
        {
          "t": "Winter",
          "d": "It almost rests. If the soil is wet, do not water at all. Keep it indoors."
        }
      ],
      "cityTitle": "Your city",
      "cityLede": "A short climate note. The soil is still the real measure.",
      "cityPrompt": "Choose a city.",
      "symTitle": "Choose a problem",
      "symPrompt": "Pick the line closest to what you see.",
      "readyTitle": "Notice the little changes",
      "readyLede": "These are observation notes. They do not approve harvesting or skin use.",
      "readyYes": "Observations saved. Keep following its growth. Harvest guidance remains locked until species and suitability are confirmed.",
      "readyNo": "Every plant grows at its own pace. Notice roots, new leaves, and healthy growth; a calendar cannot approve harvesting.",
      "ics": "Add a check every three weeks",
      "icsDone": "The calendar file downloaded. Water only if the soil is dry.",
      "repotTitle": "Moving to a larger pot",
      "repot": "Do not rush. When roots come out of the hole, move it up one pot size. Do not jump into a large pot. Water sits in the extra soil and small roots rot. The new pot needs a drainage hole too. Do not water for a few days after the move."
    },
    "order": {
      "kicker": "06  —  Order",
      "lede": "The message is prepared on this page. It is not sent to a server.",
      "empty": "The cart is empty.",
      "browse": "Back to the shop",
      "remove": "Remove",
      "summary": "Summary",
      "ship": "Shipping is confirmed separately.",
      "pay": "Payment is agreed after the message.",
      "formTitle": "Where it should go",
      "name": "Name",
      "phone": "Phone",
      "city": "City",
      "district": "District",
      "address": "Address",
      "note": "Note",
      "prepare": "Prepare the order text",
      "copy": "Copy the text",
      "whatsapp": "Send on WhatsApp",
      "copied": "Copied",
      "noNumber": "Seller contact is not configured yet. Save this message; no order has been sent.",
      "preview": "Prepared message",
      "errors": {
        "name": "Enter a name of at least two characters.",
        "phone": "Enter a phone number with at least 10 digits.",
        "city": "Enter a city.",
        "address": "Enter an address of at least eight characters.",
        "cart": "The cart is empty."
      }
    },
    "orderMsg": {
      "no": "Order no",
      "total": "Total",
      "ship": "Shipping and payment are confirmed after this message.",
      "name": "Name",
      "phone": "Phone",
      "city": "City",
      "district": "District",
      "address": "Address",
      "note": "Note"
    },
    "alts": {
      "hero": "Young slender speckled aloe in a plastic nursery pot on a sunlit windowsill; AI-generated concept",
      "booklet": "Botanical journal concept",
      "window": "Sunlit aloe concept",
      "gel": "Aloe leaf"
    },
    "footer": {
      "blurb": "A little idea grown in Türkiye. A beautiful beginning, growing in your home.",
      "medical": "A living plant and a care experience. Cosmetic recipes await review.",
      "pets": "Grow out of reach of children and pets.",
      "year": "© 2026 CYGNUS · Grown with care.",
      "productOf": "A little plant. A little magic."
    }
  }
};

window.CHAPTERS = [
  {
    "id": "welcome",
    "title": {
      "tr": "Güzel bir başlangıç",
      "en": "A beautiful beginning"
    },
    "paras": {
      "tr": [
        "Bu günlük bir genç aloe ve onunla kuracağınız küçük bağ için. Bitkinizin adını, geliş tarihini ve ilk fotoğrafını pasaportunuza ekleyin.",
        "Her bitki farklıdır. İnce, benekli yapraklar gözlem için güzel bir başlangıçtır; görünüş tek başına tür doğrulaması değildir."
      ],
      "en": [
        "This journal is for a young aloe and the little connection you will grow together. Add its name, arrival date and first photograph to your passport.",
        "Every plant is different. Slender, speckled leaves are a lovely thing to notice; appearance alone does not confirm its species."
      ]
    }
  },
  {
    "id": "arrival",
    "title": {
      "tr": "Eve geldiği gün",
      "en": "The day it comes home"
    },
    "paras": {
      "tr": [
        "Ambalajı dikkatle açın. Kırık yaprak ve çok ıslak toprak olup olmadığını kontrol edin. Bitkiyi parlak, dolaylı ışığa koyun.",
        "Toprak nemliyse sulamayın. İlk hafta sürekli yer değiştirmekten ve hemen büyük saksıya almaktan kaçının."
      ],
      "en": [
        "Unpack gently. Check for damaged leaves and overly wet soil. Place the plant in bright, indirect light.",
        "If the soil is damp, do not water. Avoid moving it repeatedly or immediately putting it in a large pot."
      ]
    },
    "link": "care"
  },
  {
    "id": "light",
    "title": {
      "tr": "Işığı tanımak",
      "en": "Finding its light"
    },
    "paras": {
      "tr": [
        "Aydınlık bir pencereyle başlayın. Güçlü güneşe yavaş yavaş alıştırın; camın arkasındaki sert öğle güneşini yumuşatın.",
        "Soğuk camdan, dondan ve kaloriferin doğrudan sıcaklığından koruyun. Yeni yerini fotoğrafla kaydedin."
      ],
      "en": [
        "Start near a bright window. Introduce stronger sun gradually; soften harsh midday sun behind glass.",
        "Protect it from cold glass, frost and direct radiator heat. Photograph its new spot."
      ]
    }
  },
  {
    "id": "water",
    "title": {
      "tr": "Takvimle değil, toprakla",
      "en": "Listen to the soil"
    },
    "paras": {
      "tr": [
        "Sulamadan önce toprağın tamamen kuruduğunu kontrol edin. Sabit bir sulama takvimi yerine bitkiyi ve ortamını gözlemleyin.",
        "Kuruysa suyun drenajdan akmasına izin verin ve fazla suyu uzaklaştırın. Yaprakların ortasında su biriktirmeyin.",
        "Takvim hatırlatıcısı sulama emri değil, toprağı kontrol etmek için bir davettir."
      ],
      "en": [
        "Let the growing medium dry before watering. Observe your plant and its surroundings rather than following a fixed watering schedule.",
        "When dry, let water drain freely and remove excess water. Avoid leaving water in the leaf centre.",
        "A calendar reminder is an invitation to check the soil, never an instruction to water."
      ]
    }
  },
  {
    "id": "growth",
    "title": {
      "tr": "Küçük değişiklikler",
      "en": "The little changes"
    },
    "paras": {
      "tr": [
        "Yeni bir yaprak, kök veya yavru gördüğünüzde bir not ekleyin. Ayda bir aynı açıdan fotoğraf çekmek gelişimi görmeyi kolaylaştırır.",
        "Kökler saksıyı doldurduğunda drenajlı, bir boy büyük bir saksı düşünün. Çok büyük bir saksı gereğinden uzun süre ıslak kalabilir.",
        "Haftalar veya yaprak sayısı hasat izni değildir. Genç bitkiyi kesmeyin."
      ],
      "en": [
        "Make a note when you notice a new leaf, root or offset. A photograph from the same angle each month makes changes easier to see.",
        "When the roots fill the pot, consider moving up one pot size with drainage. A very large pot may stay wet too long.",
        "Weeks elapsed or leaves counted do not approve harvesting. Do not cut this young plant."
      ]
    }
  },
  {
    "id": "identity",
    "title": {
      "tr": "Önce bitkiyi tanıyalım",
      "en": "Know the plant first"
    },
    "paras": {
      "tr": [
        "Yetiştirici bu bitkiyi Aloe vera olarak tanımlar. Bu, bağımsız botanik doğrulama veya kozmetik uygunluk testi değildir. Genç kit bitkisini hasat etmeyin; olgunluk tek başına güvenlik onayı vermez.",
        "Aloe vera iç yaprak jeli, sarı lateks ve yeşil kabuk farklı malzemelerdir. Evde ayırmak steriliteyi veya aloin düzeyini doğrulamaz. Tüketim, göz çevresi kullanımı ve saklanan ev yapımı yüz spreyi önerilmez."
      ],
      "en": [
        "The grower identifies this plant as Aloe vera. This is not independent botanical verification or cosmetic suitability testing. Do not harvest the young kit plant; maturity alone does not establish safety.",
        "Aloe vera inner gel, yellow latex and green rind are different materials. Home preparation does not verify sterility or aloin levels. Do not ingest, use around the eyes or make stored homemade facial mist."
      ]
    }
  },
  {
    "id": "rituals",
    "title": {
      "tr": "Bir yaprak almadan",
      "en": "Without taking a leaf"
    },
    "paras": {
      "tr": [
        "Pencere önünde birkaç sessiz dakika, bir gözlem çizimi veya bir aylık fotoğraf: ritüel bugün başlayabilir. Ritüel stüdyosunda bitkiye zarar vermeyen fikirler var.",
        "Pratik tarif kitabındaki ev fikirleri test edilmiş kozmetik formüller değildir. Uygun bitki ve malzemeler doğrulanmadan cilde uygulamayın. Temiz araçlar kullanın; taze hazırlıkları saklamayın. Bitki portresi veya çizimiyle başlayabilirsiniz."
      ],
      "en": [
        "A few quiet minutes by the window, an observation sketch, or a monthly photograph: the ritual can begin today. The studio has ideas that leave the plant intact.",
        "Home ideas in the practical recipe book are not tested cosmetic formulations. Do not apply without confirming plant and ingredient suitability. Use clean equipment and do not store fresh preparations. A plant portrait or sketch can begin today."
      ]
    },
    "link": "recipes"
  },
  {
    "id": "safety",
    "title": {
      "tr": "Özenin bir parçası",
      "en": "Care includes caution"
    },
    "paras": {
      "tr": [
        "Bitkiyi tüketmeyin ve çocuklarla evcil hayvanların ulaşamayacağı yerde tutun. Aloe vera kedi, köpek ve atlar için zehirli olarak listelenir. Yenildiğinden şüphelenirseniz veterinere danışın.",
        "Aloe içeren cilt ürünleri bazı kişilerde tahriş veya döküntüye neden olabilir. Bu kit hastalık tedavisi sunmaz."
      ],
      "en": [
        "Do not consume the plant, and keep it out of reach of children and pets. Aloe vera is listed as toxic to cats, dogs and horses. Contact a veterinarian if ingestion is suspected.",
        "Aloe skin products can cause irritation or rash in some people. This kit offers no treatment for medical conditions."
      ]
    }
  },
  {
    "id": "diary",
    "title": {
      "tr": "Size ait sayfalar",
      "en": "Pages of your own"
    },
    "paras": {
      "tr": [
        "Bitkimin adı: ____________________",
        "Birlikte ilk günümüz: ____________________",
        "Pencere / ışık notu: ____________________",
        "Bugün fark ettiğim küçük şey: ____________________",
        "Bir sonraki gözlem: ____________________"
      ],
      "en": [
        "My plant’s name: ____________________",
        "Our first day together: ____________________",
        "Window / light notes: ____________________",
        "A little thing I noticed today: ____________________",
        "My next observation: ____________________"
      ]
    }
  },
  {
    "id": "sources",
    "title": {
      "tr": "Okuma köşesi",
      "en": "The reading corner"
    },
    "paras": {
      "tr": [
        "Aşağıdaki kaynaklar genel bakım ve güvenlik bilgisini destekler. Sizin bitkinizin türünü veya cilt kullanımına uygunluğunu onaylamaz."
      ],
      "en": [
        "The sources below support general care and safety information. They do not confirm your plant’s identity or suitability for skin use."
      ]
    }
  }
];

window.SOURCES = [
  {
    "title": "NCCIH · Aloe Vera: Usefulness and Safety",
    "url": "https://www.nccih.nih.gov/health/aloe-vera",
    "note": {
      "tr": "Jel ve lateks arasındaki fark; tahriş ve ağızdan kullanım riskleri.",
      "en": "Gel and latex distinctions; irritation and oral-use risks."
    }
  },
  {
    "title": "ASPCA · Aloe",
    "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/aloe",
    "note": {
      "tr": "Evcil hayvan güvenliği.",
      "en": "Pet safety."
    }
  },
  {
    "title": "RHS · Aloe vera",
    "url": "https://www.rhs.org.uk/plants/981/aloe-vera/details",
    "note": {
      "tr": "Aloe vera için genel yetiştirme bilgisi; kesin tür teşhisi değildir.",
      "en": "General Aloe vera growing guidance; not a species identification."
    }
  }
];

window.CITIES = [
  {
    "id": "istanbul",
    "name": "İstanbul",
    "body": {
      "tr": "Kışı içeride geçirin. Nemli ve serin camın önünde toprak geç kurur. Sulamadan önce dibe kadar kuruduğundan emin olun. Yazın öğleden sonra güneşini tül ile kesin.",
      "en": "Keep it indoors through winter. In front of a cool, damp window the soil stays wet longer. Be sure it is dry to the bottom before you water. In summer, soften the afternoon sun with a sheer curtain."
    }
  },
  {
    "id": "ankara",
    "name": "Ankara",
    "body": {
      "tr": "Kasım ile mart arasında içeride, kaloriferin sıcak üflemesinden uzakta dursun. Yaz güneşi serttir. Öğle saatlerinde doğrudan cama yapışık bırakmayın.",
      "en": "From November through March keep it indoors, away from a radiator's hot blast. Summer sun is hard. Do not leave it against the glass at midday."
    }
  },
  {
    "id": "izmir",
    "name": "İzmir",
    "body": {
      "tr": "Yaz sıcak ve kurudur. Küçük saksı çabuk kurur, yine de her gün su vermeyin. Toprak kurudukça sulayın. Nadir don olursa gece içeri alın.",
      "en": "Summer is hot and dry. A small pot dries quickly, but do not water every day. Water when the soil is dry. If a rare frost is forecast, bring it in at night."
    }
  },
  {
    "id": "antalya",
    "name": "Antalya",
    "body": {
      "tr": "Güneş kuvvetlidir. Öğleden sonra gölge veya tül gerekir. Kış ılıktır. Hava yaklaşık 10 °C altına inerse içeri alın.",
      "en": "The sun is strong. It needs afternoon shade or a sheer curtain. Winter is mild. Bring it in if the air falls to about 10 °C."
    }
  },
  {
    "id": "bursa",
    "name": "Bursa",
    "body": {
      "tr": "Kışı içeride geçirin. Geceler İstanbul'dan daha soğuk olabilir. İlkbaharda parlak pencere ışığı yeter. Saksı altlığında su bekletmeyin.",
      "en": "Keep it indoors for winter. Nights can be colder than in Istanbul. In spring, a bright window is enough. Do not leave water in the saucer."
    }
  },
  {
    "id": "trabzon",
    "name": "Trabzon",
    "body": {
      "tr": "Hava nemlidir. Kök çürümesi riski daha yüksektir. Drenaj deliği açık kalsın, sulamayı seyrek tutun ve altlıkta su bekletmeyin.",
      "en": "The air is humid, so root rot is more likely. Keep the drainage hole clear, water rarely, and do not leave water in the saucer."
    }
  }
];

window.SYMPTOMS = [
  {
    "id": "yellow",
    "title": {
      "tr": "Yapraklar sararıyor",
      "en": "Leaves are turning yellow"
    },
    "body": {
      "tr": "Küçük saksıda en sık sebep fazla sudur. Sulamayı durdurun. Altlığı boşaltın. Parlak, havadar bir yere alın. Gövde de yumuşaksa alttaki yumuşak gövde notuna bakın. Toprak ekşi kokmuyorsa aynı gün saksı değiştirmeyin.",
      "en": "In a small pot the usual cause is too much water. Stop watering. Empty the saucer. Move it to a bright, airy place. If the base is also soft, read the soft-base note below. If the soil does not smell sour, do not repot the same day."
    }
  },
  {
    "id": "brown",
    "title": {
      "tr": "Uçlar kahverengi",
      "en": "The tips are brown"
    },
    "body": {
      "tr": "Sert güneş veya uzun süre kupkuru toprak bunu yapar. Öğle güneşindeyse camdan geri çekin. Toprak haftalardır taş gibi kuruysa ve yapraklar inceldiyse bir kez bol sulayın, sonra altlığı boşaltın. Sık sık az su vermeyin.",
      "en": "Hard sun or soil left bone-dry for a long time does this. If it sits in midday sun, move it back from the glass. If the soil has been dry for weeks and the leaves are thin, water once thoroughly, then empty the saucer. Do not give little sips often."
    }
  },
  {
    "id": "pale",
    "title": {
      "tr": "Yapraklar soluk ve uzun",
      "en": "Leaves are pale and stretched"
    },
    "body": {
      "tr": "Işık azdır. Daha aydınlık bir pencereye, birkaç günde yaklaştırın. Aynı gün öğle güneşine yapıştırmayın. Küçük bitkiyi karanlık rafta unutmak bu hali yapar.",
      "en": "It needs more light. Move it closer to a bright window over a few days. Do not press it into midday sun on the same day. A small plant forgotten on a dark shelf ends up like this."
    }
  },
  {
    "id": "soft",
    "title": {
      "tr": "Gövde yumuşak ve koyu",
      "en": "The base is soft and dark"
    },
    "body": {
      "tr": "Bu kök çürümesidir. Su vermeyin. Bitkiyi topraktan çıkarın. Kökler kahverengi ve ekşi kokuyorsa çürük kısmı temiz bir bıçakla kesin. Tabanın tamamı ezikse bitki dönemeyebilir. Ortada sert ve yeşil bir kısım kaldıysa iki gün kurutun, sonra kuru sukulent toprağına oturtun. Bu bir bakım denemesidir, garanti değildir.",
      "en": "This is root rot. Do not water. Take the plant out of the soil. If the roots are brown and smell sour, cut the rotten parts away with a clean knife. If the whole base is mush, it may not recover. If a firm green centre remains, let it dry for two days, then set it on dry succulent soil. This is a care attempt, not a guarantee."
    }
  }
];

window.WEEK = [
  {
    "id": "d1",
    "tr": "Gün 1. Kutuyu açın. Toprak nemliyse su vermeyin.",
    "en": "Day 1. Unpack. If the soil is damp, do not water."
  },
  {
    "id": "d2",
    "tr": "Aynı gün parlak, dolaylı ışığa koyun. Öğle güneşine yapıştırmayın.",
    "en": "The same day, put it in bright, indirect light. Do not press it into midday sun."
  },
  {
    "id": "d3",
    "tr": "İlk hafta yerini değiştirmeyin.",
    "en": "Do not move it during the first week."
  },
  {
    "id": "d7",
    "tr": "Gün 7. Toprağı kontrol edin. Yalnızca dip kuruysa sulayın ve altlığı boşaltın.",
    "en": "Day 7. Check the soil. Water only if the bottom is dry, then empty the saucer."
  }
];

window.CHECKS = [
  {
    "id": "leaves",
    "tr": "Yeni veya sağlam bir yaprak gözlemledim.",
    "en": "I noticed a new or firm leaf."
  },
  {
    "id": "thick",
    "tr": "Drenajı ve köklerin durumunu kontrol ettim.",
    "en": "I checked drainage and root condition."
  },
  {
    "id": "time",
    "tr": "Bu ayın gelişim notunu kaydettim.",
    "en": "I made this month’s growth note."
  }
];

window.CHAPTERS.splice(4,0,{
 id:'soil-problems',title:{tr:'Toprak, kökler ve küçük sorunlar',en:'Soil, roots and little problems'},
 paras:{tr:[
 'Drenaj delikleri olan 7 cm plastik saksıyı kullanın. Sukulentlere uygun, havadar ve suyu hızla süzen bir yetiştirme ortamı seçin. Kökler saksıyı doldurduğunda yalnızca bir boy büyütün; bitkiyi aynı derinlikte tutun.',
 'Yumuşak yaprak ve sürekli ıslak toprak görürseniz daha fazla su vermeyin; drenajı ve kökleri kontrol edin. Işığa uzanan büyümeyi daha aydınlık bir yere yavaşça alıştırın. Yeni kahverengi izler sert güneşten sonra başladıysa ışığı yumuşatın.',
 'Gövde dibinde yumuşama, hızla yayılan lekeler veya zararlılar varsa bitkiyi diğerlerinden ayırın ve yetiştiriciden yardım alın. Belirtiler tek başına kesin teşhis değildir.'
 ],en:[
 'Use the 7 cm plastic pot with drainage holes and an airy, freely draining succulent growing medium. When roots fill it, move up only one pot size and keep the plant at the same planting depth.',
 'If leaves soften while the soil stays wet, do not add water; inspect drainage and roots. Gradually improve light for stretched growth. Soften exposure if new brown marks follow harsh sunlight.',
 'Separate a plant with a soft base, spreading marks or pests from other plants and ask the grower for help. Symptoms alone are not a definite diagnosis.'
 ]}
});
// Preserve the original care journal alongside the practical recipe book.
window.CARE_CHAPTERS = window.CHAPTERS;
