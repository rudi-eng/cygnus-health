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
  return getLang() === "en" ? "Aloe Vera Planter Set" : "Aloe Vera Saksı Seti";
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
  tr: {
    meta: {
      home: {
        title: "Aloe Vera Saksı Seti — Aslana Intelligence",
        desc: "7 cm saksıda tek aloe vera, 400 TL. Türkçe ve İngilizce kitapçık, tarifler ve bakım."
      },
      shop: {
        title: "Satın al — Aloe Vera Saksı Seti",
        desc: "Küçük aloe vera seti. 7 cm saksı, tek bitki, 400 TL. Kitapçık dili seçilir."
      },
      booklet: {
        title: "Kitapçık — Aloe vera",
        desc: "Aloe veranın yaprağı, sarı lateks uyarısı, büyüyünce tek yaprak kesimi ve kaynaklar."
      },
      recipes: {
        title: "Tarifler — Aloe vera",
        desc: "Cilt ve saç için on iki dış kullanım tarifi. İçilecek tarif yoktur."
      },
      care: {
        title: "Bakım — küçük aloe vera",
        desc: "7 cm saksı için sulama, ışık, şehir notu ve ilk hafta listesi."
      },
      order: {
        title: "Sepet ve sipariş — Aloe Vera Saksı Seti",
        desc: "Sepeti kontrol edin, adres yazın, sipariş metnini kopyalayın."
      }
    },
    nav: { shop: "Mağaza", booklet: "Kitapçık", recipes: "Tarifler", care: "Bakım" },
    cats: { all: "Tümü", method: "Yöntem", skin: "Cilt", hair: "Saç", home: "Ev", saved: "Kayıtlı" },
    bookletOpt: { tr: "Türkçe kitapçık", en: "İngilizce kitapçık", both: "Türkçe ve İngilizce" },
    common: {
      skip: "İçeriğe geç",
      menu: "Menü",
      cart: "Sepet",
      sources: "Kaynaklar",
      updated: "Notlar 19 Ekim 2026 tarihinde gözden geçirildi.",
      back: "Tariflere dön",
      print: "Yazdır",
      minutes: "dakika",
      caution: "Dikkat",
      steps: "Adımlar"
    },
    smallCallout: "Bu set 7 cm saksıda tek genç bitkidir. Yaprak kesmek için önce büyümesi gerekir.",
    home: {
      kicker: "01  —  Saksı seti",
      h1: "Küçük saksı. Tek bir aloe vera.",
      lede: "7 santimetrelik seramik saksıda bir genç bitki ve iki dilde bir kitapçık. Bitki bu ölçüde kesilmez. Önce evinize alışır. Kitapçık, bakım ve tarifler büyürken yanında durur.",
      ctaShop: "Seti incele",
      ctaBook: "Kitapçığı oku",
      priceNote: "Tek bitki. Saksı 7 cm.",
      facts: [
        { t: "7 cm", d: "Her saksıda bir genç bitki vardır." },
        { t: "Önce büyür", d: "Bu ölçüde yaprak alınmaz. Dış yaprak kalınlaşınca kesim anlatılır." },
        { t: "İki dil", d: "Kitapçık Türkçe, İngilizce veya her iki dilde seçilir." }
      ],
      boxTitle: "Kutunun içinde",
      boxLede: "Süslü bir dolgu değil. Küçük bir bitki, doğru saksı ve kullanmayı anlatan kısa kitap.",
      box: [
        { t: "Bir genç aloe vera", d: "Kökleri tutmuş, kısa yapraklı. Türkiye'de sarısabır da denir." },
        { t: "7 cm saksı", d: "Mat seramik, drenaj delikli, altlıklı. İçinde sukulent toprağı." },
        { t: "Kitapçık", d: "Basılı metin, sitedeki Kitapçık sayfası ile aynıdır." }
      ],
      useTitle: "Evde ne işe yarar",
      uses: [
        { t: "Serin jel, sonra", d: "Bitki büyüyünce, sağlam cilde ince bir katman. Yanık tedavisi değildir." },
        { t: "Az su", d: "Küçük saksıda en sık hata fazla sudur. Toprak dibine kadar kuruyunca sulanır." },
        { t: "Açık bilgi", d: "Sarı lateks içilmez. Şifa vaadi yoktur. Kaynaklar kitapçığın sonundadır." }
      ],
      pathTitle: "Set geldikten sonra",
      paths: [
        { h: "Kitapçık", d: "Yaprağın içi, lateks uyarısı ve bitki hazır olunca tek kesim.", href: "#/booklet" },
        { h: "Tarifler", d: "On iki dış kullanım. Hepsi küçük porsiyon. İçecek yok.", href: "#/recipes" },
        { h: "Bakım", d: "İlk hafta listesi, şehir notu ve sulama hatırlatıcısı.", href: "#/care" }
      ],
      safetyTitle: "Baştan bilinmesi gereken",
      safety: "Sarı lateks cildi tahriş eder ve yutulmaz. Bitki; kedi, köpek ve atların çiğneyemeyeceği yerde durur. Çocuklar dikenli yaprağı kesmez."
    },
    shop: {
      kicker: "02  —  Mağaza",
      lede: "Her sipariş 7 cm saksıda bir bitkidir. Kitapçığın dilini seçin.",
      bookTitle: "Kitapçık",
      qty: "Adet",
      add: "Sepete ekle",
      added: "Sepete eklendi",
      includesTitle: "Bu fiyata dahil",
      includes: [
        "Bir genç aloe vera",
        "7 cm drenajlı seramik saksı ve altlık",
        "Sukulent toprağı",
        "Seçilen dilde basılı kitapçık",
        "Sitedeki bakım rehberi ve tarifler"
      ],
      ship: "Kargo fiyata dahil değildir. Ödeme ve kargo, sipariş mesajında netleşir.",
      photo: "Fotoğraf küçük seti temsil eder. Saksı 7 cm'dir.",
      faqTitle: "Kısa sorular",
      faqs: [
        { q: "Saksı kaç santimetre?", a: "7 cm. İçinde bir genç bitki vardır." },
        { q: "Gelir gelmez yaprak kesilir mi?", a: "Kesilmez. Bu ölçü bir jel kavanozu değildir. Bitki evde büyür. En az 8 sağlam yaprak, kalın bir dış yaprak ve 8 hafta gerekir." },
        { q: "Nasıl ödenir, nasıl gelir?", a: "Sepette bir sipariş metni hazırlanır. Onu iletirsiniz. Ödeme ve kargo o yazışmada netleşir. Bu sayfada kart çekimi yoktur." },
        { q: "Evde kedi veya köpek varsa?", a: "Aloe vera, ASPCA listesinde kedi, köpek ve atlar için zehirlidir. Saksıyı çiğneyemeyecekleri yere koyun." },
        { q: "Kitapçık İngilizce olur mu?", a: "Evet. Türkçe, İngilizce veya her ikisi. Sitedeki dil düğmesi de aynı metni açar." }
      ]
    },
    bookletPage: {
      kicker: "03  —  Kitapçık",
      lede: "Basılı kitapçığın aynı metni. Şifa listesi değil, evde kullanma rehberi.",
      disclaimer: "Bu metin tıbbi tavsiye değildir. Hastalık tedavi etmez. Şiddetli yanık, derin kesik veya hastalık için bir sağlık kuruluşuna başvurun."
    },
    recipesPage: {
      kicker: "04  —  Tarifler",
      lede: "On iki tarifin hepsi cilt, saç veya ev içindir. Yutulmaz. Küçük bitkiden bugün yaprak kesmeyin.",
      search: "Tarif ara",
      gelTitle: "Elinizdeki jel",
      gel1: "1 çay kaşığı",
      gel3: "1 yemek kaşığı",
      gel6: "2 yemek kaşığı",
      gelHelp: "Bitki büyüyüp bir yaprak verince, o yaprak çoğu zaman 1–2 yemek kaşığı jel verir. Küçük porsiyonlar tek yaprağa sığsın diye yazıldı.",
      empty: "Bu süzgeçte tarif yok. Ölçüyü yükseltin veya aramayı temizleyin.",
      fav: "Kaydet",
      favOn: "Kayıtlı",
      gelNeed: "Jel",
      hidden: "Daha çok jel isteyen tarifler gizlendi."
    },
    carePage: {
      kicker: "05  —  Bakım",
      lede: "Küçük saksı az toprak tutar. Fazla su, kuraklıktan daha çabuk çürütür.",
      weekTitle: "İlk hafta",
      weekLede: "Yeni gelen bitkiyi yerinden oynatmayın ve ıslak toprağa su eklemeyin.",
      waterTitle: "Su",
      waterSteps: [
        "Parmağınızı toprağa sokun. Dip kuru değilse su vermeyin.",
        "Kuruysa, delikten su çıkana kadar sulayın.",
        "On dakika sonra altlıktaki suyu dökün.",
        "Yaprakların birleştiği göbeğe su doldurmayın."
      ],
      lightTitle: "Işık",
      light: "Parlak, dolaylı ışık ister. Doğu penceresi uygundur. Güney penceresinde tül perde kullanın. Öğle güneşine yapışık cam yaprağı yakar. Yapraklar uzayıp soluyorsa ışık azdır. Birden karanlık köşeden sert güneşe taşımayın.",
      tempTitle: "Sıcaklık",
      temp: "Rahat aralık yaklaşık 15–27 °C'dir. 10 °C altına düşmesin. Don bitkiyi bitirir. Kaloriferin sıcak üflemesinden ve soğuk cama yapışık durmasından kaçının.",
      seasonTitle: "Yıl içinde",
      seasons: [
        { t: "İlkbahar", d: "Büyüme başlar. Işık artar. Toprak kuruyunca sulayın." },
        { t: "Yaz", d: "Küçük saksı daha çabuk kurur. Yine de takvimle değil, parmakla kontrol edin. Öğle güneşini kesin." },
        { t: "Sonbahar", d: "Su aralığı açılır. Yapraklar dolgunsa acele etmeyin." },
        { t: "Kış", d: "Neredeyse dinlenir. Toprak ıslaksa hiç sulamayın. İçeride tutun." }
      ],
      cityTitle: "Bulunduğunuz şehir",
      cityLede: "Kısa bir iklim notu. Yine de asıl ölçü toprağın kuru olup olmadığıdır.",
      cityPrompt: "Bir şehir seçin.",
      symTitle: "Bir sorun seçin",
      symPrompt: "Gördüğünüz hale en yakın olanı seçin.",
      readyTitle: "Yaprak kesmeye hazır mı?",
      readyLede: "Üçü de evet ise bir dış yaprak kesilebilir. Biri bile hayır ise tarifler bekler.",
      readyYes: "Kesebilirsiniz. Kitapçıktaki kesim adımlarını kullanın. Sonra en az dört hafta bekleyin.",
      readyNo: "Bu bitki henüz hazır değil. Bakıma devam edin. 7 cm saksı bu hale çoğu zaman aylar sonra gelir.",
      ics: "Üç haftada bir kontrolü takvime ekle",
      icsDone: "Takvim dosyası indi. Su, ancak toprak kuruysa verilir.",
      repotTitle: "Saksı değiştirmek",
      repot: "Acele etmeyin. Kökler alttaki delikten çıkınca bir boy büyük saksıya geçin. Bir anda büyük saksıya almayın. Geniş toprakta su uzun kalır ve küçük kök çürür. Yeni saksıda da drenaj deliği olsun. Taşıdıktan sonra birkaç gün su vermeyin."
    },
    order: {
      kicker: "06  —  Sipariş",
      lede: "Mesaj bu sayfada hazırlanır. Bir sunucuya gönderilmez.",
      empty: "Sepet boş.",
      browse: "Mağazaya dön",
      remove: "Çıkar",
      summary: "Özet",
      ship: "Kargo ayrıca netleşir.",
      pay: "Ödeme, mesajın ardından kararlaştırılır.",
      formTitle: "Nereye gelsin",
      name: "Ad",
      phone: "Telefon",
      city: "İl",
      district: "İlçe",
      address: "Adres",
      note: "Not",
      prepare: "Sipariş metnini hazırla",
      copy: "Metni kopyala",
      whatsapp: "WhatsApp ile gönder",
      copied: "Kopyalandı",
      noNumber: "Satıcı numarası henüz ekli değil. Metni kopyalayıp saklayın.",
      preview: "Hazır mesaj",
      errors: {
        name: "Ad en az iki karakter olsun.",
        phone: "Telefon en az 10 rakam olsun.",
        city: "İl yazın.",
        address: "Adres en az sekiz karakter olsun.",
        cart: "Sepet boş."
      }
    },
    orderMsg: {
      no: "Sipariş no",
      total: "Tutar",
      ship: "Kargo ve ödeme bu mesajdan sonra netleşir.",
      name: "Ad",
      phone: "Telefon",
      city: "İl",
      district: "İlçe",
      address: "Adres",
      note: "Not"
    },
    alts: {
      hero: "Küçük krem saksıda genç bir aloe vera",
      booklet: "Küçük aloe vera saksısının yanında kapalı krem kitapçık",
      window: "Beyaz pencere kenarında küçük aloe vera",
      gel: "Kesilmiş aloe yaprağında berrak jel ve yanında sarı lateks"
    },
    footer: {
      productOf: "Bir Aslana Intelligence ürünü",
      blurb: "Küçük saksıda tek aloe vera. Kitapçık, tarif ve bakım bu sitede.",
      medical: "Tıbbi tavsiye değildir. Sarı lateks içilmez.",
      pets: "Aloe vera; kedi, köpek ve atlar için zehirli olabilir.",
      year: "2026"
    }
  },
  en: {
    meta: {
      home: {
        title: "Aloe Vera Planter Set — Aslana Intelligence",
        desc: "One aloe vera in a 7 cm planter, 400 TL. Booklet, recipes, and care in Turkish and English."
      },
      shop: {
        title: "Shop — Aloe Vera Planter Set",
        desc: "A small aloe set. One plant in a 7 cm planter, 400 TL, and a booklet language you choose."
      },
      booklet: {
        title: "Booklet — Aloe vera",
        desc: "What is inside an aloe leaf, the yellow latex warning, and how to cut one leaf later."
      },
      recipes: {
        title: "Recipes — Aloe vera",
        desc: "Twelve topical recipes for skin and hair. Nothing in this set is for drinking."
      },
      care: {
        title: "Care — a small aloe vera",
        desc: "Water, light, a city note, and a first-week list for a 7 cm planter."
      },
      order: {
        title: "Cart and order — Aloe Vera Planter Set",
        desc: "Check the cart, write the address, and copy the order message."
      }
    },
    nav: { shop: "Shop", booklet: "Booklet", recipes: "Recipes", care: "Care" },
    cats: { all: "All", method: "Method", skin: "Skin", hair: "Hair", home: "Home", saved: "Saved" },
    bookletOpt: { tr: "Turkish booklet", en: "English booklet", both: "Turkish and English" },
    common: {
      skip: "Skip to content",
      menu: "Menu",
      cart: "Cart",
      sources: "Sources",
      updated: "Notes reviewed on 19 October 2026.",
      back: "Back to recipes",
      print: "Print",
      minutes: "minutes",
      caution: "Caution",
      steps: "Steps"
    },
    smallCallout: "This set is one young plant in a 7 cm planter. It needs to grow before you cut a leaf.",
    home: {
      kicker: "01  —  The set",
      h1: "A small planter. One aloe vera.",
      lede: "A young plant in a 7 centimetre ceramic pot, with a booklet in two languages. A plant this size is not for cutting. It settles in first. The booklet, the care guide, and the recipes stay useful while it grows.",
      ctaShop: "See the set",
      ctaBook: "Read the booklet",
      priceNote: "One plant. The planter is 7 cm.",
      facts: [
        { t: "7 cm", d: "Each planter holds one young plant." },
        { t: "It grows first", d: "Do not take a leaf at this size. Cutting is explained once an outer leaf is thick." },
        { t: "Two languages", d: "Choose the booklet in Turkish, English, or both." }
      ],
      boxTitle: "In the box",
      boxLede: "Not a padded gift pile. A small plant, the right pot, and a short book that shows you how to live with it.",
      box: [
        { t: "One young aloe vera", d: "Rooted, with short leaves. In Turkey it is also called sarısabır." },
        { t: "A 7 cm planter", d: "Matte ceramic, with a drainage hole, a saucer, and succulent soil." },
        { t: "A booklet", d: "The printed text matches the Booklet page on this site." }
      ],
      useTitle: "What it is for at home",
      uses: [
        { t: "A cool gel, later", d: "Once the plant has grown, a thin layer on intact skin. Not a burn treatment." },
        { t: "Very little water", d: "In a small pot the usual mistake is too much water. Water only when the soil is dry to the bottom." },
        { t: "Plain facts", d: "The yellow latex is not for swallowing. There is no cure claim. Sources close the booklet." }
      ],
      pathTitle: "After the set arrives",
      paths: [
        { h: "Booklet", d: "Inside the leaf, the latex warning, and one cut when the plant is ready.", href: "#/booklet" },
        { h: "Recipes", d: "Twelve topical uses. Small portions. Nothing to drink.", href: "#/recipes" },
        { h: "Care", d: "A first-week list, a city note, and a watering reminder.", href: "#/care" }
      ],
      safetyTitle: "Know this first",
      safety: "The yellow latex irritates skin and is not for swallowing. Keep the plant where cats, dogs, and horses cannot chew it. Children should not cut the spiny leaf."
    },
    shop: {
      kicker: "02  —  Shop",
      lede: "Each order is one plant in a 7 cm planter. Choose the booklet language.",
      bookTitle: "Booklet",
      qty: "Quantity",
      add: "Add to cart",
      added: "Added to cart",
      includesTitle: "Included in the price",
      includes: [
        "One young aloe vera",
        "A 7 cm ceramic planter with drainage and a saucer",
        "Succulent soil",
        "A printed booklet in the language you choose",
        "The care guide and recipes on this site"
      ],
      ship: "Shipping is not included. Payment and shipping are confirmed in the order message.",
      photo: "The photograph stands in for the small set. The planter is 7 cm.",
      faqTitle: "Short questions",
      faqs: [
        { q: "How big is the planter?", a: "7 cm. It holds one young plant." },
        { q: "Can I cut a leaf when it arrives?", a: "No. This size is not a jar of gel. The plant grows at home. Wait for at least 8 firm leaves, one thick outer leaf, and 8 weeks." },
        { q: "How do I pay, and how does it arrive?", a: "The cart prepares an order message. You send it. Payment and shipping are agreed in that conversation. This page does not take a card." },
        { q: "What if a cat or dog lives here?", a: "The ASPCA lists aloe vera as toxic to cats, dogs, and horses. Put the planter where they cannot chew it." },
        { q: "Can the booklet be in English?", a: "Yes. Turkish, English, or both. The language button on this site opens the same text." }
      ]
    },
    bookletPage: {
      kicker: "03  —  Booklet",
      lede: "The same text as the printed booklet. A home guide, not a list of cures.",
      disclaimer: "This is not medical advice. It does not treat disease. For a severe burn, a deep cut, or an illness, go to a clinic."
    },
    recipesPage: {
      kicker: "04  —  Recipes",
      lede: "All twelve recipes are for skin, hair, or a home ritual. Do not swallow them. Do not cut a leaf from the small plant today.",
      search: "Search recipes",
      gelTitle: "Gel you have",
      gel1: "1 teaspoon",
      gel3: "1 tablespoon",
      gel6: "2 tablespoons",
      gelHelp: "When the plant is mature enough for one leaf, that leaf often gives 1–2 tablespoons of gel. The portions are small so one leaf can cover them.",
      empty: "Nothing matches. Raise the gel amount or clear the search.",
      fav: "Save",
      favOn: "Saved",
      gelNeed: "Gel",
      hidden: "Recipes that need more gel are hidden."
    },
    carePage: {
      kicker: "05  —  Care",
      lede: "A small pot holds little soil. Too much water rots it faster than a dry week does.",
      weekTitle: "First week",
      weekLede: "Do not move a new plant around, and do not add water to damp soil.",
      waterTitle: "Water",
      waterSteps: [
        "Push a finger into the soil. If the bottom is still damp, do not water.",
        "If it is dry, water until it runs from the hole.",
        "After ten minutes, empty the saucer.",
        "Do not pour water into the crown where the leaves meet."
      ],
      lightTitle: "Light",
      light: "It wants bright, indirect light. An east window is a good place. On a south window, use a sheer curtain. Glass in midday sun scorches a leaf. Long, pale leaves mean too little light. Do not move it from a dark corner straight into hard sun.",
      tempTitle: "Temperature",
      temp: "It is comfortable at about 15–27 °C. Keep it above 10 °C. Frost finishes it. Keep it out of a radiator's hot blast and off freezing window glass.",
      seasonTitle: "Through the year",
      seasons: [
        { t: "Spring", d: "Growth starts. Light increases. Water when the soil is dry." },
        { t: "Summer", d: "A small pot dries faster. Still test with a finger, not a calendar. Soften the midday sun." },
        { t: "Autumn", d: "Leave longer gaps between waterings. If the leaves are plump, wait." },
        { t: "Winter", d: "It almost rests. If the soil is wet, do not water at all. Keep it indoors." }
      ],
      cityTitle: "Your city",
      cityLede: "A short climate note. The soil is still the real measure.",
      cityPrompt: "Choose a city.",
      symTitle: "Choose a problem",
      symPrompt: "Pick the line closest to what you see.",
      readyTitle: "Ready for a leaf?",
      readyLede: "If all three are yes, one outer leaf can be cut. If any is no, the recipes wait.",
      readyYes: "You can cut. Use the harvest steps in the booklet. Then wait at least four weeks.",
      readyNo: "This plant is not ready. Keep caring for it. This 7 cm planter often takes months to reach this point.",
      ics: "Add a check every three weeks",
      icsDone: "The calendar file downloaded. Water only if the soil is dry.",
      repotTitle: "Moving to a larger pot",
      repot: "Do not rush. When roots come out of the hole, move it up one pot size. Do not jump into a large pot. Water sits in the extra soil and small roots rot. The new pot needs a drainage hole too. Do not water for a few days after the move."
    },
    order: {
      kicker: "06  —  Order",
      lede: "The message is prepared on this page. It is not sent to a server.",
      empty: "The cart is empty.",
      browse: "Back to the shop",
      remove: "Remove",
      summary: "Summary",
      ship: "Shipping is confirmed separately.",
      pay: "Payment is agreed after the message.",
      formTitle: "Where it should go",
      name: "Name",
      phone: "Phone",
      city: "City",
      district: "District",
      address: "Address",
      note: "Note",
      prepare: "Prepare the order text",
      copy: "Copy the text",
      whatsapp: "Send on WhatsApp",
      copied: "Copied",
      noNumber: "The seller number is not added yet. Copy the text and keep it.",
      preview: "Prepared message",
      errors: {
        name: "Enter a name of at least two characters.",
        phone: "Enter a phone number with at least 10 digits.",
        city: "Enter a city.",
        address: "Enter an address of at least eight characters.",
        cart: "The cart is empty."
      }
    },
    orderMsg: {
      no: "Order no",
      total: "Total",
      ship: "Shipping and payment are confirmed after this message.",
      name: "Name",
      phone: "Phone",
      city: "City",
      district: "District",
      address: "Address",
      note: "Note"
    },
    alts: {
      hero: "A young aloe vera in a small cream planter",
      booklet: "A small aloe planter beside a closed cream booklet",
      window: "A small aloe vera on a white windowsill",
      gel: "Clear gel in a cut aloe leaf, with yellow latex beside it"
    },
    footer: {
      productOf: "An Aslana Intelligence product",
      blurb: "One aloe vera in a small planter. The booklet, recipes, and care live on this site.",
      medical: "Not medical advice. Do not swallow the yellow latex.",
      pets: "Aloe vera can be toxic to cats, dogs, and horses.",
      year: "2026"
    }
  }
};

