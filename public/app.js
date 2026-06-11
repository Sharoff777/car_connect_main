// ── VEHICLE DATA — loaded from Google Sheets ────────────────────────────────
// Sheet URL: https://docs.google.com/spreadsheets/d/e/2PACX-1vTJFJsRTLS-AQMiPKgZ7sY6FyAxlt20zp0t6yHjUsAI0e9N2U2chzMHD_0YFJOvYxpC27AoRBpqGQCK/pub?gid=489229461&single=true&output=csv
// Columns expected (case-sensitive):
//   id, title, make, type, price, year, mileage, fuel, transmission, color,
//   seats, engine, featured, badge, badgeCls, condition, description, img, imgs
//   (imgs column = pipe-separated list of image paths)

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJFJsRTLS-AQMiPKgZ7sY6FyAxlt20zp0t6yHjUsAI0e9N2U2chzMHD_0YFJOvYxpC27AoRBpqGQCK/pub?gid=489229461&single=true&output=csv";

// Global vehicles array — starts empty, populated after CSV fetch
let vehicles = [];

function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
  return lines.slice(1).map(line => {
    // Handle quoted fields with commas inside
    const cols = [];
    let cur = "", inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' && !inQ) { inQ = true; continue; }
      if (ch === '"' && inQ) {
        if (line[i+1] === '"') { cur += '"'; i++; } // escaped quote
        else { inQ = false; }
        continue;
      }
      if (ch === "," && !inQ) { cols.push(cur); cur = ""; continue; }
      cur += ch;
    }
    cols.push(cur);

    const obj = {};
    headers.forEach((h, i) => { obj[h] = (cols[i] || "").trim(); });

    // Type coercions
    obj.id          = parseInt(obj.id) || 0;
    obj.price       = parseInt(obj.price) || 0;
    obj.year        = parseInt(obj.year) || 0;
    obj.mileage     = parseInt(obj.mileage) || 0;
    obj.seats       = parseInt(obj.seats) || 5;
    obj.featured    = obj.featured === "true" || obj.featured === "TRUE" || obj.featured === "1";
    obj.imgs        = obj.imgs ? obj.imgs.split("|").map(s => s.trim()) : [obj.img];
    if (!obj.img && obj.imgs.length) obj.img = obj.imgs[0];
    return obj;
  }).filter(v => v.id && v.title); // skip empty rows
}

async function loadVehicles() {
  try {
    const res = await fetch(SHEET_CSV_URL);
    if (!res.ok) throw new Error("Sheet fetch failed: " + res.status);
    const text = await res.text();
    vehicles = parseCSV(text);
    console.log(`✅ Loaded ${vehicles.length} vehicles from Google Sheets`);
  } catch (err) {
    console.error("❌ Could not load vehicles from Sheets:", err);
    vehicles = []; // fallback: empty (or swap in hardcoded array here)
  }
  // Re-render whatever page is active
  renderHome();
  const hash = window.location.hash;
  if (hash.startsWith("#/car/")) {
    const id = parseInt(hash.replace("#/car/", ""));
    const v = vehicles.find(v => v.id === id);
    if (v) { goPage("detail", v); return; }
  } else if (hash === "#/inventory") {
    goPage("inventory");
    return;
  }
  initFadeUp();
  initCounters();
}

const MAKES_LIST = [
  "Toyota",
  "Honda",
  "Nissan",
  "BMW",
  "Mercedes",
  "Audi",
  "Mitsubishi",
  "Land Rover",
  "Suzuki",
  "Kia",
  "Hyundai",
  "Mazda",
  "Volkswagen",
  "Other",
];

function fmtPrice(p) {
  return p >= 1000000
    ? "LKR " + (p / 1000000).toFixed(1) + "M"
    : "LKR " + p.toLocaleString();
}
function fmtMileage(m) {
  return m < 1000 ? m + " km" : (m / 1000).toFixed(0) + ",000 km";
}

