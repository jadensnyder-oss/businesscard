import './styles/app.css';

/*
  === ADD A CUSTOM CLIENT (screenshot + Figma bottom sheet) ===
  1. Add a slug key under CLIENT_ASSETS with:
       screenshotHtml — full-screen confirmation behind the sheet.
         • Formats: PNG or JPEG, embedded as data-URI base64 (not a separate file), or a file path.
         • For a phone-sized export (e.g. 393×852), use class s4-phone-screenshot so it is not cropped:
           `<img src="..." alt="" class="s4-phone-screenshot">`
         • For a full-bleed “wallpaper” that should fill the viewport (may crop), you can instead use
           width:100%; min-height:100vh; object-fit:cover; object-position:top (no s4-phone-screenshot).
         Example (data URI wallpaper):
           `<img src="data:image/png;base64,..." alt="" style="width:100%;display:block;min-height:100vh;object-fit:cover;object-position:top">`
         Convert to base64: `base64 -i your.png` (macOS) then paste. Use `data:image/jpeg;base64,...` for JPEG.
       sheetHtml — optional; only for a fully custom overlay (paste Figma HTML, inline styles). Omit
         roktPlacement.customHtml on the client to use DEMO_OFFERS (three hero-image steps) in renderSheet().
         Footer links in demos open Rokt-RLC-next.html in a new tab; keep the close (✕) non-interactive if matching that pattern.
  2. Add or update CLIENTS["your-slug"] with confirmationPage:
       orderConfirmationHtml: CLIENT_ASSETS["your-slug"].screenshotHtml,
       roktPlacement: { customHtml: CLIENT_ASSETS["your-slug"].sheetHtml }   (omit entire roktPlacement to use DEMO_OFFERS)
     Set displayName, searchTerms[], brandColor, and optional annualTransactions like other entries.
  3. When a prospect matches searchTerms, they get this full demo. Unmatched input uses _default.
*/