window.CHAPTERS = [
  {
    id: "box",
    title: { tr: "Kutunun içinde", en: "In the box" },
    paras: {
      tr: [
        "Bu set küçüktür. Her saksıda bir genç aloe vera vardır. Saksı 7 cm'dir.",
        "Kutuda bitki, drenaj delikli seramik saksı, altlık, sukulent toprağı ve seçtiğiniz dilde basılı kitapçık bulunur. Bu sayfa, basılı metnin aynısıdır.",
        "Bu ölçüde yaprak kesilmez. Bitki önce yerine alışır ve büyür. Tarifler, dış yaprak başparmağınızdan kalın olduktan sonra kullanılır."
      ],
      en: [
        "This set is small. Each planter holds one young aloe vera. The planter is 7 cm.",
        "The box contains the plant, a ceramic planter with a drainage hole, a saucer, succulent soil, and a printed booklet in the language you chose. This page is the same text.",
        "Do not cut a leaf at this size. The plant settles and grows first. The recipes are for later, once an outer leaf is thicker than your thumb."
      ]
    }
  },
  {
    id: "plant",
    title: { tr: "Bitki", en: "The plant" },
    paras: {
      tr: [
        "Botanik adı Aloe vera'dır. Eski metinlerde Aloe barbadensis olarak da geçer. Türkiye'de sarısabır da denir.",
        "Yapraklar etlidir ve kenarları küçük dişlidir. İçte berrak bir jel vardır. Kabuğun hemen altında sarı, acı bir özsu vardır. Bu özsu latekstir ve aloin taşır. Aloin cildi tahriş eder ve güçlü bir müshildir. Bu sette lateks kullanılmaz.",
        "Bitki aydınlık sever, sık su sevmez. 7 cm saksıdaki genç bitki, büyük bir bahçe aloesi gibi sulanırsa çabuk çürür."
      ],
      en: [
        "The botanical name is Aloe vera. Older texts also call it Aloe barbadensis. In Turkey it is also called sarısabır.",
        "The leaves are fleshy, with small teeth along the edges. Inside is a clear gel. Just under the skin is a yellow, bitter sap. That sap is latex, and it carries aloin. Aloin irritates skin and is a strong laxative. This set does not use the latex.",
        "The plant likes light and dislikes frequent water. A young plant in a 7 cm pot rots quickly if it is watered like a large garden aloe."
      ]
    }
  },
  {
    id: "inside",
    title: { tr: "Yaprağın içinde ne var", en: "What is inside the leaf" },
    paras: {
      tr: [
        "İncelemeler yaprağı üç katmanda anlatır: yeşil kabuk, altındaki sarı lateks ve ortadaki berrak jel. Jel büyük ölçüde sudur. Catalano ve arkadaşlarının 2024 derlemesi bu oranı yaklaşık yüzde 99 olarak kaydeder. Jel içinde çalışılan maddelerden biri acemannan adlı bir polisakkarittir.",
        "Acemannan üzerine laboratuvar, diş hekimliği ve yara örtüsü araştırmaları vardır. Liu ve arkadaşlarının 2019 derlemesi bunları arıtılmış malzeme üzerinden özetler. Pencere kenarından alınan taze jel ile aynı şey değildir.",
        "Sadgrove ve Simmonds, 2021'de tedavi iddiaları için kanıtın yer yer çelişkili olduğunu ve daha fazla çalışma gerektiğini yazar. Bu kitapçık o yüzden şifa vaat etmez. Evde beklenen şey daha sadedir: bitki büyüyünce, sağlam ciltte serin ve suyu bol bir jel."
      ],
      en: [
        "Reviews describe the leaf in three layers: the green skin, the yellow latex under it, and the clear gel in the centre. The gel is mostly water. A 2024 review by Catalano and colleagues records that share at about 99 percent. One compound studied in the gel is a polysaccharide called acemannan.",
        "There is laboratory, dental, and wound-dressing research on acemannan. A 2019 review by Liu and colleagues summarises that work on prepared material. It is not the same thing as fresh gel from a windowsill.",
        "In 2021 Sadgrove and Simmonds wrote that the evidence behind therapeutic claims is sometimes contradictory and that more research is needed. This booklet makes no cure claim. What you can expect at home is plainer: once the plant has grown, a cool, water-rich gel on intact skin."
      ]
    }
  },
  {
    id: "uses",
    title: { tr: "Evde ne için kullanılır", en: "What it is used for at home" },
    paras: {
      tr: [
        "Bitki hazır olduktan sonra geleneksel kullanım üç yerde kalır: güneşten çıkmış, kabarcıksız ve sağlam bir cilde ince serin jel; kuru ellere kısa bir katman; saç boylarına suyla seyreltilmiş bir son durulama.",
        "Bunlar bakım jestidir. Yanık, egzama, sedef, enfeksiyon veya başka bir hastalığın tedavisi değildir. Göze sürülmez. Derin kesiğe ve iltihaplı cilde sürülmez.",
        "İçilecek tarif yoktur. Sarı lateks yutulmaz. İlk kullanımda kolun iç tarafında küçük bir alan deneyin ve 24 saat bekleyin. Batma veya kızarıklık olursa kullanmayın."
      ],
      en: [
        "After the plant is ready, traditional use stays in three places: a thin cool layer on intact skin that is not blistered after sun; a short layer on dry hands; a last rinse for the lengths of the hair, diluted with water.",
        "These are care gestures. They are not treatment for burns, eczema, psoriasis, infection, or any other illness. Do not put the gel in the eyes. Do not put it on a deep cut or on infected skin.",
        "There is no recipe for drinking. Do not swallow the yellow latex. The first time, test a small patch on the inner arm and wait 24 hours. If it stings or reddens, do not use it."
      ]
    },
    link: "recipes"
  },
  {
    id: "harvest",
    title: { tr: "Tek yaprak nasıl kesilir", en: "How to cut one leaf" },
    paras: {
      tr: ["Küçük saksıdan bugün kesmeyin. Aşağıdaki sıra, bitki hazır olduktan sonradır."],
      en: ["Do not cut the small planter today. The sequence below is for after the plant is ready."]
    },
    steps: {
      tr: [
        "En az 8 sağlam yaprak olsun. En dış yaprak başparmağınızdan kalın olsun. Bitki bu evde en az 8 haftadır duruyor olsun.",
        "Temiz ve keskin bir bıçak kullanın. En dış yaprağı dibinden düz kesin. Koparmayın.",
        "Yaprağı kesik yüzü aşağı bakacak şekilde bir bardağa 15 dakika koyun. Sarı sıvıyı dökün. Sıkmayın.",
        "Kesik ucu soğuk suyla çalkalayın. Ellerinizi yıkayın.",
        "Dikenli kenarları kesin. Yeşil kabuğu soyun. Yalnızca berrak jeli bir kaşıkla alın.",
        "Jel pembeleşir, ekşi kokar veya yapışkanlığı bozulursa dökün.",
        "Bu bitkiden bir seferde tek yaprak alın. Sonraki kesim için en az 4 hafta bekleyin."
      ],
      en: [
        "There should be at least 8 firm leaves. The outer leaf should be thicker than your thumb. The plant should have been in this home for at least 8 weeks.",
        "Use a clean, sharp knife. Cut the outermost leaf straight across at the base. Do not tear it.",
        "Stand the leaf in a glass, cut end down, for 15 minutes. Discard the yellow liquid. Do not squeeze.",
        "Rinse the cut end under cool water. Wash your hands.",
        "Trim off the spiny edges. Peel away the green skin. Spoon out only the clear gel.",
        "If the gel turns pink, smells sour, or loses its texture, discard it.",
        "Take one leaf from this plant at a time. Wait at least 4 weeks before the next cut."
      ]
    },
    figure: "gel"
  },
  {
    id: "store",
    title: { tr: "Jeli saklamak", en: "Storing the gel" },
    paras: {
      tr: [
        "Aynı gün kullanın ya da temiz bir kapta buzdolabında 7 gün tutun. Kabın üstüne tarihi yazın.",
        "Daha uzun süre için jeli buz kalıbında dondurun. Çözülünce birkaç gün içinde kullanın. Koku değişirse dökün. Dondurulmuş jel birkaç ayı geçerse tadını ve dokusunu yitirir; şüphede dökün.",
        "Oda sıcaklığında ancak aynı gün durur. Su ile seyreltilmiş bir sprey, kaynamış ve soğumuş suyla yapılmışsa buzdolabında 3 günü geçmesin."
      ],
      en: [
        "Use it the same day, or keep it in a clean container in the fridge for 7 days. Write the date on the container.",
        "For longer keeping, freeze the gel in an ice tray. Use it within a few days of thawing. If the smell changes, discard it. Frozen gel that has sat for many months loses texture; when in doubt, discard it.",
        "At room temperature it is only for the same day. A spray diluted with water that was boiled and cooled should not stay in the fridge past 3 days."
      ]
    }
  },
  {
    id: "wait",
    title: { tr: "Ne zaman kesilmez", en: "When not to cut" },
    paras: {
      tr: ["Şu hallerde bıçağı bırakın ve bakım sayfasına dönün."],
      en: ["In these cases, put the knife down and go back to the care page."]
    },
    steps: {
      tr: [
        "Bitki yeni geldiyse.",
        "Sağlam yaprak sayısı 8'den azsa.",
        "Dış yaprak ince veya soluksa.",
        "Gövde yumuşaksa ya da toprak ekşi kokuyorsa.",
        "Son 4 haftada bir yaprak aldıysanız."
      ],
      en: [
        "The plant has just arrived.",
        "There are fewer than 8 firm leaves.",
        "The outer leaf is thin or pale.",
        "The base is soft, or the soil smells sour.",
        "You took a leaf in the last 4 weeks."
      ]
    },
    link: "care"
  },
  {
    id: "pets",
    title: { tr: "Evcil hayvan ve çocuk", en: "Pets and children" },
    paras: {
      tr: [
        "ASPCA, Aloe vera'yı kedi, köpek ve atlar için zehirli bitkiler arasında listeler. Belirttiği maddeler saponin ve antrakinonlardır. Klinik belirtiler arasında kusma, halsizlik ve ishal vardır. Risk özellikle sarı latekstededir. Yine de bütün yaprak çiğnenebilir. Saksıyı onların ulaşamayacağı yere koyun.",
        "Bir hayvan yaprak çiğnediyse kusturmaya çalışmayın. Bir veterinere haber verin. Bitkinin adını, yaklaşık miktarı ve saati söyleyin.",
        "Çocuklar dikenli yaprağı kesmesin. Lateks ellere bulaşırsa su ve sabunla yıkayın."
      ],
      en: [
        "The ASPCA lists Aloe vera as toxic to cats, dogs, and horses. It names saponins and anthraquinones. The clinical signs it lists include vomiting, lethargy, and diarrhea. The risk sits especially in the yellow latex. A whole leaf can still be chewed, so keep the planter where pets cannot reach it.",
        "If an animal chews a leaf, do not try to make it vomit. Call a veterinarian. Give the plant name, about how much was eaten, and when.",
        "Children should not cut the spiny leaf. If latex gets on hands, wash them with soap and water."
      ]
    }
  },
  {
    id: "sources",
    title: { tr: "Kaynaklar", en: "Sources" },
    paras: {
      tr: ["Aşağıdaki metinler bu kitapçıktaki ölçülü cümlelerin dayanağıdır. Hiçbiri, taze ev jelinin bir ilaç olduğu anlamına gelmez."],
      en: ["The texts below are the basis for the careful sentences in this booklet. None of them means that fresh household gel is a medicine."]
    }
  }
];

