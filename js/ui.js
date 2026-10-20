function leafSvg() {
  return '<svg class="leaf" viewBox="0 0 64 64" aria-hidden="true"><path fill="currentColor" d="M32 6c1.4 12 9 21 9 34 0 10-4 18-9 22-5-4-9-12-9-22 0-13 7.6-22 9-34z"/><path d="M32 18c.5 8 2.2 15 2.2 22" fill="none" stroke="#F5F8F4" stroke-width="1.7"/></svg>';
}

function parseRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const parts = raw.split("/").filter(Boolean);
  const page = parts[0] || "home";
  const known = ["home", "shop", "booklet", "recipes", "care", "order"];
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
    ["recipes", "#/recipes", ui().nav.recipes],
    ["care", "#/care", ui().nav.care]
  ];
  return items.map(function (item) {
    const current = route.page === item[0] ? ' aria-current="page"' : "";
    return '<a href="' + item[1] + '"' + current + ">" + esc(item[2]) + "</a>";
  }).join("");
}

function renderHeader(route) {
  const lang = getLang();
  return '<header class="site-head"><div class="wrap head-row">'
    + '<a class="brand" href="#/">' + leafSvg() + "<span><strong>Aloe</strong><small>Set</small></span></a>"
    + '<nav class="desk-nav">' + navLinks(route) + "</nav>"
    + '<div class="head-tools">'
    + '<div class="lang" role="group" aria-label="Language">'
    + '<button type="button" data-action="lang" data-lang="tr" aria-pressed="' + (lang === "tr") + '">TR</button>'
    + '<button type="button" data-action="lang" data-lang="en" aria-pressed="' + (lang === "en") + '">EN</button>'
    + "</div>"
    + '<a class="cart-link" href="#/order" aria-label="' + esc(ui().common.cart) + " " + cartCount() + '"><span>' + esc(ui().common.cart) + "</span><b>" + cartCount() + "</b></a>"
    + '<button type="button" class="menu-btn" data-action="menu" aria-expanded="false" aria-controls="site-menu"><span class="menu-bars" aria-hidden="true"></span><span class="sr-only">' + esc(ui().common.menu) + "</span></button>"
    + "</div></div>"
    + '<div class="mobile-nav" id="site-menu" hidden><div class="wrap">' + navLinks(route) + "</div></div></header>";
}

function renderFooter() {
  const f = ui().footer;
  return '<footer class="site-foot"><div class="wrap foot-top">'
    + "<div><p>" + esc(f.blurb) + "</p><nav>" + navLinks(parseRoute()) + '<a href="#/order">' + esc(ui().common.cart) + "</a></nav></div>"
    + "<div><p>" + esc(f.medical) + "</p><p>" + esc(f.pets) + "</p><p class=\"fine\">" + esc(f.year) + "</p></div>"
    + "</div>"
    + '<div class="wordmark wrap"><p>' + esc(f.productOf) + "</p>" + leafSvg()
    + "<strong>Aslana</strong><em>Intelligence</em></div></footer>";
}

function injectLd() {
  const old = document.getElementById("product-ld");
  if (old) old.remove();
  if (document.body.dataset.page !== "shop") return;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName(),
    brand: { "@type": "Brand", name: "Aslana Intelligence" },
    description: ui().meta.shop.desc,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: String(window.ASLANA_CONFIG.priceTL),
      availability: "https://schema.org/InStock",
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
  const keep = opts && opts.keepScroll;
  const y = keep ? window.scrollY : 0;
  document.body.classList.remove("nav-open");
  const route = parseRoute();
  document.body.dataset.page = route.page;
  setMeta(route.page);
  document.getElementById("app").innerHTML = renderSkip() + renderHeader(route) + '<main id="main">' + renderPage(route) + "</main>" + renderFooter();
  fillOrderForm();
  injectLd();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (route.page === "booklet" && route.id) {
    const node = document.getElementById("ch-" + route.id);
    if (node) node.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "auto" });
  } else if (keep) {
    window.scrollTo(0, y);
  } else {
    window.scrollTo(0, 0);
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
    "Aslana Intelligence",
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
    navigator.clipboard.writeText(text).then(function () { toast(ui().order.copied); }).catch(function () { toast(ui().order.copied); });
    return;
  }
  toast(ui().order.copied);
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
    "PRODID:-//Aslana Intelligence//Aloe Set//TR",
    "BEGIN:VEVENT",
    "UID:aloe-" + day + "@aslana.local",
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

