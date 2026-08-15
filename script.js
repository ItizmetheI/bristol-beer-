"use strict";

// ---------- age gate ----------
(() => {
  const gate = document.getElementById("ageGate");
  if (localStorage.getItem("bbc_age_verified") === "true") { gate.hidden = true; return; }
  document.body.style.overflow = "hidden";
  const yesBtn = document.getElementById("ageGateYes");
  const noLink = document.getElementById("ageGateNo");
  yesBtn.addEventListener("click", () => {
    localStorage.setItem("bbc_age_verified", "true");
    document.documentElement.classList.add("age-verified");
    gate.hidden = true;
    document.body.style.overflow = "";
  });
  // keep focus (and Tab) inside the gate while it's open
  const focusables = [yesBtn, noLink];
  gate.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const i = focusables.indexOf(document.activeElement);
    e.preventDefault();
    const next = e.shiftKey ? (i <= 0 ? focusables.length - 1 : i - 1) : (i === focusables.length - 1 ? 0 : i + 1);
    focusables[next].focus();
  });
  yesBtn.focus();
})();

const products = [
  { name: "Yuengling Traditional", cat: "Domestic lager", size: "24 pk", img: "images/yuengling-traditional.jpg" },
  { name: "Miller Lite", cat: "Domestic light", size: "30 pk", img: "images/miller-lite.jpg" },
  { name: "Coors Light", cat: "Domestic light", size: "30 pk", img: "images/coors-light.jpg" },
  { name: "Bud Light", cat: "Domestic light", size: "24 pk", img: "images/bud-light.jpg" },
  { name: "Corona Extra", cat: "Import lager", size: "24 pk", img: "images/corona-extra.jpg" },
  { name: "Modelo Especial", cat: "Import lager", size: "24 pk", img: "images/modelo-especial.jpg" },
  { name: "Guinness Draught", cat: "Import stout", size: "8 pk", img: "images/guinness-draught.jpg" },
  { name: "Stella Artois", cat: "Import lager", size: "12 pk", img: "images/stella-artois.jpg" },
  { name: "Victory Hop Devil", cat: "Craft IPA", size: "12 pk", img: "images/victory-hop-devil.jpg" },
  { name: "Dogfish Head 60 Minute", cat: "Craft IPA", size: "12 pk", img: "images/dogfish-head-60min.jpg" },
  { name: "Neshaminy Creek", cat: "Craft local", size: "6 pk", img: "images/neshaminy-creek.jpg" },
  { name: "Founders All Day IPA", cat: "Craft session", size: "15 pk", img: "images/founders-all-day-ipa.jpg" },
  { name: "Twisted Tea Original", cat: "Malt", size: "12 pk", img: "images/twisted-tea.jpg" },
  { name: "Angry Orchard Crisp", cat: "Cider", size: "12 pk", img: "images/angry-orchard.jpg" },
  { name: "Vizzy Variety", cat: "Hard seltzer", size: "12 pk", img: "images/vizzy-variety.jpg" },
  { name: "Mighty Swell", cat: "Hard seltzer", size: "12 pk", img: "images/mighty-swell.jpg" },
];

const groups = {
  Domestic: ["Domestic lager", "Domestic light"],
  Import: ["Import lager", "Import stout"],
  Craft: ["Craft IPA", "Craft local", "Craft session"],
  "Malt & seltzer": ["Malt", "Cider", "Hard seltzer"],
};

const slushes = [
  { no: "01", name: "Red, White & Berry", note: "Cherry, citrus and blue raspberry, spun cold.", img: "images/slush-red-white-berry.jpg" },
  { no: "02", name: "Peach Mango", note: "The one that sells out on Saturdays.", img: "images/slush-peach-mango.jpg" },
  { no: "03", name: "Pineapple Coconut", note: "Tropical, heavy on the coconut.", img: "images/slush-pineapple-coconut.jpg" },
  { no: "04", name: "Strawberry Lemon", note: "Tart, cold, gone in five minutes.", img: "images/slush-strawberry-lemon.jpg" },
  { no: "05", name: "Blue Raspberry", note: "House favorite with the after-work crowd.", img: "images/slush-blue-raspberry.jpg" },
  { no: "06", name: "Watermelon", note: "Summer only, while the machines hold up.", img: "images/slush-watermelon.jpg" },
];

