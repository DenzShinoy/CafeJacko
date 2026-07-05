/* ═══════════════════════════════════════════
   CAFE JACKO — interactions & digital menu
   ═══════════════════════════════════════════ */

/* ── Digital menu data ─────────────────────
   Transcribed from Cafe Jacko's printed menu
   (photos in /Images). Prices include the $. */
const MENU = {
  breakfast: [
    { name: "Eggs Benny", price: "$22.50", desc: "Lightly poached eggs on toasted focaccia w sautéed spinach, hollandaise & your choice of bacon or mushrooms. Smoked salmon $23.50 · ½ $16.50.", tags: ["fav", "gf"] },
    { name: "French Toast Bacon Burger", price: "$22", desc: "Custard & raisin brioche with streaky bacon, deep-fried banana, blueberries & maple syrup, finished with vanilla ice cream.", tags: ["fav"] },
    { name: "Kung Fu Eggs", price: "$20", desc: "Sautéed garlic prawns, coriander, spinach, chilli & bean sprouts all folded through our classic scrambled eggs.", tags: ["fav"] },
    { name: "Omelette on Toast — The Lot", price: "$22", desc: "Ham, cheese, tomato, spinach & mushrooms. 2–3 fillings $19 · ½ $16.", tags: ["gf"] },
    { name: "Eggs on Toast", price: "$10", desc: "Poached or fried on your choice of grain or focaccia. Scrambled $12 · add bacon $6.", tags: ["v", "gf"] },
    { name: "Toasted Bagel", price: "$15", desc: "Tomato, avocado, feta & bacon — or smoked salmon, cream cheese, avocado & capers.", tags: [] },
    { name: "Nutty Homemade Granola", price: "$14", desc: "Roasted selection of nuts & oats with natural yoghurt and fruit compote.", tags: ["v"] },
    { name: "Toast & Spreads", price: "$10", desc: "Your choice of grain, fruit or focaccia with jam, marmite, honey or peanut butter.", tags: ["v", "gf"] },
  ],
  hearty: [
    { name: "“The Kai” — Big Brekkie", price: "$26", desc: "Sausage (GF), bacon, mushrooms, grilled tomato, hash brown, beans & your choice of eggs on toast. ½ $18.", tags: ["fav", "gf"] },
    { name: "Lambs Fry and Bacon", price: "$22", desc: "Jacko's signature dish — tender lamb's fry in an onion & bacon gravy served with toast. Add egg $2 · ½ $16.", tags: ["fav"] },
    { name: "Hearty Mince on Toast", price: "$20", desc: "Old-school savoury mince on toasted focaccia with your choice of poached or fried egg. ½ $16.", tags: [] },
    { name: "Creamy Mushrooms", price: "$20", desc: "Creamy garlic mushrooms topped with streaky bacon on toast. ½ $16.", tags: [] },
    { name: "Roast Cauli Hash", price: "$20", desc: "Vegan — roasted turmeric cauliflower, garlic button mushrooms, spinach, edamame & cherry tomatoes. ½ $16.", tags: ["v"] },
    { name: "Fries", price: "$9", desc: "With tomato sauce & aioli. Small $6.", tags: ["v"] },
    { name: "Sides", price: "$2–6", desc: "Hollandaise $2 · extra egg $3 · grilled tomatoes, creamy mushrooms, hashbrowns ×2 or sautéed spinach $5 · bacon ×3 or sausage (GF) $6.", tags: [] },
  ],
  lunch: [
    { name: "Open Steak Sandwich", price: "$22", desc: "Scotch fillet on focaccia with greens, beets & caramelised onion, served with fries.", tags: ["fav"] },
    { name: "Chicken Sammie", price: "$20", desc: "Grilled chicken on focaccia with greens, topped with brie & cranberry sauce, served with fries.", tags: ["fav"] },
    { name: "'OUR' Fish & Chips", price: "$22", desc: "Lightly battered market fish with lemony slaw & chips.", tags: [] },
    { name: "Grilled Chicken Caesar Salad", price: "$20", desc: "Grilled chicken breast, cos leaves, croutons, shaved parmesan & bacon, topped with a poached egg.", tags: [] },
    { name: "Club Toasted Sandwiches", price: "ask us", desc: "Build your own — grab a friendly staff member and pick your fillings.", tags: [] },
  ],
  kids: [
    { name: "Cheesy Scrambled", price: "$10", desc: "With spaghetti on toast. A little fulla classic.", tags: ["v"] },
    { name: "Hotcakes", price: "$9", desc: "With bacon, banana & maple syrup.", tags: ["fav"] },
    { name: "Ham & Cheese Omelette", price: "$9", desc: "Simple, fluffy and always demolished.", tags: ["gf"] },
    { name: "Chicken Nuggets & Fries", price: "$10", desc: "The undefeated crowd-pleaser.", tags: [] },
    { name: "Mac and Cheese", price: "$9", desc: "Golden, gooey comfort in a bowl.", tags: ["v"] },
    { name: "Toasted Sandwich", price: "$6", desc: "Pick your fillings, we'll do the rest.", tags: [] },
  ],
  drinks: [
    { name: "Coffee & Hot Chocolate", price: "$4.50–7", desc: "Fair Trade organic espresso, made with love. Tulip $4.50 · medium $5.20 · bowl $7 · extra shot $1.", tags: ["fav"] },
    { name: "Short Black · Long Black · Americano", price: "$4", desc: "Strong, honest, no nonsense.", tags: [] },
    { name: "Turmeric Latte", price: "$5.50", desc: "Golden, warming and caffeine-free.", tags: ["v"] },
    { name: "Bulletproof Coffee", price: "$5", desc: "Double espresso shot with coconut oil & butter.", tags: [] },
    { name: "Iced Drinks", price: "$6–7", desc: "Iced coffee or iced mocha $7 · iced chai, iced latte or iced chocolate $6.", tags: [] },
    { name: "Milkshakes", price: "$6", desc: "Choc, strawberry, banana, lime, caramel or vanilla.", tags: ["v"] },
    { name: "Smoothies", price: "$7", desc: "Banana, berry or tropical.", tags: ["v", "gf"] },
    { name: "Juice by the Glass", price: "$5–6", desc: "Cranberry, orange & pineapple $5 · tomato or spicy tomato $6.", tags: ["v", "gf"] },
    { name: "Teas", price: "$4.20", desc: "English Breakfast & Earl Grey $4.20 · herbal range $4.60 — pure green, blood orange & eucalyptus, elderflower & apple, chamomile, blueberry.", tags: ["v"] },
  ],
};

