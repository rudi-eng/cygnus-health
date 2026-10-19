function icon(name) {
  const paths = {
    leaf: '<path fill="currentColor" d="M16 3c.7 6 4.4 11 4.4 17.2C20.4 26 18.4 29 16 31c-2.4-2-4.4-5-4.4-10.8C11.6 14 15.3 9 16 3z"/>',
    book: '<path fill="none" stroke="currentColor" stroke-width="1.6" d="M7 8h7.2A3.3 3.3 0 0 1 17.5 11.3V24H9.2A2.2 2.2 0 0 0 7 26.2V8zm18 0h-7.2A3.3 3.3 0 0 0 14.5 11.3V24h8.3A2.2 2.2 0 0 1 25 26.2V8z"/>',
    drop: '<path fill="currentColor" d="M16 4s6.5 7.5 6.5 12.2a6.5 6.5 0 0 1-13 0C9.5 11.5 16 4 16 4z"/>'
  };
  return '<svg class="ico" viewBox="0 0 32 32" aria-hidden="true">' + (paths[name] || paths.leaf) + "</svg>";
}

function paras(list) {
  return list.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
}

function ol(list) {
  return "<ol>" + list.map(function (step) { return "<li>" + esc(step) + "</li>"; }).join("") + "</ol>";
}

function callout(text) {
  return '<aside class="callout">' + icon("leaf") + "<p>" + esc(text) + "</p></aside>";
}

function renderPage(route) {
  if (route.page === "shop") return renderShop();
  if (route.page === "booklet") return renderBooklet(route);
  if (route.page === "recipes") return renderRecipes(route);
  if (route.page === "care") return renderCare();
  if (route.page === "order") return renderOrder();
  return renderHome();
}

function renderHome() {
  const h = ui().home;
  const price = formatTL(window.ASLANA_CONFIG.priceTL);
  const facts = h.facts.map(function (fact, index) {
    const lead = index === 0 ? "<b>" + esc(price) + "</b>" : "<b>0" + (index + 1) + "</b>";
    return '<article class="fact">' + lead + "<h3>" + esc(fact.t) + "</h3><p>" + esc(fact.d) + "</p></article>";
  }).join("");
  const box = h.box.map(function (item, index) {
    const glyph = ["leaf", "drop", "book"][index] || "leaf";
    return '<article class="card">' + icon(glyph) + "<h3>" + esc(item.t) + "</h3><p>" + esc(item.d) + "</p></article>";
  }).join("");
  const uses = h.uses.map(function (item) {
    return '<article class="card quiet"><h3>' + esc(item.t) + "</h3><p>" + esc(item.d) + "</p></article>";
  }).join("");
  const paths = h.paths.map(function (item, index) {
    return '<a class="path" href="' + item.href + '"><span>0' + (index + 1) + "</span><h3>" + esc(item.h) + "</h3><p>" + esc(item.d) + "</p></a>";
  }).join("");
  return ''
    + '<section class="hero wrap">'
    + '<div class="hero-copy">'
    + '<p class="kicker">' + esc(h.kicker) + "</p>"
    + "<h1>" + esc(h.h1) + "</h1>"
    + '<p class="lede">' + esc(h.lede) + "</p>"
    + '<div class="hero-actions"><a class="btn" href="#/shop">' + esc(h.ctaShop) + '</a><a class="btn ghost" href="#/booklet">' + esc(h.ctaBook) + "</a></div>"
    + '<p class="price-line"><strong>' + esc(price) + "</strong><span>" + esc(h.priceNote) + "</span></p>"
    + "</div>"
    + '<figure class="hero-fig"><img src="assets/hero.jpg" alt="' + esc(ui().alts.hero) + '" width="900" height="1200"><figcaption>' + esc(ui().shop.photo) + "</figcaption></figure>"
    + "</section>"
    + '<section class="band wrap">' + facts + "</section>"
    + '<section class="wrap block"><p class="kicker">01</p><h2>' + esc(h.boxTitle) + '</h2><p class="lede">' + esc(h.boxLede) + '</p><div class="cards three">' + box + "</div></section>"
    + '<section class="wrap block"><h2>' + esc(h.useTitle) + '</h2><div class="cards three">' + uses + "</div></section>"
    + '<section class="wrap block"><h2>' + esc(h.pathTitle) + '</h2><div class="paths">' + paths + "</div></section>"
    + '<section class="wrap block">' + callout(h.safetyTitle + " " + h.safety) + "</section>";
}

