function leafSvg() {
  return '<svg class="leaf" viewBox="0 0 64 64" aria-hidden="true"><path fill="currentColor" d="M32 6c1.4 12 9 21 9 34 0 10-4 18-9 22-5-4-9-12-9-22 0-13 7.6-22 9-34z"/><path d="M32 18c.5 8 2.2 15 2.2 22" fill="none" stroke="#F5F8F4" stroke-width="1.7"/></svg>';
}

function parseRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const parts = raw.split("/").filter(Boolean);
  const page = parts[0] || "home";
  const known = ["home", "shop", "booklet", "recipes", "care", "order", "passport", "greenhouse", "story"];
  if (known.indexOf(page) === -1) {
    if (location.hash && location.hash !== "#/" && location.hash !== "#") {
      history.replaceState(null, "", location.pathname + location.search + "#/");
    }
    return { page: "home", id: "" };
  }
  return { page: page, id: safeId(parts[1] || "") };
}

function setMeta(page) {
  const meta = (ui().meta && ui().meta[page]) || ui().meta.home;
  document.title = meta.title;
  document.documentElement.lang = getLang();
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", meta.desc);
}

function renderSkip() {
  return '<a class="skip" href="#main">' + esc(ui().common.skip) + "</a>";
}

function navLinks(route) {
  const items = [
    ["shop", "#/shop", ui().nav.shop],
    ["booklet", "#/booklet", ui().nav.booklet],
    ["care", "#/care", ui().nav.care],
    ["story", "#/story", say("Hikâyemiz", "Our story")]
  ];
  return items.map(function (item) {
    const current = route.page === item[0] ? ' aria-current="page"' : "";
    return '<a href="' + item[1] + '"' + current + ">" + esc(item[2]) + "</a>";
  }).join("");
}

function renderHeader(route) {
  const lang = getLang();
  return '<div class="announcement">'+say('Biraz bitki. Biraz sihir.','A little plant. A little magic.')+'<span aria-hidden="true"> ✳ </span>'+say('Türkiye’de özenle büyütüldü','Grown with care in Türkiye')+'</div><header class="site-head"><div class="wrap head-row">'
    + '<a class="brand" href="#/" aria-label="CYGNUS '+say('Ana sayfa','Home')+'"><span class="brand-star" aria-hidden="true">✳</span><span><strong>CYGNUS</strong><small>LIVING BOTANICALS</small></span></a>'
    + '<nav class="desk-nav">' + navLinks(route) + "</nav>"
    + '<div class="head-tools">'
    + '<div class="lang" role="group" aria-label="Language">'
    + '<button type="button" data-action="lang" data-lang="tr" aria-pressed="' + (lang === "tr") + '">TR</button>'
    + '<button type="button" data-action="lang" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button>'
    + "</div>"
    + '<a class="passport-link" href="#/passport">' + say('Bitkim','My plant') + ' <span aria-hidden="true">↗</span></a>'
    + '<a class="cart-link" href="#/order" aria-label="' + esc(ui().common.cart) + " " + cartCount() + '"><span>' + esc(ui().common.cart) + "</span><b>" + cartCount() + "</b></a>"
    + '<button type="button" class="menu-btn" data-action="menu" aria-expanded="false" aria-controls="site-menu"><span class="menu-bars" aria-hidden="true"></span><span class="sr-only">' + esc(ui().common.menu) + "</span></button>"
    + "</div></div>"
    + '<div class="mobile-nav" id="site-menu" hidden><div class="wrap">' + navLinks(route) + '<a href="#/recipes">'+esc(ui().nav.recipes)+'</a><a href="#/greenhouse">'+say('Sera','The greenhouse')+'</a><a href="#/passport">'+say('Bitki pasaportum','My plant passport')+'</a></div></div></header>';
}

