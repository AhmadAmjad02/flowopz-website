// Scroll-driven scenes, reveals, nav theming, hero tilt, contact form and Calendly embed.

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------- Text + block reveals ---------- */
const reveals = $$(".rv, .sp");
if ("IntersectionObserver" in window && !reduced) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

/* ---------- Mobile menu closes on link click ---------- */
$$(".menu a").forEach((a) => a.addEventListener("click", () => (a.closest("details").open = false)));

/* ---------- Contact form ---------- */
const form = $("#lead");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = $("#status");
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company) return; // honeypot
    delete data.company;
    const hook = form.dataset.webhook;
    status.textContent = "Sending...";
    if (hook) {
      fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: location.href, ...data }),
      })
        .then((r) => {
          if (!r.ok) throw new Error();
          form.reset();
          status.textContent = "Thanks. We will reply shortly.";
        })
        .catch(() => (status.textContent = "Something went wrong. Please email us instead."));
    } else {
      // One line per field, using each field's visible label
      const body = Array.from(form.querySelectorAll("label"))
        .map((l) => {
          const field = l.querySelector("input, select, textarea");
          return field ? `${l.firstChild.textContent.trim()}: ${data[field.name] || "-"}` : "";
        })
        .filter(Boolean)
        .join("\n");
      location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(body)}`;
      status.textContent = "Opening your email app. You can also book a time on the calendar.";
    }
  });
}

/* ---------- Calendly embed: lazy-load, auto-height ---------- */
const calendars = $$("iframe[data-calendly]");
if (calendars.length) {
  const load = (fr) => {
    if (fr.src) return;
    fr.src = fr.dataset.calendly + "&embed_domain=" + encodeURIComponent(location.hostname);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            load(e.target);
            co.unobserve(e.target);
          }
        });
      },
      { rootMargin: "120px" }
    );
    calendars.forEach((fr) => co.observe(fr));
  } else calendars.forEach(load);
  addEventListener("message", (e) => {
    if (e.origin !== "https://calendly.com" || !e.data || e.data.event !== "calendly.page_height") return;
    const h = parseInt(e.data.payload.height, 10);
    if (h) calendars.forEach((fr) => { if (fr.contentWindow === e.source) fr.style.height = h + "px"; });
  });
}

if (!reduced) initScenes();

function initScenes() {
  /* ---------- Nav theme follows the section under it ---------- */
  const nav = $(".nav");
  const themed = $$("[data-nav]");
  let bands = [];
  let navTheme = "";
  function updateNav() {
    let t = "dark";
    const y = scrollY + 36;
    for (const [top, bottom, theme] of bands) {
      if (y >= top && y < bottom) { t = theme; break; }
    }
    if (t !== navTheme) { navTheme = t; nav.dataset.t = t; }
  }

  /* ---------- Scenes ---------- */
  let vw = innerWidth, vh = innerHeight;
  const scenes = [];
  const scene = (el, fn, meas) => {
    const o = { el, fn, meas, p: 0, top: 0, range: 1 };
    scenes.push(o);
    return o;
  };

  // Hero: shrinks and fades as the offer sheet slides over it
  const hero = $(".hero.stick");
  if (hero) {
    const inner = $(".hero-in", hero), low = $(".hero-low", hero), h1 = $(".hero-head", hero) || $("h1", hero), card = $(".hcard-o", hero);
    scene(hero, (p) => {
      const k = clamp(p, 0, 1);
      if (hero.parentNode.classList.contains("free")) {
        inner.style.transform = low.style.opacity = h1.style.opacity = "";
        if (card) card.style.transform = "";
        return;
      }
      inner.style.transform = `translate3d(0,${-k * 50}px,0) scale(${1 - k * 0.07})`;
      low.style.opacity = h1.style.opacity = 1 - k * 1.2;
      if (card) card.style.transform = `translate3d(0,${k * vh * 0.25}px,0) scale(${1 + k * 0.12})`;
    }, (o) => { o.top = 0; o.range = vh * 0.6; });
  }

  // Carousel: horizontal card track with 3D tilt + giant text drift
  const car = $("[data-pin=carousel]");
  if (car) {
    const cards = $$(".card", car), track = $(".cards", car), giant = $(".giant", car);
    let centers = [], gw = 0, x0 = 0, x1 = 0;
    scene(car, (p) => {
      const x = lerp(x0, x1, p);
      track.style.transform = `translate3d(${x}px,0,0)`;
      giant.style.transform = `translate3d(${lerp(vw * 0.12, -(gw - vw * 0.88), p)}px,0,0)`;
      for (let i = 0; i < cards.length; i++) {
        const dd = (centers[i] + x - vw / 2) / (vw * 0.5);
        const a = Math.min(Math.abs(dd), 1.7);
        cards[i].style.transform =
          `perspective(1300px) translate3d(0,${a * a * 10}px,${-a * 150}px) rotateY(${-dd * 27}deg) rotateZ(${dd * 3.4}deg) scale(${1 - a * 0.06})`;
      }
    }, () => {
      gw = giant.scrollWidth;
      centers = cards.map((c) => c.offsetLeft + c.offsetWidth / 2);
      x0 = vw / 2 - centers[0];
      x1 = vw / 2 - centers[centers.length - 1];
    });
  }

  // Beyond: star grows, headline splits apart, stats fade in
  const bey = $("[data-pin=beyond]");
  if (bey) {
    const top = $(".b-top", bey), bot = $(".b-bot", bey), copy = $(".b-copy", bey), star = $(".b-star", bey), stats = $(".b-stats", bey);
    scene(bey, (p) => {
      star.style.transform = `scale(${lerp(0.13, 1, Math.pow(p, 0.85))})`;
      const k = clamp(p * 1.6, 0, 1);
      top.style.transform = `translate3d(${-k * vw * 0.05}px,${-k * vh * 0.06}px,0)`;
      bot.style.transform = `translate3d(${k * vw * 0.05}px,${k * vh * 0.06}px,0)`;
      top.style.opacity = bot.style.opacity = 1 - k * 0.72;
      copy.style.opacity = 1 - clamp(p * 3, 0, 1);
      const s = clamp((p - 0.4) * 3, 0, 1);
      stats.style.opacity = s;
      stats.style.setProperty("--sy", (1 - s) * 30 + "px");
    }, () => {});
  }

  // Work: horizontal step cards, focused card scales up
  const wk = $("[data-pin=work]");
  if (wk) {
    const track = $(".wtrack", wk), items = $$(".wk", wk);
    let centers = [], x0 = 0, x1 = 0;
    scene(wk, (p) => {
      const x = lerp(x0, x1, p);
      track.style.transform = `translate3d(${x}px,0,0)`;
      for (let i = 0; i < items.length; i++) {
        const dd = Math.min(Math.abs((centers[i] + x - vw / 2) / (vw * 0.45)), 1.3);
        items[i].style.transform = `scale(${1 - Math.min(dd, 1) * 0.12})`;
        items[i].style.opacity = 1 - Math.min(dd, 1) * 0.26;
      }
    }, () => {
      centers = items.map((c) => c.offsetLeft + c.offsetWidth / 2);
      x0 = vw / 2 - centers[0];
      x1 = vw / 2 - centers[centers.length - 1];
    });
  }

  // Float: parallax tiles at different depths, title fades in and out
  const fl = $("[data-pin=float]");
  if (fl) {
    const tiles = $$(".fl", fl), title = $(".f-title", fl);
    scene(fl, (p) => {
      for (const t of tiles) {
        const s = +t.dataset.s;
        t.style.transform = `translate3d(0,${(0.55 - p * 1.1) * s * vh}px,0)`;
      }
      title.style.opacity = Math.min(1, Math.sin(clamp(p, 0, 1) * Math.PI) * 1.8);
    }, () => {});
  }

  function measure() {
    vw = innerWidth; vh = innerHeight;
    const sy = scrollY;
    bands = themed.map((e) => {
      const r = e.getBoundingClientRect(), t = r.top + sy;
      return [t, t + r.height, e.dataset.nav];
    });
    scenes.forEach((o) => {
      const r = o.el.getBoundingClientRect();
      if (o.el !== hero) { o.top = r.top + sy; o.range = Math.max(1, o.el.offsetHeight - vh); }
      if (o.meas) o.meas(o);
    });
  }

  // Pin heights scale with how far each scene has to travel
  function sizes() {
    const u = innerHeight / 100;
    const set = (el, v) => el && el.style.setProperty("--h", v + "px");
    if (car) set(car, u * 100 + $(".cards", car).scrollWidth * 0.62);
    set(bey, u * 300);
    if (wk) set(wk, u * 100 + $(".wtrack", wk).scrollWidth * 0.62);
    set(fl, u * 260);
    if (hero) {
      const wrap = hero.parentNode;
      wrap.classList.remove("free");
      wrap.classList.toggle("free", innerWidth <= 900 || hero.offsetHeight > innerHeight - 15);
      wrap.style.setProperty("--e", u * 60 + "px");
    }
  }

  let running = false;
  function tick() {
    const sy = scrollY;
    let busy = false;
    scenes.forEach((o) => {
      const visible = sy + vh > o.top - vh && sy < o.top + o.range + vh * 2;
      if (!visible && o.done) return;
      const t = clamp((sy - o.top) / o.range, 0, 1);
      o.p += (t - o.p) * 0.14; // eased follow
      if (Math.abs(t - o.p) < 0.0004) o.p = t;
      else busy = true;
      o.fn(o.p);
      o.done = !visible;
    });
    updateNav();
    running = busy;
    if (busy) requestAnimationFrame(tick);
  }
  const kick = () => {
    if (!running) { running = true; requestAnimationFrame(tick); }
  };

  addEventListener("scroll", kick, { passive: true });
  addEventListener("resize", () => { sizes(); measure(); kick(); });
  function boot() {
    sizes();
    measure();
    scenes.forEach((o) => { o.p = clamp((scrollY - o.top) / o.range, 0, 1); o.fn(o.p); });
    updateNav();
    kick();
  }
  // Layout reads happen after first paint
  requestAnimationFrame(() => requestAnimationFrame(boot));
  addEventListener("load", () => setTimeout(boot, 60));
  $$("details").forEach((x) => x.addEventListener("toggle", () => setTimeout(measure, 30)));

  /* ---------- Hero card pointer tilt ---------- */
  const hc = $(".hcard");
  if (hc && matchMedia("(hover:hover) and (pointer:fine)").matches) {
    addEventListener("pointermove", (e) => {
      hc.style.setProperty("--ry", (e.clientX / vw - 0.5) * 9 + "deg");
      hc.style.setProperty("--rx", -(e.clientY / vh - 0.5) * 7 + "deg");
    }, { passive: true });
  }
}
