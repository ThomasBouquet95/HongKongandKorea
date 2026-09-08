# Hong Kong → Korea · 22 Sep – 4 Oct 2026

A mobile-first, offline-capable one-page itinerary app for the
**Hong Kong → Shenzhen → Busan → Seoul** trip (21 Sep – 5 Oct 2026).

No build step, no framework, no tracking. Open `index.html`, or serve the folder
over HTTPS and install it to the home screen.

## What it does

| | |
|---|---|
| **Day navigation** | Swipeable day strip, swipe left/right anywhere on the page, `←`/`→` keys. Auto-selects today when the date falls inside the trip, otherwise shows the countdown. |
| **Timeline** | Each day is split into Morning / Lunch / Afternoon / Evening (plus Transit), with numbered stops, times, and Must / Option indicators. |
| **Map** | One interactive map per day with numbered pins in itinerary order and a dashed route line. Sticky under the header on mobile, full-height side panel on desktop. |
| **Two-way focus** | Tap a stop → its pin highlights and the map flies to it. Tap a pin → the itinerary row scrolls into view, flashes, and expands. |
| **Smart framing** | Airports and cross-country legs are grouped out of the default fit, so a 30 km outlier doesn't flatten the day. The crosshair button lights up when stops sit outside the view and toggles between the main area and all points. |
| **Navigation, per country** | Hong Kong leads with **Google Maps**. Korea leads with **Naver Map**, Google Maps kept alongside it. Shenzhen has no usable Western map, so the primary actions are **DiDi** and **Alipay**: they copy the stop's Chinese name to the clipboard to paste as the destination, with **Baidu** to look the place up. |
| **Day briefing** | Every day carries compact one-line rows above the map — **Must do**, **Must book**, **Drop first if late**, **Transport tip** — plus an accent banner on the days that need one (the Fire Dragon window, the 30 Sep clock, the Gyeongbokgung ticket situation, the 3 Oct public holiday, the fixed 15:30 airport departure). Tap the card to expand. Shenzhen adds a **Before** row of tappable checks: passport, visa, Alipay, WeChat Pay, card, eSIM, VPN, cash. |
| **Neighbourhood context** | 42 neighbourhoods carry pre-written context, so it works offline. The first stop in each area shows a one-sentence explanation under its name; opening the stop reveals **Understand this area →**, a sheet with History, Today and what to Notice while walking, 80–120 words. Repeats are suppressed — three stops in Sham Shui Po show the sentence once. |
| **Places vs services** | Stops you go to *see* — neighbourhoods, sights, viewpoints, museums, nature, markets — carry an indigo number, icon and map pin. Restaurants, cafés, bars, shops, hotels and transit stay neutral, so a temple never looks like a cocktail bar. 65 of 169 stops are places. |
| **Status chips** | **Hard must** · **Must** · **Optional** · **Must book** · **Booked** · **Sold out online** · **Weather dependent**, so the ones you cannot move look different from the ones you can. |
| **Fallback plans** | A stop can carry Plan A / Plan B. Gyeongbokgung's night viewing is sold out online, so it shows the 300 same-day foreigner tickets at Gwanghwamun and the hanbok route. |
| **Fullscreen map** | Expand button or `F`. Day nav stays available and a swipeable card rail along the bottom walks the stops. |
| **Filters** | All · Must · Eat & drink · Saved · To do — applied to the list and the map together. |
| **Progress** | Tap a stop's number to mark it done. Progress shows per day in the day strip, the header and the bottom bar. |
| **Favourites** | Star any stop; the star button in the header lists them grouped by day and jumps straight to them. |
| **Programme in text** | A full-page plain-text version of the whole trip, behind the document icon in the header or the `P` key. **Tout copier** puts all 15 days on the clipboard as a hard-wrapped 76-column text file; each day and the overview also have their own Copier button. |
| **Practical sheet** | Flights, the KTX ticket, hotels, and a checklist of what still needs booking (Gyeongbokgung night visit first) plus the Hong Kong things-to-taste list. |
| **Offline** | Service worker caches the app shell and the Leaflet library; map tiles are cached as you browse them. The full itinerary works with no connection. |