function renderFooter() {
  const f = ui().footer;
  return '<footer class="site-foot"><div class="wrap foot-top">'
    + "<div><p>" + esc(f.blurb) + "</p><nav>" + navLinks(parseRoute()) + '<a href="#/recipes">'+esc(ui().nav.recipes)+'</a><a href="#/greenhouse">'+say('Sera','Greenhouse')+'</a><a href="#/passport">'+say('Pasaportum','My passport')+'</a></nav></div>'
    + "<div><p>" + esc(f.medical) + "</p><p>" + esc(f.pets) + "</p><p class=\"fine\">" + esc(f.year) + "</p></div>"
    + "</div>"
    + '<div class="wordmark wrap"><p>' + esc(f.productOf) + "</p>" + leafSvg()
    + "<strong>CYGNUS</strong><em>LIVING BOTANICALS</em></div>"
    + '<div class="wrap footer-credit">' + say('Bir ', 'An ')
    + '<a href="https://aslanaintelligence.com/">Aslana Intelligence</a>'
    + say(' projesi', ' project') + '</div></footer>';
}

function injectLd() {
  const old = document.getElementById("product-ld");
  if (old) old.remove();
  if (document.body.dataset.page !== "shop") return;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName(),
    brand: { "@type": "Brand", name: "CYGNUS" },
    description: ui().meta.shop.desc,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: String(window.ASLANA_CONFIG.priceTL),
      areaServed: "TR"
    }
  };
  const script = document.createElement("script");
  script.id = "product-ld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function mount(opts) {
  resetPassportDraft();
  const keep = opts && opts.keepScroll;
  const y = keep ? window.scrollY : 0;
  document.body.classList.remove("nav-open");
  const route = parseRoute();
  document.body.dataset.page = route.page;
  setMeta(route.page);
  document.getElementById("app").innerHTML = renderSkip() + renderHeader(route) + '<main id="main">' + renderPage(route) + "</main>" + renderFooter();
  fillOrderForm();
  injectLd();
  if (route.page === "booklet" && route.id) {
    const node = document.getElementById("ch-" + route.id);
    if (node) node.scrollIntoView({ block: "start", behavior: "instant" });
  } else if (keep) {
    window.scrollTo({top:y,left:0,behavior:"instant"});
  } else {
    window.scrollTo({top:0,left:0,behavior:"instant"});
  }
}

function fillOrderForm() {
  const form = getForm();
  Object.keys(form).forEach(function (key) {
    const el = document.getElementById("f-" + key);
    if (el) el.value = form[key] || "";
  });
}

function readOrderForm() {
  const read = function (id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  };
  return {
    name: read("f-name"),
    phone: read("f-phone"),
    city: read("f-city"),
    district: read("f-district"),
    address: read("f-address"),
    note: read("f-note")
  };
}

function saveShopFromDom() {
  const book = document.querySelector('input[name="booklet"]:checked');
  const qty = document.getElementById("shop-qty");
  if (!book) return;
  saveShopChoice({ booklet: book.value, size: 7, qty: qty ? qty.value : 1 });
}

function validateForm(form) {
  const errors = ui().order.errors;
  const list = [];
  if (form.name.trim().length < 2) list.push(errors.name);
  if (form.phone.replace(/\D/g, "").length < 10) list.push(errors.phone);
  if (form.city.trim().length < 2) list.push(errors.city);
  if (form.address.trim().length < 8) list.push(errors.address);
  if (!getCart().length) list.push(errors.cart);
  return list;
}

function buildOrderMessage() {
  const form = getForm();
  const labels = ui().orderMsg;
  const lines = getCart().map(function (line) {
    return [productName(), sizeLabel(line.size), bookletLabel(line.booklet), "x" + clampQty(line.qty), formatTL(linePrice(line))].join(" · ");
  });
  return [
    "CYGNUS",
    productName(),
    labels.no + ": " + ensureOrderNo(),
    "",
    lines.join("\n"),
    "",
    labels.total + ": " + formatTL(cartTotal()),
    labels.ship,
    "",
    labels.name + ": " + form.name.trim(),
    labels.phone + ": " + form.phone.trim(),
    labels.city + ": " + form.city.trim(),
    labels.district + ": " + form.district.trim(),
    labels.address + ": " + form.address.trim(),
    labels.note + ": " + form.note.trim()
  ].join("\n");
}

