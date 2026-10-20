function memoryStore() {
  if (!window.__mem) window.__mem = {};
  return window.__mem;
}

function readRaw(key) {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    return Object.prototype.hasOwnProperty.call(memoryStore(), key) ? memoryStore()[key] : null;
  }
}

function writeRaw(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    memoryStore()[key] = value;
  }
}

function readJson(key, fallback) {
  const raw = readRaw(key);
  if (raw == null || raw === "") return fallback;
  try {
    return JSON.parse(raw);
  } catch (err) {
    return fallback;
  }
}

function writeJson(key, value) {
  writeRaw(key, JSON.stringify(value));
}

function applyQueryLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "tr" || q === "en") writeRaw("aslana-lang", q);
}

function getLang() {
  return readRaw("aslana-lang") === "en" ? "en" : "tr";
}

function setLang(lang) {
  writeRaw("aslana-lang", lang === "en" ? "en" : "tr");
}

function normalizeSize() {
  return 7;
}

function normalizeBooklet(value) {
  return value === "en" || value === "both" ? value : "tr";
}

function clampQty(value) {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.min(9, n));
}

function cartKey(item) {
  return normalizeBooklet(item.booklet) + "|" + normalizeSize(item.size);
}

function getCart() {
  const cart = readJson("aslana-cart", []);
  if (!Array.isArray(cart)) return [];
  const merged = [];
  cart.forEach(function (line) {
    const item = {
      booklet: normalizeBooklet(line.booklet),
      size: normalizeSize(line.size),
      qty: clampQty(line.qty)
    };
    const found = merged.find(function (row) { return cartKey(row) === cartKey(item); });
    if (found) found.qty = clampQty(found.qty + item.qty);
    else merged.push(item);
  });
  return merged;
}

function setCart(cart) {
  writeJson("aslana-cart", cart);
  writeRaw("aslana-order-stamp", "");
  window.__orderMessage = "";
  window.__orderErrors = [];
}

function addToCart(partial) {
  const item = {
    booklet: normalizeBooklet(partial.booklet),
    size: normalizeSize(partial.size),
    qty: clampQty(partial.qty)
  };
  const cart = getCart();
  const key = cartKey(item);
  const found = cart.find(function (line) { return cartKey(line) === key; });
  if (found) found.qty = clampQty(found.qty + item.qty);
  else cart.push(item);
  setCart(cart);
}

function updateQty(key, qty) {
  setCart(getCart().map(function (line) {
    if (cartKey(line) !== key) return line;
    return { booklet: line.booklet, size: line.size, qty: clampQty(qty) };
  }));
}

function removeLine(key) {
  setCart(getCart().filter(function (line) { return cartKey(line) !== key; }));
}

function cartCount() {
  return getCart().reduce(function (sum, line) { return sum + clampQty(line.qty); }, 0);
}

function linePrice(line) {
  return window.ASLANA_CONFIG.priceTL * clampQty(line.qty);
}

function cartTotal() {
  return getCart().reduce(function (sum, line) { return sum + linePrice(line); }, 0);
}

function getFavs() {
  const favs = readJson("aslana-favs", []);
  return Array.isArray(favs) ? favs : [];
}

function toggleFav(id) {
  const favs = getFavs();
  const next = favs.indexOf(id) === -1 ? favs.concat(id) : favs.filter(function (item) { return item !== id; });
  writeJson("aslana-favs", next);
}

function isFav(id) {
  return getFavs().indexOf(id) !== -1;
}

function blankForm() {
  return { name: "", phone: "", city: "", district: "", address: "", note: "" };
}

function getForm() {
  const form = readJson("aslana-form", null);
  if (!form || typeof form !== "object") return blankForm();
  return Object.assign(blankForm(), form);
}

function saveForm(form) {
  writeJson("aslana-form", {
    name: String(form.name || "").slice(0, 80),
    phone: String(form.phone || "").slice(0, 30),
    city: String(form.city || "").slice(0, 40),
    district: String(form.district || "").slice(0, 40),
    address: String(form.address || "").slice(0, 240),
    note: String(form.note || "").slice(0, 240)
  });
}

function getShopChoice() {
  const saved = readJson("aslana-shop", null);
  const fallbackBook = getLang() === "en" ? "en" : "tr";
  if (!saved || typeof saved !== "object") return { booklet: fallbackBook, size: 7, qty: 1 };
  return {
    booklet: normalizeBooklet(saved.booklet || fallbackBook),
    size: normalizeSize(saved.size),
    qty: clampQty(saved.qty)
  };
}

function saveShopChoice(choice) {
  writeJson("aslana-shop", {
    booklet: normalizeBooklet(choice.booklet),
    size: normalizeSize(choice.size),
    qty: clampQty(choice.qty)
  });
}

function makeOrderNo() {
  const d = new Date();
  const pad = function (n) { return String(n).padStart(2, "0"); };
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let tail = "";
  for (let i = 0; i < 4; i += 1) tail += alphabet[Math.floor(Math.random() * alphabet.length)];
  return "ASL-" + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" + tail;
}

function ensureOrderNo() {
  const stamp = JSON.stringify(getCart());
  const saved = readRaw("aslana-order-no");
  if (saved && readRaw("aslana-order-stamp") === stamp) return saved;
  const no = makeOrderNo();
  writeRaw("aslana-order-no", no);
  writeRaw("aslana-order-stamp", stamp);
  return no;
}

function getGelLimit() {
  const n = Number(readRaw("aslana-gel"));
  return n === 1 || n === 3 || n === 6 ? n : 6;
}

function setGelLimit(n) {
  writeRaw("aslana-gel", String(n === 1 || n === 3 ? n : 6));
}

function getRecipeFilter() {
  const allowed = ["all", "method", "skin", "hair", "home", "saved"];
  const v = readRaw("aslana-filter");
  return allowed.indexOf(v) !== -1 ? v : "all";
}

function setRecipeFilter(v) {
  writeRaw("aslana-filter", v);
}

function getSearch() {
  return readRaw("aslana-search") || "";
}

function setSearch(v) {
  writeRaw("aslana-search", String(v || "").slice(0, 80));
}

function getChecks() {
  const v = readJson("aslana-checks", {});
  return v && typeof v === "object" ? v : {};
}

function getWeek() {
  const v = readJson("aslana-week", {});
  return v && typeof v === "object" ? v : {};
}

function formatTL(amount) {
  const lang = getLang() === "en" ? "en-GB" : "tr-TR";
  return new Intl.NumberFormat(lang, { maximumFractionDigits: 0 }).format(amount) + " TL";
}

function esc(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function safeId(value) {
  const id = String(value || "").replace(/^#/, "");
  return /^[a-z0-9-]{1,40}$/.test(id) ? id : "";
}

function waNumber() {
  const raw = String((window.ASLANA_CONFIG && window.ASLANA_CONFIG.whatsappE164) || "").replace(/\D/g, "");
  return raw.length >= 10 ? raw : "";
}
