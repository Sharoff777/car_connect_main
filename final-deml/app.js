      const { useState, useEffect, useRef } = React;

      // ── DATA ──────────────────────────────────────────────
      const vehicles = [
        {
          id: 1,
          title: "Land Rover Range P400 LWB Autobiography 2025",
          make: "Land Rover",
          type: "SUV",
          price: 145000000,
          year: 2025,
          mileage: 180,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Santorini Black",
          seats: 5,
          engine: "3.0L P400",
          featured: true,
          badge: "New Arrival",
          badgeCls: "",
          description: "The pinnacle of luxury SUVs, this Range Rover P400 LWB Autobiography arrives in striking Santorini Black with just 180km on the clock. Fitted with the smooth 3.0L P400 mild-hybrid petrol engine and an air suspension system, it delivers an exceptionally composed ride. The long-wheelbase cabin offers rear-seat executive comfort with heated and massaging seats, a panoramic sunroof, and the latest Pivi Pro infotainment. A full service history and balance of manufacturer warranty are included.",
          img: "https://imgur.com/a/FVwCE3q",
          imgs: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
          ],
        },
        {
          id: 2,
          title: "Mercedes-Benz C200 AMG Premium+ 2019",
          make: "Mercedes-Benz",
          type: "Sedan",
          price: 24500000,
          year: 2019,
          mileage: 74500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Obsidian Black",
          seats: 5,
          engine: "2.0L Turbo",
          featured: true,
          badge: "Featured",
          badgeCls: "red-b",
          description: "A stunning example of modern Mercedes-Benz engineering, this C200 AMG Premium+ presents beautifully in Obsidian Black with full AMG styling pack. The 2.0L turbocharged engine offers effortless performance while the 9-speed automatic gearbox ensures silky shifts. Equipped with AMG Sport seats, Burmester sound system, 360° camera, and adaptive cruise control. One previous owner with full Mercedes-Benz service history.",
          img: "https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
          ],
        },
        {
          id: 3,
          title: "BMW X5 xDrive40i M Sport 2021",
          make: "BMW",
          type: "SUV",
          price: 52000000,
          year: 2021,
          mileage: 32000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Alpine White",
          seats: 5,
          engine: "3.0L B58",
          featured: false,
          badge: "Hot Deal",
          badgeCls: "red-b",
          description: "This low-mileage BMW X5 M Sport in Alpine White is a rare find. Powered by the acclaimed 3.0L B58 straight-six engine producing 340hp, it blends genuine performance with everyday practicality. M Sport specification brings bespoke bumpers, 21\" alloys, and an enhanced chassis tune. Features include laser headlights, panoramic roof, Harman Kardon audio, and BMW Live Cockpit Professional. Impeccably maintained with BMW dealer service stamps.",
          img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
          ],
        },
        {
          id: 4,
          title: "Audi Q7 Quattro 2.0L 2017",
          make: "Audi",
          type: "SUV",
          price: 18500000,
          year: 2017,
          mileage: 71300,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Glacier White",
          seats: 7,
          engine: "2.0L TFSI",
          featured: false,
          badge: null,
          badgeCls: "",
          description: "A versatile 7-seater Audi Q7 in immaculate Glacier White. The 2.0L TFSI engine delivers smooth, efficient performance paired with Audi's legendary Quattro all-wheel drive. The spacious three-row interior features Valcona leather seats, MMI Navigation Plus, Bang & Olufsen sound, and a panoramic sunroof. Ideal for families, this well-kept example drives with the refinement you expect from Audi.",
          img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
            "https://images.unsplash.com/photo-1503736334956-4c8f8e4733e5?w=800&q=80",
          ],
        },
        {
          id: 5,
          title: "Toyota Hilux Invincible 2022",
          make: "Toyota",
          type: "Pickup",
          price: 28000000,
          year: 2022,
          mileage: 45000,
          fuel: "Diesel",
          transmission: "Automatic",
          color: "Titanium Silver",
          seats: 5,
          engine: "2.8L Diesel",
          featured: true,
          badge: "Popular",
          badgeCls: "gold-b",
          description: "The legendary Toyota Hilux Invincible — built to handle anything Sri Lanka's roads can throw at it. This 2022 example in Titanium Silver sports the 2.8L diesel engine with 204hp and 500Nm of torque, mated to a smooth 6-speed automatic. Invincible spec adds bi-LED headlights, leather trim, Apple CarPlay, and a sports roll bar. Perfect for both work and weekend adventures, with strong resale value.",
          img: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
            "https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&q=80",
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
          ],
        },
        {
          id: 6,
          title: "Hyundai Santa Fe 2025",
          make: "Hyundai",
          type: "SUV",
          price: 38500000,
          year: 2025,
          mileage: 3750,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Onyx Black",
          seats: 7,
          engine: "2.5L Turbo",
          featured: false,
          badge: "New",
          badgeCls: "",
          description: "Fresh from the showroom with just 3,750km, this Hyundai Santa Fe 2025 represents outstanding value in the premium SUV segment. The 2.5L turbocharged engine delivers 281hp and pairs with an 8-speed wet-clutch DCT for rapid, efficient gear changes. The bold new design is matched by a tech-forward interior featuring a 12.3\" digital cluster, dual 12.3\" screens, Bose premium audio, and Level 2 driver assistance. All 7 seats remain in as-new condition.",
          img: "https://images.unsplash.com/photo-1571127236794-81c899f9f816?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1571127236794-81c899f9f816?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
          ],
        },
        {
          id: 7,
          title: "Honda Civic EX 2019",
          make: "Honda",
          type: "Sedan",
          price: 11500000,
          year: 2019,
          mileage: 18000,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Lunar Silver",
          seats: 5,
          engine: "1.5L Turbo",
          featured: false,
          badge: null,
          badgeCls: "",
          description: "A pristine Honda Civic EX in Lunar Silver with an impressively low 18,000km. Powered by Honda's acclaimed 1.5L VTEC Turbo engine, it delivers an energetic 174hp with class-leading fuel efficiency. The EX grade adds a 7\" touchscreen, Honda Sensing safety suite, heated front seats, and LED headlights throughout. This near-new example represents exceptional reliability and value with Honda's renowned build quality.",
          img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
            "https://images.unsplash.com/photo-1503736334956-4c8f8e4733e5?w=800&q=80",
          ],
        },
        {
          id: 8,
          title: "Audi Q3 S Line 2018",
          make: "Audi",
          type: "SUV",
          price: 16000000,
          year: 2018,
          mileage: 127400,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Navarra Blue",
          seats: 5,
          engine: "1.4L TFSI",
          featured: false,
          badge: null,
          badgeCls: "",
          description: "A stylish Audi Q3 S Line in striking Navarra Blue — the sporty compact SUV for the discerning driver. The 1.4L TFSI engine is punchy and efficient, perfectly suited for city driving and highway cruising alike. S Line specification elevates the exterior with unique bumpers, side skirts, and 18\" alloy wheels, while the interior features sport seats, S Line trim inserts, and Audi's MMI infotainment. Regularly serviced and well presented throughout.",
          img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
          ],
        },
        {
          id: 9,
          title: "Land Rover Range Vogue SDV8 2014",
          make: "Land Rover",
          type: "SUV",
          price: 32000000,
          year: 2014,
          mileage: 79000,
          fuel: "Diesel",
          transmission: "Automatic",
          color: "Corris Grey",
          seats: 5,
          engine: "4.4L V8 Diesel",
          featured: false,
          badge: null,
          badgeCls: "",
          description: "An iconic Range Rover Vogue SDV8 in sophisticated Corris Grey — a full-size luxury SUV that commands presence on any road. The 4.4L V8 diesel engine produces effortless torque and a commanding exhaust note, while the air suspension glides over any surface. Vogue grade brings full leather, heated and ventilated seats, rear entertainment screens, and a meridian sound system. A thorough mechanical inspection is available on request.",
          img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
          ],
        },
        {
          id: 10,
          title: "Merc C200",
          make: "Mercedes-Benz",
          type: "Sedan",
          price: 3000000,
          year: 2012,
          mileage: 90500,
          fuel: "Petrol",
          transmission: "Automatic",
          color: "Black",
          seats: 5,
          engine: "2.0L Turbo",
          featured: true,
          badge: "Sold",
          badgeCls: "",
          description: "A classic Mercedes-Benz C200 in timeless Black — proof that great engineering stands the test of time. Despite its 2012 registration, this example has been carefully maintained with regular servicing and presents well inside and out. The 2.0L turbocharged engine remains smooth and responsive, making it an ideal entry point into the Mercedes-Benz ownership experience. Sold — contact us to find a similar vehicle.",
          img: "https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80",
          imgs: [
            "https://images.unsplash.com/photo-1618843479619-f3d0d81e4d10?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
            "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
          ],
        },
      ];

      const MAKES = [
        "Toyota",
        "Honda",
        "Nissan",
        "Suzuki",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Kia",
        "Hyundai",
        "Mazda",
        "Mitsubishi",
        "MG",
        "Land Rover",
        "Perodua",
        "Proton",
        "Volkswagen",
        "Jeep",
        "Ford",
        "Other",
      ];

      const fmtPrice = (p) =>
        p >= 1000000
          ? "LKR " + (p / 1000000).toFixed(1) + "M"
          : "LKR " + p.toLocaleString();

      // ── ICONS ─────────────────────────────────────────────
      const I = {
        Phone: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
          </svg>
        ),
        Arr: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        ),
        ArrL: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        ),
        Chk: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        Shield: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        Clock: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        Dollar: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        ),
        Users: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        Star: () => (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
        WA: () => (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        ),
        Cam: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        ),
        Lock: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        ),
        Loc: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        IG: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        ),
        TT: () => (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52v-3.4a4.85 4.85 0 01-1.02-.12z" />
          </svg>
        ),
        Fuel: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 22h12V4a1 1 0 00-1-1H4a1 1 0 00-1 1v18zm6-14v4m-3-2h6" />
            <path d="M15 4h2a2 2 0 012 2v5.5a2 2 0 002 2 2 2 0 002-2v-6l-3-3" />
          </svg>
        ),
        Yr: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        Gauge: () => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            <path d="M12 12L8 8" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
        ),
      };

      // ── FADE UP HOOK ──────────────────────────────────────
      function useFadeUp() {
        useEffect(() => {
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
          return () => obs.disconnect();
        });
      }

      // ── COUNT UP ──────────────────────────────────────────
      function Counter({ target, suffix = "" }) {
        const ref = useRef();
        const [n, setN] = useState(0);
        const [go, setGo] = useState(false);
        useEffect(() => {
          const obs = new IntersectionObserver(
            ([e]) => {
              if (e.isIntersecting) {
                setGo(true);
                obs.disconnect();
              }
            },
            { threshold: 0.5 },
          );
          if (ref.current) obs.observe(ref.current);
          return () => obs.disconnect();
        }, []);
        useEffect(() => {
          if (!go) return;
          let start = null;
          const dur = 1800;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }, [go, target]);
        return (
          <span ref={ref}>
            {n.toLocaleString()}
            {suffix}
          </span>
        );
      }

      // ── VEHICLE CARD ──────────────────────────────────────
      function VehicleCard({ v, onDetail }) {
        return (
          <div className="vehicle-card fade-up" onClick={() => onDetail(v)}>
            <div className="vehicle-img">
              {v.badge && (
                <div className={`vehicle-badge ${v.badgeCls}`}>{v.badge}</div>
              )}
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80";
                }}
              />
            </div>
            <div className="vehicle-info">
              <h3>{v.title}</h3>
              <div className="vehicle-price">{fmtPrice(v.price)}</div>
              <div className="vehicle-meta">
                <span>
                  <I.Yr /> {v.year}
                </span>
                <span>
                  <I.Gauge /> {(v.mileage / 1000).toFixed(0)}k km
                </span>
                <span>
                  <I.Fuel /> {v.fuel}
                </span>
              </div>
            </div>
            <div className="vehicle-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDetail(v);
                }}
                className="btn btn-dark btn-sm"
              >
                Details
              </button>
              <a
                href={`https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect! Interested in the " + v.title)}`}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn btn-sm"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  justifyContent: "center",
                }}
              >
                <I.WA /> WhatsApp
              </a>
            </div>
          </div>
        );
      }

      // ── NAVBAR ─────────────────────────────────────────────
      function Navbar({ page, setPage, mobOpen, setMobOpen }) {
        const [scrolled, setScrolled] = useState(false);
        useEffect(() => {
          const fn = () => setScrolled(window.scrollY > 36);
          window.addEventListener("scroll", fn, { passive: true });
          return () => window.removeEventListener("scroll", fn);
        }, []);
        const go = (p, e) => {
          e.preventDefault();
          setPage(p);
          setMobOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return (
          <>
            <nav id="navbar" className={scrolled ? "scrolled" : ""}>
              <div className="container">
                <div className="nav-inner">
                  <a href="#" onClick={(e) => go("home", e)}>
                    <img
                      src="logo.png"
                      alt="CarConnect.lk"
                      className="nav-logo"
                      style={{ height: 38 }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div className="nav-logo-text" style={{ display: "none" }}>
                      Car<span>Connect</span>.lk
                    </div>
                  </a>
                  <div className="nav-links">
                    <a
                      href="#"
                      className={page === "home" ? "active" : ""}
                      onClick={(e) => go("home", e)}
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className={page === "inventory" ? "active" : ""}
                      onClick={(e) => go("inventory", e)}
                    >
                      Browse Cars
                    </a>
                    <a
                      href="#"
                      className={page === "sell" ? "active" : ""}
                      onClick={(e) => go("sell", e)}
                    >
                      Sell Your Car
                    </a>
                  </div>
                  <div className="nav-cta">
                    <a href="tel:+94777150066" className="nav-phone">
                      <I.Phone /> +94 777 150 066
                    </a>
                    <a
                      href="#"
                      onClick={(e) => go("sell", e)}
                      className="btn btn-primary btn-sm"
                    >
                      Sell Free
                    </a>
                    <button
                      className="hamburger"
                      onClick={() => setMobOpen(true)}
                      aria-label="Menu"
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            {mobOpen && (
              <div className="mobile-nav open">
                <button
                  className="mobile-close"
                  onClick={() => setMobOpen(false)}
                >
                  ✕
                </button>
                <a href="#" onClick={(e) => go("home", e)}>
                  Home
                </a>
                <a href="#" onClick={(e) => go("inventory", e)}>
                  Browse Cars
                </a>
                <a href="#" onClick={(e) => go("sell", e)}>
                  Sell Your Car
                </a>
                <a
                  href="tel:+94777150066"
                  style={{
                    fontSize: 16,
                    fontFamily: "Space Grotesk",
                    color: "var(--red)",
                    marginTop: 8,
                  }}
                >
                  +94 777 150 066
                </a>
              </div>
            )}
          </>
        );
      }

      // ── SELL FORM (minimal, single screen) ────────────────
      function SellForm() {
        const [f, setF] = useState({
          name: "",
          phone: "",
          make: "",
          model: "",
          mileage: "",
        });
        const [err, setErr] = useState({});
        const [previews, setPreviews] = useState([]);
        const [done, setDone] = useState(false);

        const set = (k, v) => {
          setF((prev) => ({ ...prev, [k]: v }));
          if (err[k]) setErr((e) => ({ ...e, [k]: "" }));
        };

        const submit = () => {
          const newErr = {};
          if (!f.name.trim()) newErr.name = "Required";
          if (!f.phone.trim()) newErr.phone = "Required";
          if (!f.make) newErr.make = "Select a make";
          if (!f.model.trim()) newErr.model = "Required";
          if (!f.mileage || f.mileage < 0)
            newErr.mileage = "Enter valid mileage";
          setErr(newErr);
          if (Object.keys(newErr).length) return;
          const msg = `Hi CarConnect! I want to sell my vehicle.\n\nName: ${f.name}\nPhone: ${f.phone}\nVehicle: ${f.make} ${f.model}\nMileage: ${parseInt(f.mileage).toLocaleString()} km\n\nPlease contact me!`;
          window.open(
            `https://wa.me/+94777150066?text=${encodeURIComponent(msg)}`,
            "_blank",
          );
          setDone(true);
        };

        const handlePhotos = (e) => {
          Array.from(e.target.files)
            .slice(0, 10)
            .forEach((file) => {
              const r = new FileReader();
              r.onload = (ev) =>
                setPreviews((p) => [...p.slice(0, 9), ev.target.result]);
              r.readAsDataURL(file);
            });
        };

        if (done)
          return (
            <div className="form-card">
              <div className="success-state">
                <div className="success-check">
                  <I.Chk />
                </div>
                <h3>You're All Set!</h3>
                <p>
                  We'll review your details and call you within 2 hours to
                  arrange a free inspection.
                </p>
                <div className="next-steps">
                  <p>What happens next</p>
                  <ol>
                    <li>Team reviews your submission</li>
                    <li>We call you within 2 hours</li>
                    <li>Free inspection at your location</li>
                    <li>You receive your market valuation</li>
                  </ol>
                </div>
                <a
                  href={`https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect, I just submitted my car — can we chat?")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <I.WA /> Chat on WhatsApp
                </a>
              </div>
            </div>
          );

        return (
          <div className="form-card">
            <div className="form-top">
              <h2>List Your Car</h2>
              <p>Takes 60 seconds · 100% free · We call you within 2 hours</p>
            </div>
            <div className="form-body-inner">
              {/* Row 1: Name + Phone */}
              <div className="form-row">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Your Name</label>
                  <input
                    className={`form-control ${err.name ? "err" : ""}`}
                    placeholder="Full name"
                    value={f.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {err.name && <div className="field-err">{err.name}</div>}
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${err.phone ? "err" : ""}`}
                    placeholder="+94 7XX XXX XXX"
                    value={f.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {err.phone && <div className="field-err">{err.phone}</div>}
                </div>
              </div>

              {/* Row 2: Make + Model */}
              <div className="form-row" style={{ marginTop: 14 }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Make</label>
                  <select
                    className={`form-control ${err.make ? "err" : ""}`}
                    value={f.make}
                    onChange={(e) => set("make", e.target.value)}
                  >
                    <option value="">Select make</option>
                    {MAKES.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  {err.make && <div className="field-err">{err.make}</div>}
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Model</label>
                  <input
                    className={`form-control ${err.model ? "err" : ""}`}
                    placeholder="e.g. Aqua, Vezel, X5"
                    value={f.model}
                    onChange={(e) => set("model", e.target.value)}
                  />
                  {err.model && <div className="field-err">{err.model}</div>}
                </div>
              </div>

              {/* Mileage */}
              <div className="form-group" style={{ marginTop: 14 }}>
                <label>Mileage (km)</label>
                <input
                  type="number"
                  className={`form-control ${err.mileage ? "err" : ""}`}
                  placeholder="e.g. 45000"
                  value={f.mileage}
                  onChange={(e) => set("mileage", e.target.value)}
                  min="0"
                />
                {err.mileage && <div className="field-err">{err.mileage}</div>}
              </div>

              {/* Photos */}
              <div className="form-group">
                <label>
                  Photos{" "}
                  <span
                    style={{
                      color: "var(--g300)",
                      fontWeight: 400,
                      letterSpacing: 0,
                    }}
                  >
                    — optional but recommended
                  </span>
                </label>
                <div
                  className="upload-zone"
                  onClick={() => document.getElementById("f-imgs").click()}
                >
                  <I.Cam />
                  <p>
                    Tap to add photos <span>(up to 10)</span>
                  </p>
                  <small>Better photos = faster sale</small>
                </div>
                <input
                  type="file"
                  id="f-imgs"
                  multiple
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handlePhotos}
                />
                {previews.length > 0 && (
                  <div className="photo-previews">
                    {previews.map((src, i) => (
                      <img key={i} src={src} alt="" className="photo-thumb" />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-footer-bar">
              <div className="form-note-sm">
                <I.Lock /> Private &amp; secure
              </div>
              <button className="submit-btn" onClick={submit}>
                <I.WA /> Submit via WhatsApp
              </button>
            </div>
          </div>
        );
      }

      // ── HOME PAGE ──────────────────────────────────────────
      function HomePage({ setPage, toDetail }) {
        useFadeUp();
        const featured = vehicles.filter((v) => v.featured).slice(0, 3);
        return (
          <div>
            {/* HERO */}
            <section id="home-hero">
              <div className="hero-track">
                <div className="hero-stripe" />
                <div className="hero-stripe" />
                <div className="hero-stripe" />
              </div>
              <div className="hero-img-col">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1400&q=80"
                  alt=""
                />
              </div>
              <div className="container">
                <div className="hero-content">
                  <div className="hero-kicker">
                    <span className="hero-kicker-dot" /> Sri Lanka's Premium
                    Auto Marketplace
                  </div>
                  <div className="hero-tag">Est. 2024 — Colombo</div>
                  <div className="big-title" style={{ marginBottom: 18 }}>
                    Sell Your
                    <br />
                    Car <em>Fast.</em>
                  </div>
                  <p className="hero-sub">
                    500+ satisfied sellers. Expert valuation, verified buyers,
                    zero hassle. Get a call within 2 hours.
                  </p>
                  <div className="hero-actions">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("sell");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="btn btn-primary btn-lg"
                    >
                      Sell for Free <I.Arr />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("inventory");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="btn btn-outline btn-lg"
                    >
                      Browse Cars
                    </a>
                  </div>
                  <div className="hero-stats">
                    {[
                      { n: 100, s: "+", l: "Cars Sold" },
                      { n: 500, s: "+", l: "Active Buyers" },
                      { n: 98, s: "%", l: "Satisfaction" },
                      { n: 7, s: "", l: "Days to Sell" },
                    ].map((s, i) => (
                      <div key={i} className="hero-stat">
                        <div className="num">
                          <Counter target={s.n} suffix={s.s} />
                        </div>
                        <div className="lbl">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-scroll">
                <div className="hero-scroll-line" /> scroll
              </div>
            </section>

            {/* TRUST BAR */}
            <div className="trust-bar">
              <div className="container">
                <div className="trust-items">
                  {[
                    { i: <I.Shield />, t: "Verified Buyers Only" },
                    { i: <I.Clock />, t: "Sell in 7 Days" },
                    { i: <I.Dollar />, t: "Best Market Price" },
                    { i: <I.Chk />, t: "100% Free to List" },
                    { i: <I.Shield />, t: "Secure Transactions" },
                  ].map((t, i) => (
                    <div key={i} className="trust-item">
                      {t.i} {t.t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WHY US */}
            <section className="section" style={{ background: "var(--white)" }}>
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 24,
                    marginBottom: 40,
                    flexWrap: "wrap",
                  }}
                >
                  <div className="fade-up">
                    <div className="eyebrow">Why CarConnect</div>
                    <div className="section-title">
                      Built for <em>Sellers.</em>
                    </div>
                  </div>
                  <p className="section-sub fade-up d1" style={{ margin: 0 }}>
                    Sri Lanka's most seller-friendly automotive platform —
                    combining technology, expertise, and an active buyer
                    network.
                  </p>
                </div>
                <div className="features-grid">
                  {[
                    {
                      n: "01",
                      h: "Sell in 7 Days",
                      p: "Our active buyer network gets your vehicle in front of serious buyers instantly. No more waiting months.",
                    },
                    {
                      n: "02",
                      h: "Best Market Valuation",
                      p: "Professional valuation ensures you never undersell. We negotiate hard on your behalf.",
                    },
                    {
                      n: "03",
                      h: "Zero Risk",
                      p: "We handle all legal documentation and ensure payment is secured before ownership transfers.",
                    },
                    {
                      n: "04",
                      h: "5,000+ Verified Buyers",
                      p: "Instant access to our database of pre-qualified, serious buyers actively looking right now.",
                    },
                    {
                      n: "05",
                      h: "Multi-Platform Reach",
                      p: "Your vehicle features across CarConnect.lk, social media, and our buyer network simultaneously.",
                    },
                    {
                      n: "06",
                      h: "100% Free to List",
                      p: "No upfront costs, no listing fees. We only earn when you sell — so we're fully motivated.",
                    },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className={`feature-card fade-up d${(i % 3) + 1}`}
                    >
                      <div className="feature-num">{f.n}</div>
                      <h3>{f.h}</h3>
                      <p>{f.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROCESS */}
            <section className="process-section">
              <div className="container">
                <div className="process-header fade-up">
                  <div className="eyebrow">How It Works</div>
                  <div className="section-title" style={{ color: "#fff" }}>
                    Three Steps. <em>Done.</em>
                  </div>
                  <p className="section-sub" style={{ margin: "0 auto" }}>
                    From listing to payment — we've streamlined every step.
                  </p>
                </div>
                <div className="steps-grid">
                  {[
                    {
                      n: "01",
                      h: "Submit Your Vehicle",
                      p: "Fill our quick form with your details. Takes 60 seconds — completely free.",
                    },
                    {
                      n: "02",
                      h: "We Inspect & Value It",
                      p: "Our expert team visits you, inspects, and gives you a fair market valuation.",
                    },
                    {
                      n: "03",
                      h: "Get Paid Fast",
                      p: "We connect you with the right buyer, handle all paperwork, and ensure safe payment.",
                    },
                  ].map((s, i) => (
                    <div key={i} className={`step-card fade-up d${i + 1}`}>
                      <div className="step-n">{s.n}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
                <div className="process-cta fade-up">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage("sell");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="btn btn-primary btn-lg"
                  >
                    Start Selling — It's Free <I.Arr />
                  </a>
                </div>
              </div>
            </section>

            {/* STATS */}
            <section className="stats-section">
              <div className="container">
                <div className="stats-grid">
                  {[
                    { n: 100, s: "+", l: "Vehicles Sold" },
                    { n: 500, s: "+", l: "Active Buyers" },
                    { n: 98, s: "%", l: "Satisfaction Rate" },
                    { n: 7, s: "", l: "Days Avg. Sale" },
                  ].map((s, i) => (
                    <div key={i} className={`stat-card fade-up d${i + 1}`}>
                      <div className="stat-num">
                        <Counter target={s.n} suffix={s.s} />
                      </div>
                      <div className="stat-label">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FEATURED VEHICLES */}
            <section className="section" style={{ background: "var(--off)" }}>
              <div className="container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 20,
                    marginBottom: 36,
                  }}
                >
                  <div className="fade-up">
                    <div className="eyebrow">The Inventory</div>
                    <div className="section-title">
                      Featured <em>Vehicles</em>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage("inventory");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="btn btn-outline fade-up"
                  >
                    View All <I.Arr />
                  </a>
                </div>
                <div className="vehicles-grid">
                  {featured.map((v) => (
                    <VehicleCard key={v.id} v={v} onDetail={toDetail} />
                  ))}
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section" style={{ background: "var(--white)" }}>
              <div className="container">
                <div
                  style={{ textAlign: "center", marginBottom: 40 }}
                  className="fade-up"
                >
                  <div className="eyebrow" style={{ justifyContent: "center" }}>
                    Reviews
                  </div>
                  <div className="section-title">
                    Sellers <em>Love Us</em>
                  </div>
                </div>
                <div className="testimonials-grid">
                  {[
                    {
                      q: "Sold my BMW X5 in just 5 days! The team was incredibly professional and got me a price far above what dealers offered.",
                      n: "Chamara P.",
                      r: "Sold BMW X5, Colombo",
                      i: "C",
                    },
                    {
                      q: "The whole process was smooth from start to finish. CarConnect handled everything — inspection, paperwork, everything.",
                      n: "Dilini S.",
                      r: "Sold Toyota Prius, Kandy",
                      i: "D",
                    },
                    {
                      q: "I was skeptical but they got me 15% more than expected. The valuation was spot-on and the buyer was serious.",
                      n: "Rohan M.",
                      r: "Sold Land Rover, Negombo",
                      i: "R",
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className={`testimonial-card fade-up d${i + 1}`}
                    >
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <I.Star key={s} />
                        ))}
                      </div>
                      <p className="testimonial-text">"{t.q}"</p>
                      <div className="testimonial-author">
                        <div className="author-avatar">{t.i}</div>
                        <div>
                          <div className="author-name">{t.n}</div>
                          <div className="author-role">{t.r}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SELL STRIP */}
            <section className="sell-strip">
              <div className="container">
                <div className="sell-strip-inner">
                  <div className="fade-up">
                    <div className="eyebrow">Limited Time</div>
                    <div className="section-title">
                      List for <em>Free</em> Today
                    </div>
                    <p className="section-sub">
                      Get a professional valuation within 24 hours. No
                      commitment, no hidden fees.
                    </p>
                  </div>
                  <div className="sell-strip-actions fade-up d2">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage("sell");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="btn btn-primary btn-lg"
                    >
                      Sell Your Car — Free
                    </a>
                    <a
                      href="https://wa.me/+94777150066?text=Hi%20CarConnect%2C%20I%20want%20to%20sell%20my%20vehicle"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-lg"
                      style={{
                        background: "rgba(37,211,102,0.1)",
                        border: "1px solid rgba(37,211,102,0.25)",
                        color: "#25D366",
                      }}
                    >
                      <I.WA /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }

      // ── SELL PAGE ──────────────────────────────────────────
      function SellPage() {
        useFadeUp();
        return (
          <div>
            <div className="page-hero">
              <div className="breadcrumb">
                <span>Home</span>
                <span className="sep">/</span>
                <span style={{ color: "var(--navy)" }}>Sell</span>
              </div>
              <div
                className="eyebrow"
                style={{ justifyContent: "center", marginBottom: 12 }}
              >
                Free Vehicle Listing
              </div>
              <h1>
                Sell Fast. <em>Sell Smart.</em>
              </h1>
              <p>
                60-second form · Free inspection · Best market price · Zero fees
              </p>
            </div>
            <section className="sell-form-section">
              <div className="container">
                <div className="sell-layout">
                  <div className="sell-benefits fade-up">
                    <div className="eyebrow">Why Choose Us</div>
                    <div className="section-title" style={{ marginBottom: 4 }}>
                      Thousands Trust <em>CarConnect</em>
                    </div>
                    <p className="section-sub">
                      Sri Lanka's fastest way to sell your vehicle —
                      professionally, safely, and at the best price.
                    </p>
                    <div className="sell-benefits-list">
                      {[
                        {
                          i: <I.Clock />,
                          h: "Sell in as Little as 7 Days",
                          d: "Our active buyer network gets your vehicle sold fast. No more waiting months.",
                        },
                        {
                          i: <I.Dollar />,
                          h: "Best Market Price",
                          d: "Professional valuation ensures you never undersell. We negotiate hard for you.",
                        },
                        {
                          i: <I.Shield />,
                          h: "Zero Risk, Full Security",
                          d: "We handle all documentation. Payment secured before ownership transfers.",
                        },
                        {
                          i: <I.Users />,
                          h: "5,000+ Pre-Qualified Buyers",
                          d: "Verified, serious buyers who are actively looking for vehicles right now.",
                        },
                        {
                          i: <I.Chk />,
                          h: "100% Free to List",
                          d: "No upfront costs. We only earn when you sell — fully aligned with your success.",
                        },
                      ].map((b, i) => (
                        <div key={i} className="benefit-row">
                          {b.i}
                          <div>
                            <strong>{b.h}</strong>
                            <span>{b.d}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="fade-up d2">
                    <SellForm />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }

      // ── INVENTORY PAGE ─────────────────────────────────────
      function InventoryPage({ toDetail }) {
        useFadeUp();
        const [fl, setFl] = useState({
          make: "",
          type: "",
          price: "",
          year: "",
          search: "",
        });
        const [sort, setSort] = useState("newest");
        const set = (k, v) => setFl((f) => ({ ...f, [k]: v }));
        const clear = () =>
          setFl({ make: "", type: "", price: "", year: "", search: "" });

        let list = vehicles.filter((v) => {
          if (fl.make && v.make !== fl.make) return false;
          if (fl.type && v.type !== fl.type) return false;
          if (fl.price && v.price > parseInt(fl.price)) return false;
          if (fl.year && v.year < parseInt(fl.year)) return false;
          if (
            fl.search &&
            !v.title.toLowerCase().includes(fl.search.toLowerCase()) &&
            !v.make.toLowerCase().includes(fl.search.toLowerCase())
          )
            return false;
          return true;
        });
        if (sort === "price-low")
          list = [...list].sort((a, b) => a.price - b.price);
        else if (sort === "price-high")
          list = [...list].sort((a, b) => b.price - a.price);
        else if (sort === "mileage")
          list = [...list].sort((a, b) => a.mileage - b.mileage);
        else list = [...list].sort((a, b) => b.year - a.year);

        return (
          <div>
            <div className="page-hero">
              <div className="breadcrumb">
                <span>Home</span>
                <span className="sep">/</span>
                <span style={{ color: "var(--navy)" }}>Inventory</span>
              </div>
              <div
                className="eyebrow"
                style={{ justifyContent: "center", marginBottom: 12 }}
              >
                Verified & Inspected
              </div>
              <h1>
                Browse Our <em>Inventory</em>
              </h1>
              <p>
                Every vehicle is inspected and quality-guaranteed. Find your
                next car with confidence.
              </p>
            </div>
            <section className="inventory-section">
              <div className="container">
                <div className="filter-bar fade-up">
                  <div className="filter-group">
                    <label>Make</label>
                    <select
                      value={fl.make}
                      onChange={(e) => set("make", e.target.value)}
                    >
                      <option value="">All Makes</option>
                      {[
                        "Toyota",
                        "Honda",
                        "BMW",
                        "Mercedes-Benz",
                        "Audi",
                        "Land Rover",
                        "Hyundai",
                        "Nissan",
                      ].map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Body Type</label>
                    <select
                      value={fl.type}
                      onChange={(e) => set("type", e.target.value)}
                    >
                      <option value="">All Types</option>
                      {[
                        "SUV",
                        "Sedan",
                        "Hatchback",
                        "Coupe",
                        "Pickup",
                        "Van",
                      ].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Max Budget</label>
                    <select
                      value={fl.price}
                      onChange={(e) => set("price", e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="5000000">Under 5M</option>
                      <option value="10000000">Under 10M</option>
                      <option value="20000000">Under 20M</option>
                      <option value="50000000">Under 50M</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Year</label>
                    <select
                      value={fl.year}
                      onChange={(e) => set("year", e.target.value)}
                    >
                      <option value="">All Years</option>
                      <option value="2023">2023+</option>
                      <option value="2020">2020+</option>
                      <option value="2017">2017+</option>
                      <option value="2014">2014+</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Search</label>
                    <input
                      placeholder="Search..."
                      value={fl.search}
                      onChange={(e) => set("search", e.target.value)}
                    />
                  </div>
                  <button className="filter-btn" onClick={clear}>
                    Clear
                  </button>
                </div>
                <div className="results-header fade-Fup">
                  <p className="results-count">
                    Showing <strong>{list.length}</strong> vehicles
                  </p>
                  <select
                    className="sort-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="mileage">Lowest Mileage</option>
                  </select>
                </div>
                <div className="vehicles-grid">
                  {list.length === 0 ? (
                    <div className="empty-state">
                      <p>No vehicles match your filters.</p>
                      <button onClick={clear} className="btn btn-primary">
                        Clear Filters
                      </button>
                    </div>
                  ) : (
                    list.map((v) => (
                      <VehicleCard key={v.id} v={v} onDetail={toDetail} />
                    ))
                  )}
                </div>
              </div>
            </section>
          </div>
        );
      }

      // ── DETAIL PAGE ────────────────────────────────────────
      function DetailPage({ vehicle, setPage, toDetail }) {
        useFadeUp();
        const [imgIdx, setImgIdx] = useState(0);
        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [sent, setSent] = useState(false);
        useEffect(() => {
          setImgIdx(0);
          setSent(false);
          setName("");
          setPhone("");
        }, [vehicle]);
        if (!vehicle) return null;

        const similar = vehicles
          .filter(
            (v) =>
              v.id !== vehicle.id &&
              (v.make === vehicle.make || v.type === vehicle.type),
          )
          .slice(0, 3);
        const specs = [
          { l: "Make", v: vehicle.make },
          { l: "Year", v: vehicle.year },
          { l: "Mileage", v: (vehicle.mileage / 1000).toFixed(0) + "k km" },
          { l: "Engine", v: vehicle.engine },
          { l: "Fuel", v: vehicle.fuel },
          { l: "Gearbox", v: vehicle.transmission },
          { l: "Type", v: vehicle.type },
          { l: "Colour", v: vehicle.color },
          { l: "Seats", v: vehicle.seats },
        ];

        const inquire = () => {
          if (!name.trim() || !phone.trim()) return;
          const msg = `Hi CarConnect! Interested in the ${vehicle.title} at ${fmtPrice(vehicle.price)}.\n\nName: ${name}\nPhone: ${phone}`;
          window.open(
            `https://wa.me/+94777150066?text=${encodeURIComponent(msg)}`,
            "_blank",
          );
          setSent(true);
        };

        return (
          <div>
            <section className="car-detail-section">
              <div className="container">
                <div style={{ marginBottom: 20 }}>
                  <button
                    onClick={() => {
                      setPage("inventory");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="btn btn-ghost btn-sm"
                    style={{ paddingLeft: 0 }}
                  >
                    <I.ArrL /> Back to Inventory
                  </button>
                </div>
                <div className="car-detail-layout">
                  <div>
                    <div className="gallery-main">
                      <img
                        src={vehicle.imgs[imgIdx]}
                        alt={vehicle.title}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80";
                        }}
                      />
                    </div>
                    <div className="gallery-thumbs">
                      {vehicle.imgs.map((img, i) => (
                        <div
                          key={i}
                          className={`gallery-thumb ${i === imgIdx ? "active" : ""}`}
                          onClick={() => setImgIdx(i)}
                        >
                          <img
                            src={img}
                            alt=""
                            onError={(e) => {
                              e.target.src =
                                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="car-specs">
                      <div className="specs-label">Specifications</div>
                      <div className="specs-grid">
                        {specs.map((s) => (
                          <div key={s.l} className="spec-item">
                            <div className="spec-label">{s.l}</div>
                            <div className="spec-value">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {vehicle.description && (
                      <div className="car-description">
                        <div className="specs-label">About This Vehicle</div>
                        <p>{vehicle.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="car-inquiry">
                    <div className="inquiry-card">
                      <div className="inq-header">
                        <div className="car-price">
                          {fmtPrice(vehicle.price)}
                        </div>
                        <div className="car-title">{vehicle.title}</div>
                        <div className="car-subtitle">
                          {vehicle.year} · {vehicle.fuel} ·{" "}
                          {vehicle.transmission}
                        </div>
                      </div>
                      <div className="inq-body">
                        <a
                          href={`https://wa.me/+94777150066?text=${encodeURIComponent("Hi CarConnect! Interested in the " + vehicle.title + " at " + fmtPrice(vehicle.price))}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-lg"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          <I.WA /> Inquire on WhatsApp
                        </a>
                        <a
                          href="tel:+94777150066"
                          className="btn btn-outline btn-lg"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          <I.Phone /> +94 777 150 066
                        </a>
                        <div className="inq-divider">
                          <div className="inq-divider-label">Quick Inquiry</div>
                          {sent ? (
                            <div className="inq-success">
                              <strong>✓ Message Sent!</strong>We'll contact you
                              shortly.
                            </div>
                          ) : (
                            <>
                              <input
                                className="form-control"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ marginBottom: 8 }}
                              />
                              <input
                                className="form-control"
                                placeholder="Phone Number"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={{ marginBottom: 10 }}
                              />
                              <button
                                onClick={inquire}
                                disabled={!name.trim() || !phone.trim()}
                                style={{
                                  width: "100%",
                                  padding: "11px",
                                  background: "var(--navy)",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "var(--r)",
                                  fontFamily: "Space Grotesk",
                                  fontWeight: 700,
                                  fontSize: 13,
                                  cursor: "pointer",
                                  opacity:
                                    !name.trim() || !phone.trim() ? 0.5 : 1,
                                  transition: "var(--ease)",
                                }}
                              >
                                Send Inquiry
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {similar.length > 0 && (
              <section className="similar-section">
                <div className="container">
                  <div className="section-title" style={{ marginBottom: 28 }}>
                    Similar <em>Vehicles</em>
                  </div>
                  <div className="vehicles-grid">
                    {similar.map((v) => (
                      <VehicleCard key={v.id} v={v} onDetail={toDetail} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      }

      // ── FOOTER ─────────────────────────────────────────────
      function Footer({ setPage }) {
        const go = (p, e) => {
          e.preventDefault();
          setPage(p);
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return (
          <footer>
            <div className="container">
              <div className="footer-grid">
                <div>
                  <div className="footer-brand">
                    Car<span>Connect</span>.lk
                  </div>
                  <p>
                    Sri Lanka's premium automotive marketplace — connecting
                    serious sellers with verified buyers for a faster, smarter
                    vehicle selling experience.
                  </p>
                  <div className="footer-social">
                    <a
                      href="https://www.instagram.com/carconnect.lk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <I.IG />
                    </a>
                    <a
                      href="https://www.tiktok.com/@carconnect.lk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <I.TT />
                    </a>
                    <a
                      href="https://wa.me/+94777150066"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <I.WA />
                    </a>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>Navigation</h4>
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => go("home", e)}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => go("sell", e)}>
                        Sell Your Vehicle
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => go("inventory", e)}>
                        Browse Inventory
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.carconnect.lk/about.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Our Story
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Contact</h4>
                  <ul className="footer-contact">
                    <li>
                      <I.Phone />
                      <a
                        href="tel:+94777150066"
                        style={{ color: "rgba(255,255,255,0.38)" }}
                      >
                        +94 777 150 066
                      </a>
                    </li>
                    <li>
                      <I.Loc />
                      <span>
                        Level 08, Cinnamon Grand Hotel, Galle Road, Colombo 03
                      </span>
                    </li>
                    <li>
                      <I.Clock />
                      <span>Mon–Fri: 9:00am–6:00pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom" id="contact">
                <p>© 2025 CarConnect.lk — All rights reserved.</p>
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms</a>
                </div>
              </div>
            </div>
          </footer>
        );
      }

      // ── APP ────────────────────────────────────────────────
      function App() {
        const [page, setPage] = useState("home");
        const [detailV, setDetailV] = useState(null);
        const [mobOpen, setMobOpen] = useState(false);

        const toDetail = (v) => {
          setDetailV(v);
          setPage("detail");
          window.scrollTo({ top: 0, behavior: "smooth" });
        };

        return (
          <>
            <Navbar
              page={page}
              setPage={setPage}
              mobOpen={mobOpen}
              setMobOpen={setMobOpen}
            />
            <main style={{ paddingTop: 68 }}>
              {page === "home" && (
                <HomePage setPage={setPage} toDetail={toDetail} />
              )}
              {page === "sell" && <SellPage />}
              {page === "inventory" && <InventoryPage toDetail={toDetail} />}
              {page === "detail" && (
                <DetailPage
                  vehicle={detailV}
                  setPage={setPage}
                  toDetail={toDetail}
                />
              )}
            </main>
            <Footer setPage={setPage} />
            <a
              href="https://wa.me/+94777150066?text=Hi%20CarConnect!"
              target="_blank"
              rel="noreferrer"
              className="wa-float"
            >
              <div className="wa-pulse" />
              <I.WA />
            </a>
            <div className="mob-cta">
              <a
                href="tel:+94777150066"
                className="btn btn-outline"
                style={{
                  padding: "11px 14px",
                  fontSize: 12.5,
                  justifyContent: "center",
                }}
              >
                <I.Phone /> Call
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("sell");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="btn btn-primary"
                style={{
                  flex: 2,
                  padding: "11px",
                  fontSize: 12.5,
                  justifyContent: "center",
                }}
              >
                Sell My Car — Free
              </a>
            </div>
          </>
        );
      }

      ReactDOM.createRoot(document.getElementById("root")).render(<App />);