// ── LOADING SCREEN ───────────────────────────────────
(function () {
  // Spawn floating dots
  const dotsEl = document.getElementById("loader-dots");
  for (let i = 0; i < 18; i++) {
    const d = document.createElement("div");
    d.className = "loader-dot";
    d.style.left = Math.random() * 100 + "%";
    d.style.animationDuration = 4 + Math.random() * 6 + "s";
    d.style.animationDelay = Math.random() * 5 + "s";
    d.style.opacity = "0";
    dotsEl.appendChild(d);
  }

  // Hide loader after 2.2s (after bar fills)
  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 700);
  }
  if (document.readyState === "complete") {
    setTimeout(hideLoader, 2200);
  } else {
    window.addEventListener("load", function () {
      setTimeout(hideLoader, 600);
    });
    // Fallback: max 3s
    setTimeout(hideLoader, 3000);
  }
})();

// ── PAGE SYSTEM ───────────────────────────────────────
let currentPage = "home";
let currentVehicle = null;
let currentImgIdx = 0;

function goPage(page, vehicle) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  const navEl = document.getElementById("nav-" + page);
  if (navEl) navEl.classList.add("active");
  currentPage = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (page === "inventory") renderInventory();
  if (page === "sell") renderSellForm();
  if (page === "detail" && vehicle) renderDetail(vehicle);
  initFadeUp();
  initCounters();
  // Update URL hash
  if (page === 'detail' && vehicle) {
    window.location.hash = '/car/' + vehicle.id;
  } else if (page === 'home') {
    history.pushState(null, '', ' '); // clears the hash cleanly
  } else {
    window.location.hash = '/' + page;
  }
}

function vehicleCardHTML(v) {
  const badge = v.badge
    ? `<div class="vehicle-badge ${v.badgeCls || ""}">${v.badge}</div>`
    : "";
    return `<div class="vehicle-card fade-up" onclick="navigateToCar(${v.id})">
    <div class="vehicle-img">
      ${badge}
      ${v.condition === "Brand New" ? `<div class="vehicle-cond-badge vehicle-cond-new">Brand New</div>` : ""}
      <img src="${v.img}" alt="${v.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'"/>
    </div>
    <div class="vehicle-info">
      <h3>${v.title}</h3>
      <div class="vehicle-price">${fmtPrice(v.price)}</div>
      <div class="vehicle-meta">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${v.year}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 12L8 8"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg> ${fmtMileage(v.mileage)}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22h12V4a1 1 0 00-1-1H4a1 1 0 00-1 1v18zm6-14v4m-3-2h6"/><path d="M15 4h2a2 2 0 012 2v5.5a2 2 0 002 2 2 2 0 002-2v-6l-3-3"/></svg> ${v.fuel}</span>
      </div>
    </div>
    <div class="vehicle-actions">
      <button onclick="event.stopPropagation();navigateToCar(${v.id})" class="btn btn-dark btn-sm">Details</button>
      <a href="https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect! Interested in the " + v.title)}" target="_blank" onclick="event.stopPropagation()" class="btn btn-sm" style="background:#25D366;color:#fff;justify-content:center">
        <svg viewBox="0 0 24 24" style="fill:#fff;width:13px;height:13px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>`;
}

// ── HERO SLIDER ───────────────────────────────────────
let sliderIdx = 0;
const SLIDE_COUNT = 3;
const SLIDE_DURATION = 5800; // ms
let sliderTimer = null;
let progressStart = null;
let progressAF = null;