const TAG_LABELS = {
  gf: '<b class="tag tag--gf" title="Gluten free option">GF</b>',
  v: '<b class="tag tag--v" title="Vegetarian">V</b>',
  fav: '<b class="tag tag--fav" title="Local favourite">★</b>',
};

/* ── Preloader ── */
document.body.classList.add("is-loading");
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("is-done");
    document.body.classList.remove("is-loading");
    revealHero();
  }, 900);
});
// Fallback if load event stalls (e.g. slow font/map)
setTimeout(() => {
  document.getElementById("preloader").classList.add("is-done");
  document.body.classList.remove("is-loading");
  revealHero();
}, 3000);

function revealHero() {
  document.querySelectorAll(".hero .reveal-up, .hero .reveal-mask").forEach((el) => el.classList.add("is-visible"));
  startCounters();
}

/* ── Scroll reveal (everything outside the hero) ──
   rAF-throttled position check — more robust than
   IntersectionObserver across embedded/headless renderers. */
const revealEls = new Set(document.querySelectorAll("main > :not(.hero) .reveal-up, .footer .reveal-up"));
let revealQueued = false;

function checkReveals() {
  revealQueued = false;
  if (!revealEls.size) return;
  const trigger = window.innerHeight - 40;
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger && rect.bottom > 0) {
      el.classList.add("is-visible");
      revealEls.delete(el);
    }
  });
}

