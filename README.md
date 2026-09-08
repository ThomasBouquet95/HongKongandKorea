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
| **Navigation links** | One-tap **Navigate** and **Google Maps** on every stop, plus **Naver** in Korea and **Baidu** in Shenzhen, where Google Maps is not usable. |
| **Fullscreen map** | Expand button or `F`. Day nav stays available and a swipeable card rail along the bottom walks the stops. |
| **Filters** | All · Must · Eat & drink · Saved · To do — applied to the list and the map together. |
| **Progress** | Tap a stop's number to mark it done. Progress shows per day in the day strip, the header and the bottom bar. |
| **Favourites** | Star any stop; the star button in the header lists them grouped by day and jumps straight to them. |
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
{ s:'afternoon', k:'museum', m:1, t:'19:00', name:'…', note:'…', lat:…, lng:…, q:'search text' }
//  slot         kind        must  time                                        Maps query
```

Kinds: `sight food cafe bar shop museum nature market view walk hotel transit plane`.
Add `o:1` for an optional/alternative stop (dashed pin, "Option" tag).

## Map data

Tiles © [CARTO](https://carto.com/attributions), data ©
[OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
Coordinates are placed to within a block or so — good enough to orient yourself;
the Google Maps / Naver / Baidu links resolve the exact venue.
