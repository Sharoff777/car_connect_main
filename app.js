
    // ── DATA ──────────────────────────────────────────────
      // HOW TO ADD IMAGES:
      // For each vehicle below, set:
      //   img: "./Images/[folder]/1.jpg"        ← thumbnail shown on cards
      //   imgs: [                                ← all gallery images
      //     "./Images/[folder]/1.jpg",
      //     "./Images/[folder]/2.jpg",
      //     ...
      //   ]
      // Paths are relative to this HTML file.
      // You can use any local path, URL, or mix of both.

      const vehicles = [
        {
          id: 1,
          title: "Audi Q7 3.0L Supercharged V6",
          make: "Audi",
          type: "SUV",
          price: 38000000,
          year: 2016,
          mileage: 74500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Gray",
          seats: 5,
          engine: "3000CC",
          featured: true,
          badge: "Featured",
          badgeCls: "",
          condition: "Used",
          description:
            "A stunning 2016 Audi Q7 in Moonlight Gray with the potent 3.0L supercharged V6. Full service history, panoramic sunroof, Bang & Olufsen sound system, and original alloys. Import condition.",
          img: "./Images/[1]audi-q7-gray/1.jpg",
          imgs: [
            "./Images/[1]audi-q7-gray/1.jpg",
            "./Images/[1]audi-q7-gray/2.jpg",
            "./Images/[1]audi-q7-gray/3.jpg",
            "./Images/[1]audi-q7-gray/4.jpg",
            "./Images/[1]audi-q7-gray/5.jpg",
            "./Images/[1]audi-q7-gray/6.jpg",
            "./Images/[1]audi-q7-gray/7.jpg",
            "./Images/[1]audi-q7-gray/8.jpg",
          ],
        },
        {
          id: 2,
          title: "BMW Z4 sDrive35is 2012",
          make: "BMW",
          type: "Sports",
          price: 32500000,
          year: 2012,
          mileage: 37500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Titanium Silver",
          seats: 4,
          engine: "3000CC",
          featured: false,
          badge: "Popular",
          badgeCls: "gold-b",
          condition: "Used",
          img: "./Images/[2]z4/1.jpg",
          imgs: [
            "./Images/[2]z4/1.jpg",
            "./Images/[2]z4/2.jpg",
            "./Images/[2]z4/3.jpg",
            "./Images/[2]z4/4.jpg",
            "./Images/[2]z4/5.jpg",
            "./Images/[2]z4/6.jpg",
            "./Images/[2]z4/7.jpg",
          ],
        },
        {
          id: 3,
          title: "Toyota Land Cruiser Sahara ZX V8",
          make: "Toyota",
          type: "SUV",
          price: 54500000,
          year: 2015,
          mileage: 61000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "4600CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[3]zx/1.jpg",
          imgs: [
            "./Images/[3]zx/1.jpg",
            "./Images/[3]zx/2.jpg",
            "./Images/[3]zx/3.jpg",
            "./Images/[3]zx/4.jpg",
            "./Images/[3]zx/5.jpg",
            "./Images/[3]zx/6.jpg",
            "./Images/[3]zx/7.jpg",
            "./Images/[3]zx/8.jpg",
            "./Images/[3]zx/9.jpg",
          ],
        },
        {
          id: 4,
          title: "Mercedes Benz C350 e Plug-In Hybrid",
          make: "Mercedes",
          type: "Coupe",
          price: 18500000,
          year: 2017,
          mileage: 84637,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "2000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[4]merc-c350e/1.jpg",
          imgs: [
            "./Images/[4]merc-c350e/1.jpg",
            "./Images/[4]merc-c350e/2.jpg",
            "./Images/[4]merc-c350e/3.jpg",
            "./Images/[4]merc-c350e/4.jpg",
            "./Images/[4]merc-c350e/5.jpg",
            "./Images/[4]merc-c350e/6.jpg",
            "./Images/[4]merc-c350e/7.jpg",
            "./Images/[4]merc-c350e/8.jpg",
          ],
        },
        {
          id: 5,
          title: "Land Rover Range Vogue P460e HSE 2024",
          make: "Land Rover",
          type: "SUV",
          price: 142500000,
          year: 2024,
          mileage: 786,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "3000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Brand New",
          img: "./Images/[5]range-rover-p460-lax/1.jpg",
          imgs: [
            "./Images/[5]range-rover-p460-lax/1.jpg",
            "./Images/[5]range-rover-p460-lax/2.jpg",
            "./Images/[5]range-rover-p460-lax/3.jpg",
            "./Images/[5]range-rover-p460-lax/4.jpg",
            "./Images/[5]range-rover-p460-lax/5.jpg",
            "./Images/[5]range-rover-p460-lax/6.jpg",
            "./Images/[5]range-rover-p460-lax/7.jpg",
            "./Images/[5]range-rover-p460-lax/8.jpg",
          ],
        },
        {
          id: 6,
          title: "Land Rover Range Rover P400 LWB",
          make: "Land Rover",
          type: "SUV",
          price: 165000000,
          year: 2025,
          mileage: 180,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 7,
          engine: "3000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Brand New",
          img: "./Images/[6]range-rover-p400-lax/1.jpg",
          imgs: [
            "./Images/[6]range-rover-p400-lax/1.jpg",
            "./Images/[6]range-rover-p400-lax/2.jpg",
            "./Images/[6]range-rover-p400-lax/3.jpg",
            "./Images/[6]range-rover-p400-lax/4.jpg",
            "./Images/[6]range-rover-p400-lax/5.jpg",
            "./Images/[6]range-rover-p400-lax/6.jpg",
            "./Images/[6]range-rover-p400-lax/7.jpg",
            "./Images/[6]range-rover-p400-lax/8.jpg",
            "./Images/[6]range-rover-p400-lax/9.jpg",
          ],
        },
        {
          id: 7,
          title: "Mitsubishi Montero GLX 2014",
          make: "Mitsubishi",
          type: "SUV",
          price: 30000000,
          year: 2014,
          mileage: 110000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "3200CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[7]mitsubishi-montero/1.jpg",
          imgs: [
            "./Images/[7]mitsubishi-montero/1.jpg",
            "./Images/[7]mitsubishi-montero/2.jpg",
            "./Images/[7]mitsubishi-montero/3.jpg",
            "./Images/[7]mitsubishi-montero/4.jpg",
            "./Images/[7]mitsubishi-montero/5.jpg",
            "./Images/[7]mitsubishi-montero/6.jpg",
            "./Images/[7]mitsubishi-montero/7.jpg",
          ],
        },
        {
          id: 8,
          title: "Mercedes Benz S400 CHOGM",
          make: "Mercedes",
          type: "Coupe",
          price: 37500000,
          year: 2013,
          mileage: 71745,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 4,
          engine: "4000CC",
          featured: false,
          badge: "New",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[8]merc-benz-s400/1.jpg",
          imgs: [
            "./Images/[8]merc-benz-s400/1.jpg",
            "./Images/[8]merc-benz-s400/2.jpg",
            "./Images/[8]merc-benz-s400/3.jpg",
            "./Images/[8]merc-benz-s400/4.jpg",
            "./Images/[8]merc-benz-s400/5.jpg",
            "./Images/[8]merc-benz-s400/6.jpg",
          ],
        },
        {
          id: 9,
          title: "Audi Q7 3L Supercharged V6 2016",
          make: "Audi",
          type: "SUV",
          price: 36500000,
          year: 2016,
          mileage: 144000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "3000CC",
          featured: true,
          badge: "Featured",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[9]audi-q7-black/1.jpg",
          imgs: [
            "./Images/[9]audi-q7-black/1.jpg",
            "./Images/[9]audi-q7-black/2.jpg",
            "./Images/[9]audi-q7-black/3.jpg",
            "./Images/[9]audi-q7-black/4.jpg",
            "./Images/[9]audi-q7-black/5.jpg",
            "./Images/[9]audi-q7-black/6.jpg",
            "./Images/[9]audi-q7-black/7.jpg",
            "./Images/[9]audi-q7-black/8.jpg",
          ],
        },
        {
          id: 10,
          title: "BMW 318i M Sport",
          make: "BMW",
          type: "Coupe",
          price: 19500000,
          year: 2018,
          mileage: 97500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Alpine White",
          seats: 4,
          engine: "1500CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[10]bmw-318i-white/1.jpg",
          imgs: [
            "./Images/[10]bmw-318i-white/1.jpg",
            "./Images/[10]bmw-318i-white/2.jpg",
            "./Images/[10]bmw-318i-white/3.jpg",
            "./Images/[10]bmw-318i-white/4.jpg",
            "./Images/[10]bmw-318i-white/5.jpg",
            "./Images/[10]bmw-318i-white/6.jpg",
          ],
        },
        {
          id: 11,
          title: "BMW 528i 2.0L Turbo",
          make: "BMW",
          type: "Coupe",
          price: 18500000,
          year: 2011,
          mileage: 106000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 4,
          engine: "2000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[11]bmw-528i/1.jpg",
          imgs: [
            "./Images/[11]bmw-528i/1.jpg",
            "./Images/[11]bmw-528i/2.jpg",
            "./Images/[11]bmw-528i/3.jpg",
            "./Images/[11]bmw-528i/4.jpg",
            "./Images/[11]bmw-528i/5.jpg",
            "./Images/[11]bmw-528i/6.jpg",
          ],
        },
        {
          id: 12,
          title: "BMW 740Le xDrive Individual",
          make: "BMW",
          type: "Coupe",
          price: 38500000,
          year: 2016,
          mileage: 33500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 4,
          engine: "2000CC",
          featured: true,
          badge: "Featured",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[12]bmw-740le/1.jpg",
          imgs: [
            "./Images/[12]bmw-740le/1.jpg",
            "./Images/[12]bmw-740le/2.jpg",
            "./Images/[12]bmw-740le/3.jpg",
            "./Images/[12]bmw-740le/4.jpg",
            "./Images/[12]bmw-740le/5.jpg",
            "./Images/[12]bmw-740le/6.jpg",
            "./Images/[12]bmw-740le/7.jpg",
          ],
        },
        {
          id: 13,
          title: "Honda CRV Australian Spec",
          make: "Honda",
          type: "SUV",
          price: 17500000,
          year: 2018,
          mileage: 82250,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Brilliant White",
          seats: 5,
          engine: "2000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[14]honda-crv/1.jpg",
          imgs: [
            "./Images/[14]honda-crv/1.jpg",
            "./Images/[14]honda-crv/2.jpg",
            "./Images/[14]honda-crv/3.jpg",
            "./Images/[14]honda-crv/4.jpg",
            "./Images/[14]honda-crv/5.jpg",
            "./Images/[14]honda-crv/6.jpg",
          ],
        },
        {
          id: 14,
          title: "Mitsubishi Outlander PHEV Premium",
          make: "Mitsubishi",
          type: "SUV",
          price: 14800000,
          year: 2015,
          mileage: 97500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Brown Metallic",
          seats: 5,
          engine: "2000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[15]mitsubishi-outlander/1.jpg",
          imgs: [
            "./Images/[15]mitsubishi-outlander/1.jpg",
            "./Images/[15]mitsubishi-outlander/2.jpg",
            "./Images/[15]mitsubishi-outlander/3.jpg",
            "./Images/[15]mitsubishi-outlander/4.jpg",
            "./Images/[15]mitsubishi-outlander/5.jpg",
            "./Images/[15]mitsubishi-outlander/6.jpg",
          ],
        },
        {
          id: 15,
          title: "Land Rover Range Rover P400e LWB",
          make: "Land Rover",
          type: "SUV",
          price: 82500000,
          year: 2019,
          mileage: 78000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Fuji White",
          seats: 5,
          engine: "2000CC",
          featured: false,
          badge: "",
          badgeCls: "",
          condition: "Used",
          img: "./Images/[17]range-rover-p400e/1.jpg",
          imgs: [
            "./Images/[17]range-rover-p400e/1.jpg",
            "./Images/[17]range-rover-p400e/2.jpg",
            "./Images/[17]range-rover-p400e/3.jpg",
            "./Images/[17]range-rover-p400e/4.jpg",
            "./Images/[17]range-rover-p400e/5.jpg",
            "./Images/[17]range-rover-p400e/6.jpg",
            "./Images/[17]range-rover-p400e/7.jpg",
          ],
        },
      ];

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
        return m < 1000 ? m + " km" : (m / 1000).toFixed(0) + "k km";
      }

      // ── LOADING SCREEN ───────────────────────────────────
      (function() {
        // Spawn floating dots
        const dotsEl = document.getElementById('loader-dots');
        for (let i = 0; i < 18; i++) {
          const d = document.createElement('div');
          d.className = 'loader-dot';
          d.style.left = Math.random() * 100 + '%';
          d.style.animationDuration = (4 + Math.random() * 6) + 's';
          d.style.animationDelay = (Math.random() * 5) + 's';
          d.style.opacity = '0';
          dotsEl.appendChild(d);
        }

        // Hide loader after 2.2s (after bar fills)
        function hideLoader() {
          const loader = document.getElementById('loader');
          loader.classList.add('hidden');
          setTimeout(() => { loader.style.display = 'none'; }, 700);
        }
        if (document.readyState === 'complete') {
          setTimeout(hideLoader, 2200);
        } else {
          window.addEventListener('load', function() {
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
      }

      function vehicleCardHTML(v) {
        const badge = v.badge
          ? `<div class="vehicle-badge ${v.badgeCls || ""}">${v.badge}</div>`
          : "";
        const conditionCls = v.condition === "Brand New" ? "vehicle-cond-new" : "vehicle-cond-used";
        const conditionLabel = v.condition || "Used";
        return `<div class="vehicle-card fade-up" onclick="goPage('detail', vehicles.find(x=>x.id===${v.id}))">
    <div class="vehicle-img">
      ${badge}
      <div class="vehicle-cond-badge ${conditionCls}">${conditionLabel}</div>
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
      <button onclick="event.stopPropagation();goPage('detail',vehicles.find(x=>x.id===${v.id}))" class="btn btn-dark btn-sm">Details</button>
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
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        slides[sliderIdx].classList.remove('active');
        dots[sliderIdx].classList.remove('active');
        sliderIdx = ((idx % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
        slides[sliderIdx].classList.add('active');
        dots[sliderIdx].classList.add('active');
        // Move track
        document.getElementById('slider-track').style.transform = `translateX(-${sliderIdx * 100}%)`;
        // Reset progress
        startProgress();
      }

      function sliderNext() { sliderGoTo(sliderIdx + 1); }
      function sliderPrev() { sliderGoTo(sliderIdx - 1); }

      function startProgress() {
        if (sliderTimer) clearTimeout(sliderTimer);
        if (progressAF) cancelAnimationFrame(progressAF);
        const bar = document.getElementById('slider-progress');
        bar.style.transition = 'none';
        bar.style.width = '0%';
        progressStart = null;
        function animate(ts) {
          if (!progressStart) progressStart = ts;
          const elapsed = ts - progressStart;
          const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
          bar.style.transition = 'none';
          bar.style.width = pct + '%';
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
        const hero = document.getElementById('home-hero');
        if (hero) {
          hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
          hero.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 50) dx < 0 ? sliderNext() : sliderPrev();
          }, { passive: true });
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
          .map(
            (s) => {
              let valClass = "";
              if (s.l === "Condition") {
                valClass = s.v === "Brand New"
                  ? ' style="color:#00b341;font-weight:700"'
                  : ' style="color:var(--g600)"';
              }
              return `<div class="spec-item"><div class="spec-label">${s.l}</div><div class="spec-value"${valClass}>${s.v || "—"}</div></div>`;
            }
          )
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
          .filter(
            (x) => x.id !== v.id && (x.make === v.make || x.type === v.type),
          )
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
        document.getElementById("gallery-main-img").src =
          currentVehicle.imgs[i];
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
          <p>Tap to add photos <span>(up to 10)</span></p>
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
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Submit via WhatsApp
      </button>
    </div>
  </div>`;
      }

      function handlePhotos(e) {
        const previews = document.getElementById("photo-previews");
        previews.innerHTML = "";
        Array.from(e.target.files)
          .slice(0, 10)
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

      function submitSellForm() {
        let valid = true;
        const name = document.getElementById("f-name").value.trim();
        const phone = document.getElementById("f-phone").value.trim();
        const make = document.getElementById("f-vmake").value;
        const model = document.getElementById("f-model").value.trim();
        const mileage = document.getElementById("f-mileage").value;

        document.getElementById("err-name").textContent = name
          ? ""
          : "Required";
        document.getElementById("err-phone").textContent = phone
          ? ""
          : "Required";
        document.getElementById("err-make").textContent = make
          ? ""
          : "Select a make";
        document.getElementById("err-model").textContent = model
          ? ""
          : "Required";
        document.getElementById("err-mileage").textContent =
          mileage && parseInt(mileage) >= 0 ? "" : "Enter valid mileage";

        if (
          !name ||
          !phone ||
          !make ||
          !model ||
          !mileage ||
          parseInt(mileage) < 0
        )
          return;

        const msg = `Hi CarConnect! I want to sell my vehicle.\n\nName: ${name}\nPhone: ${phone}\nVehicle: ${make} ${model}\nMileage: ${parseInt(mileage).toLocaleString()} km\n\nPlease contact me!`;
        window.open(
          `https://wa.me/+94777150066?text=${encodeURIComponent(msg)}`,
          "_blank",
        );
        renderSellForm(true);
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

      // ── INIT ──────────────────────────────────────────────
      renderHome();
      initFadeUp();
      initCounters();
  