State (done, favourites, checklists) is kept in `localStorage` on the device.
Nothing is sent anywhere.

## Keyboard

`←` `→` day · `F` fullscreen map · `T` jump to today · `S` favourites · `Esc` close

## Layout

```
index.html                 markup + inline SVG icon sprite
assets/css/app.css         design tokens, light/dark, mobile → desktop
assets/js/data.js          the itinerary: 15 days, 163 stops, coordinates
assets/js/app.js           rendering, map, selection, storage, gestures
assets/vendor/leaflet.*    Leaflet 1.9.4, vendored so the app works offline
manifest.webmanifest, sw.js, assets/icons/
```

Editing the trip means editing `assets/js/data.js` only — everything else is derived
from it. A stop is:

```js
{ s:'afternoon', k:'museum', m:1, hard:1, b:'must', w:1, a:'bukchon',
  t:'19:00', name:'…', note:'…', plans:[{k:'Plan A', d:'…'}],
  lat:…, lng:…, q:'search text', zh:'中文名' }
```

| field | meaning |
|---|---|
| `s` | slot: `morning` `lunch` `afternoon` `evening` `transit` |
| `k` | kind: `sight food cafe bar shop museum nature market view walk hotel transit plane` |
| `m` / `hard` | Must / Hard must — `hard` also counts as must for the filter |
| `k` (again) | also decides the colour: `sight view museum nature walk market` render as places, everything else neutral |
| `o` | optional or alternative: dashed map pin, Optional chip |
| `b` | `must` → Must book, `ok` → Booked, `sold` → Sold out online |
| `w` | weather dependent |
| `a` | neighbourhood id into `AREAS` — drives the context line and the sheet |
| `t` | time chip |
| `plans` | `[{k, d}]` fallback plans shown in the expanded stop |
| `zh` | Chinese destination the Shenzhen DiDi and Alipay buttons copy |

A day also carries the briefing fields, all optional:

```js
alert:  'accent banner across the top of the day',
must:   'the one line that matters if you read nothing else',
book:   ['what still needs reserving'],
drop:   ['what to cut first if you fall behind'],
tip:    'how to actually move between these stops',
checks: [{ id:'sz1', t:'Passeport' }]   // tappable, saved locally
```

Neighbourhood entries live in the `AREAS` map at the top of the same file:

```js
poho: { name:'PoHo',
  one:'the sentence shown under the stop name',
  h:'History', t:'Why it feels this way today', n:'What to notice' }
```

Keep `h + t + n` between 80 and 120 words — the sheet is designed around that length.

## Keeping the text page in sync

The text page is **generated from `TRIP` and `AREAS` at render time** — it is never
hand-written and there is no second copy of the itinerary to maintain. Edit
`assets/js/data.js` and the text page, the copied file, the timeline, the map and
the briefing all change together. Adding a new field to a stop is the only case
that needs a second edit: teach `tokDay()` in `assets/js/app.js` to emit it.

The generator emits tokens rather than strings, which is what lets one source
produce two outputs: the page renders them with CSS hanging indents so long notes
reflow properly on a phone, and `toText()` renders the same tokens as a 76-column
text file for the clipboard.

## Colour

Four meanings, and nothing else is coloured:

| | |
|---|---|
| vermilion | priority — Must, Hard must, times, the selected stop |
| indigo | a place you go to see, as opposed to eat, drink or shop in |
| green | done, and Booked |
| amber | conditional — Weather dependent |

## Map data

Tiles © [CARTO](https://carto.com/attributions), data ©
[OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
Coordinates are placed to within a block or so — good enough to orient yourself;
the Google Maps / Naver / Baidu links resolve the exact venue.