window.SOURCES = [
  {
    title: "Catalano et al. Aloe vera—An Extensive Review Focused on Recent Studies. Foods. 2024.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11241682/",
    note: {
      tr: "Yaprağın üç katmanı ve jelin büyük ölçüde su oluşu.",
      en: "The leaf's three layers, and the gel being mostly water."
    }
  },
  {
    title: "Sadgrove and Simmonds. Pharmacodynamics of Aloe vera and acemannan. Phytotherapy Research. 2021.",
    url: "https://pubmed.ncbi.nlm.nih.gov/34427371/",
    note: {
      tr: "Tedavi iddialarında kanıtın çelişkili olabildiği ve yeni çalışma gerektiği.",
      en: "Evidence behind therapeutic claims can conflict, and more study is needed."
    }
  },
  {
    title: "Liu et al. Acemannan from Aloe vera: a review. Molecules. 2019.",
    url: "https://pubmed.ncbi.nlm.nih.gov/31010204/",
    note: {
      tr: "Acemannan çalışmaları, arıtılmış malzeme ve yara veya diş uygulamaları üzerinedir.",
      en: "Acemannan studies cover prepared material and wound or dental uses."
    }
  },
  {
    title: "ASPCA. Aloe. Toxic and Non-Toxic Plants.",
    url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/aloe",
    note: {
      tr: "Kedi, köpek ve atlar için zehirli. Saponin ve antrakinon. Kusma, halsizlik, ishal.",
      en: "Toxic to cats, dogs, and horses. Saponins and anthraquinones. Vomiting, lethargy, diarrhea."
    }
  }
];