// === PER-CLIENT ASSETS ===
const CLIENT_ASSETS = {
  "smoothie-king": {
    screenshotHtml: `<img src="/assets/smoothie-king/confirmation.png?v=sk-confirm-20260413" alt="" class="s4-phone-screenshot" width="473" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "scooters-coffee": {
    screenshotHtml: `<img src="/assets/scooters-coffee/confirmation.png" alt="" class="s4-phone-screenshot" width="473" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "panera-bread": {
    screenshotHtml: `<img src="/assets/panera-bread/confirmation.png" alt="" class="s4-phone-screenshot" width="496" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "zaxbys": {
    screenshotHtml: `<img src="/assets/zaxbys/confirmation.png" alt="" class="s4-phone-screenshot" width="502" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "panda-restaurant": {
    screenshotHtml: `<img src="/assets/panda-express/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "churchs-chicken": {
    screenshotHtml: `<img src="/assets/churchs-chicken/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "del-taco": {
    screenshotHtml: `<img src="/assets/del-taco/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "jersey-mikes": {
    screenshotHtml: `<img src="/assets/jersey-mikes/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "daves-hot-chicken": {
    screenshotHtml: `<img src="/assets/daves-hot-chicken/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "marcos-pizza": {
    screenshotHtml: `<img src="/assets/marcos-pizza/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "krispy-krunchy": {
    screenshotHtml: `<img src="/assets/krispy-krunchy/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
  "five-guys": {
    screenshotHtml: `<img src="/assets/five-guys/confirmation.png" alt="" class="s4-phone-screenshot" width="472" height="1024" decoding="sync" fetchpriority="high">`,
  },
};

// === CONFIG ===
const CLIENTS = {
  "bloomin-brands":       { displayName: "Bloomin' Brands",       searchTerms: ["bloomin", "bloomin brands", "bloomin' brands"], hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#C8102E", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "inspire-brands":       { displayName: "Inspire Brands",        searchTerms: ["inspire", "inspire brands"],                   hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#E31837", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "panda-restaurant":     { displayName: "Panda Restaurant Group", searchTerms: ["panda restaurant"],                             hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#E40022", brandFont: "Montserrat, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["panda-restaurant"].screenshotHtml, confirmationBg: "#D4202A" } },
  "panda-express":        { displayName: "Panda Express",           searchTerms: ["panda", "panda express"],                       hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#E40022", brandFont: "Montserrat, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["panda-restaurant"].screenshotHtml, confirmationBg: "#D4202A" } },
  "shake-shack":          { displayName: "Shake Shack",            searchTerms: ["shake shack", "shakeshack"],                   hasCustomDemo: true, annualTransactions: 50000000, confirmationPage: { brandColor: "#52B043", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "smoothie-king":        { displayName: "Smoothie King",          searchTerms: ["smoothie king", "smoothie"],                  hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#B5121B", brandFont: "'Roboto Condensed', sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["smoothie-king"].screenshotHtml } },
  "subway":               { displayName: "SUBWAY",                 searchTerms: ["subway"],                                      hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#009B48", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "scooters-coffee":      { displayName: "Scooter's Coffee",       searchTerms: ["scooter", "scooters", "scooter's coffee"],     hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#F7941D", brandFont: "Inter, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["scooters-coffee"].screenshotHtml } },
  "panera-bread":         { displayName: "Panera Bread",           searchTerms: ["panera", "panera bread"],                     hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#1D4321", brandFont: "Inter, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["panera-bread"].screenshotHtml } },
  "el-pollo-loco":        { displayName: "El Pollo Loco",          searchTerms: ["el pollo", "el pollo loco", "pollo loco"],     hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#F7A200", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "jersey-mikes":         { displayName: "Jersey Mike's",          searchTerms: ["jersey mike", "jersey mike's", "jersey mikes"],hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#EE000C", brandFont: "Inter, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["jersey-mikes"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "churchs-chicken":      { displayName: "Church's Texas Chicken", searchTerms: ["church", "church's", "churchs", "texas chicken"], hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#FFBB00", brandFont: "Montserrat, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["churchs-chicken"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "daves-hot-chicken":    { displayName: "Dave's Hot Chicken",     searchTerms: ["dave", "dave's hot chicken", "daves hot chicken"], hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#F5D60A", brandFont: "Barlow, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["daves-hot-chicken"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "del-taco":             { displayName: "Del Taco",               searchTerms: ["del taco"],                                    hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#147D46", brandFont: "'Barlow Condensed', sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["del-taco"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "dutch-bros":           { displayName: "Dutch Bros",             searchTerms: ["dutch bros", "dutch brothers"],               hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#004B93", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "five-guys":            { displayName: "Five Guys",              searchTerms: ["five guys", "five guys burgers", "5 guys"],   hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#C81633", brandFont: "'Open Sans', sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["five-guys"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "freddys":              { displayName: "Freddy's",               searchTerms: ["freddy", "freddy's", "freddys"],              hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#003087", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "dairy-queen":          { displayName: "Dairy Queen",            searchTerms: ["dairy queen", "dq"],                          hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#CC0000", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "krispy-krunchy":       { displayName: "Krispy Krunchy",         searchTerms: ["krispy krunchy", "krispy"],                   hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#D92632", brandFont: "Inter, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["krispy-krunchy"].screenshotHtml, confirmationBg: "#FFFFFF" } },
  "little-caesars":       { displayName: "Little Caesars",         searchTerms: ["little caesars", "little caesar"],            hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#0033A0", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "marcos-pizza":         { displayName: "Marco's Pizza",          searchTerms: ["marco", "marco's", "marcos pizza"],           hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#FBAE17", brandFont: "Futura, 'Trebuchet MS', sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["marcos-pizza"].screenshotHtml, confirmationBg: "#F5F0EB" } },
  "whataburger":          { displayName: "Whataburger",            searchTerms: ["whataburger", "whata"],                       hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#F3581D", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "zaxbys":               { displayName: "Zaxby's",               searchTerms: ["zaxby", "zaxby's", "zaxbys"],                 hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#E40022", brandFont: "Montserrat, sans-serif", logoUrl: null, orderConfirmationHtml: CLIENT_ASSETS["zaxbys"].screenshotHtml, confirmationBg: "#1B2A4A" } },
  "brinker":              { displayName: "Brinker International",  searchTerms: ["brinker", "chilis", "chili's", "maggiano"],   hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#C8102E", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "nothing-bundt-cakes":  { displayName: "Nothing Bundt Cakes",    searchTerms: ["nothing bundt", "bundt cakes", "nothing bundt cakes"], hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#9C3E97", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "white-castle":         { displayName: "White Castle",           searchTerms: ["white castle"],                               hasCustomDemo: true, annualTransactions: null, confirmationPage: { brandColor: "#1460A8", brandFont: "Arial, sans-serif", logoUrl: null, orderConfirmationHtml: null } },
  "_default": {
    displayName: "Your Brand",
    searchTerms: [],
    hasCustomDemo: true,
    annualTransactions: null,
    confirmationPage: { brandColor: "#000000", brandFont: "Archivo, sans-serif", logoUrl: null, orderConfirmationHtml: null }
  }
};

/*
 * Default bottom-sheet progression: three steps with hero images. Step 1 has no Decline;
 * steps 2–3 show Decline. When adapting a new client’s HTML into this demo, either update
 * DEMO_OFFERS below or add per-client sheet config later. Per-client roktPlacement.customHtml
 * replaces the whole sheet as a single screen unless you refactor to a data-driven steps array.
 */
const DEMO_OFFERS = [
  {
    position: 1,
    format: "hero-image",
    headline: "You've got a $50 gift card to Sephora/Uber!",
    description: "We hope you enjoyed the experience today, check out more by clicking through.",
    benefits: null,
    heroSvg: null,
    heroImage: "/assets/roktrlc-sheet/sephora-uber-eats.png",
    heroImageClass: null,
    logoSvg: null,
    cta: "Claim now",
    dismiss: "No thanks"
  },
  {
    position: 2,
    format: "hero-image",
    headline: "Get a Free Disney+ Trial",
    description: "Watch your favorite shows on Disney+ with this exclusive deal.",
    benefits: null,
    heroSvg: null,
    heroImage: "/assets/roktrlc-sheet/disney-plus.svg",
    heroImageClass: "offer-hero--disney",
    logoSvg: null,
    cta: "Claim now",
    dismiss: "No thanks"
  },
  {
    position: 3,
    format: "hero-image",
    headline: "You've unlocked 75% off a BJ's membership!",
    description: "Sign up for a 1-year The Club Card Membership with BJ's Easy Renewal® for $15 — click below to unlock your offer!",
    benefits: null,
    heroSvg: null,
    heroImage: "/assets/roktrlc-sheet/bjs.svg",
    heroImageClass: "offer-hero--bjs",
    logoSvg: null,
    cta: "Claim now",
    dismiss: "No thanks"
  }
];

/** Intrinsic pixel size of default sheet hero PNGs (width × height) for crisp layout + decode */
const SHEET_HERO_INTRINSIC = {
  "/assets/roktrlc-sheet/sephora-uber-eats.png": [252, 252],
  "/assets/roktrlc-sheet/disney-plus.svg": [1041, 565],
  "/assets/roktrlc-sheet/bjs.svg": [58, 51]
};

// === STATE ===
let state = {
  selectedClientKey: "_default",
  prospectName: "",
  prospectCompany: "",
  prospectRole: "",
  sliderPos: 50,        // 0–100 maps to log scale 500K–100M
  currentOfferPosition: 1,
  lastAnnualForAnim: null
};

let annualAnimId = 0;

function getClient() { return CLIENTS[state.selectedClientKey] || CLIENTS["_default"]; }

// Logarithmic slider helpers
const LOG_MIN = Math.log10(500000);    // ~5.699
const LOG_MAX = Math.log10(100000000); // 8.0
function sliderToTransactions(pos) {
  const p = Math.max(0, Math.min(100, pos));
  return Math.round(Math.pow(10, LOG_MIN + (p / 100) * (LOG_MAX - LOG_MIN)));
}
function transactionsToSlider(txn) {
  if (!txn || txn <= 0) return 0;
  const raw = ((Math.log10(txn) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 100;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

// === SCREEN 2: COMPANY SEARCH ===
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

/** Lowercase, trim, strip punctuation that breaks substring match (e.g. "Five Guys." → "five guys"). */
function normalizeCompanySearchQuery(raw) {
  let s = String(raw || '').trim().toLowerCase();
  s = s.replace(/^[\s.,;:!?]+|[\s.,;:!?]+$/g, '');
  s = s.replace(/[^\p{L}\p{N}\s'-]/gu, ' ').replace(/\s+/g, ' ').trim();
  return s;
}

function companySearchMatchesString(haystack, q) {
  if (!haystack || !q) return false;
  const s = String(haystack).toLowerCase();
  if (s.includes(q)) return true;
  return s.split(/\s+/).some(w => w.length > 0 && w.startsWith(q));
}

function getCompanyMatches(query) {
  const q = normalizeCompanySearchQuery(query);
  if (!q) return [];
  const out = [];
  const seen = new Set();
  for (const [key, client] of Object.entries(CLIENTS)) {
    if (key === '_default') continue;
    const strings = [client.displayName, ...(client.searchTerms || [])];
    const hit = strings.some(str => companySearchMatchesString(str, q));
    if (hit && !seen.has(key)) {
      seen.add(key);
      out.push({ key, displayName: client.displayName });
    }
  }
  out.sort((a, b) => a.displayName.localeCompare(b.displayName));
  return out.slice(0, 12);
}

let companySuggestBlurTimer = null;

function selectCompanyFromList(key) {
  if (!CLIENTS[key]) return;
  state.selectedClientKey = key;
  const input = document.getElementById('input-company');
  input.value = CLIENTS[key].displayName;
  input.classList.add('field-input-success');
  const list = document.getElementById('company-suggest-list');
  list.innerHTML = '';
  list.classList.remove('is-open');
  const hint = document.getElementById('company-hint');
  hint.style.display = 'none';
  hint.textContent = '';
  hint.classList.remove('s2-hint-warning', 's2-hint-neutral');
}

function handleCompanyInput(value) {
  clearTimeout(companySuggestBlurTimer);
  const input = document.getElementById('input-company');
  const list = document.getElementById('company-suggest-list');
  const hint = document.getElementById('company-hint');
  const normalized = normalizeCompanySearchQuery(value);

  if (state.selectedClientKey && state.selectedClientKey !== '_default' &&
      CLIENTS[state.selectedClientKey] &&
      CLIENTS[state.selectedClientKey].displayName === value) {
    list.innerHTML = '';
    list.classList.remove('is-open');
    hint.style.display = 'none';
    hint.classList.remove('s2-hint-warning', 's2-hint-neutral');
    input.classList.add('field-input-success');
    return;
  }

  if (!normalized) {
    state.selectedClientKey = '_default';
    list.innerHTML = '';
    list.classList.remove('is-open');
    hint.style.display = 'none';
    hint.classList.remove('s2-hint-warning', 's2-hint-neutral');
    input.classList.remove('field-input-success');
    return;
  }

  state.selectedClientKey = '_default';
  input.classList.remove('field-input-success');

  const matches = getCompanyMatches(value);
  if (matches.length === 0) {
    list.innerHTML = '';
    list.classList.remove('is-open');
    hint.style.display = 'none';
    hint.classList.remove('s2-hint-warning', 's2-hint-neutral');
    return;
  }

  hint.style.display = 'none';
  hint.classList.remove('s2-hint-warning', 's2-hint-neutral');
  list.innerHTML = matches.map(m =>
    `<button type="button" class="s2-company-option" role="option" onmousedown="event.preventDefault();selectCompanyFromList('${m.key}')">${escapeHtml(m.displayName)}</button>`
  ).join('');
  list.classList.add('is-open');
}

function handleCompanyFocus() {
  clearTimeout(companySuggestBlurTimer);
  handleCompanyInput(document.getElementById('input-company').value);
}

function handleCompanyBlur() {
  companySuggestBlurTimer = setTimeout(() => {
    const list = document.getElementById('company-suggest-list');
    const hint = document.getElementById('company-hint');
    const input = document.getElementById('input-company');
    list.classList.remove('is-open');

    const val = normalizeCompanySearchQuery(input.value);
    if (val && state.selectedClientKey === '_default') {
      hint.textContent = "No brand list match \u2014 we'll use the default experience.";
      hint.style.display = 'block';
      hint.classList.add('s2-hint-warning');
      hint.classList.remove('s2-hint-neutral');
    }
  }, 200);
}

/* Screen 2 required fields — blocks navigation until company, name, and role are filled.
   Lead capture: static HTML cannot append rows to a spreadsheet alone; use one of:
   • HubSpot: embed a HubSpot form (or Forms API) and map these fields, or POST to a workflow.
   • Google Sheets: Google Apps Script “Deploy as web app” URL + fetch() POST from here.
   • Zapier / Make / Segment: send JSON to a webhook, then route to Sheets or CRM. */
function clearS2FieldError(_which) {}

function validateScreen2() {
  const company = document.getElementById('input-company').value.trim();
  state.prospectCompany = company;
  if (!state.selectedClientKey || state.selectedClientKey === '_default') {
    if (!company) {
      const hint = document.getElementById('company-hint');
      hint.textContent = 'Please select or search for a company.';
      hint.style.display = 'block';
      hint.classList.add('s2-hint-warning');
      hint.classList.remove('s2-hint-neutral');
      document.getElementById('input-company').focus();
      return false;
    }
  }
  return true;
}

function goToCalc() {
  if (!validateScreen2()) return;
  // Pre-fill slider if client has annualTransactions
  const client = getClient();
  if (client.annualTransactions) {
    state.sliderPos = transactionsToSlider(client.annualTransactions);
  } else {
    state.sliderPos = transactionsToSlider(6000000);
  }
  state.lastAnnualForAnim = null;
  annualAnimId++;
  goTo('screen-3');
  initCalc();
}

// === SCREEN 3: CALCULATOR ===
// Cached DOM refs populated on first initCalc() call
let els = null;

function setSliderFillPct(pos) {
  const slider = document.getElementById('txn-slider');
  if (!slider) return;
  const p = Math.max(0, Math.min(100, Number(pos)));
  slider.style.setProperty('--calc-fill-percent', p + '%');
}

function initCalc() {
  els = {
    slider:        document.getElementById('txn-slider'),
    sliderDisplay: document.getElementById('slider-display'),
    cardLabel:     document.getElementById('calc-card-label'),
    bigNum:        document.getElementById('calc-big-num'),
    perTxnLabel:   document.getElementById('calc-per-txn-label'),
    perTxn:        document.getElementById('calc-per-txn'),
    monthly:       document.getElementById('calc-monthly'),
    monthlyLabel:  document.getElementById('calc-monthly-label'),
  };
  if (els.slider) els.slider.value = state.sliderPos;
  setSliderFillPct(state.sliderPos);
  updateCalc();
}

function onSlider(val) {
  state.sliderPos = parseInt(val, 10);
  setSliderFillPct(state.sliderPos);
  updateCalc();
}

function animateAnnualDisplay(el, targetAnnual) {
  const id = ++annualAnimId;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const from = state.lastAnnualForAnim;

  if (from == null || reduce) {
    el.textContent = formatMoney(targetAnnual);
    state.lastAnnualForAnim = targetAnnual;
    return;
  }
  if (Math.abs(targetAnnual - from) < 0.01) {
    el.textContent = formatMoney(targetAnnual);
    state.lastAnnualForAnim = targetAnnual;
    return;
  }

  const startT = performance.now();
  const dur = 380;
  const startVal = from;
  function tick(now) {
    if (id !== annualAnimId) return;
    const t = Math.min(1, (now - startT) / dur);
    const eased = t * t * (3 - 2 * t);
    const val = startVal + (targetAnnual - startVal) * eased;
    el.textContent = formatMoney(val);
    state.lastAnnualForAnim = val;
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = formatMoney(targetAnnual);
      state.lastAnnualForAnim = targetAnnual;
    }
  }
  requestAnimationFrame(tick);
}

function updateCalc() {
  if (!els) return;
  const txn = sliderToTransactions(state.sliderPos);
  els.sliderDisplay.textContent = txn.toLocaleString();

  const annual  = txn * 0.15;
  const monthly = annual / 12;
  els.cardLabel.textContent    = 'ANNUAL PROFIT POTENTIAL';
  animateAnnualDisplay(els.bigNum, annual);
  els.perTxnLabel.textContent  = 'Per transaction';
  els.perTxn.textContent       = '$0.15';
  els.monthly.textContent      = formatMoney(monthly);
  els.monthlyLabel.textContent = 'Monthly profit';
}

// === UTILITIES ===
function formatMoney(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000)    return '$' + Math.round(n / 1000) + 'K';
  return '$' + Math.round(n).toLocaleString();
}

// === BOTTOM SHEET ===
function openBottomSheet() {
  renderSheet();
  document.getElementById('rokt-backdrop').classList.add('open');
  document.getElementById('rokt-sheet').classList.add('open');
}

function closeBottomSheet() {
  document.getElementById('rokt-backdrop').classList.remove('open');
  document.getElementById('rokt-sheet').classList.remove('open');
}

function sheetCta() {
  advanceOffer();
}

function sheetDismiss() {
  advanceOffer();
}

function zbSheetCta() {
  closeBottomSheet();
  showVoucherForm();
}

function zbSheetDismiss() {
  closeBottomSheet();
  showVoucherForm();
}

function sheetGoToPrevOffer() {
  if (state.currentOfferPosition > 1) {
    state.currentOfferPosition--;
    renderSheet();
  }
}

function sheetGoToNextOffer() {
  if (state.currentOfferPosition < DEMO_OFFERS.length) {
    state.currentOfferPosition++;
    renderSheet();
  }
}

function advanceOffer() {
  if (state.currentOfferPosition < DEMO_OFFERS.length) {
    state.currentOfferPosition++;
    renderSheet();
  } else {
    closeBottomSheet();
    showVoucherForm();
  }
}

function renderSheet() {
  const client = getClient();
  const sheet = document.getElementById('rokt-sheet');
  const backdrop = document.getElementById('rokt-backdrop');

  // Per-client custom sheet (Figma-exported HTML)
  const customHtml = client.confirmationPage && client.confirmationPage.roktPlacement && client.confirmationPage.roktPlacement.customHtml;
  if (customHtml) {
    sheet.innerHTML = customHtml;
    sheet.classList.add('custom-sheet');
    sheet.classList.remove('sk-figma');
    backdrop.classList.remove('sk-figma-backdrop');
    return;
  }
  sheet.classList.remove('custom-sheet');

  const offer = DEMO_OFFERS[state.currentOfferPosition - 1];
  const pos   = state.currentOfferPosition;

  // Build offer content HTML
  let offerHtml = '';

  if (offer.logoSvg) {
    offerHtml += `<div class="offer-logo">${offer.logoSvg}</div>`;
  }

  if (offer.format === 'hero' && offer.heroSvg) {
    offerHtml += `<div class="offer-hero">${offer.heroSvg}</div>`;
  }

  if (offer.heroImage) {
    const heroClasses = ['offer-hero', 'offer-hero--img', offer.heroImageClass].filter(Boolean).join(' ');
    const dim = SHEET_HERO_INTRINSIC[offer.heroImage];
    const dimAttr = dim ? ` width="${dim[0]}" height="${dim[1]}"` : '';
    const fetchPri = pos === 1 ? ' fetchpriority="high"' : '';
    offerHtml += `<div class="${heroClasses}"><img src="${escapeHtml(offer.heroImage)}" alt=""${dimAttr} decoding="async"${fetchPri} /></div>`;
  }

  offerHtml += `<p class="offer-headline">${escapeHtml(offer.headline)}</p>`;

  if (offer.description) {
    offerHtml += `<p class="offer-desc">${escapeHtml(offer.description)}</p>`;
  }

  if (offer.format === 'benefits' && offer.benefits) {
    const ICONS = { percent: '%', money: '$', check: '✓' };
    offerHtml += `<ul class="offer-benefits">` +
      offer.benefits.map(b =>
        `<li class="benefit-item"><div class="benefit-icon">${ICONS[b.icon] || '·'}</div><span>${b.text}</span></li>`
      ).join('') +
      `</ul>`;
  }

  const termsHtml = '';
  const skTermsHtml = '';

  const totalOffers = DEMO_OFFERS.length;
  const canPrev = pos > 1;
  const canNext = pos < totalOffers;
  const chevLeft = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
  const chevRight = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
  const dotsInner = DEMO_OFFERS.map((_, i) =>
    `<div class="sheet-dot${i + 1 === pos ? ' active' : ''}" role="presentation"></div>`
  ).join('');
  const prevBtn = canPrev
    ? `<button type="button" class="sheet-page-btn sheet-page-btn--prev" onclick="sheetGoToPrevOffer()" aria-label="Previous offer">${chevLeft}</button>`
    : `<div class="sheet-page-btn-spacer"></div>`;
  const nextBtn = canNext
    ? `<button type="button" class="sheet-page-btn sheet-page-btn--next" onclick="sheetGoToNextOffer()" aria-label="Next offer">${chevRight}</button>`
    : `<div class="sheet-page-btn-spacer"></div>`;
  const paginationHtml = `
    <div class="sheet-pagination" role="navigation" aria-label="Offer steps">
      ${prevBtn}
      <div class="sheet-dots" aria-hidden="true">${dotsInner}</div>
      ${nextBtn}
    </div>`;

  const dismissBtnHtml = offer.dismiss
    ? `<button type="button" class="sheet-cta sheet-btn-dismiss" onclick="sheetDismiss()">${escapeHtml(offer.dismiss)}</button>`
    : '';

  const skDismissBtn = offer.dismiss
    ? `<button type="button" class="sk-figma-btn-tertiary" onclick="sheetDismiss()"><span>${escapeHtml(offer.dismiss)}</span></button>`
    : '';

  const isSk = state.selectedClientKey === 'smoothie-king';
  backdrop.classList.toggle('sk-figma-backdrop', isSk);

  if (isSk) {
    sheet.classList.add('sk-figma');
    sheet.innerHTML = `
    <div class="sk-figma-panel">
      <div class="sk-figma-stack">
        <div class="sk-figma-top">
          <div class="sk-figma-order-block">
            <div class="sk-figma-confirmed">Your order is confirmed</div>
            <div class="sk-figma-order-num">Order #: A12345</div>
          </div>
        </div>
        <div class="sk-figma-card">
          ${offerHtml}
          ${skTermsHtml ? `<div class="sk-figma-copy" style="text-align:center">${skTermsHtml}</div>` : ''}
          <div class="sk-figma-btns">
            <button type="button" class="sk-figma-btn-primary" onclick="sheetCta()"><span>${escapeHtml(offer.cta)}</span></button>
            ${skDismissBtn}
          </div>
        </div>
        ${paginationHtml}
      </div>
      <div class="sk-figma-powered">
        <span class="sk-pb400">Powered by </span><a class="sk-pb600" href="Rokt-RLC-next.html" target="_blank" rel="noopener noreferrer">Rokt</a><span class="sk-pb400"> - </span><a class="sk-pb600" href="Rokt-RLC-next.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </div>
    </div>`;
    return;
  }

  const isSc = state.selectedClientKey === 'scooters-coffee';
  backdrop.classList.toggle('sc-figma-backdrop', isSc);

  if (isSc) {
    sheet.classList.add('sc-figma');
    const scDismissBtn = offer.dismiss
      ? `<button type="button" class="sc-figma-btn-tertiary" onclick="sheetDismiss()"><span>${escapeHtml(offer.dismiss)}</span></button>`
      : '';
    sheet.innerHTML = `
    <div class="sc-figma-panel">
      <div class="sc-figma-stack">
        <div class="sc-figma-top">
          <div class="sc-figma-order-block">
            <div class="sc-figma-confirmed">Your order is confirmed</div>
            <div class="sc-figma-order-num">Order #: A12345</div>
          </div>
        </div>
        <div class="sc-figma-card">
          ${offerHtml}
          <div class="sc-figma-btns">
            <button type="button" class="sc-figma-btn-primary" onclick="sheetCta()"><span>${escapeHtml(offer.cta)}</span></button>
            ${scDismissBtn}
          </div>
        </div>
        ${paginationHtml}
      </div>
      <div class="sc-figma-powered">
        <span class="sc-pb400">Powered by </span><span class="sc-pb600">Rokt</span><span class="sc-pb400"> - </span><span class="sc-pb600">Privacy Policy</span>
      </div>
    </div>`;
    return;
  }

  const isPb = state.selectedClientKey === 'panera-bread';
  backdrop.classList.toggle('pb-figma-backdrop', isPb);

  if (isPb) {
    sheet.classList.add('pb-figma');
    const pbDismissBtn = offer.dismiss
      ? `<button type="button" class="pb-figma-btn-tertiary" onclick="sheetDismiss()"><span>${escapeHtml(offer.dismiss)}</span></button>`
      : '';
    sheet.innerHTML = `
    <div class="pb-figma-panel">
      <div class="pb-figma-header">
        <div class="pb-figma-confirmed">Your order is confirmed</div>
        <div class="pb-figma-order-num">Order #: A12345</div>
      </div>
      <div class="pb-figma-body">
        <div class="pb-figma-card">
          ${offerHtml}
          <div class="pb-figma-btns">
            <button type="button" class="pb-figma-btn-primary" onclick="sheetCta()"><span>${escapeHtml(offer.cta)}</span></button>
            ${pbDismissBtn}
          </div>
        </div>
        ${paginationHtml}
      </div>
      <div class="pb-figma-powered">
        <span class="pb-pw400">Powered by </span><span class="pb-pw600">Rokt</span><span class="pb-pw400"> - </span><span class="pb-pw600">Privacy Policy</span>
      </div>
    </div>`;
    return;
  }

  const isZb = state.selectedClientKey === 'zaxbys';
  backdrop.classList.toggle('zb-figma-backdrop', isZb);

  if (isZb) {
    sheet.classList.add('zb-figma');
    const isFirstOffer = pos === 1;
    const isLastOffer = pos === DEMO_OFFERS.length;
    const ctaOnclick = isFirstOffer ? 'onclick="zbSheetCta()"' : '';
    const ctaLabel = isFirstOffer ? escapeHtml(offer.cta) : 'Example';
    const dismissOnclick = isLastOffer ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="zb-sheet">
      <div class="zb-sheet__header">
        <div class="zb-sheet__order-block">
          <div class="zb-sheet__confirmed">Order confirmed!</div>
          <div class="zb-sheet__order-num">Order #42979172875173890</div>
        </div>
        <button type="button" class="zb-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#071C3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="zb-sheet__card">
        ${offerHtml}
        <div class="zb-sheet__btns">
          <button type="button" class="zb-sheet__btn-primary" ${ctaOnclick}>${ctaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="zb-sheet__btn-decline" ${dismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="zb-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isPe = state.selectedClientKey === 'panda-restaurant' || state.selectedClientKey === 'panda-express';
  backdrop.classList.toggle('pe-figma-backdrop', isPe);

  if (isPe) {
    sheet.classList.add('pe-figma');
    const peIsFirst = pos === 1;
    const peIsLast = pos === DEMO_OFFERS.length;
    const peCtaOnclick = peIsFirst ? 'onclick="zbSheetCta()"' : '';
    const peCtaLabel = peIsFirst ? escapeHtml(offer.cta) : 'Example';
    const peDismissOnclick = peIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="pe-sheet">
      <div class="pe-sheet__header">
        <div class="pe-sheet__order-block">
          <div class="pe-sheet__confirmed">Order confirmed!</div>
          <div class="pe-sheet__order-num">Order #42979172875173890</div>
        </div>
        <button type="button" class="pe-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#2A2724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="pe-sheet__card">
        ${offerHtml}
        <div class="pe-sheet__btns">
          <button type="button" class="pe-sheet__btn-primary" ${peCtaOnclick}>${peCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="pe-sheet__btn-decline" ${peDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="pe-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isCh = state.selectedClientKey === 'churchs-chicken';
  backdrop.classList.toggle('ch-figma-backdrop', isCh);

  if (isCh) {
    sheet.classList.add('ch-figma');
    const chIsFirst = pos === 1;
    const chIsLast = pos === DEMO_OFFERS.length;
    const chCtaOnclick = chIsFirst ? 'onclick="zbSheetCta()"' : '';
    const chCtaLabel = chIsFirst ? escapeHtml(offer.cta) : 'Example';
    const chDismissOnclick = chIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="ch-sheet">
      <div class="ch-sheet__header">
        <div class="ch-sheet__order-block">
          <div class="ch-sheet__confirmed">Order confirmed!</div>
          <div class="ch-sheet__order-num">Order #4297538</div>
        </div>
        <button type="button" class="ch-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#2A2724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="ch-sheet__card">
        ${offerHtml}
        <div class="ch-sheet__btns">
          <button type="button" class="ch-sheet__btn-primary" ${chCtaOnclick}>${chCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="ch-sheet__btn-decline" ${chDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="ch-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isDt = state.selectedClientKey === 'del-taco';
  backdrop.classList.toggle('dt-figma-backdrop', isDt);

  if (isDt) {
    sheet.classList.add('dt-figma');
    const dtIsFirst = pos === 1;
    const dtIsLast = pos === DEMO_OFFERS.length;
    const dtCtaOnclick = dtIsFirst ? 'onclick="zbSheetCta()"' : '';
    const dtCtaLabel = dtIsFirst ? escapeHtml(offer.cta) : 'Example';
    const dtDismissOnclick = dtIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="dt-sheet">
      <div class="dt-sheet__header">
        <div class="dt-sheet__order-block">
          <div class="dt-sheet__order-num">Order #4297538</div>
          <div class="dt-sheet__confirmed">Order confirmed!</div>
        </div>
        <button type="button" class="dt-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#147D48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="dt-sheet__card">
        ${offerHtml}
        <div class="dt-sheet__btns">
          <button type="button" class="dt-sheet__btn-primary" ${dtCtaOnclick}>${dtCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="dt-sheet__btn-decline" ${dtDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="dt-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isJm = state.selectedClientKey === 'jersey-mikes';
  backdrop.classList.toggle('jm-figma-backdrop', isJm);

  if (isJm) {
    sheet.classList.add('jm-figma');
    const jmIsFirst = pos === 1;
    const jmIsLast = pos === DEMO_OFFERS.length;
    const jmCtaOnclick = jmIsFirst ? 'onclick="zbSheetCta()"' : '';
    const jmCtaLabel = jmIsFirst ? escapeHtml(offer.cta) : 'Example';
    const jmDismissOnclick = jmIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="jm-sheet">
      <div class="jm-sheet__header">
        <div class="jm-sheet__order-block">
          <div class="jm-sheet__confirmed">Order confirmed!</div>
          <div class="jm-sheet__order-num">Order #4297538</div>
        </div>
        <button type="button" class="jm-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#172554" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="jm-sheet__card">
        ${offerHtml}
        <div class="jm-sheet__btns">
          <button type="button" class="jm-sheet__btn-primary" ${jmCtaOnclick}>${jmCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="jm-sheet__btn-decline" ${jmDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="jm-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isDhc = state.selectedClientKey === 'daves-hot-chicken';
  backdrop.classList.toggle('dhc-figma-backdrop', isDhc);

  if (isDhc) {
    sheet.classList.add('dhc-figma');
    const dhcIsFirst = pos === 1;
    const dhcIsLast = pos === DEMO_OFFERS.length;
    const dhcCtaOnclick = dhcIsFirst ? 'onclick="zbSheetCta()"' : '';
    const dhcCtaLabel = dhcIsFirst ? escapeHtml(offer.cta) : 'Example';
    const dhcDismissOnclick = dhcIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="dhc-sheet">
      <div class="dhc-sheet__header">
        <div class="dhc-sheet__order-block">
          <div class="dhc-sheet__confirmed">ORDER CONFIRMED!</div>
          <div class="dhc-sheet__order-num">Order #42975382029549577</div>
        </div>
        <button type="button" class="dhc-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="dhc-sheet__card">
        ${offerHtml}
        <div class="dhc-sheet__btns">
          <button type="button" class="dhc-sheet__btn-primary" ${dhcCtaOnclick}>${dhcCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="dhc-sheet__btn-decline" ${dhcDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="dhc-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isMp = state.selectedClientKey === 'marcos-pizza';
  backdrop.classList.toggle('mp-figma-backdrop', isMp);

  if (isMp) {
    sheet.classList.add('mp-figma');
    const mpIsFirst = pos === 1;
    const mpIsLast = pos === DEMO_OFFERS.length;
    const mpCtaOnclick = mpIsFirst ? 'onclick="zbSheetCta()"' : '';
    const mpCtaLabel = mpIsFirst ? escapeHtml(offer.cta) : 'Example';
    const mpDismissOnclick = mpIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="mp-sheet">
      <div class="mp-sheet__header">
        <div class="mp-sheet__order-block">
          <div class="mp-sheet__confirmed">Your order is confirmed</div>
          <div class="mp-sheet__order-num">Order #: A12345</div>
        </div>
        <button type="button" class="mp-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="mp-sheet__card">
        ${offerHtml}
        <div class="mp-sheet__btns">
          <button type="button" class="mp-sheet__btn-primary" ${mpCtaOnclick}>${mpCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="mp-sheet__btn-decline" ${mpDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      <div class="mp-sheet__footer">Powered by Rokt - Privacy Policy</div>
      ${paginationHtml}
    </div>`;
    return;
  }

  const isKk = state.selectedClientKey === 'krispy-krunchy';
  backdrop.classList.toggle('kk-figma-backdrop', isKk);

  if (isKk) {
    sheet.classList.add('kk-figma');
    const kkIsFirst = pos === 1;
    const kkIsLast = pos === DEMO_OFFERS.length;
    const kkCtaOnclick = kkIsFirst ? 'onclick="zbSheetCta()"' : '';
    const kkCtaLabel = kkIsFirst ? escapeHtml(offer.cta) : 'Example';
    const kkDismissOnclick = kkIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="kk-sheet">
      <div class="kk-sheet__header">
        <div class="kk-sheet__order-block">
          <div class="kk-sheet__confirmed">Your order is confirmed</div>
          <div class="kk-sheet__order-num">Order #: A12345</div>
        </div>
        <button type="button" class="kk-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="kk-sheet__card">
        ${offerHtml}
        <div class="kk-sheet__btns">
          <button type="button" class="kk-sheet__btn-primary" ${kkCtaOnclick}>${kkCtaLabel}</button>
          ${offer.dismiss ? `<button type="button" class="kk-sheet__btn-decline" ${kkDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
        </div>
      </div>
      ${paginationHtml}
      <div class="kk-sheet__footer">Powered by Rokt - Privacy Policy</div>
    </div>`;
    return;
  }

  const isFg = state.selectedClientKey === 'five-guys';
  backdrop.classList.toggle('fg-figma-backdrop', isFg);

  if (isFg) {
    sheet.classList.add('fg-figma');
    const fgIsFirst = pos === 1;
    const fgIsLast = pos === DEMO_OFFERS.length;
    const fgCtaOnclick = fgIsFirst ? 'onclick="zbSheetCta()"' : '';
    const fgCtaLabel = fgIsFirst ? escapeHtml(offer.cta) : 'Example';
    const fgDismissOnclick = fgIsLast ? 'onclick="zbSheetDismiss()"' : 'onclick="sheetDismiss()"';

    sheet.innerHTML = `
    <div class="fg-sheet">
      <div class="fg-sheet__banner">
        <div class="fg-sheet__order-block">
          <div class="fg-sheet__confirmed">Your order is confirmed</div>
          <div class="fg-sheet__order-num">order #: 605176084605713</div>
        </div>
        <button type="button" class="fg-sheet__close" onclick="zbSheetDismiss()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="fg-sheet__body">
        <div class="fg-sheet__card">
          ${offerHtml}
          <div class="fg-sheet__btns">
            <button type="button" class="fg-sheet__btn-primary" ${fgCtaOnclick}>${fgCtaLabel}</button>
            ${offer.dismiss ? `<button type="button" class="fg-sheet__btn-decline" ${fgDismissOnclick}>${escapeHtml(offer.dismiss)}</button>` : ''}
          </div>
        </div>
        ${paginationHtml}
        <div class="fg-sheet__footer">Powered by Rokt - Privacy Policy</div>
      </div>
    </div>`;
    return;
  }

  backdrop.classList.remove('sk-figma-backdrop');
  backdrop.classList.remove('sc-figma-backdrop');
  backdrop.classList.remove('pb-figma-backdrop');
  backdrop.classList.remove('zb-figma-backdrop');
  backdrop.classList.remove('pe-figma-backdrop');
  backdrop.classList.remove('ch-figma-backdrop');
  backdrop.classList.remove('dt-figma-backdrop');
  backdrop.classList.remove('jm-figma-backdrop');
  backdrop.classList.remove('dhc-figma-backdrop');
  backdrop.classList.remove('mp-figma-backdrop');
  backdrop.classList.remove('kk-figma-backdrop');
  backdrop.classList.remove('fg-figma-backdrop');
  sheet.classList.remove('sk-figma');
  sheet.classList.remove('sc-figma');
  sheet.classList.remove('pb-figma');
  sheet.classList.remove('zb-figma');
  sheet.classList.remove('pe-figma');
  sheet.classList.remove('ch-figma');
  sheet.classList.remove('dt-figma');
  sheet.classList.remove('jm-figma');
  sheet.classList.remove('dhc-figma');
  sheet.classList.remove('mp-figma');
  sheet.classList.remove('kk-figma');
  sheet.classList.remove('fg-figma');

  // All interpolated values are from static DEMO_OFFERS config — not user input.
  sheet.innerHTML = `
    <div class="sheet-header">
      <div class="sheet-confirmed">Your order is confirmed</div>
      <div class="sheet-order-num">Order #: A12345</div>
    </div>

    <div class="sheet-offer">${offerHtml}</div>

    <div class="sheet-cta-wrap">
      <button type="button" class="sheet-cta sheet-btn-main" onclick="sheetCta()">${escapeHtml(offer.cta)}</button>
      ${dismissBtnHtml}
    </div>

    ${termsHtml}
    ${paginationHtml}

    <hr class="sheet-divider">
    <div class="sheet-footer">
      Powered by <a href="Rokt-RLC-next.html" target="_blank" rel="noopener noreferrer">Rokt</a> · <a href="Rokt-RLC-next.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    </div>
  `;
}
// === SCREEN 4: CONFIRMATION PAGE ===
function goToDemo() {
  goTo('screen-4');
  renderConfirmationPage();
  state.currentOfferPosition = 1;
  setTimeout(openBottomSheet, 500);
}

function renderConfirmationPage() {
  const client    = getClient();
  const cp        = client.confirmationPage;
  const container = document.getElementById('s4-confirmation');

  if (cp.orderConfirmationHtml) {
    // TRUST BOUNDARY: orderConfirmationHtml is set only from the static CLIENTS
    // config (dev-controlled). Do not assign user-supplied or network-fetched
    // strings here without sanitization.
    container.innerHTML = cp.orderConfirmationHtml;
    const bg = cp.confirmationBg && /^#[0-9A-Fa-f]{3,8}$/.test(cp.confirmationBg) ? cp.confirmationBg : '';
    container.style.background = bg;
    if (container.querySelector('img.s4-phone-screenshot')) {
      container.classList.add('s4-has-phone-screenshot');
    } else {
      container.classList.remove('s4-has-phone-screenshot');
    }
  } else {
    container.classList.remove('s4-has-phone-screenshot');
    // Generic placeholder
    const safeColor = /^#[0-9A-Fa-f]{3,8}$/.test(cp.brandColor) ? cp.brandColor : '#000000';
    container.style.background = safeColor + '0a'; // 4% opacity tint
    container.innerHTML = `
      <div class="s4-brand-name">${client.displayName}</div>
      <div class="s4-check-circle" style="background:${safeColor}20">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${safeColor}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="s4-order-title">Order Confirmed</div>
      <div class="s4-order-number">Order #A12345</div>
    `;
  }

  const screen4 = document.getElementById('screen-4');
  if (screen4) screen4.scrollTop = 0;
}

// === NAVIGATION ===
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    const scrollEl = target.querySelector('.iphone-scroll');
    if (scrollEl) scrollEl.scrollTop = 0;
    window.scrollTo(0, 0);
  }
}

function goBack(id) {
  goTo(id);
}

function launchExperience() {
  const welcome = document.getElementById('screen-welcome');
  if (!welcome) { goTo('screen-1'); return; }
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { goTo('screen-1'); return; }
  welcome.classList.add('welcome-exit');
  setTimeout(() => {
    goTo('screen-1');
    welcome.classList.remove('welcome-exit');
  }, 400);
}

// === VOUCHER FORM ===
function showVoucherForm() {
  const s4 = document.getElementById('screen-4');
  const below = document.getElementById('s4-below');
  s4.classList.add('s4-show-next');
  below.setAttribute('aria-hidden', 'false');

  // Reset form state
  document.getElementById('voucher-form').reset();
  document.getElementById('voucher-form').closest('#s4-voucher-form').style.display = '';
  document.getElementById('voucher-success').style.display = 'none';
  document.getElementById('voucher-error').style.display = 'none';
  s4.scrollTop = 0;
}

function submitVoucherForm(e) {
  e.preventDefault();
  var firstName = document.getElementById('voucher-first').value.trim();
  var lastName = document.getElementById('voucher-last').value.trim();
  var email = document.getElementById('voucher-email').value.trim();
  var partner = document.getElementById('voucher-partner').value;
  var errorEl = document.getElementById('voucher-error');

  // Validate
  var missing = [];
  if (!firstName) missing.push('first name');
  if (!lastName) missing.push('last name');
  if (!email) missing.push('email');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push('a valid email');
  if (!partner) missing.push('a partner');

  if (missing.length) {
    errorEl.textContent = 'Please provide ' + missing.join(', ') + '.';
    errorEl.style.display = '';
    return;
  }
  errorEl.style.display = 'none';

  var payload = {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName,
    email: email,
    partner: partner,
    company: state.selectedClientKey !== '_default' ? getClient().displayName : '',
    source: 'rokt-rlc-voucher',
    submittedAt: new Date().toISOString()
  };

  fetch('https://n8n.eng.roktinternal.com/webhook/7c2ceb82-45f6-4013-9ba4-fed1046e3170', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(function () {
    console.log('[voucher-lead]', payload);
  });

  // Show success immediately (don't block on API)
  document.getElementById('s4-voucher-form').style.display = 'none';
  document.getElementById('voucher-success').style.display = '';
}

function restartDemo() {
  var s4 = document.getElementById('screen-4');
  s4.classList.remove('s4-show-next');
  var below = document.getElementById('s4-below');
  if (below) below.setAttribute('aria-hidden', 'true');
  goTo('screen-1');
}

Object.assign(window, {
  goTo,
  goBack,
  goToDemo,
  goToCalc,
  onSlider,
  closeBottomSheet,
  sheetCta,
  sheetDismiss,
  zbSheetCta,
  zbSheetDismiss,
  sheetGoToPrevOffer,
  sheetGoToNextOffer,
  launchExperience,
  handleCompanyInput,
  handleCompanyFocus,
  handleCompanyBlur,
  selectCompanyFromList,
  submitVoucherForm,
  restartDemo,
});
