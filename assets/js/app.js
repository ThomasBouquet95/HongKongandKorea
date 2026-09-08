/* ───────────────────────────────────────────────────────────────────────
   HK → KR 2026 · one-page itinerary
   ─────────────────────────────────────────────────────────────────────── */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const enc = encodeURIComponent;

/* ── labels ──────────────────────────────────────────────────────────── */
const SLOTS = [
  ['morning',   'Morning'],
  ['lunch',     'Lunch'],
  ['afternoon', 'Afternoon'],
  ['evening',   'Evening'],
  ['transit',   'Transit']
];
const KIND = {
  sight:['Sight','k-sight'], food:['Food','k-food'], cafe:['Café','k-cafe'], bar:['Bar','k-bar'],
  shop:['Shop','k-shop'], museum:['Museum','k-museum'], nature:['Nature','k-nature'],
  market:['Market','k-market'], view:['View','k-view'], walk:['Walk','k-walk'],
  hotel:['Hotel','k-hotel'], transit:['Transit','k-transit'], plane:['Flight','k-plane']
};
const MON = ['jan','fév','mar','avr','mai','juin','juil','août','sep','oct','nov','déc'];
const DOW = ['dim','lun','mar','mer','jeu','ven','sam'];
const DOW_L = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const FOODY = new Set(['food','cafe','bar','market']);

/* Status chips, in the order they read best on one line. */
function chipsFor(st){
  const c = [];
  if (st.hard)          c.push(['Hard must','hard']);
  else if (st.m)        c.push(['Must','must']);
  if (st.o)             c.push(['Optional','opt']);
  if (st.b === 'must')  c.push(['Must book','book']);
  if (st.b === 'ok')    c.push(['Booked','booked']);
  if (st.b === 'sold')  c.push(['Sold out online','sold']);
  if (st.w)             c.push(['Weather dependent','weather']);
  return c;
}

const FILTERS = [
  { id:'all',  label:'All',    icon:'i-list'  },
  { id:'must', label:'Must',   icon:'i-pin'   },
  { id:'food', label:'Eat & drink', icon:'k-food' },
  { id:'fav',  label:'Saved',  icon:'i-star'  },
  { id:'todo', label:'To do',  icon:'i-check' }
];

/* ── store ───────────────────────────────────────────────────────────── */
const KEY = 'hkkr26.v1';
const store = {
  d: { done:{}, fav:{}, chk:{} },
  load(){ try{ const r = localStorage.getItem(KEY); if(r) Object.assign(this.d, JSON.parse(r)); }catch(e){} },
  save(){ try{ localStorage.setItem(KEY, JSON.stringify(this.d)); }catch(e){} },
  is(b, id){ return !!this.d[b][id]; },
  toggle(b, id){ this.d[b][id] ? delete this.d[b][id] : this.d[b][id] = 1; this.save(); return this.is(b,id); }
};
store.load();