const rtds = [
  { name: "High Noon Peach", kind: "Vodka seltzer", abv: "4.5%", img: "images/rtd-high-noon.jpg" },
  { name: "Surfside Iced Tea", kind: "Vodka tea", abv: "4.5%", img: "images/rtd-surfside.jpg" },
  { name: "Cutwater Margarita", kind: "Tequila cocktail", abv: "12.5%", img: "images/rtd-cutwater.jpg" },
  { name: "Stateside Lemonade", kind: "Vodka cocktail", abv: "6%", img: "images/rtd-stateside.jpg" },
  { name: "Cayman Jack Margarita", kind: "Malt cocktail", abv: "5.8%", img: "images/rtd-cayman-jack.jpg" },
  { name: "Buzzballz Chillers", kind: "Cocktail ball", abv: "15%", img: "images/rtd-buzzballz.jpg" },
  { name: "Lone River Ranch Water", kind: "Hard seltzer", abv: "4%", img: "images/rtd-lone-river.jpg" },
  { name: "Happy Dad Variety", kind: "Hard seltzer", abv: "5%", img: "images/rtd-happy-dad.jpg" },
];

const reviews = [
  { name: "Jemlnlx", quote: "Absolutely loved our visit to Bristol Beer Co. The atmosphere was fantastic, the staff were friendly, and there was a great selection of beers to try. A brilliant place to spend an afternoon." },
  { name: "Kaitlynn O'Neill", quote: "Highly recommend visiting Bristol Beer Co. The experience was excellent from start to finish. The staff were welcoming, knowledgeable, and made the whole visit really enjoyable. Definitely worth checking out." },
  { name: "Sydney Schukei", quote: "One of the best brewery experiences we've had. Even if you're not a huge beer drinker, there's plenty to enjoy. Great atmosphere, plenty of variety, and really friendly service." },
  { name: "Samuel Ainscough", quote: "Had a fantastic time at Bristol Beer Co. Great beer, great atmosphere, and really helpful staff. There was a brilliant range to choose from, and everything felt relaxed and welcoming." },
  { name: "Meaghan Kavanagh", quote: "Really enjoyed everything Bristol Beer Co. had going on. The atmosphere was excellent, the drinks were great, and it was a perfect place to relax and spend some time with friends." },
  { name: "Ash Doe", quote: "Fantastic experience. The staff were incredibly friendly and clearly knew their stuff. The beer selection was excellent, and the whole place had a great atmosphere. Would absolutely come back." },
  { name: "Brian Rutherford", quote: "Stopped by Bristol Beer Co. and had a great experience. Fantastic service, friendly staff, and a really welcoming environment. The beer was excellent too." },
  { name: "Kari Cochran", quote: "Really great brewery with an excellent selection of beers. The staff were knowledgeable and friendly, and the atmosphere was relaxed and enjoyable. Definitely somewhere I'd happily visit again." },
  { name: "Phil Pettigrew", quote: "Bristol Beer Co. is an experience every beer lover should have. Great beer, a fantastic atmosphere, and a clear passion for brewing. Everything about the visit felt well put together and enjoyable." },
  { name: "T Thomas", quote: "Had a fantastic experience here. Everyone was incredibly friendly and the beer selection was excellent. The atmosphere was great, and the staff really made the visit memorable." },
  { name: "Jessica Brideau", quote: "Can't say enough good things about Bristol Beer Co. The staff were knowledgeable and personable, the beer was fantastic, and the atmosphere made the whole experience even better. Would definitely recommend." },
];

const nav = document.getElementById("nav");
const navProgress = document.getElementById("navProgress");
const navLinks = document.getElementById("navLinks");
const navPillActive = document.getElementById("navPillActive");
const heroBg = document.getElementById("heroBg");
const scrollHint = document.getElementById("scrollHint");
const canvas = document.getElementById("heroCanvas");
const heroVideo = document.getElementById("heroVideo");