function sliderGoTo(idx) {
  // Remove active from current
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  slides[sliderIdx].classList.remove("active");
  dots[sliderIdx].classList.remove("active");
  sliderIdx = ((idx % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
  slides[sliderIdx].classList.add("active");
  dots[sliderIdx].classList.add("active");
  // Move track
  document.getElementById("slider-track").style.transform =
    `translateX(-${sliderIdx * 100}%)`;
  // Reset progress
  startProgress();
}

function sliderNext() {
  sliderGoTo(sliderIdx + 1);
}
function sliderPrev() {
  sliderGoTo(sliderIdx - 1);
}

function startProgress() {
  if (sliderTimer) clearTimeout(sliderTimer);
  if (progressAF) cancelAnimationFrame(progressAF);
  const bar = document.getElementById("slider-progress");
  bar.style.transition = "none";
  bar.style.width = "0%";
  progressStart = null;
  function animate(ts) {
    if (!progressStart) progressStart = ts;
    const elapsed = ts - progressStart;
    const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    bar.style.transition = "none";
    bar.style.width = pct + "%";
    if (pct < 100) {
      progressAF = requestAnimationFrame(animate);
    }
  }
  progressAF = requestAnimationFrame(animate);
  sliderTimer = setTimeout(() => sliderNext(), SLIDE_DURATION);
}

// Touch/swipe support
let touchStartX = 0;
(function initSlider() {
  const hero = document.getElementById("home-hero");
  if (hero) {
    hero.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true },
    );
    hero.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) dx < 0 ? sliderNext() : sliderPrev();
      },
      { passive: true },
    );
  }
  startProgress();
})();

// ── HOME ───────────────────────────────────────────────
function renderHome() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);
  document.getElementById("featured-grid").innerHTML = featured
    .map(vehicleCardHTML)
    .join("");
}

// ── INVENTORY ──────────────────────────────────────────
function renderInventory() {
  // Populate make filter
  const makeSelect = document.getElementById("f-make");
  const makeVals = [...new Set(vehicles.map((v) => v.make))].sort();
  makeSelect.innerHTML =
    '<option value="">All Makes</option>' +
    makeVals.map((m) => `<option value="${m}">${m}</option>`).join("");
  applyFilters();
}

function applyFilters() {
  const make = document.getElementById("f-make").value;
  const type = document.getElementById("f-type").value;
  const price = document.getElementById("f-price").value;
  const year = document.getElementById("f-year").value;
  const search = document.getElementById("f-search").value.toLowerCase();
  const sort = document.getElementById("f-sort").value;

  let list = vehicles.filter((v) => {
    if (make && v.make !== make) return false;
    if (type && v.type !== type) return false;
    if (price && v.price > parseInt(price)) return false;
    if (year && v.year < parseInt(year)) return false;
    if (
      search &&
      !v.title.toLowerCase().includes(search) &&
      !v.make.toLowerCase().includes(search)
    )
      return false;
    return true;
  });

  if (sort === "price-low") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
  else if (sort === "mileage") list.sort((a, b) => a.mileage - b.mileage);
  else list.sort((a, b) => b.year - a.year);

  document.getElementById("results-count").textContent = list.length;
  document.getElementById("inventory-grid").innerHTML =
    list.length === 0
      ? `<div class="empty-state"><p>No vehicles match your filters.</p><button onclick="clearFilters()" class="btn btn-primary">Clear Filters</button></div>`
      : list.map(vehicleCardHTML).join("");
  initFadeUp();
}

function clearFilters() {
  document.getElementById("f-make").value = "";
  document.getElementById("f-type").value = "";
  document.getElementById("f-price").value = "";
  document.getElementById("f-year").value = "";
  document.getElementById("f-search").value = "";
  document.getElementById("f-sort").value = "newest";
  applyFilters();
}