function renderShop() {
  const s = ui().shop;
  const choice = getShopChoice();
  const shot = window.__shot || "assets/hero.jpg";
  const shots = [
    ["assets/hero.jpg", ui().alts.hero],
    ["assets/booklet.jpg", ui().alts.booklet],
    ["assets/window.jpg", ui().alts.window]
  ];
  const thumbs = shots.map(function (item) {
    const on = item[0] === shot ? " on" : "";
    return '<button type="button" class="thumb' + on + '" data-action="shot" data-src="' + item[0] + '"><img src="' + item[0] + '" alt="' + esc(item[1]) + '"></button>';
  }).join("");
  const sizes = [7, 9].map(function (cm) {
    const checked = choice.size === cm ? " checked" : "";
    const title = cm === 7 ? s.size7 : s.size9;
    const desc = cm === 7 ? s.size7d : s.size9d;
    return '<label class="size-card"><input type="radio" name="size" value="' + cm + '"' + checked + "><span><strong>" + esc(title) + "</strong><small>" + esc(desc) + "</small></span></label>";
  }).join("");
  const books = ["tr", "en", "both"].map(function (code) {
    const checked = choice.booklet === code ? " checked" : "";
    return '<label class="size-card"><input type="radio" name="booklet" value="' + code + '"' + checked + "><span>" + esc(bookletLabel(code)) + "</span></label>";
  }).join("");
  const includes = s.includes.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const faqs = s.faqs.map(function (item) {
    return "<details><summary>" + esc(item.q) + "</summary><p>" + esc(item.a) + "</p></details>";
  }).join("");
  const alt = (shots.find(function (item) { return item[0] === shot; }) || shots[0])[1];
  return ''
    + '<section class="product wrap">'
    + '<div class="gallery"><figure><img id="shot" src="' + shot + '" alt="' + esc(alt) + '" width="900" height="1200"></figure><div class="thumbs">' + thumbs + "</div><p class=\"fine\">" + esc(s.photo) + "</p></div>"
    + '<div class="buy" id="buy-box">'
    + '<p class="kicker">' + esc(s.kicker) + "</p>"
    + "<h1>" + esc(productName()) + "</h1>"
    + '<p class="lede">' + esc(s.lede) + "</p>"
    + '<p class="price-lg">' + esc(formatTL(window.ASLANA_CONFIG.priceTL)) + "</p>"
    + callout(ui().smallCallout)
    + "<h2>" + esc(s.sizeTitle) + '</h2><div class="choice">' + sizes + "</div>"
    + "<h2>" + esc(s.bookTitle) + '</h2><div class="choice">' + books + "</div>"
    + '<div class="qty-block"><span>' + esc(s.qty) + '</span><div class="qty-row"><button type="button" data-action="shop-qty" data-dir="-1" aria-label="-">−</button><input id="shop-qty" inputmode="numeric" value="' + choice.qty + '"><button type="button" data-action="shop-qty" data-dir="1" aria-label="+">+</button></div></div>'
    + '<button type="button" class="btn wide" data-action="add-cart">' + esc(s.add) + "</button>"
    + "<p class=\"fine\">" + esc(s.ship) + "</p>"
    + "</div></section>"
    + '<section class="wrap block"><h2>' + esc(s.includesTitle) + "</h2><ul class=\"spec\">" + includes + "</ul></section>"
    + '<section class="wrap block"><h2>' + esc(s.faqTitle) + '</h2><div class="faq">' + faqs + "</div></section>";
}

function renderBooklet(route) {
  const b = ui().bookletPage;
  const nav = window.CHAPTERS.map(function (ch) {
    const current = route.id === ch.id ? ' aria-current="true"' : "";
    return '<a href="#/booklet/' + ch.id + '"' + current + ">" + esc(tx(ch.title)) + "</a>";
  }).join("");
  const chapters = window.CHAPTERS.map(function (ch, index) {
    const fig = ch.figure === "gel"
      ? '<figure class="inline-fig"><img src="assets/gel.jpg" alt="' + esc(ui().alts.gel) + '" width="900" height="1200"></figure>'
      : "";
    const link = ch.link === "recipes"
      ? '<a class="text-link" href="#/recipes">' + esc(ui().nav.recipes) + "</a>"
      : ch.link === "care"
        ? '<a class="text-link" href="#/care">' + esc(ui().nav.care) + "</a>"
        : "";
    const sources = ch.id === "sources" ? renderSources() : "";
    const steps = txList(ch.steps);
    return '<article class="chapter" id="ch-' + ch.id + '"><p class="kicker">0' + (index + 1) + "</p><h2>" + esc(tx(ch.title)) + "</h2>" + paras(txList(ch.paras)) + (steps.length ? ol(steps) : "") + fig + link + sources + "</article>";
  }).join("");
  return ''
    + '<section class="wrap page-head"><p class="kicker">' + esc(b.kicker) + "</p><h1>" + esc(ui().nav.booklet) + '</h1><p class="lede">' + esc(b.lede) + "</p>" + callout(ui().smallCallout) + '<aside class="disclaimer">' + esc(b.disclaimer) + "</aside></section>"
    + '<div class="book wrap"><nav class="ch-nav no-print">' + nav + "</nav><div>" + chapters + '<p class="fine">' + esc(ui().common.updated) + "</p></div></div>";
}