let currentPage = "home";
let filter = "All";

// ---------- router ----------
function go(page) {
  currentPage = page;
  document.querySelectorAll(".page").forEach((el) => {
    const isActive = el.dataset.page === page;
    el.classList.toggle("active", isActive);
    el.toggleAttribute("hidden", !isActive); // only one <main> exposed to assistive tech at a time
  });
  document.querySelectorAll("[data-nav]").forEach((el) => {
    const isActive = el.dataset.nav === page;
    el.classList.toggle("active", isActive);
    if (isActive) el.setAttribute("aria-current", "page"); else el.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  movePill();
  onScroll();
  if (page === "home") {
    startCanvas();
    if (!prefersReducedMotion) heroVideo.play().catch(() => {});
  } else {
    stopCanvas();
    heroVideo.pause();
  }
}
document.querySelectorAll("[data-goto]").forEach((el) => el.addEventListener("click", () => go(el.dataset.goto)));
document.getElementById("navBrand").addEventListener("click", () => go("home"));

document.getElementById("skipLink").addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.querySelector(".page.active");
  target.setAttribute("tabindex", "-1");
  target.focus();
});

// ---------- mobile nav menu ----------
const navMenuBtn = document.getElementById("navMenuBtn");
const navMenuPanel = document.getElementById("navMenuPanel");
function setMenuOpen(open) {
  navMenuPanel.toggleAttribute("hidden", !open);
  navMenuBtn.setAttribute("aria-expanded", String(open));
}
navMenuBtn.addEventListener("click", () => setMenuOpen(navMenuPanel.hasAttribute("hidden")));
navMenuPanel.querySelectorAll("[data-goto]").forEach((el) => el.addEventListener("click", () => setMenuOpen(false)));
document.addEventListener("click", (e) => {
  if (!navMenuPanel.hasAttribute("hidden") && !navMenuPanel.contains(e.target) && e.target !== navMenuBtn && !navMenuBtn.contains(e.target)) {
    setMenuOpen(false);
  }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenuOpen(false); });

// ---------- floating nav pill under active link ----------
function movePill() {
  const active = navLinks.querySelector('[data-nav="' + currentPage + '"]');
  if (!active) { navPillActive.style.opacity = "0"; return; }
  const nr = navLinks.getBoundingClientRect(), ar = active.getBoundingClientRect();
  navPillActive.style.opacity = "1";
  navPillActive.style.width = ar.width + "px";
  navPillActive.style.transform = "translateX(" + (ar.left - nr.left) + "px)";
}
window.addEventListener("resize", movePill);

// ---------- scroll: nav shadow, progress bar, hero parallax, scroll hint ----------
let navFloating = null;

function setNavFloating(shouldFloat) {
  if (shouldFloat === navFloating) return;
  navFloating = shouldFloat;
  nav.classList.toggle("is-floating", shouldFloat);
}

function onScroll() {
  const y = window.scrollY || 0;
  setNavFloating(y > 40);
  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - window.innerHeight);
  navProgress.style.width = Math.min(100, (y / max) * 100) + "%";
  if (currentPage === "home") {
    heroBg.style.transform = "translate3d(0," + (y * 0.22) + "px,0) scale(" + (1 + Math.min(y, 900) / 9000) + ")";
    scrollHint.style.opacity = y > 120 ? "0" : "1";
  }
}
window.addEventListener("scroll", onScroll, { passive: true });

// ---------- cursor spotlight on [data-spot] ----------
window.addEventListener("mousemove", (e) => {
  const t = e.target.closest ? e.target.closest("[data-spot]") : null;
  if (!t) return;
  const r = t.getBoundingClientRect();
  t.style.setProperty("--mx", (e.clientX - r.left) + "px");
  t.style.setProperty("--my", (e.clientY - r.top) + "px");
}, { passive: true });