function toast(message) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = document.createElement("div");
    node.className = "toast";
    node.setAttribute("role", "status");
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(function () { node.classList.remove("show"); }, 2200);
}

function updateCartBadges() {
  document.querySelectorAll(".cart-link b").forEach(function (el) { el.textContent = String(cartCount()); });
  document.querySelectorAll(".cart-link").forEach(function (el) {
    el.setAttribute("aria-label", ui().common.cart + " " + cartCount());
  });
}

function toggleMenu() {
  const open = document.body.classList.toggle("nav-open");
  const panel = document.querySelector(".mobile-nav");
  const btn = document.querySelector(".menu-btn");
  if (panel) panel.hidden = !open;
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  const panel = document.querySelector(".mobile-nav");
  const btn = document.querySelector(".menu-btn");
  if (panel) panel.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function onPrepare() {
  const form = readOrderForm();
  saveForm(form);
  const errors = validateForm(form);
  window.__orderErrors = errors;
  if (errors.length) {
    window.__orderMessage = "";
    mount({ keepScroll: true });
    const box = document.querySelector(".form-errors");
    if (box) box.focus();
    return;
  }
  window.__orderMessage = buildOrderMessage();
  mount({ keepScroll: true });
}

function onCopy() {
  const text = window.__orderMessage || "";
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () { toast(ui().order.copied); }).catch(function () { copyFallback(text); });
    return;
  }
  copyFallback(text);
}

function copyFallback(text) {
  const pre = document.getElementById('order-preview');
  if (pre) {const selection = window.getSelection(), range = document.createRange();range.selectNodeContents(pre);selection.removeAllRanges();selection.addRange(range);}
  toast(say('Otomatik kopyalama kullanılamıyor. Seçili metni elle kopyalayın.','Automatic copy is unavailable. Copy the selected text manually.'));
}

function onWhatsapp() {
  const text = window.__orderMessage || "";
  const number = waNumber();
  if (!text || !number) return;
  window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(text), "_blank", "noopener");
}

function downloadIcs() {
  const start = new Date();
  start.setDate(start.getDate() + 21);
  const stamp = icsDate(new Date());
  const day = localDay(start);
  const summary = getLang() === "en" ? "Aloe vera: water only if the soil is dry" : "Aloe vera: toprak kuruysa sulayın";
  const description = getLang() === "en"
    ? "Check the 7 cm planter. Water only if the soil is dry to the bottom. Empty the saucer."
    : "7 cm saksıyı kontrol edin. Toprak dibine kadar kuruysa sulayın. Altlığı boşaltın.";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CYGNUS//Living Aloe//TR",
    "BEGIN:VEVENT",
    "UID:aloe-" + day + "@cygnus.health",
    "DTSTAMP:" + stamp,
    "DTSTART;VALUE=DATE:" + day,
    "RRULE:FREQ=WEEKLY;INTERVAL=3",
    "SUMMARY:" + summary,
    "DESCRIPTION:" + description,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "aloe-vera-kontrol.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
  toast(ui().carePage.icsDone);
}

function icsDate(date) {
  const pad = function (n) { return String(n).padStart(2, "0"); };
  return date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate()) + "T" + pad(date.getUTCHours()) + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds()) + "Z";
}

function localDay(date) {
  const pad = function (n) { return String(n).padStart(2, "0"); };
  return date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate());
}