window.CITIES = [
  {
    id: "istanbul",
    name: "İstanbul",
    body: {
      tr: "Kışı içeride geçirin. Nemli ve serin camın önünde toprak geç kurur. Sulamadan önce dibe kadar kuruduğundan emin olun. Yazın öğleden sonra güneşini tül ile kesin.",
      en: "Keep it indoors through winter. In front of a cool, damp window the soil stays wet longer. Be sure it is dry to the bottom before you water. In summer, soften the afternoon sun with a sheer curtain."
    }
  },
  {
    id: "ankara",
    name: "Ankara",
    body: {
      tr: "Kasım ile mart arasında içeride, kaloriferin sıcak üflemesinden uzakta dursun. Yaz güneşi serttir. Öğle saatlerinde doğrudan cama yapışık bırakmayın.",
      en: "From November through March keep it indoors, away from a radiator's hot blast. Summer sun is hard. Do not leave it against the glass at midday."
    }
  },
  {
    id: "izmir",
    name: "İzmir",
    body: {
      tr: "Yaz sıcak ve kurudur. Küçük saksı çabuk kurur, yine de her gün su vermeyin. Toprak kurudukça sulayın. Nadir don olursa gece içeri alın.",
      en: "Summer is hot and dry. A small pot dries quickly, but do not water every day. Water when the soil is dry. If a rare frost is forecast, bring it in at night."
    }
  },
  {
    id: "antalya",
    name: "Antalya",
    body: {
      tr: "Güneş kuvvetlidir. Öğleden sonra gölge veya tül gerekir. Kış ılıktır. Hava yaklaşık 10 °C altına inerse içeri alın.",
      en: "The sun is strong. It needs afternoon shade or a sheer curtain. Winter is mild. Bring it in if the air falls to about 10 °C."
    }
  },
  {
    id: "bursa",
    name: "Bursa",
    body: {
      tr: "Kışı içeride geçirin. Geceler İstanbul'dan daha soğuk olabilir. İlkbaharda parlak pencere ışığı yeter. Saksı altlığında su bekletmeyin.",
      en: "Keep it indoors for winter. Nights can be colder than in Istanbul. In spring, a bright window is enough. Do not leave water in the saucer."
    }
  },
  {
    id: "trabzon",
    name: "Trabzon",
    body: {
      tr: "Hava nemlidir. Kök çürümesi riski daha yüksektir. Drenaj deliği açık kalsın, sulamayı seyrek tutun ve altlıkta su bekletmeyin.",
      en: "The air is humid, so root rot is more likely. Keep the drainage hole clear, water rarely, and do not leave water in the saucer."
    }
  }
];