function renderSources() {
  const items = window.SOURCES.map(function (src) {
    return '<li><a href="' + esc(src.url) + '" target="_blank" rel="noopener noreferrer">' + esc(src.title) + "</a><span>" + esc(tx(src.note)) + "</span></li>";
  }).join("");
  return '<ul class="sources">' + items + "</ul>";
}

function visibleRecipes() {
  const q = getSearch().trim().toLocaleLowerCase("tr");
  const cat = getRecipeFilter();
  const gel = getGelLimit();
  return window.RECIPES.filter(function (recipe) {
    if (cat === "saved" && !isFav(recipe.id)) return false;
    if (cat !== "all" && cat !== "saved" && recipe.cat !== cat) return false;
    if (recipe.gelTsp > gel) return false;
    if (!q) return true;
    const blob = [tx(recipe.title), tx(recipe.summary), txList(recipe.steps).join(" ")].join(" ").toLocaleLowerCase("tr");
    return blob.indexOf(q) !== -1;
  });
}

function recipeCards() {
  const list = visibleRecipes();
  if (!list.length) return '<p class="empty">' + esc(ui().recipesPage.empty) + "</p>";
  return list.map(function (recipe) {
    const saved = isFav(recipe.id);
    return '<article class="recipe-card"><a href="#/recipes/' + recipe.id + '"><p class="kicker">' + esc(catLabel(recipe.cat)) + " · " + recipe.minutes + " " + esc(ui().common.minutes) + "</p><h3>" + esc(tx(recipe.title)) + "</h3><p>" + esc(tx(recipe.summary)) + "</p></a><button type=\"button\" data-action=\"fav\" data-id=\"" + recipe.id + "\" aria-pressed=\"" + saved + "\">" + esc(saved ? ui().recipesPage.favOn : ui().recipesPage.fav) + "</button></article>";
  }).join("");
}

function renderRecipes(route) {
  const recipe = route.id ? window.RECIPES.find(function (item) { return item.id === route.id; }) : null;
  if (recipe) return renderRecipeDetail(recipe);
  const r = ui().recipesPage;
  const filters = ["all", "method", "skin", "hair", "home", "saved"].map(function (cat) {
    const on = getRecipeFilter() === cat ? ' aria-pressed="true"' : ' aria-pressed="false"';
    return '<button type="button" data-action="filter" data-filter="' + cat + '"' + on + ">" + esc(catLabel(cat)) + "</button>";
  }).join("");
  const gels = [1, 3, 6].map(function (amount) {
    const on = getGelLimit() === amount ? ' aria-pressed="true"' : ' aria-pressed="false"';
    const label = amount === 1 ? r.gel1 : amount === 3 ? r.gel3 : r.gel6;
    return '<button type="button" data-action="gel" data-gel="' + amount + '"' + on + ">" + esc(label) + "</button>";
  }).join("");
  const hidden = getGelLimit() < 6 ? '<p class="fine">' + esc(r.hidden) + "</p>" : "";
  return ''
    + '<section class="wrap page-head"><p class="kicker">' + esc(r.kicker) + "</p><h1>" + esc(ui().nav.recipes) + '</h1><p class="lede">' + esc(r.lede) + "</p>" + callout(ui().smallCallout) + "</section>"
    + '<section class="wrap no-print"><div class="filters" role="toolbar">' + filters + "</div>"
    + '<label class="search"><span>' + esc(r.search) + '</span><input id="recipe-search" type="search" value="' + esc(getSearch()) + '"></label>'
    + "<h2>" + esc(r.gelTitle) + '</h2><div class="filters">' + gels + "</div><p class=\"fine\">" + esc(r.gelHelp) + "</p>" + hidden + "</section>"
    + '<section class="wrap cards recipes" id="recipe-grid">' + recipeCards() + "</section>";
}