// ── DETAIL ────────────────────────────────────────────
function renderDetail(v) {
  currentVehicle = v;
  currentImgIdx = 0;

  document.getElementById("gallery-main-img").src = v.imgs[0];
  document.getElementById("gallery-main-img").alt = v.title;

  // Thumbs
  document.getElementById("gallery-thumbs").innerHTML = v.imgs
    .map(
      (img, i) => `
    <div class="gallery-thumb${i === 0 ? " active" : ""}" onclick="setGalleryImg(${i})">
      <img src="${img}" alt="" onerror="this.src='${v.imgs[0]}'"/>
    </div>`,
    )
    .join("");

  // Description
  const descBlock = document.getElementById("car-description-block");
  descBlock.innerHTML = v.description
    ? `<div class="car-description"><div class="specs-label">About This Vehicle</div><p style="font-size:13.5px;line-height:1.75;color:var(--g600)">${v.description}</p></div>`
    : "";

  // Specs
  const specs = [
    { l: "Condition", v: v.condition || "Used" },
    { l: "Make", v: v.make },
    { l: "Year", v: v.year },
    { l: "Mileage", v: fmtMileage(v.mileage) },
    { l: "Engine", v: v.engine },
    { l: "Fuel", v: v.fuel },
    { l: "Gearbox", v: v.transmission },
    { l: "Type", v: v.type },
    { l: "Colour", v: v.color },
    { l: "Seats", v: v.seats },
  ];
  document.getElementById("specs-grid").innerHTML = specs
    .map((s) => {
      let valClass = "";
      if (s.l === "Condition") {
        valClass =
          s.v === "Brand New"
            ? ' style="color:#00b341;font-weight:700"'
            : ' style="color:var(--g600)"';
      }
      return `<div class="spec-item"><div class="spec-label">${s.l}</div><div class="spec-value"${valClass}>${s.v || "—"}</div></div>`;
    })
    .join("");

  // Inquiry panel
  document.getElementById("detail-price").textContent = fmtPrice(v.price);
  document.getElementById("detail-title").textContent = v.title;
  document.getElementById("detail-subtitle").textContent =
    `${v.year} · ${v.fuel} · ${v.transmission}`;
  document.getElementById("detail-wa-btn").href =
    `https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect! Interested in the " + v.title + " at " + fmtPrice(v.price))}`;
  document.getElementById("inq-name").value = "";
  document.getElementById("inq-phone").value = "";
  document.getElementById("inq-form-area").innerHTML = `
    <input class="form-control" id="inq-name" placeholder="Your Name" oninput="checkInqBtn()" style="margin-bottom:8px"/>
    <input class="form-control" id="inq-phone" placeholder="Phone Number" type="tel" oninput="checkInqBtn()" style="margin-bottom:10px"/>
    <button class="inq-send-btn" onclick="sendInquiry()" id="inq-send-btn" disabled>Send Inquiry</button>`;

  // Similar
  const similar = vehicles
    .filter((x) => x.id !== v.id && (x.make === v.make || x.type === v.type))
    .slice(0, 3);
  const simSec = document.getElementById("similar-section");
  if (similar.length > 0) {
    simSec.style.display = "block";
    document.getElementById("similar-grid").innerHTML = similar
      .map(vehicleCardHTML)
      .join("");
  } else simSec.style.display = "none";
}

function setGalleryImg(i) {
  currentImgIdx = i;
  document.getElementById("gallery-main-img").src = currentVehicle.imgs[i];
  document
    .querySelectorAll(".gallery-thumb")
    .forEach((t, idx) => t.classList.toggle("active", idx === i));
}

function checkInqBtn() {
  const n = document.getElementById("inq-name");
  const p = document.getElementById("inq-phone");
  const btn = document.getElementById("inq-send-btn");
  if (n && p && btn) btn.disabled = !n.value.trim() || !p.value.trim();
}

function sendInquiry() {
  const name = document.getElementById("inq-name").value.trim();
  const phone = document.getElementById("inq-phone").value.trim();
  if (!name || !phone) return;
  const msg = `Hi CarConnect! Interested in the ${currentVehicle.title} at ${fmtPrice(currentVehicle.price)}.\n\nName: ${name}\nPhone: ${phone}`;
  window.open(
    `https://wa.me/+94777150066?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
  document.getElementById("inq-form-area").innerHTML =
    `<div class="inq-success"><strong>✓ Message Sent!</strong>We'll contact you shortly.</div>`;
}

// ── LIGHTBOX ──────────────────────────────────────────
function openLightbox() {
  document.getElementById("lightbox").style.display = "flex";
  updateLightbox();
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "";
}
function updateLightbox() {
  document.getElementById("lightbox-img").src =
    currentVehicle.imgs[currentImgIdx];
  document.getElementById("lightbox-counter").textContent =
    `${currentImgIdx + 1} / ${currentVehicle.imgs.length}`;
}
function lbPrev() {
  currentImgIdx =
    (currentImgIdx - 1 + currentVehicle.imgs.length) %
    currentVehicle.imgs.length;
  updateLightbox();
  setGalleryImg(currentImgIdx);
}
function lbNext() {
  currentImgIdx = (currentImgIdx + 1) % currentVehicle.imgs.length;
  updateLightbox();
  setGalleryImg(currentImgIdx);
}
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").style.display !== "none") {
    if (e.key === "ArrowLeft") lbPrev();
    if (e.key === "ArrowRight") lbNext();
    if (e.key === "Escape") closeLightbox();
  }
});