// ---------- scroll reveal ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("v3-in"); io.unobserve(entry.target); }
  });
}, { rootMargin: "-5% 0px -5% 0px" });
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

// ---------- hero canvas glow blobs ----------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const blobs = [
  { x: .26, y: .34, r: .46, h: 212, s: .62 },
  { x: .72, y: .22, r: .38, h: 226, s: .5 },
  { x: .55, y: .8, r: .52, h: 16, s: .3 },
  { x: .1, y: .72, r: .32, h: 200, s: .4 },
  { x: .88, y: .62, r: .3, h: 190, s: .34 },
];
let canvasRaf = null;
function resizeCanvas() {
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, canvas.clientWidth * dpr);
  canvas.height = Math.max(1, canvas.clientHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function drawCanvas(t) {
  const ctx = canvas.getContext("2d");
  const w = canvas.clientWidth, h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = "lighter";
  blobs.forEach((b, i) => {
    const px = (b.x + Math.sin(t / 5400 + i * 1.6) * .075) * w;
    const py = (b.y + Math.cos(t / 6300 + i * 2.1) * .065) * h;
    const rad = b.r * Math.min(w, h) * (1 + Math.sin(t / 4500 + i) * .07);
    const g = ctx.createRadialGradient(px, py, 0, px, py, rad);
    g.addColorStop(0, "hsla(" + b.h + ",78%,60%," + (0.15 * b.s + 0.05) + ")");
    g.addColorStop(.6, "hsla(" + b.h + ",78%,52%," + (0.05 * b.s) + ")");
    g.addColorStop(1, "hsla(" + b.h + ",78%,50%,0)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.fill();
  });
  ctx.globalCompositeOperation = "source-over";
  if (!prefersReducedMotion) canvasRaf = requestAnimationFrame(drawCanvas);
}
function startCanvas() {
  if (canvasRaf) return;
  resizeCanvas();
  if (prefersReducedMotion) { drawCanvas(0); return; } // one static frame, no loop
  canvasRaf = requestAnimationFrame(drawCanvas);
}
function stopCanvas() {
  if (canvasRaf) { cancelAnimationFrame(canvasRaf); canvasRaf = null; }
}
window.addEventListener("resize", () => { if (currentPage === "home") resizeCanvas(); });

// ---------- open/closed hours ----------
function hoursToday() {
  const d = new Date().getDay();
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return { name: names[d], open: 9, close: d === 0 ? 19 : 21, label: d === 0 ? "9–7" : "9–9" };
}
function openState() {
  const now = new Date();
  const h = hoursToday();
  const cur = now.getHours() + now.getMinutes() / 60;
  if (cur >= h.open && cur < h.close) {
    const left = h.close - cur;
    const hrs = Math.floor(left);
    const mins = Math.round((left - hrs) * 60);
    const rem = hrs >= 1 ? hrs + "h " + mins + "m" : mins + " min";
    return { dot: "#30d158", line: "Open now · closes in " + rem + " · 2664 Bristol Pike" };
  }
  return { dot: "#ff9f0a", line: "Closed · opens 9AM " + (cur >= h.close ? "tomorrow" : "today") + " · 2664 Bristol Pike" };
}
function renderHours() {
  const h = hoursToday(), os = openState();
  document.getElementById("todayHours").textContent = h.label;
  document.getElementById("todayName").textContent = "Today · " + h.name;
  document.getElementById("openDot").style.background = os.dot;
  document.getElementById("openDot").style.boxShadow = "0 0 10px " + os.dot;
  document.getElementById("openLine").textContent = os.line;
}
renderHours();
setInterval(renderHours, 60000);

// ---------- browse page ----------
function cardHTML(name, size, meta, img) {
  return '<div class="card" data-spot><img class="card-img" src="' + img + '" alt="' + name + '" loading="lazy"><div class="card-row"><div class="card-name">' + name + '</div><div class="card-size">' + size + '</div></div><div class="card-meta">' + meta + '</div></div>';
}
function renderBrowse() {
  const visible = filter === "All" ? products : products.filter((p) => (groups[filter] || []).indexOf(p.cat) > -1);
  document.getElementById("countLine").textContent = visible.length + " of " + products.length + " lines in stock";
  document.getElementById("browseGrid").innerHTML = visible.map((p) => cardHTML(p.name, p.size, p.cat, p.img)).join("");
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === filter));
}
document.getElementById("filterRow").addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  filter = chip.dataset.filter;
  renderBrowse();
});
renderBrowse();