window.SYMPTOMS = [
  {
    id: "yellow",
    title: { tr: "Yapraklar sararıyor", en: "Leaves are turning yellow" },
    body: {
      tr: "Küçük saksıda en sık sebep fazla sudur. Sulamayı durdurun. Altlığı boşaltın. Parlak, havadar bir yere alın. Gövde de yumuşaksa alttaki yumuşak gövde notuna bakın. Toprak ekşi kokmuyorsa aynı gün saksı değiştirmeyin.",
      en: "In a small pot the usual cause is too much water. Stop watering. Empty the saucer. Move it to a bright, airy place. If the base is also soft, read the soft-base note below. If the soil does not smell sour, do not repot the same day."
    }
  },
  {
    id: "brown",
    title: { tr: "Uçlar kahverengi", en: "The tips are brown" },
    body: {
      tr: "Sert güneş veya uzun süre kupkuru toprak bunu yapar. Öğle güneşindeyse camdan geri çekin. Toprak haftalardır taş gibi kuruysa ve yapraklar inceldiyse bir kez bol sulayın, sonra altlığı boşaltın. Sık sık az su vermeyin.",
      en: "Hard sun or soil left bone-dry for a long time does this. If it sits in midday sun, move it back from the glass. If the soil has been dry for weeks and the leaves are thin, water once thoroughly, then empty the saucer. Do not give little sips often."
    }
  },
  {
    id: "pale",
    title: { tr: "Yapraklar soluk ve uzun", en: "Leaves are pale and stretched" },
    body: {
      tr: "Işık azdır. Daha aydınlık bir pencereye, birkaç günde yaklaştırın. Aynı gün öğle güneşine yapıştırmayın. Küçük bitkiyi karanlık rafta unutmak bu hali yapar.",
      en: "It needs more light. Move it closer to a bright window over a few days. Do not press it into midday sun on the same day. A small plant forgotten on a dark shelf ends up like this."
    }
  },
  {
    id: "soft",
    title: { tr: "Gövde yumuşak ve koyu", en: "The base is soft and dark" },
    body: {
      tr: "Bu kök çürümesidir. Su vermeyin. Bitkiyi topraktan çıkarın. Kökler kahverengi ve ekşi kokuyorsa çürük kısmı temiz bir bıçakla kesin. Tabanın tamamı ezikse bitki dönemeyebilir. Ortada sert ve yeşil bir kısım kaldıysa iki gün kurutun, sonra kuru sukulent toprağına oturtun. Bu bir bakım denemesidir, garanti değildir.",
      en: "This is root rot. Do not water. Take the plant out of the soil. If the roots are brown and smell sour, cut the rotten parts away with a clean knife. If the whole base is mush, it may not recover. If a firm green centre remains, let it dry for two days, then set it on dry succulent soil. This is a care attempt, not a guarantee."
    }
  }
];

window.WEEK = [
  { id: "d1", tr: "Gün 1. Kutuyu açın. Toprak nemliyse su vermeyin.", en: "Day 1. Unpack. If the soil is damp, do not water." },
  { id: "d2", tr: "Aynı gün parlak, dolaylı ışığa koyun. Öğle güneşine yapıştırmayın.", en: "The same day, put it in bright, indirect light. Do not press it into midday sun." },
  { id: "d3", tr: "İlk hafta yerini değiştirmeyin.", en: "Do not move it during the first week." },
  { id: "d7", tr: "Gün 7. Toprağı kontrol edin. Yalnızca dip kuruysa sulayın ve altlığı boşaltın.", en: "Day 7. Check the soil. Water only if the bottom is dry, then empty the saucer." }
];

window.CHECKS = [
  { id: "leaves", tr: "En az 8 sağlam yaprak var.", en: "There are at least 8 firm leaves." },
  { id: "thick", tr: "En dış yaprak başparmağımdan kalın.", en: "The outer leaf is thicker than my thumb." },
  { id: "time", tr: "Bitki bu evde en az 8 haftadır duruyor.", en: "The plant has been in this home for at least 8 weeks." }
];