function queueReveals() {
  if (!revealQueued) {
    revealQueued = true;
    setTimeout(checkReveals, 16);
  }
}

window.addEventListener("scroll", queueReveals, { passive: true });
window.addEventListener("resize", queueReveals);
window.addEventListener("load", queueReveals);
checkReveals();

/* ── Animated counters ── */
let countersStarted = false;
function startCounters() {
  if (countersStarted) return;
  countersStarted = true;
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1400;
    const start = performance.now();
    const tick = () => {
      const p = Math.min((performance.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) setTimeout(tick, 24);
    };
    tick();
  });
}

/* ── Sticky nav ── */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
const burger = document.getElementById("navBurger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    burger.classList.remove("is-open");
    document.body.style.overflow = "";
  })
);

/* ── Digital menu ── */
const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".menu-tab");
const glider = document.getElementById("tabGlider");

function renderMenu(cat) {
  menuGrid.innerHTML = MENU[cat]
    .map(
      (item, i) => `
      <article class="menu-item" style="--i:${i}">
        <div class="menu-item-top">
          <h3 class="menu-item-name">${item.name}${item.tags.map((t) => TAG_LABELS[t]).join("")}</h3>
          <span class="menu-item-dots"></span>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
      </article>`
    )
    .join("");
  // Class-toggled entrance: the final state applies even if animations are suspended
  setTimeout(() => {
    menuGrid.querySelectorAll(".menu-item").forEach((el) => el.classList.add("is-in"));
  }, 30);
}

function moveGlider(tab) {
  glider.style.left = tab.offsetLeft + "px";
  glider.style.width = tab.offsetWidth + "px";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    moveGlider(tab);
    renderMenu(tab.dataset.cat);
  });
});

renderMenu("breakfast");
// Position glider once fonts/layout settle
window.addEventListener("load", () => moveGlider(document.querySelector(".menu-tab.is-active")));
setTimeout(() => moveGlider(document.querySelector(".menu-tab.is-active")), 300);
window.addEventListener("resize", () => moveGlider(document.querySelector(".menu-tab.is-active")));

/* ── Open now (NZ time) ── */
/* hours: [openMinutes, closeMinutes] keyed by weekday (0 = Sunday) */
const HOURS = {
  0: [7 * 60, 15 * 60],
  1: [6 * 60, 14 * 60],
  2: [6 * 60, 14 * 60],
  3: [6 * 60, 14 * 60],
  4: [6 * 60, 14 * 60],
  5: [6 * 60, 15 * 60],
  6: [7 * 60, 15 * 60],
};

function nzNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Pacific/Auckland" }));
}

function updateOpenStatus() {
  const now = nzNow();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const [open, close] = HOURS[day];
  const pill = document.getElementById("openPill");
  const text = document.getElementById("openPillText");
  if (!pill) return;

  if (mins >= open && mins < close) {
    pill.classList.add("is-open");
    pill.classList.remove("is-closed");
    const closeH = Math.floor(close / 60);
    text.textContent = `Open now · till ${closeH > 12 ? closeH - 12 : closeH}pm`;
  } else {
    pill.classList.add("is-closed");
    pill.classList.remove("is-open");
    // find next opening
    let nextDay = day;
    if (mins >= close) nextDay = (day + 1) % 7;
    const nextOpen = HOURS[nextDay][0];
    const openH = nextOpen / 60;
    const dayLabel = nextDay === day ? "today" : nextDay === (day + 1) % 7 ? "tomorrow" : "";
    text.textContent = `Closed · opens ${openH}am ${dayLabel}`.trim();
  }

  // Highlight today's row in the hours table
  document.querySelectorAll("#hoursList li").forEach((li) => {
    li.classList.toggle("is-today", parseInt(li.dataset.day, 10) === day);
  });
}
updateOpenStatus();
setInterval(updateOpenStatus, 60_000);

/* ── Subtle tilt on cards ── */
const supportsHover = window.matchMedia("(hover: hover)").matches;
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (supportsHover && !prefersReduced) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ── Footer year ── */
document.getElementById("year").textContent = nzNow().getFullYear();