// ---------- slush page ----------
document.getElementById("slushGrid").innerHTML = slushes.map((s) =>
  '<div class="slush-card" data-spot><img class="slush-card-media" src="' + s.img + '" alt="' + s.name + ' slush" loading="lazy"><div class="slush-card-body"><div class="slush-card-num">' + s.no + '</div><div class="slush-card-name">' + s.name + '</div><p class="slush-card-note">' + s.note + '</p></div></div>'
).join("");

// ---------- rtd page ----------
document.getElementById("rtdGrid").innerHTML = rtds.map((r) => cardHTML(r.name, r.abv, r.kind, r.img)).join("");

// ---------- home: specialties accordion + featured card ----------
const accordionEl = document.getElementById("specialtiesAccordion");
const featuredImg = document.getElementById("featuredImg");
const featuredName = document.getElementById("featuredName");
const featuredDots = document.getElementById("featuredDots");
const homeSlushes = slushes.slice(0, 5);

accordionEl.innerHTML = homeSlushes.map((s, i) =>
  '<div class="accordion-item' + (i === 0 ? " is-open" : "") + '" data-index="' + i + '"><button class="accordion-trigger"><span class="accordion-num">' + s.no + '</span><span class="accordion-name">' + s.name + '</span><span class="accordion-chevron">+</span></button><div class="accordion-panel"><p class="accordion-note">' + s.note + '</p></div></div>'
).join("");
featuredDots.innerHTML = homeSlushes.map((_, i) => '<span' + (i === 0 ? ' class="active"' : "") + '></span>').join("");

const showSlush = (i) => {
  const s = homeSlushes[i];
  featuredImg.src = s.img;
  featuredImg.alt = s.name + " slush";
  featuredName.textContent = s.name;
  accordionEl.querySelectorAll(".accordion-item").forEach((el, idx) => el.classList.toggle("is-open", idx === i));
  featuredDots.querySelectorAll("span").forEach((el, idx) => el.classList.toggle("active", idx === i));
};
accordionEl.addEventListener("click", (e) => {
  const item = e.target.closest(".accordion-item");
  if (item) showSlush(Number(item.dataset.index));
});

// ---------- reviews (home marquee) ----------
const reviewCardHTML = (r) =>
  '<div class="review-card"><div class="review-quote-mark">"</div><div class="review-stars">★★★★★</div><p class="review-quote">' + r.quote + '</p><div class="review-footer"><div class="review-avatar">' + r.name.trim().charAt(0).toUpperCase() + '</div><div class="review-name-col"><div class="review-name">' + r.name + '</div><div class="review-source">Google review</div></div></div></div>';
document.getElementById("reviewsTrack").innerHTML = reviews.map(reviewCardHTML).join("") + reviews.map(reviewCardHTML).join("");

// ---------- video showcase ----------
const videoShowcase = document.getElementById("videoShowcase");
const showcaseVideo = document.getElementById("showcaseVideo");
videoShowcase.addEventListener("click", () => {
  videoShowcase.classList.add("is-playing");
  showcaseVideo.play().catch(() => {});
});

// ---------- about page category breakdown ----------
document.getElementById("aboutCategories").innerHTML = Object.keys(groups).map((name) => {
  const count = products.filter((p) => groups[name].includes(p.cat)).length;
  return '<div class="about-cat"><div class="about-cat-count">' + count + '</div><div class="about-cat-name">' + name + '</div></div>';
}).join("");

// ---------- init ----------
movePill();
onScroll();
startCanvas();
if (!prefersReducedMotion) heroVideo.play().catch(() => {});