function keyPaths(obj, prefix, acc) {
  Object.keys(obj).sort().forEach(function (key) {
    const path = prefix ? prefix + "." + key : key;
    const val = obj[key];
    if (val && typeof val === "object" && !Array.isArray(val)) keyPaths(val, path, acc);
    else acc.push(path);
  });
  return acc;
}

function runSelfTest() {
  if (new URLSearchParams(location.search).get("selftest") !== "1") return;
  const checks = [];
  try { localStorage.clear(); } catch (err) { checks.push("storage blocked"); }
  setLang("tr");
  addToCart({ booklet: "tr", size: 7, qty: 1 });
  addToCart({ booklet: "tr", size: 7, qty: 1 });
  addToCart({ booklet: "en", size: 9, qty: 2 });
  checks.push(cartCount() === 4 ? "count ok" : "count " + cartCount());
  checks.push(getCart().length === 2 ? "lines ok" : "lines " + getCart().length);
  checks.push(cartTotal() === 1600 ? "total ok" : "total " + cartTotal());
  checks.push(window.RECIPES.length === 12 ? "recipes ok" : "recipes " + window.RECIPES.length);
  const trKeys = keyPaths(window.COPY.tr, "", []);
  const enKeys = keyPaths(window.COPY.en, "", []);
  const drift = trKeys.filter(function (key) { return enKeys.indexOf(key) === -1; })
    .concat(enKeys.filter(function (key) { return trKeys.indexOf(key) === -1; }));
  checks.push(drift.length ? "keys " + drift.join(",") : "keys ok");
  const errors = validateForm({ name: "A", phone: "123", city: "", address: "kisa", note: "" });
  checks.push(errors.length === 4 ? "errors ok" : "errors " + errors.length);
  saveForm({ name: "Ada Yilmaz", phone: "05551112233", city: "Izmir", district: "Konak", address: "Kisa sokak 12", note: "kapida" });
  const message = buildOrderMessage();
  checks.push(message.indexOf("7 cm") !== -1 && message.indexOf("9 cm") === -1 ? "sizes ok" : "sizes missing");
  checks.push(message.indexOf("ASL-") !== -1 ? "order ok" : "order missing");
  checks.push(message.indexOf("1.600 TL") !== -1 ? "money ok" : "money " + message.split("\n").filter(function (line) { return line.indexOf("TL") !== -1; }).join(" | "));
  setLang("en");
  checks.push(sizeLabel(7) === "7 cm planter" ? "en size ok" : sizeLabel(7));
  checks.push(productName() === "Aloe Vera Planter Set" ? "en name ok" : productName());
  const root = document.documentElement;
  checks.push("scroll " + root.scrollWidth + " client " + root.clientWidth);
  let wide = 0;
  let wideName = "";
  document.querySelectorAll("body *").forEach(function (el) {
    const rect = el.getBoundingClientRect();
    if (rect.width > wide) {
      wide = rect.width;
      wideName = (el.className && String(el.className).slice(0, 40)) || el.tagName;
    }
  });
  checks.push("widest " + Math.round(wide) + " " + wideName);
  const node = document.createElement("pre");
  node.id = "selftest";
  node.textContent = checks.join("\n");
  document.body.insertBefore(node, document.body.firstChild);
}

function onClick(event) {
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
  if (event.target.closest && event.target.closest("#order-form")) saveForm(readOrderForm());
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
  runSelfTest();
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