// ── SELL FORM ─────────────────────────────────────────
function renderSellForm(done = false) {
  const c = document.getElementById("sell-form-container");
  if (done) {
    c.innerHTML = `<div class="form-card">
      <div class="success-state">
        <div class="success-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
        <h3>You're All Set!</h3>
        <p>We'll review your details and call you within 2 hours to arrange a free inspection.</p>
        <div class="next-steps"><p>What happens next</p><ol><li>Team reviews your submission</li><li>We call you within 2 hours</li><li>Free inspection at your location</li><li>You receive your market valuation</li></ol></div>
        <a href="https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect, I just submitted my car — can we chat?")}" target="_blank" class="btn btn-primary btn-lg" style="width:100%;justify-content:center">
          <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>`;
    return;
  }
  const makesOpts = MAKES_LIST.map(
    (m) => `<option value="${m}">${m}</option>`,
  ).join("");
  c.innerHTML = `<div class="form-card">
    <div class="form-top"><h2>List Your Car</h2><p>Takes 60 seconds · 100% free · We call you within 2 hours</p></div>
    <div class="form-body-inner">
      <div class="form-row">
        <div class="form-group" style="margin-bottom:0">
          <label>Your Name</label>
          <input class="form-control" id="f-name" placeholder="Full name"/>
          <div class="field-err" id="err-name"></div>
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label>Phone Number</label>
          <input class="form-control" type="tel" id="f-phone" placeholder="+94 7XX XXX XXX"/>
          <div class="field-err" id="err-phone"></div>
        </div>
      </div>
      <div class="form-row" style="margin-top:14px">
        <div class="form-group" style="margin-bottom:0">
          <label>Make</label>
          <select class="form-control" id="f-vmake"><option value="">Select make</option>${makesOpts}</select>
          <div class="field-err" id="err-make"></div>
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label>Model</label>
          <input class="form-control" id="f-model" placeholder="e.g. Aqua, Vezel, X5"/>
          <div class="field-err" id="err-model"></div>
        </div>
      </div>
      <div class="form-group" style="margin-top:14px">
        <label>Mileage (km)</label>
        <input class="form-control" type="number" id="f-mileage" placeholder="e.g. 45000" min="0"/>
        <div class="field-err" id="err-mileage"></div>
      </div>
      <div class="form-group">
        <label>Photos <span style="color:var(--g300);font-weight:400;letter-spacing:0">— optional but recommended</span></label>
        <div class="upload-zone" onclick="document.getElementById('f-imgs').click()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <p>Tap to add photos <span>(up to 5)</span></p>
          <small>Better photos = faster sale</small>
        </div>
        <input type="file" id="f-imgs" multiple accept="image/*" style="display:none" onchange="handlePhotos(event)"/>
        <div id="photo-previews" class="photo-previews"></div>
      </div>
    </div>
    <div class="form-footer-bar">
      <div class="form-note-sm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Private &amp; secure
      </div>
      <button class="submit-btn" onclick="submitSellForm()">
        Submit
      </button>
    </div>
  </div>`;
}