function renderRecipeDetail(recipe) {
  const saved = isFav(recipe.id);
  return ''
    + '<article class="wrap recipe-detail">'
    + '<a class="text-link no-print" href="#/recipes">' + esc(ui().common.back) + "</a>"
    + '<p class="kicker">' + esc(catLabel(recipe.cat)) + "</p>"
    + "<h1>" + esc(tx(recipe.title)) + "</h1>"
    + "<p class=\"lede\">" + esc(tx(recipe.summary)) + "</p>"
    + '<dl class="meta"><div><dt>' + esc(ui().common.minutes) + "</dt><dd>" + recipe.minutes + "</dd></div><div><dt>" + esc(ui().recipesPage.gelNeed) + "</dt><dd>" + esc(tx(recipe.gel)) + "</dd></div></dl>"
    + "<h2>" + esc(ui().common.steps) + "</h2>" + ol(txList(recipe.steps))
    + '<aside class="disclaimer">' + esc(ui().common.caution) + ". " + esc(tx(recipe.caution)) + "</aside>"
    + '<div class="hero-actions no-print"><button type="button" class="btn ghost" data-action="fav" data-id="' + recipe.id + '">' + esc(saved ? ui().recipesPage.favOn : ui().recipesPage.fav) + '</button><button type="button" class="btn" data-action="print">' + esc(ui().common.print) + "</button></div>"
    + "</article>";
}

function renderCare() {
  const c = ui().carePage;
  const weekState = getWeek();
  const weekDone = window.WEEK.filter(function (item) { return weekState[item.id]; }).length;
  const week = window.WEEK.map(function (item) {
    const on = weekState[item.id] ? ' aria-pressed="true"' : ' aria-pressed="false"';
    return '<button type="button" class="check" data-action="week" data-id="' + item.id + '"' + on + ">" + esc(tx(item)) + "</button>";
  }).join("");
  const seasons = c.seasons.map(function (item) {
    return '<article class="card quiet"><h3>' + esc(item.t) + "</h3><p>" + esc(item.d) + "</p></article>";
  }).join("");
  const cityId = readRaw("aslana-city") || "";
  const cities = window.CITIES.map(function (city) {
    const on = cityId === city.id ? ' aria-pressed="true"' : ' aria-pressed="false"';
    return '<button type="button" data-action="city" data-id="' + city.id + '"' + on + ">" + esc(city.name) + "</button>";
  }).join("");
  const city = window.CITIES.find(function (item) { return item.id === cityId; });
  const cityText = city ? tx(city.body) : c.cityPrompt;
  const symId = readRaw("aslana-symptom") || "";
  const symptoms = window.SYMPTOMS.map(function (item) {
    const on = symId === item.id ? ' aria-pressed="true"' : ' aria-pressed="false"';
    return '<button type="button" data-action="symptom" data-id="' + item.id + '"' + on + ">" + esc(tx(item.title)) + "</button>";
  }).join("");
  const symptom = window.SYMPTOMS.find(function (item) { return item.id === symId; });
  const symText = symptom ? tx(symptom.body) : c.symPrompt;
  const checksState = getChecks();
  const checks = window.CHECKS.map(function (item) {
    const on = checksState[item.id] ? ' aria-pressed="true"' : ' aria-pressed="false"';
    return '<button type="button" class="check" data-action="check" data-id="' + item.id + '"' + on + ">" + esc(tx(item)) + "</button>";
  }).join("");
  const ready = window.CHECKS.every(function (item) { return checksState[item.id]; });
  return ''
    + '<section class="wrap page-head"><p class="kicker">' + esc(c.kicker) + "</p><h1>" + esc(ui().nav.care) + '</h1><p class="lede">' + esc(c.lede) + "</p>" + callout(ui().smallCallout) + "</section>"
    + '<section class="wrap block"><div class="split-title"><h2>' + esc(c.weekTitle) + "</h2><b>" + weekDone + " / " + window.WEEK.length + '</b></div><p>' + esc(c.weekLede) + '</p><div class="stack">' + week + "</div></section>"
    + '<section class="wrap cards two"><article class="card"><h2>' + esc(c.waterTitle) + "</h2>" + ol(c.waterSteps) + '</article><article class="card"><h2>' + esc(c.lightTitle) + "</h2><p>" + esc(c.light) + "</p><h2>" + esc(c.tempTitle) + "</h2><p>" + esc(c.temp) + "</p></article></section>"
    + '<section class="wrap block"><h2>' + esc(c.seasonTitle) + '</h2><div class="cards">' + seasons + "</div></section>"
    + '<section class="wrap block"><h2>' + esc(c.cityTitle) + "</h2><p>" + esc(c.cityLede) + '</p><div class="filters">' + cities + '</div><div class="result" aria-live="polite"><p>' + esc(cityText) + "</p></div></section>"
    + '<section class="wrap block"><h2>' + esc(c.symTitle) + '</h2><div class="stack">' + symptoms + '</div><div class="result" aria-live="polite"><p>' + esc(symText) + "</p></div></section>"
    + '<section class="wrap block"><h2>' + esc(c.readyTitle) + "</h2><p>" + esc(c.readyLede) + '</p><div class="stack">' + checks + '</div><aside class="disclaimer">' + esc(ready ? c.readyYes : c.readyNo) + "</aside>"
    + '<button type="button" class="btn" data-action="ics">' + esc(c.ics) + "</button></section>"
    + '<section class="wrap block"><h2>' + esc(c.repotTitle) + "</h2><p>" + esc(c.repot) + "</p></section>";
}