function onClick(event) {
  if (event.target.closest('.skip')) {
    event.preventDefault();
    const main=document.getElementById('main');main.tabIndex=-1;main.focus();main.scrollIntoView();return;
  }
  const el = event.target.closest("[data-action]");
  if (!el) {
    if (document.body.classList.contains("nav-open") && !event.target.closest(".site-head")) closeMenu();
    return;
  }
  const action = el.dataset.action;
  if (action === "menu") { toggleMenu(); return; }
  if (action === "lang") {
    setLang(el.dataset.lang);
    window.__orderMessage = "";
    mount();
    return;
  }
  if (action === "shot") {
    window.__shot = el.dataset.src;
    const img = document.getElementById("shot");
    if (img) {
      img.src = el.dataset.src;
      img.alt = el.querySelector("img") ? el.querySelector("img").alt : img.alt;
    }
    document.querySelectorAll(".thumb").forEach(function (btn) { btn.classList.toggle("on", btn === el); });
    return;
  }
  if (action === "shop-qty") {
    const input = document.getElementById("shop-qty");
    if (!input) return;
    input.value = String(clampQty(Number(input.value) + Number(el.dataset.dir)));
    saveShopFromDom();
    return;
  }
  if (action === "add-cart") {
    saveShopFromDom();
    addToCart(getShopChoice());
    toast(ui().shop.added);
    updateCartBadges();
    return;
  }
  if (action === "qty") {
    updateQty(el.dataset.key, el.dataset.next);
    mount({ keepScroll: true });
    return;
  }
  if (action === "remove") {
    removeLine(el.dataset.key);
    mount({ keepScroll: true });
    return;
  }
  if (action === "fav") {
    toggleFav(el.dataset.id);
    mount({ keepScroll: true });
    return;
  }
  if (action === "filter") {
    setRecipeFilter(el.dataset.filter);
    mount({ keepScroll: true });
    return;
  }
  if (action === "gel") {
    setGelLimit(Number(el.dataset.gel));
    mount({ keepScroll: true });
    return;
  }
  if (action === "week") {
    const week = getWeek();
    week[el.dataset.id] = !week[el.dataset.id];
    writeJson("aslana-week", week);
    mount({ keepScroll: true });
    return;
  }
  if (action === "check") {
    const checks = getChecks();
    checks[el.dataset.id] = !checks[el.dataset.id];
    writeJson("aslana-checks", checks);
    mount({ keepScroll: true });
    return;
  }
  if (action === "city") {
    writeRaw("aslana-city", el.dataset.id);
    mount({ keepScroll: true });
    return;
  }
  if (action === "symptom") {
    writeRaw("aslana-symptom", el.dataset.id);
    mount({ keepScroll: true });
    return;
  }
  if (action === "ics") { downloadIcs(); return; }
  if (action === "copy") { onCopy(); return; }
  if (action === "whatsapp") { onWhatsapp(); return; }
  if (action === "print") { window.print(); return; }
}

function onInput(event) {
  if (event.target.id === "recipe-search") {
    setSearch(event.target.value);
    const grid = document.getElementById("recipe-grid");
    if (grid) grid.innerHTML = recipeCards();
    return;
  }
  if (event.target.closest && event.target.closest("#order-form")) {
    saveForm(readOrderForm());
    window.__orderMessage='';
    const preview=document.querySelector('.preview');if(preview)preview.remove();
  }
}

function onChange(event) {
  if (event.target.closest && event.target.closest("#buy-box")) saveShopFromDom();
}

function onSubmit(event) {
  if (event.target.id !== "order-form") return;
  event.preventDefault();
  onPrepare();
}

let wired = false;
function start() {
  applyQueryLang();
  mount();
  if (wired) return;
  wired = true;
  document.addEventListener("click", onClick);
  document.addEventListener("input", onInput);
  document.addEventListener("change", onChange);
  document.addEventListener("submit", onSubmit);
  window.addEventListener("hashchange", function () { mount(); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("error", function (event) {
    if (event.target && event.target.tagName === "IMG") {
      const fig = event.target.closest("figure");
      if (fig) fig.classList.add("missing");
    }
  }, true);
}
start();