function handlePhotos(e) {
  const previews = document.getElementById("photo-previews");
  previews.innerHTML = "";
  Array.from(e.target.files)
    .slice(0, 5)
    .forEach((file) => {
      const r = new FileReader();
      r.onload = (ev) => {
        const img = document.createElement("img");
        img.src = ev.target.result;
        img.className = "photo-thumb";
        previews.appendChild(img);
      };
      r.readAsDataURL(file);
    });
}

async function submitSellForm() {
  const name    = document.getElementById("f-name").value.trim();
  const phone   = document.getElementById("f-phone").value.trim();
  const make    = document.getElementById("f-vmake").value;
  const model   = document.getElementById("f-model").value.trim();
  const mileage = document.getElementById("f-mileage").value;

  // Validate
  document.getElementById("err-name").textContent    = name    ? "" : "Required";
  document.getElementById("err-phone").textContent   = phone   ? "" : "Required";
  document.getElementById("err-make").textContent    = make    ? "" : "Select a make";
  document.getElementById("err-model").textContent   = model   ? "" : "Required";
  document.getElementById("err-mileage").textContent =
    mileage && parseInt(mileage) >= 0 ? "" : "Enter valid mileage";

  if (!name || !phone || !make || !model || !mileage || parseInt(mileage) < 0)
    return;

  const btn = document.querySelector(".submit-btn");
  if (btn) { btn.disabled = true; btn.innerHTML = "Uploading photos…"; }

  try {
    const fileInput = document.getElementById("f-imgs");
    const files     = fileInput && fileInput.files.length > 0
      ? Array.from(fileInput.files).slice(0, 5)
      : [];

    const blobUrls = [];
    for (const file of files) {
      const res  = await fetch("/api/upload?filename=" + encodeURIComponent(file.name), {
        method: "POST",
        body:   file,
      });
      const data = await res.json();
      if (!data.url) throw new Error("Upload failed");
      blobUrls.push({ url: data.url, name: file.name, type: file.type });
    }

    if (btn) btn.innerHTML = "Sending…";

    const res = await fetch("/api/sell", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ username: name, phone, car_make: make, category: model, mileage, blobUrls }),
    });

    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "Unknown error");

    renderSellForm(true);

  } catch (err) {
    console.error(err);
    if (btn) { btn.disabled = false; btn.innerHTML = "Submit"; }
    alert("Could not send — please try WhatsApp or call us directly.");
  }
}

// ── NAVBAR SCROLL ─────────────────────────────────────
window.addEventListener(
  "scroll",
  () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 36);
  },
  { passive: true },
);

// ── MOBILE NAV ────────────────────────────────────────
function openMobileNav() {
  document.getElementById("mobile-nav").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  document.getElementById("mobile-nav").classList.remove("open");
  document.body.style.overflow = "";
}

// ── FADE UP ───────────────────────────────────────────
function initFadeUp() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
  );
  document
    .querySelectorAll(".fade-up:not(.visible)")
    .forEach((el) => obs.observe(el));
}

// ── COUNTERS ──────────────────────────────────────────
function initCounters() {
  document
    .querySelectorAll("[data-count]:not([data-animated])")
    .forEach((el) => {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      el.dataset.animated = "1";
      const obs = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) return;
          obs.disconnect();
          const dur = 1800;
          let start = null;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            el.textContent =
              Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
    });
}

// ── HASH ROUTING ──────────────────────────────────────
function navigateToCar(id) {
  window.location.hash = '/car/' + id;
}

function handleHash() {
  const hash = window.location.hash; // e.g. "#/car/5"
  if (hash.startsWith('#/car/')) {
    const id = parseInt(hash.replace('#/car/', ''));
    const vehicle = vehicles.find(v => v.id === id);
    if (vehicle) {
      goPage('detail', vehicle);
      return;
    }
  }
  // Default: go home
  if (!hash || hash === '#') goPage('home');
}

// Listen for back/forward navigation
window.addEventListener('hashchange', handleHash);

// ── INIT — fetch sheet first, then render ─────────────
// (handleHash is called inside loadVehicles after data is ready)
loadVehicles();