function renderOrder() {
  const o = ui().order;
  const cart = getCart();
  if (cart.length) ensureOrderNo();
  const lines = cart.map(function (line) {
    const key = cartKey(line);
    const qty = clampQty(line.qty);
    return '<article class="line"><div><h3>' + esc(productName()) + "</h3><p>" + esc(sizeLabel(line.size)) + " · " + esc(bookletLabel(line.booklet)) + "</p></div><div class=\"qty-row\"><button type=\"button\" data-action=\"qty\" data-key=\"" + esc(key) + "\" data-next=\"" + (qty - 1) + "\"" + (qty <= 1 ? " disabled" : "") + ">−</button><span>" + qty + "</span><button type=\"button\" data-action=\"qty\" data-key=\"" + esc(key) + "\" data-next=\"" + (qty + 1) + "\"" + (qty >= 9 ? " disabled" : "") + ">+</button></div><strong>" + esc(formatTL(linePrice(line))) + '</strong><button type="button" class="text-link" data-action="remove" data-key="' + esc(key) + '">' + esc(o.remove) + "</button></article>";
  }).join("");
  const errors = (window.__orderErrors || []).map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const message = window.__orderMessage || "";
  const preview = message
    ? '<section class="preview"><h2>' + esc(o.preview) + "</h2><pre id=\"order-preview\">" + esc(message) + "</pre><div class=\"hero-actions\"><button type=\"button\" class=\"btn\" data-action=\"copy\">" + esc(o.copy) + "</button>" + (waNumber() ? '<button type="button" class="btn ghost" data-action="whatsapp">' + esc(o.whatsapp) + "</button>" : "<p class=\"fine\">" + esc(o.noNumber) + "</p>") + "</div></section>"
    : "";
  const body = cart.length
    ? '<div class="lines">' + lines + '</div><aside class="summary"><h2>' + esc(o.summary) + "</h2><p><span>" + esc(ui().orderMsg.no) + "</span><strong>" + esc(readRaw("aslana-order-no") || "") + "</strong></p><p><span>" + esc(ui().orderMsg.total) + "</span><strong>" + esc(formatTL(cartTotal())) + "</strong></p><p class=\"fine\">" + esc(o.ship) + " " + esc(o.pay) + "</p></aside>"
      + '<form id="order-form"><h2>' + esc(o.formTitle) + "</h2>"
      + '<div class="form-errors" tabindex="-1">' + (errors ? "<ul>" + errors + "</ul>" : "") + "</div>"
      + field("f-name", o.name, "text", "name")
      + field("f-phone", o.phone, "tel", "tel")
      + '<div class="pair">' + field("f-city", o.city, "text", "address-level2") + field("f-district", o.district, "text", "address-level3") + "</div>"
      + '<label>' + esc(o.address) + '<textarea id="f-address" autocomplete="street-address" rows="3"></textarea></label>'
      + '<label>' + esc(o.note) + '<textarea id="f-note" rows="2"></textarea></label>'
      + '<button class="btn wide" type="submit">' + esc(o.prepare) + "</button></form>"
      + preview
    : '<div class="empty-cart"><p>' + esc(o.empty) + '</p><a class="btn" href="#/shop">' + esc(o.browse) + "</a></div>";
  return '<section class="wrap page-head"><p class="kicker">' + esc(o.kicker) + "</p><h1>" + esc(ui().common.cart) + '</h1><p class="lede">' + esc(o.lede) + '</p></section><section class="wrap order-grid">' + body + "</section>";
}

function field(id, label, type, auto) {
  return '<label>' + esc(label) + '<input id="' + id + '" type="' + type + '" autocomplete="' + auto + '"></label>';
}