/* ── date helpers ────────────────────────────────────────────────────── */
const parseD = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const todayISO = () => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`; };
const fmtLong = iso => { const d = parseD(iso); return `${DOW_L[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`; };
const daysBetween = (a,b) => Math.round((parseD(b) - parseD(a)) / 864e5);

/* ── state ───────────────────────────────────────────────────────────── */
const S = {
  di: 0,
  sel: null,
  filter: 'all',
  full: false,
  fitAll: false,
  map: null,
  markers: new Map(),
  route: null,
  tiles: null
};

const els = {};
['daystrip','dayhead','filters','timeline','mapcard','map','mapdock','maplegend','laneB',
 'btnPrev','btnNext','btnToday','btnInfo','btnSaved','btnFull','btnFit','bbTitle','bbSub','bbBar',
 'scrim','sheet','sheetBody','sheetTitle','btnSheetClose','toast','brandSub']
 .forEach(id => els[id] = document.getElementById(id));
const laneA = $('.lane-a');

/* ── util ────────────────────────────────────────────────────────────── */
let toastT;
function toast(msg){
  els.toast.textContent = msg;
  els.toast.classList.add('on');
  clearTimeout(toastT);
  toastT = setTimeout(() => els.toast.classList.remove('on'), 1700);
}
const buzz = ms => { try{ navigator.vibrate && navigator.vibrate(ms); }catch(e){} };
const icon = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

function mapsSearch(st){ return `https://www.google.com/maps/search/?api=1&query=${enc(st.q)}`; }
function mapsNav(st){ return `https://www.google.com/maps/dir/?api=1&destination=${enc(st.q)}`; }
/* Navigation differs by country, so the buttons do too:
   HK  — Google Maps is reliable, so it leads.
   KR  — Naver Map leads (Google can't route in Korea); Google stays as a second opinion.
   CN  — Google and Naver are both useless; what you actually need is the Chinese
         destination in your clipboard to paste into DiDi or Alipay, plus Baidu to look it up. */
function actionsFor(st){
  const gs   = { label:'Google Maps', url: mapsSearch(st), icon:'i-pin' };
  const gnav = { label:'Navigate',    url: mapsNav(st),    icon:'i-nav', primary:true };

  if (st.region === 'KR') return [
    { label:'Naver Map', url:`https://map.naver.com/p/search/${enc(st.q)}`, icon:'i-nav', primary:true },
    gs
  ];
  if (st.region === 'CN'){
    const zh = st.zh || st.name;
    return [
      { label:'DiDi',   copy: zh, icon:'i-copy', primary:true,
        toast:`${zh} copié · collez la destination dans DiDi` },
      { label:'Alipay', copy: zh, icon:'i-copy',
        toast:`${zh} copié · Alipay › Transport › DiDi` },
      { label:'Baidu',  url:`https://map.baidu.com/search/${enc(zh)}`, icon:'i-pin' },
      gs
    ];
  }
  return [gnav, gs];
}

async function copyText(t){
  try { await navigator.clipboard.writeText(t); return true; }
  catch(e){
    try {
      const ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly',''); ta.style.cssText = 'position:fixed;top:-999px';
      document.body.appendChild(ta); ta.select();
      const ok = document.execCommand('copy'); ta.remove(); return ok;
    } catch(e2){ return false; }
  }
}

/* progress of a day = done stops / total stops */
function dayProgress(d){
  const t = d.stops.length;
  const n = d.stops.reduce((a,s) => a + (store.is('done', s.id) ? 1 : 0), 0);
  return { n, t, pct: t ? n/t : 0 };
}
function matches(st, f){
  if (f === 'must') return !!st.m;
  if (f === 'food') return FOODY.has(st.k);
  if (f === 'fav')  return store.is('fav', st.id);
  if (f === 'todo') return !store.is('done', st.id);
  return true;
}
const visibleStops = () => TRIP.days[S.di].stops.filter(s => matches(s, S.filter));

/* ── day strip ───────────────────────────────────────────────────────── */
function buildStrip(){
  const ti = todayISO();
  els.daystrip.innerHTML = TRIP.days.map((d,i) => {
    const dt = parseD(d.date);
    return `<button class="dayp" role="tab" data-i="${i}" aria-selected="false"
              aria-label="${esc(fmtLong(d.date))} — ${esc(d.label)}">
      <span class="dow">${DOW[dt.getDay()]}</span>
      <span class="dnum">${dt.getDate()}</span>
      <span class="mth">${MON[dt.getMonth()]}</span>
      <span class="prog"><i></i></span>
    </button>`;
  }).join('');
  $$('.dayp', els.daystrip).forEach(b => {
    if (TRIP.days[+b.dataset.i].date === ti) b.classList.add('is-today');
    b.addEventListener('click', () => go(+b.dataset.i));
  });
}
function paintStrip(){
  $$('.dayp', els.daystrip).forEach(b => {
    const i = +b.dataset.i, p = dayProgress(TRIP.days[i]);
    b.setAttribute('aria-selected', i === S.di ? 'true' : 'false');
    b.classList.toggle('has-prog', p.n > 0);
    $('.prog i', b).style.width = (p.pct*100).toFixed(0) + '%';
  });
  const cur = $(`.dayp[data-i="${S.di}"]`, els.daystrip);
  cur && cur.scrollIntoView({ inline:'center', block:'nearest', behavior:'smooth' });
}

/* ── filters ─────────────────────────────────────────────────────────── */
function paintFilters(){
  const stops = TRIP.days[S.di].stops;
  els.filters.innerHTML = FILTERS.map(f => {
    const n = stops.filter(s => matches(s, f.id)).length;
    return `<button class="fchip" data-f="${f.id}" aria-pressed="${S.filter===f.id}"
              ${n===0 && f.id!=='all' ? 'disabled style="opacity:.4"' : ''}>
      ${icon(f.icon)}${f.label}<small>${n}</small></button>`;
  }).join('');
  $$('.fchip', els.filters).forEach(b => b.addEventListener('click', () => {
    S.filter = (S.filter === b.dataset.f) ? 'all' : b.dataset.f;
    S.sel = null;
    renderDay();
  }));
}

/* ── day head ────────────────────────────────────────────────────────── */
/* Must book · Drop first if late · Transport tip — the three things
   that are more useful on the ground than another place to visit. */
function dayBlocks(d){
  const rows = [];
  if (d.alert) rows.push(`<p class="dbl warn">${icon('i-alert')}<span>${esc(d.alert)}</span></p>`);
  const line = (k, cls, v) => rows.push(
    `<p class="dbl"><b class="${cls}">${k}</b><span>${esc(v)}</span></p>`);
  if (d.must)                  line('Must do',   'k-must', d.must);
  if (d.book && d.book.length) line('Must book', 'k-book', d.book.join(' · '));
  if (d.drop && d.drop.length) line('Drop first', 'k-drop', d.drop.join(' · '));
  if (d.tip)                   line('Transport', 'k-tip',  d.tip);
  if (d.checks && d.checks.length) rows.push(
    `<div class="dbl checks"><b class="k-chk">Before</b><span class="chkrow">${
      d.checks.map(c => `<button class="chk-chip ${store.is('chk', c.id) ? 'on' : ''}" data-chk="${c.id}">
        ${icon('i-check')}${esc(c.t)}</button>`).join('')}</span></div>`);
  if (!rows.length) return '';
  return `<div class="dblocks" id="dblocks">${rows.join('')}</div>`;
}

function paintHead(){
  const d = TRIP.days[S.di];
  const h = d.hotel != null ? TRIP.hotels[d.hotel] : null;
  const p = dayProgress(d);
  const ti = todayISO();
  const isToday = d.date === ti;

  els.dayhead.innerHTML = `
    <div class="dh-kick">
      <span>Day ${S.di+1} / ${TRIP.days.length}</span><span class="sep"></span>
      <span>${esc(fmtLong(d.date))}</span>
      ${isToday ? '<span class="sep"></span><span style="color:var(--accent)">Today</span>' : ''}
    </div>
    <h1 class="dh-title">${esc(d.label)}</h1>
    <p class="dh-focus" id="dhFocus">${esc(d.focus)}</p>
    <div class="dh-meta">
      <span class="mchip">${icon('i-pin')}${esc(d.city)}</span>
      ${h ? `<a class="mchip go" href="${mapsSearch(h)}" target="_blank" rel="noopener"
              title="${esc(h.name)}">${icon('k-hotel')}<b>${esc(h.short || h.name)}</b></a>` : ''}
      <span class="mchip">${icon('i-check')}${p.n}<span style="color:var(--ink-3)">/${p.t}</span></span>
    </div>
    ${dayBlocks(d)}`;

  const fx = document.getElementById('dhFocus');
  fx && fx.addEventListener('click', () => fx.classList.toggle('more'));
  const db = document.getElementById('dblocks');
  if (db) db.addEventListener('click', e => {
    const chip = e.target.closest('[data-chk]');
    if (chip){
      chip.classList.toggle('on', store.toggle('chk', chip.dataset.chk));
      buzz(8); e.stopPropagation(); return;
    }
    db.classList.toggle('open');
  });

  els.bbTitle.textContent = d.label;
  els.bbSub.textContent = `${d.city} · ${p.n}/${p.t}`;
  els.bbBar.style.width = (p.pct*100).toFixed(0) + '%';
  els.btnPrev.disabled = S.di === 0;
  els.btnNext.disabled = S.di === TRIP.days.length - 1;

  const idx = TRIP.days.findIndex(x => x.date === ti);
  els.btnToday.hidden = idx < 0 || idx === S.di;
  els.btnToday.dataset.i = idx;

  const dd = daysBetween(ti, TRIP.days[0].date);
  els.brandSub.textContent = idx >= 0 ? `Jour ${idx+1} / ${TRIP.days.length}`
                            : dd > 0 ? `J−${dd} · départ 21 sep`
                            : '22 sep – 4 oct 2026';
}

/* ── timeline ────────────────────────────────────────────────────────── */
function stopHTML(st, lead){
  const [klabel, kicon] = KIND[st.k] || KIND.sight;
  const area = lead && st.a ? AREAS[st.a] : null;
  const done = store.is('done', st.id), fav = store.is('fav', st.id);
  const cls = ['stop', st.o ? 'opt':'', done ? 'done':'', fav ? 'fav':'', S.sel === st.id ? 'sel open':''].join(' ');
  return `<li class="${cls}" data-id="${st.id}" id="stop-${st.id.replace('.','-')}">
    <div class="stop-row">
      <button class="numwrap" data-act="done" aria-label="Marquer ${esc(st.name)} comme fait" aria-pressed="${done}">
        <span class="num"><em>${st.n}</em>${icon('i-check')}</span>
      </button>
      <button class="stop-b" data-act="open" aria-expanded="${S.sel === st.id}">
        <span class="l1">
          ${st.t ? `<span class="time">${esc(st.t)}</span>` : ''}
          <span class="nm">${esc(st.name)}</span>
          ${chipsFor(st).map(([l,k]) => `<span class="tag ${k}">${l}</span>`).join('')}
        </span>
        <span class="l2">${icon(kicon)}<span class="txt">${esc(klabel)}${
          area ? `<span class="nt ctx"> · ${esc(area.one)}</span>`
               : st.note ? `<span class="nt"> · ${esc(st.note)}</span>` : ''}</span></span>
      </button>
      <button class="stop-fav" data-act="fav" aria-label="Ajouter ${esc(st.name)} aux favoris" aria-pressed="${fav}">
        ${icon('i-star')}
      </button>
    </div>
    <div class="stop-x">
      ${st.note ? `<p>${esc(st.note)}</p>` : ''}
      ${st.plans ? `<div class="plans">${st.plans.map(pl =>
          `<div class="plan"><b>${esc(pl.k)}</b><span>${esc(pl.d)}</span></div>`).join('')}</div>` : ''}
      ${area ? `<button class="areabtn" data-area="${st.a}">${icon('i-book')}Understand this area<i>→</i></button>` : ''}
      ${st.region === 'CN' ? `<p class="hint">Les boutons DiDi et Alipay copient le nom chinois : collez-le comme destination dans l’app DiDi, ou dans le mini-programme DiDi d’Alipay ou WeChat.</p>` : ''}
      <div class="acts">
        ${actionsFor(st).map(a => a.copy
          ? `<button class="act ${a.primary?'primary':''}" data-copy="${esc(a.copy)}" data-toast="${esc(a.toast||'Copié')}">${icon(a.icon)}${esc(a.label)}</button>`
          : `<a class="act ${a.primary?'primary':''}" href="${a.url}" target="_blank" rel="noopener">${icon(a.icon)}${esc(a.label)}</a>`
        ).join('')}
        <button class="act ${done?'on':''}" data-act="done">${icon('i-check')}${done ? 'Done' : 'Mark done'}</button>
        <button class="act ${fav?'on':''}" data-act="fav">${icon('i-star')}${fav ? 'Saved' : 'Save'}</button>
      </div>
    </div>
  </li>`;
}

function paintTimeline(){
  const list = visibleStops();
  if (!list.length){
    els.timeline.innerHTML = `<p class="empty">Aucune étape pour ce filtre.</p>`;
    return;
  }
  /* Show the neighbourhood context on the first visible stop of each area only,
     so three stops in Sham Shui Po don't repeat the same sentence three times. */
  const seen = new Set();
  const leads = new Map();
  list.forEach(st => {
    if (st.a && AREAS[st.a] && !seen.has(st.a)){ seen.add(st.a); leads.set(st.id, true); }
  });
  els.timeline.innerHTML = SLOTS.map(([slot, label]) => {
    const group = list.filter(s => s.s === slot);
    if (!group.length) return '';
    return `<section class="slot">
      <div class="slot-h"><span class="lab">${label}</span><span class="rule"></span><span class="cnt">${group.length}</span></div>
      <ol class="stops">${group.map(st => stopHTML(st, leads.has(st.id))).join('')}</ol>
    </section>`;
  }).join('');
}

/* ── map ─────────────────────────────────────────────────────────────── */
const darkMQ = window.matchMedia('(prefers-color-scheme:dark)');
const tileURL = () => darkMQ.matches
  ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
  : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

function initMap(){
  if (typeof L === 'undefined'){ els.map.innerHTML = `<p class="empty" style="margin:16px">Carte indisponible hors ligne.</p>`; return; }
  S.map = L.map(els.map, {
    zoomControl:false, attributionControl:true, preferCanvas:true,
    tap:true, zoomSnap:.25, maxZoom:18
  });
  S.tiles = L.tileLayer(tileURL(), {
    maxZoom:19, subdomains:'abcd',
    attribution:'&copy; OpenStreetMap &copy; CARTO'
  }).addTo(S.map);
  darkMQ.addEventListener && darkMQ.addEventListener('change', () => S.tiles.setUrl(tileURL()));
  S.map.on('click', () => { if (S.sel) select(null); });
}

function paintMap(fit = true){
  if (!S.map) return;
  S.markers.forEach(m => S.map.removeLayer(m));
  S.markers.clear();
  if (S.route){ S.map.removeLayer(S.route); S.route = null; }

  const list = visibleStops().filter(s => s.lat && s.lng);
  if (!list.length) return;

  const line = [];
  list.forEach(st => {
    const done = store.is('done', st.id);
    const m = L.marker([st.lat, st.lng], {
      icon: L.divIcon({
        className:'', iconSize:[23,23], iconAnchor:[11.5,11.5],
        html:`<div class="pin ${st.o?'opt':''} ${done?'done':''}" data-id="${st.id}"><i>${st.n}</i></div>`
      }),
      keyboard:false, riseOnHover:true, title: st.name
    }).addTo(S.map);
    m.on('click', () => select(st.id, true));
    S.markers.set(st.id, m);
    line.push([st.lat, st.lng]);
  });

  if (line.length > 1){
    S.route = L.polyline(line, {
      color: getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#B4442C',
      weight: 2, opacity: .55, dashArray: '1 6', lineCap: 'round'
    }).addTo(S.map);
    S.route.bringToBack();
  }
  if (fit) fitDay();

  const dist = line.length > 1 ? line.reduce((a,p,i) => i ? a + km(line[i-1], p) : 0, 0) : 0;
  els.maplegend.textContent =
    `${list.length} stop${list.length>1?'s':''}${dist ? ` · ${dist < 10 ? dist.toFixed(1) : Math.round(dist)} km` : ''}`;
  paintDock();
}

/* haversine, km */
function km(a, b){
  const R = 6371, r = Math.PI/180;
  const dLa = (b[0]-a[0])*r, dLo = (b[1]-a[1])*r;
  const h = Math.sin(dLa/2)**2 + Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dLo/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}
/* single-linkage grouping so an airport 30 km away doesn't flatten the whole day */
function clusterOf(pts, link = 11){
  const n = pts.length, seen = Array(n).fill(false), groups = [];
  for (let i = 0; i < n; i++){
    if (seen[i]) continue;
    seen[i] = true; const q = [i], g = [];
    while (q.length){
      const k = q.pop(); g.push(pts[k]);
      for (let j = 0; j < n; j++) if (!seen[j] && km(pts[k], pts[j]) <= link){ seen[j] = true; q.push(j); }
    }
    groups.push(g);
  }
  return groups.sort((a,b) => b.length - a.length);
}
function fitDay(){
  if (!S.map) return;
  const pts = visibleStops().filter(s => s.lat).map(s => [s.lat, s.lng]);
  if (!pts.length) return;
  const groups = clusterOf(pts);
  const use = (!S.fitAll && groups.length > 1 && groups[0].length >= 2) ? groups[0] : pts;
  const outside = pts.length - use.length;
  els.btnFit.classList.toggle('on', outside > 0);
  els.btnFit.title = outside ? (S.fitAll ? 'Recadrer sur la zone principale' : `Voir les ${outside} point(s) éloigné(s)`) : 'Recadrer';
  els.btnFit.dataset.outside = outside;
  if (use.length === 1) S.map.setView(use[0], 15);
  else S.map.fitBounds(L.latLngBounds(use), { padding: S.full ? [60,90] : [32,32], maxZoom: 16 });
}

function paintDock(){
  const list = visibleStops();
  els.mapdock.innerHTML = list.map(st => `
    <button class="dockcard" data-id="${st.id}" aria-current="${S.sel===st.id}">
      <span class="dc-n">${st.n} · ${(KIND[st.k]||KIND.sight)[0].toUpperCase()}${st.t ? ' · '+esc(st.t) : ''}</span>
      <span class="dc-t">${esc(st.name)}</span>
    </button>`).join('');
  $$('.dockcard', els.mapdock).forEach(b =>
    b.addEventListener('click', () => select(b.dataset.id, true)));
}

/* ── selection ───────────────────────────────────────────────────────── */
function select(id, fromMap = false){
  const prev = S.sel;
  S.sel = (prev === id) ? null : id;

  $$('.stop', els.timeline).forEach(li => {
    const on = li.dataset.id === S.sel;
    li.classList.toggle('sel', on);
    li.classList.toggle('open', on);
    const b = $('.stop-b', li); b && b.setAttribute('aria-expanded', String(on));
  });
  S.markers.forEach((m, mid) => {
    const el = m.getElement && m.getElement();
    const pin = el && el.querySelector('.pin');
    if (pin) pin.classList.toggle('act', mid === S.sel);
    if (mid === S.sel && m.setZIndexOffset) m.setZIndexOffset(1000);
    else if (m.setZIndexOffset) m.setZIndexOffset(0);
  });
  $$('.dockcard', els.mapdock).forEach(b => b.setAttribute('aria-current', String(b.dataset.id === S.sel)));

  if (!S.sel) return;
  const st = TRIP.days[S.di].stops.find(s => s.id === S.sel);
  if (!st) return;

  if (S.map && st.lat){
    const z = Math.max(S.map.getZoom(), 15);
    S.map.flyTo([st.lat, st.lng], z, { duration:.45 });
  }
  if (fromMap){
    const li = $(`.stop[data-id="${S.sel}"]`, els.timeline);
    if (li && !S.full){
      const top = li.getBoundingClientRect().top + window.scrollY - (window.innerHeight * .34) - 70;
      window.scrollTo({ top: Math.max(0, top), behavior:'smooth' });
      li.classList.add('flash');
      setTimeout(() => li.classList.remove('flash'), 950);
    }
    const dc = $(`.dockcard[data-id="${S.sel}"]`, els.mapdock);
    dc && dc.scrollIntoView({ inline:'center', block:'nearest', behavior:'smooth' });
  }
}

/* ── mutations ───────────────────────────────────────────────────────── */
function toggleFlag(bucket, id){
  const st = TRIP.days[S.di].stops.find(s => s.id === id);
  const on = store.toggle(bucket, id);
  buzz(8);
  if (bucket === 'done') toast(on ? `✓ ${st.name}` : `Annulé · ${st.name}`);
  else toast(on ? `★ ${st.name}` : `Retiré des favoris`);

  if ((S.filter === 'fav' && bucket === 'fav') || (S.filter === 'todo' && bucket === 'done')){
    renderDay(); return;
  }
  const li = $(`.stop[data-id="${id}"]`, els.timeline);
  if (li){
    li.classList.toggle(bucket === 'done' ? 'done' : 'fav', on);
    const nb = $('.numwrap', li); nb && nb.setAttribute('aria-pressed', String(bucket==='done' ? on : nb.getAttribute('aria-pressed')));
    const fb = $('.stop-fav', li); if (bucket==='fav' && fb) fb.setAttribute('aria-pressed', String(on));
    $$('.act[data-act]', li).forEach(a => {
      if (a.dataset.act !== bucket) return;
      a.classList.toggle('on', on);
      a.lastChild.textContent = bucket === 'done' ? (on ? 'Done' : 'Mark done') : (on ? 'Saved' : 'Save');
    });
  }
  const m = S.markers.get(id);
  if (m && bucket === 'done'){
    const pin = m.getElement() && m.getElement().querySelector('.pin');
    pin && pin.classList.toggle('done', on);
  }
  paintHead(); paintStrip(); paintFilters();
}

/* ── render / navigation ─────────────────────────────────────────────── */
function renderDay(dir = 0){
  paintHead(); paintFilters(); paintTimeline(); paintStrip(); paintMap(true);
  if (dir){
    laneA.classList.remove('swap-l','swap-r');
    void laneA.offsetWidth;
    laneA.classList.add(dir > 0 ? 'swap-l' : 'swap-r');
  }
}
function go(i, opts = {}){
  i = Math.max(0, Math.min(TRIP.days.length - 1, i));
  if (i === S.di && !opts.force) return;
  const dir = i > S.di ? 1 : -1;
  S.di = i; S.sel = null; S.fitAll = false;
  if (!opts.keepFilter) S.filter = 'all';
  renderDay(dir);
  if (!opts.noScroll) window.scrollTo({ top:0, behavior: opts.instant ? 'auto' : 'smooth' });
  try { history.replaceState(null, '', '#d' + (i+1)); } catch(e){}
}

/* ── fullscreen map ──────────────────────────────────────────────────── */
function setFull(on){
  S.full = on;
  document.body.classList.toggle('mapfull', on);
  $('use', els.btnFull).setAttribute('href', on ? '#i-compress' : '#i-expand');
  els.btnFull.title = on ? 'Quitter le plein écran' : 'Plein écran';
  setTimeout(() => { S.map && S.map.invalidateSize(); fitDay(); }, 220);
}

/* ── sheets ──────────────────────────────────────────────────────────── */
function openSheet(title, html){
  els.sheetTitle.textContent = title;
  els.sheetBody.innerHTML = html;
  els.sheet.classList.add('on'); els.scrim.classList.add('on');
  els.sheet.setAttribute('aria-hidden','false');
  bindSheet();
}
function closeSheet(){
  els.sheet.classList.remove('on'); els.scrim.classList.remove('on');
  els.sheet.setAttribute('aria-hidden','true');
}
function bindSheet(){
  $$('[data-chk]', els.sheetBody).forEach(b => b.addEventListener('click', () => {
    const on = store.toggle('chk', b.dataset.chk);
    b.classList.toggle('on', on); buzz(8);
  }));
  $$('[data-jump]', els.sheetBody).forEach(b => b.addEventListener('click', () => {
    const [di, sid] = b.dataset.jump.split('|');
    closeSheet(); go(+di, { force:true, instant:true });
    setTimeout(() => select(sid, true), 260);
  }));
  const rs = $('[data-reset]', els.sheetBody);
  rs && rs.addEventListener('click', () => {
    if (!confirm('Effacer les étapes faites, les favoris et les cases cochées ?')) return;
    store.d = { done:{}, fav:{}, chk:{} }; store.save();
    closeSheet(); renderDay(); toast('Données effacées');
  });
}
function areaSheet(id){
  const a = AREAS[id];
  if (!a) return;
  openSheet(a.name, `
    <div class="sheet-s"><p class="lede">${esc(a.one)}</p></div>
    <div class="sheet-s"><div class="card">
      <div class="row"><span class="k">History</span><span class="v">${esc(a.h)}</span></div>
      <div class="row"><span class="k">Today</span><span class="v">${esc(a.t)}</span></div>
      <div class="row"><span class="k">Notice</span><span class="v">${esc(a.n)}</span></div>
    </div></div>`);
}

function infoSheet(){
  const f = TRIP.flights.map(x => `
    <div class="row"><span class="k">${esc(x.code)}</span><span class="v">
      <b>${esc(x.from)}</b> → <b>${esc(x.to)}</b>
      <small>${esc(x.dep)} → ${esc(x.arr)} · ${esc(x.dur)}</small>
      <small>${esc(x.cls)} · ${esc(x.bag)}</small>
      <small>${esc(x.op)}</small>
    </span></div>`).join('');
  const h = TRIP.hotels.map(x => `
    <a class="row" href="${mapsSearch(x)}" target="_blank" rel="noopener"><span class="k">${esc(x.dates.split(' ')[0])}</span><span class="v">
      <b>${esc(x.name)}</b><small>${esc(x.city)} · ${esc(x.area)} · ${esc(x.dates)}</small></span></a>`).join('');
  const p = TRIP.priorities.map(x => `
    <button class="chk ${store.is('chk',x.id)?'on':''}" data-chk="${x.id}">
      <span class="box">${icon('i-check')}</span>
      <span class="t">${esc(x.label)}<small>${esc(x.note)}</small></span></button>`).join('');
  const t = TRIP.tastings.map(x => `
    <button class="chk ${store.is('chk',x.id)?'on':''}" data-chk="${x.id}">
      <span class="box">${icon('i-check')}</span><span class="t">${esc(x.label)}</span></button>`).join('');

  openSheet('Pratique', `
    <div class="sheet-s"><h3>À réserver / à faire</h3><div class="card">${p}</div></div>
    <div class="sheet-s"><h3>Vols &amp; train</h3><div class="card">${f}</div></div>
    <div class="sheet-s"><h3>Hôtels</h3><div class="card">${h}</div></div>
    <div class="sheet-s"><h3>À goûter à Hong Kong</h3><div class="card">${t}</div></div>
    <div class="sheet-s">
      <p class="tip">Tap le numéro d’une étape pour la marquer faite · glisse à gauche / droite pour changer de jour ·
      <kbd>←</kbd> <kbd>→</kbd> jours, <kbd>F</kbd> carte plein écran, <kbd>T</kbd> aujourd’hui.
      Tout est enregistré sur cet appareil et fonctionne hors ligne.</p>
      <p class="tip"><button data-reset class="danger">Effacer mes données</button></p>
    </div>`);
}
function savedSheet(){
  const groups = TRIP.days.map(d => {
    const favs = d.stops.filter(s => store.is('fav', s.id));
    if (!favs.length) return '';
    return `<div class="sheet-s"><h3>${esc(fmtLong(d.date))} · ${esc(d.city)}</h3><div class="card">
      ${favs.map(s => `<button class="row" data-jump="${d.i}|${s.id}" style="width:100%;text-align:left">
        <span class="k">${s.n}</span><span class="v"><b>${esc(s.name)}</b>
        <small>${esc((KIND[s.k]||KIND.sight)[0])}${s.t?' · '+esc(s.t):''}</small></span></button>`).join('')}
    </div></div>`;
  }).join('');
  openSheet('Favoris', groups || `<div class="sheet-s"><p class="tip">Aucun favori pour l’instant. Tap l’étoile d’une étape pour l’enregistrer ici.</p></div>`);
}

/* ── events ──────────────────────────────────────────────────────────── */
els.timeline.addEventListener('click', async e => {
  const cp = e.target.closest('[data-copy]');
  if (cp){
    const ok = await copyText(cp.dataset.copy);
    buzz(8);
    toast(ok ? cp.dataset.toast : `Copie impossible · ${cp.dataset.copy}`);
    return;
  }
  const ab = e.target.closest('[data-area]');
  if (ab){ areaSheet(ab.dataset.area); return; }
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const li = btn.closest('.stop'); if (!li) return;
  const id = li.dataset.id;
  if (btn.dataset.act === 'open') select(id);
  else toggleFlag(btn.dataset.act, id);
});

els.btnPrev.addEventListener('click', () => go(S.di - 1));
els.btnNext.addEventListener('click', () => go(S.di + 1));
els.btnToday.addEventListener('click', () => { const i = +els.btnToday.dataset.i; if (i >= 0) go(i, {force:true}); });
els.btnFull.addEventListener('click', () => setFull(!S.full));
els.btnFit.addEventListener('click', () => {
  const outside = +(els.btnFit.dataset.outside || 0);
  if (outside > 0 || S.fitAll) S.fitAll = !S.fitAll;
  fitDay();
  toast(S.fitAll ? 'Tous les points' : outside ? 'Zone principale' : 'Recadré');
});
els.btnInfo.addEventListener('click', infoSheet);
els.btnSaved.addEventListener('click', savedSheet);
els.btnSheetClose.addEventListener('click', closeSheet);
els.scrim.addEventListener('click', closeSheet);

document.addEventListener('keydown', e => {
  if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
  if (e.key === 'Escape'){ if (els.sheet.classList.contains('on')) closeSheet(); else if (S.full) setFull(false); else select(null); }
  else if (e.key === 'ArrowRight') go(S.di + 1);
  else if (e.key === 'ArrowLeft')  go(S.di - 1);
  else if (e.key === 'f' || e.key === 'F') setFull(!S.full);
  else if (e.key === 't' || e.key === 'T') els.btnToday.click();
  else if (e.key === 's' || e.key === 'S') savedSheet();
});

/* swipe between days */
(() => {
  let x0 = null, y0 = null, t0 = 0, lock = null;
  const guard = t => t.closest('#map, .mapdock, .daystrip, .filters, .sheet, .leaflet-container');
  document.addEventListener('touchstart', e => {
    if (e.touches.length !== 1 || guard(e.target) || S.full) { x0 = null; return; }
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now(); lock = null;
  }, { passive:true });
  document.addEventListener('touchmove', e => {
    if (x0 === null) return;
    const dx = e.touches[0].clientX - x0, dy = e.touches[0].clientY - y0;
    if (lock === null && (Math.abs(dx) > 12 || Math.abs(dy) > 12)) lock = Math.abs(dx) > Math.abs(dy) * 1.4 ? 'x' : 'y';
  }, { passive:true });
  document.addEventListener('touchend', e => {
    if (x0 === null || lock !== 'x') { x0 = null; return; }
    const dx = e.changedTouches[0].clientX - x0, dt = Date.now() - t0;
    if (Math.abs(dx) > 58 && dt < 700) go(S.di + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive:true });
})();

/* responsive: park the map in the right lane on desktop */
const wide = window.matchMedia('(min-width:900px)');
function placeMap(){
  const target = wide.matches ? els.laneB : laneA;
  if (wide.matches){
    if (els.mapcard.parentElement !== els.laneB) els.laneB.appendChild(els.mapcard);
    els.laneB.setAttribute('aria-hidden','false');
  } else if (els.mapcard.parentElement !== laneA || els.mapcard.nextElementSibling !== els.filters){
    laneA.insertBefore(els.mapcard, els.filters);
  }
  setTimeout(() => { S.map && S.map.invalidateSize(); fitDay(); }, 60);
}
wide.addEventListener('change', placeMap);
window.addEventListener('orientationchange', () => setTimeout(() => S.map && S.map.invalidateSize(), 300));

/* ── boot ────────────────────────────────────────────────────────────── */
function pickDay(){
  const ti = todayISO();
  const i = TRIP.days.findIndex(d => d.date === ti);
  if (i >= 0) return i;
  const hash = (location.hash.match(/^#d(\d+)$/) || [])[1];
  if (hash) return Math.min(TRIP.days.length - 1, Math.max(0, +hash - 1));
  return parseD(ti) > parseD(TRIP.days[TRIP.days.length-1].date) ? TRIP.days.length - 1 : 0;
}

buildStrip();
initMap();
S.di = pickDay();
placeMap();
renderDay();
window.scrollTo(0,0);

if ('serviceWorker' in navigator){
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
})();
