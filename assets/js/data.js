/* Trip data — Hong Kong · Shenzhen · Busan · Seoul — 21 Sep → 5 Oct 2026
   Source content kept verbatim from the itinerary brief (FR).
   s(): stop factory.  k = kind, m = must-do, o = optional/alternative.       */

/* Neighbourhood context — pre-generated so it works offline.
   one  : the sentence shown under the name in the timeline
   h/t/n: History · Why it feels this way · What to notice   (80–120 words total) */
const AREAS = {
poho: { name:'PoHo',
  one:'Named for Po Hing Fong, on ground the colonial government cleared after the 1894 plague.',
  h:'In 1894 bubonic plague swept the tenements of Tai Ping Shan below, killing thousands. The colonial administration demolished whole blocks, burned the contents, and left the cleared ground as Blake Garden.',
  t:'Because so little was ever rebuilt at density, the scale stayed domestic — low pre-war walk-ups with cheap upper floors, which is what drew studios, roasters and small galleries here rather than to Central a few streets east.',
  n:'Pre-war balconies overhanging the pavement, tiled shopfront thresholds, banyan roots gripping the retaining walls, and streets that step uphill instead of running flat.' },

sheungwan: { name:'Sheung Wan',
  one:'Hong Kong’s first Chinese commercial quarter, still trading dried seafood and medicine from the same shophouses.',
  h:'Chinese merchants settled here from the 1840s while the colonial administration took Central. Trade in dried seafood, ginseng and herbs organised itself street by street, each lane taking one commodity.',
  t:'Those trades never left, so ground floors still smell of dried scallop and abalone while the floors above have quietly become offices and flats.',
  n:'Shop names painted vertically, open sacks of dried goods on the pavement, and the dealers of Upper Lascar Row — once Cat Street, for goods of uncertain origin.' },

soho: { name:'SoHo',
  one:'The steep lanes south of Hollywood Road, reshaped entirely by an escalator.',
  h:'The Central–Mid-Levels escalator opened in 1993 to carry commuters down the hill in the morning and back up at night — a piece of transport infrastructure, not a promenade.',
  t:'The foot traffic it created turned quiet residential lanes into a dense strip of small restaurants and bars, stacked up the slope because there is no flat ground to spread onto.',
  n:'The escalator reverses direction around 10am, the bars cluster at its landings, and Shelley Street’s gradient does most of the work the design gets credit for.' },

saiyingpun: { name:'Sai Ying Pun',
  one:'A tightly packed residential slope that changed character the day the MTR reached it in 2014.',
  h:'Laid out as the western camp for colonial troops, then filled with tenements and small trades serving the docks below.',
  t:'The Island Line extension put a station under the hill in 2014. Cafés and small bars arrived within two years, above ground floors still occupied by hardware shops and dried-goods dealers who were here first.',
  n:'The stone stairs of High Street and Third Street, ladder streets running between them, and new and old shopfronts alternating on the same block within a few doors of each other.' },

kennedytown: { name:'Kennedy Town',
  one:'The end of the tram line and of the island’s western edge, long a working praya of abattoirs and godowns.',
  h:'Named for a 19th-century governor, it took the slaughterhouses, coal depots and warehouses that Central wanted moved out of sight, and the tram was extended west to serve them.',
  t:'The industry closed and the MTR finally arrived in 2014. The seafront promenade and comparatively low rents brought bars and cafés, while the public housing estates a street behind them carried on unchanged.',
  n:'Trams turning on the terminus loop, the harbour opening westward towards the islands, and pre-war shophouses facing new towers across a single road.' },

thepeak: { name:'Victoria Peak',
  one:'A colonial hill station where altitude was, for four decades, a matter of law rather than money.',
  h:'Europeans built summer houses up here for the cooler air. From 1904 the Peak District Reservation Ordinance barred Chinese residents without the governor’s permission; it was not repealed until 1946.',
  t:'The tram, opened in 1888 to serve those houses, now carries visitors instead, and the residential Peak above the terminus remains some of the most expensive land on earth.',
  n:'Lugard Road is a level contour path — the view improves and the crowd thins the further round it you walk.' },

happyvalley: { name:'Happy Valley',
  one:'A malarial swamp drained into a racecourse in 1845, and still the city’s Wednesday night ritual.',
  h:'The first British settlement here failed to fever, and the name was wishful thinking. The flat ground was drained and given over to horse racing in 1845; the hillsides around it became cemeteries — Catholic, Protestant, Parsee, Muslim and Hindu, side by side.',
  t:'Midweek meetings became an after-work institution rather than a sporting occasion: office crowds, cheap beer and small bets under floodlights, ringed by apartment towers.',
  n:'The tiered cemeteries stacked on the slope above the track, and how close the residential blocks stand to the running rail.' },

shamshuipo: { name:'Sham Shui Po',
  one:'Hong Kong’s poorest district by income and its most inventive by trade, block after block of specialist wholesalers.',
  h:'Industrial Kowloon’s workshops and textile trade clustered here from the 1950s, with refugees and factory workers packed into the tenements above the shops. It has remained the district with Hong Kong’s lowest median income.',
  t:'Manufacturing moved north to Shenzhen but the supply chains stayed behind, which is why a single street still sells only fabric, only buttons, only beads, or only electronic components.',
  n:'Apliu Street’s second-hand electronics laid out on the ground, bolts of cloth on Ki Lung Street, and young design studios taking the ground floors along Tai Nan Street.' },

mongkok: { name:'Mong Kok',
  one:'Among the most densely populated places ever recorded, and organised vertically because there is nowhere else to go.',
  h:'A village of streams and fields until reclamation in the 1920s, it filled first with tenements and then with some of the highest-density towers in Kowloon. The name means busy corner.',
  t:'Ground floors are shops, first floors are salons, tutors and arcades, and everything above is housing — which is why the signage projects out over the street instead of sitting flat against the building.',
  n:'Signs stacked to the fourth floor, and streets that each specialise in one thing: sneakers, goldfish, flowers, birds.' },

yaumatei: { name:'Yau Ma Tei',
  one:'An old boat-people’s shore that kept its wholesale markets while Kowloon grew up around it.',
  h:'Fishermen caulked their hulls on this shore — the name refers to the oil and hemp they used. A typhoon shelter, a Tin Hau temple and the wholesale trades grew up behind it.',
  t:'The fruit market still works overnight in pre-war brick sheds, and the temple square remains a genuine neighbourhood room — fortune tellers, chess, street opera — rather than a preserved set piece.',
  n:'The jade market under the flyover, pawnshop signs shaped like an inverted bat, and crates stacked shoulder-high at the fruit market before dawn.' },

jordan: { name:'Jordan',
  one:'A transitional strip between Tsim Sha Tsui’s shopfronts and Yau Ma Tei’s markets, at its best late.',
  h:'Built on reclaimed ground in the early 20th century as tenement housing and small trade, with Temple Street’s night market forming alongside it and the Tin Hau temple anchoring the north end.',
  t:'Rents never climbed to Tsim Sha Tsui levels three streets south, so the old cha chaan teng, noodle shops and dessert houses stayed put while the night market drifted towards souvenirs.',
  n:'The run of long-standing dessert and wonton shops around Parkes and Ning Po Street, busiest close to midnight.' },

taikoktsui: { name:'Tai Kok Tsui',
  one:'An old industrial cape of small factories, most converted, a few still making things.',
  h:'Shipyards and light industry took this reclaimed waterfront from the early 20th century, and factory blocks went up through the 1950s and 60s to house hundreds of small manufacturers on single floors.',
  t:'Redevelopment has replaced much of it with residential towers, but pockets of the factory buildings survive and still turn out hardware, clocks, metal goods and plastics for buyers who come to the door.',
  n:'Loading bays opening straight onto the street, hand-painted signage from the 1970s, and freight lifts sized for a pallet rather than a person.' },

taihang: { name:'Tai Hang',
  one:'A former Hakka village behind Causeway Bay whose fire dragon has run every mid-autumn since 1880.',
  h:'After a plague and a typhoon struck the village in 1880, residents danced a straw dragon stuck with incense to drive off the misfortune. They have repeated it every year since; it is now listed national intangible heritage.',
  t:'The village became a grid of narrow streets ringed by towers. Former car-repair garages on the ground floors have turned into cafés, but the lanes are still tight enough for the dragon to fill them wall to wall.',
  n:'Burning incense pressed into the dragon’s body, the drum line that leads it, and the crowd held to the pavement in single file.' },

causewaybay: { name:'Causeway Bay',
  one:'A bay filled in and built over, now one of the world’s most expensive retail streets.',
  h:'Jardine Matheson’s godowns stood on the original shoreline, which is why so many streets still carry the firm’s name. Reclamation closed the bay in stages and pushed the typhoon shelter north to where it sits today.',
  t:'Ground area became too valuable to spread across, so retail stacks vertically into malls and department stores while the streets between them stay stubbornly chaotic.',
  n:'The noonday gun, still fired daily by Jardine’s, and Jardine’s Bazaar — an old market lane one block behind the flagship stores.' },

saikung: { name:'Sai Kung',
  one:'A fishing town that became the gateway to Hong Kong’s largest stretch of protected coast.',
  h:'Boat-dwelling and Hakka farming communities worked this coast for centuries. The reservoir schemes of the 1970s brought the first roads, and with them the country parks.',
  t:'The waterfront still sells fish straight off the boats, but most of the peninsula behind it is protected country park — which is the only reason the beaches out at Tai Long Wan stay empty.',
  n:'Sampan operators calling for the outlying islands, and the tanks of live fish lined along the promenade outside the restaurants.' },

westkowloon: { name:'West Kowloon',
  one:'Forty hectares of reclaimed harbour set aside for culture, then argued over for twenty years.',
  h:'Reclaimed in the 1990s partly from spoil dug for the airport railway, the site was then held in limbo while government and public fought over what should be built on it.',
  t:'It opened piecemeal — the Xiqu Centre, then M+ in 2021, then the Palace Museum — which is why the district still reads as a park with buildings placed in it rather than a quarter.',
  n:'M+’s east façade doubles as a screen after dark, and the promenade gives the least obstructed view of the island skyline anywhere in the city.' },

tst: { name:'Tsim Sha Tsui',
  one:'The tip of Kowloon, where the ferry, the railway to Europe and the harbour view all came ashore.',
  h:'The Kowloon–Canton Railway terminus stood here from 1916: passengers arrived from Europe by ship and left by train. The terminus was demolished in 1978 and only its clock tower survives.',
  t:'The cleared site became the cultural centre and museums, while the streets behind filled with hotels, tailors and shops serving people passing through.',
  n:'The clock tower standing alone on the waterfront, Nathan Road’s depth of neon, and the Star Ferry still working the crossing it has run since 1888 for the price of a coffee.' },

futian: { name:'Futian',
  one:'Shenzhen’s planned civic centre, laid out along a single axis before most of it existed.',
  h:'Farmland until the Special Economic Zone was declared in 1980. The district was master-planned in the 1990s around a north–south axis running from Lianhua Hill down to the bay.',
  t:'Government, banking and the exhibition centre were placed along that axis, which is why the streets are so wide and each block reads as one object rather than a row of buildings.',
  n:'The view straight down the axis from Lianhua Hill, and how little of the city is older than the people walking through it.' },

nanshan: { name:'Nanshan',
  one:'Shenzhen’s technology district, where the campuses and the parks were planned at the same time.',
  h:'The Shekou Industrial Zone opened here in 1979 — the first piece of China’s reform experiment, a year before the wider Special Economic Zone was declared.',
  t:'Hardware assembly gave way to software and headquarters, Tencent and DJI among them, and the district was rebuilt around those campuses with waterfront parks and universities rather than more factories.',
  n:'Talent Park’s lawns filling with company lanyards at lunchtime, and delivery drones and robotaxis treated as ordinary infrastructure rather than as novelties worth photographing.' },

octloft: { name:'OCT-LOFT',
  one:'A 1980s electronics factory compound kept whole and handed to designers instead of cleared.',
  h:'Overseas Chinese Town built these sheds in the 1980s as workshops for Japanese electronics assembly. Production moved on in the 1990s and the buildings were left standing and empty.',
  t:'Rather than clear the site, the owner converted it building by building from 2004, keeping the original concrete frames, the loading docks and the mature trees in the yards between them.',
  n:'Factory numbering still painted on the walls, bookshops and studios behind roller shutters, and a low horizontal scale that feels nothing like the rest of Shenzhen.' },

huaqiangbei: { name:'Huaqiangbei',
  one:'The world’s largest electronics market, arranged as multi-storey towers of individual counters.',
  h:'Electronics factories lined this street in the 1980s. Their surplus components were sold off from the ground floors, and the trade eventually grew larger than the manufacturing that fed it.',
  t:'Thousands of independent stalls now occupy tower blocks floor by floor, each dealing in one narrow category — an entire supply chain compressed into a few city blocks.',
  n:'Whole floors given over to a single component, repair benches working in the open, and goods moved between towers by hand trolley rather than by van.' },

luohu: { name:'Luohu',
  one:'The original border crossing, and the piece of Shenzhen that existed before there was a Shenzhen.',
  h:'The market town at the railway bridge to Hong Kong was the only settlement of any size here when the Special Economic Zone was declared in 1980, and the crossing itself dates from the 1900s.',
  t:'It grew first and fastest, so it is denser and visibly older than Futian or Nanshan, and it still works mainly as a crossing point and a market district rather than a business one.',
  n:'The rail and pedestrian bridge over to Hong Kong, and 1980s towers that already count as historic in a city this young.' },

haeundae: { name:'Haeundae',
  one:'Korea’s best-known beach, backed by a wall of towers built almost entirely this century.',
  h:'A hot-spring resort developed under Japanese rule, then a modest summer beach town that emptied out of season, until high-rise development took the seafront from the 2000s.',
  t:'Marine City and the towers behind it replaced low-rise blocks in barely two decades, so the sand is now a narrow strip against a skyline — that collision is the character of the place.',
  n:'The old market lanes a few blocks inland, unchanged and still where people actually eat, and Dongbaekseom’s wooded headland closing the western end.' },

gwangalli: { name:'Gwangalli',
  one:'A crescent beach that only really exists after dark, oriented entirely towards a lit bridge.',
  h:'A fishing shore of no particular reputation until the Gwangan Bridge opened in 2003 and the view of it became the district’s principal asset.',
  t:'Cafés and bars line the seafront facing the bridge rather than the open sea, the bridge runs a nightly lighting sequence, and the city stages drone shows over the bay in season.',
  n:'Everyone on the beach sitting facing the same direction, low-rise back streets deliberately keeping the sightline open, and water calmer than Haeundae’s because the bay is sheltered.' },

cheongsapo: { name:'Cheongsapo',
  one:'A working fishing village that survived because a railway, not a road, ran past it.',
  h:'The Donghae Nambu line hugged this coast from 1934, and the village stayed small behind it — a harbour mouth marked by a pair of red and white lighthouses, and not much else.',
  t:'The line closed in 2013 and reopened as a walking route and the Sky Capsule, which brought visitors along the shore without anyone ever widening the village lanes.',
  n:'The two lighthouses facing each other across the harbour, shellfish tents serving the fleet’s own catch, and the old track bed running straight through the middle of it.' },

songjeong: { name:'Songjeong',
  one:'Busan’s surf beach, quieter than Haeundae because the old rail line kept it separate.',
  h:'A pine-backed fishing beach at the far end of the old coastal railway, largely bypassed when resort development concentrated further west at Haeundae.',
  t:'Shallow water and a consistent, gentle break made it Korea’s main beach for surf schools, and because the rail line ran between the town and the sand, the town behind it never went high-rise.',
  n:'Board racks outside every second building, the headland path north towards Jukdo, and a beach that is busiest at dawn rather than at midday.' },

gamcheon: { name:'Gamcheon',
  one:'A refugee settlement on a steep hillside, saved from demolition by an art project.',
  h:'Built from 1955 by Korean War refugees and members of the Taegeukdo religious community, in terraced rows deliberately arranged so that no house blocks the light or the view of the one behind it.',
  t:'Depopulation put it in line for clearance until a 2009 government arts programme painted and repaired it. The layout was never altered, and roughly 8,000 people still live here.',
  n:'Every roofline sitting below the front door of the house above, alleys that are stairs rather than streets, and residents’ front doors opening straight onto the route.' },

nampo: { name:'Nampo-dong',
  one:'Busan’s old downtown, and where Korean cinema-going began.',
  h:'The city’s film theatres clustered on these streets from the 1950s, and the Busan International Film Festival was founded here in 1996 — which is why it is called BIFF Square.',
  t:'The festival has since moved out to Centum City, but the street kept the theatres, the handprints and an unusually dense run of food stalls that work late into the evening.',
  n:'Handprints set into the pavement, and the ssiat hotteok stalls — the seed-filled pancake is specific to this street and cooked to order.' },

jagalchi: { name:'Jagalchi',
  one:'Korea’s largest fish market, rebuilt after the war and run largely by women ever since.',
  h:'Trading began on the gravel shore the name refers to. After 1950 the market was held together by widows and displaced women selling fish from the quay — the jagalchi ajumma, still its public face.',
  t:'The 2006 building put wholesale on the ground floor and restaurants above it, but the outdoor stalls along the water still work exactly as they always did.',
  n:'The rule is buy downstairs and take it upstairs to be cooked — and the dried-fish alley running behind the main hall.' },

hongdae: { name:'Hongdae',
  one:'The area around Hongik University’s art school, which set the tone long before the clubs arrived.',
  h:'Hongik University’s fine-art faculty drew studios and cheap studio-bars from the 1980s. The live music and independent label scene grew out of that student population, not out of tourism.',
  t:'Rising rents pushed the studios out to Yeonnam and Mangwon, leaving the main streets to chains and street performance while the smaller venues and record shops retreated into the back lanes.',
  n:'Murals along the art-school lanes, buskers who claim the same pitches every evening, and how quickly it turns residential two blocks off the main street.' },

yeonnam: { name:'Yeonnam-dong',
  one:'A quiet residential grid transformed by burying a railway and planting a park on top of it.',
  h:'Low-rise housing, much of it built for Chinese-Korean residents, grew up alongside the old Gyeongui railway, which ran at street level right through the middle of the district.',
  t:'The line went underground and the surface became a linear park in 2016. Houses facing the new park converted their ground floors into cafés and shops within a couple of years.',
  n:'Front gardens turned into terraces, how the commerce stops precisely where the park edge does, and the older Chinese-Korean restaurants still on the side streets.' },

mangwon: { name:'Mangwon',
  one:'A working residential neighbourhood beside Hongdae that kept both its market and its prices.',
  h:'Housing built up around a traditional market that has served the area since the 1970s, separated from Hongdae by nothing more than a few blocks and a change of rent.',
  t:'Young businesses moved here when Hongdae and Yeonnam became expensive, but they opened alongside the market rather than displacing it, so both now trade to the same street.',
  n:'The croquette, jeon and tteok stalls at the covered end of the market, and how completely residential the streets become one block away from it.' },

seochon: { name:'Seochon',
  one:'The village west of the palace, home to the court’s technicians rather than its aristocracy.',
  h:'Under Joseon the jungin class lived here — interpreters, physicians, astronomers and painters who served the palace but stood outside the nobility. Writers and artists followed in the 20th century.',
  t:'Height limits protecting the palace kept the scale low, so the lanes hold single-storey shops and fragments of hanok instead of the towers that went up elsewhere in central Seoul.',
  n:'Tongin Market’s brass token system, hanok roofs showing above the shopfronts, and Inwangsan’s granite ridge closing the view at the end of the street.' },

bukchon: { name:'Bukchon & Samcheong',
  one:'The aristocratic quarter between the two main palaces, and the largest surviving concentration of urban hanok.',
  h:'Yangban officials lived here to be near Gyeongbokgung and Changdeokgung. Most of what stands today, though, was built in the 1930s, when developers subdivided the large estates into compact hanok for sale.',
  t:'It is still residential, which is why the signs ask for quiet. Samcheong-dong, the road along the eastern edge, absorbed the galleries and cafés instead.',
  n:'1930s hanok are tighter and smaller than Joseon ones. The lanes climb, and the view back over the tiled roofs is from the top of them.' },

ikseon: { name:'Ikseon-dong',
  one:'Seoul’s first planned hanok development, built in the 1920s as affordable housing.',
  h:'The developer Jeong Se-gwon bought up aristocratic estates in the 1920s and subdivided them into small standardised hanok sold to ordinary Koreans — a deliberate commercial answer to Japanese-style housing.',
  t:'Marked for redevelopment for decades and saved largely by stalemate between owners, it was converted from around 2015 into cafés and bars without anyone widening the lanes or clearing a block.',
  n:'Alleys barely two people wide, glass roofs dropped over what were open courtyards, and doorways you have to duck through.' },

euljiro: { name:'Euljiro',
  one:'A district of printers, lighting and metal workshops that becomes a bar district once they close.',
  h:'Post-war Seoul concentrated small manufacturing here — printing, tiles, lighting, machine parts — block by block in low buildings, each trade taking its own street.',
  t:'Redevelopment has taken chunks of it, but the workshops still run by day. The bars occupy upper floors and back rooms and open as the shutters come down, which is why everyone except the people who work here calls it Hipjiro.',
  n:'Almost no signage — look for a lit stairwell — and the way the machine noise switches off around seven.' },

seongsu: { name:'Seongsu',
  one:'Seoul’s shoe-manufacturing district, converted building by building rather than cleared.',
  h:'Tanneries, printing works and several hundred small shoe factories filled these brick blocks from the 1970s, supplying most of the country’s footwear from workshops of five or ten people.',
  t:'Production shrank but the buildings and many of the workshops stayed. Cafés and flagship stores took the empty floors and kept the brick, the loading doors and the yards, which is why it gets compared to Brooklyn.',
  n:'Shoe workshops still running at street level underneath the new tenants, and red brick that dates the whole district to a single building boom.' },

dosan: { name:'Dosan & Apgujeong',
  one:'The centre of Gangnam’s planned development, and where Korean fashion decided to build architecture.',
  h:'Farmland south of the river until the 1970s, when the government moved prestigious schools across and built apartment blocks to pull the middle class over with them.',
  t:'Apgujeong became the address for new money, and the brands that followed used their buildings as advertising — which is why the retail here is architectural before it is commercial.',
  n:'Buildings designed to be photographed rather than entered, how quiet the street level stays for the density of money on it, and Dosan Park itself, kept as a memorial garden.' },

cheongdam: { name:'Cheongdam',
  one:'The luxury and entertainment end of Gangnam, quieter and more closed than Apgujeong.',
  h:'Developed alongside Apgujeong through the 1970s and 80s, then chosen first by the luxury houses for their Korean flagships and later by the major entertainment agencies for their headquarters.',
  t:'Flagships line one avenue while the side streets hold agencies, private galleries and restaurants that do no advertising at all and are found by recommendation rather than by walking past.',
  n:'Unmarked doors and basement bars, fans waiting outside the agency buildings, and how little street life there is for the value of the land.' },

hannam: { name:'Hannam-dong',
  one:'A hillside of embassies and old money that turned into Seoul’s art and design quarter.',
  h:'Its position between Namsan and the river made it diplomatic and residential from early on. Korea’s industrial families built houses on the slope, and the Leeum opened among them in 2004.',
  t:'The museum anchored a cluster of galleries, showrooms and small ateliers along the hillside, so the commerce here stays discreet, set back from the road and often behind an unmarked gate.',
  n:'Gallery entrances that look like private houses, embassy walls, and the gradient — nothing in Hannam is on the flat.' },

itaewon: { name:'Itaewon',
  one:'Shaped for seventy years by the garrison next door, and now working out what it is without one.',
  h:'The Yongsan base — Japanese, then American — made this the district where foreigners lived, drank and had suits made, and the tailors and bars grew up to serve it.',
  t:'The base largely relocated in 2018 and its land is becoming a park, so the strip is rebalancing towards Korean-run restaurants and bars. A memorial marks the alley where 159 people died in the 2022 Halloween crowd crush.',
  n:'Tailors left over from the garrison years, the mosque above the main street, and the climb up Gyeongnidan.' },

namsan: { name:'Namsan',
  one:'The mountain Seoul was built around, and the line the old city wall was drawn along.',
  h:'The Joseon capital’s wall crossed this summit in 1396, and beacon fires on top relayed news from the frontier down to the palace every night.',
  t:'The 1975 tower was a broadcast mast before it was a viewpoint, and the slopes are protected parkland — which is why there is still a forested mountain in the middle of the city.',
  n:'Restored wall sections beside the paths, the five beacon mounds at the summit, and the wall’s line still legible in the street grid below.' }
};

const TRIP = {
  id: 'hk-kr-2026',
  title: 'Hong Kong → Korea',
  start: '2026-09-21',
  end: '2026-10-05',

  hotels: [
    { city: 'Hong Kong', name: 'Hopewell Hotel Hong Kong', short: 'Hopewell Hotel', area: 'Wan Chai', dates: '22 → 28 Sep',
      lat: 22.2745, lng: 114.1716, q: 'Hopewell Hotel Hong Kong Wan Chai' },
    { city: 'Busan', name: 'L7 Haeundae by LOTTE', short: 'L7 Haeundae', area: 'Haeundae', dates: '28 → 30 Sep',
      lat: 35.1607, lng: 129.1613, q: 'L7 Haeundae by LOTTE Busan' },
    { city: 'Seoul', name: 'Nine Brick Hotel Hongdae', short: 'Nine Brick Hongdae', area: 'Hongdae', dates: '30 Sep → 4 Oct',
      lat: 37.5553, lng: 126.9233, q: 'Nine Brick Hotel Hongdae Seoul' }
  ],

  flights: [
    { code: 'CX382', from: 'Zurich ZRH', to: 'Hong Kong HKG · T1', dep: '21 Sep 13:30', arr: '22 Sep 06:55',
      dur: '11h25', cls: 'Economy Light', bag: '1 pièce en soute', op: 'Cathay Pacific' },
    { code: 'CX5674', from: 'Hong Kong HKG · T2', to: 'Busan Gimhae PUS', dep: '28 Sep 09:10', arr: '28 Sep 13:35',
      dur: '3h25', cls: 'Economy Light', bag: '1 pièce en soute', op: 'Cathay Pacific · opéré par HK Express' },
    { code: 'KTX046', from: 'Busan Station · voiture 1, siège 7B', to: 'Seoul Station', dep: '30 Sep 14:47', arr: '30 Sep 17:28',
      dur: '2h41', cls: 'Economy / Adult · KRW 53 500', bag: 'Ticket 80022-0903-10020-03', op: 'Korail KTX — dos à la marche' },
    { code: 'CX419', from: 'Seoul Incheon · T1', to: 'Hong Kong · T1', dep: '4 Oct 20:05', arr: '4 Oct 23:00',
      dur: '3h55', cls: 'Economy Light', bag: '1 pièce en soute', op: 'Correspondance 1h25, même terminal' },
    { code: 'CX383', from: 'Hong Kong · T1', to: 'Zurich ZRH', dep: '5 Oct 00:25', arr: '5 Oct 07:30',
      dur: '13h05', cls: 'Economy Light', bag: '1 pièce en soute', op: 'Cathay Pacific' }
  ],

  /* À essayer au moins une fois à Hong Kong */
  tastings: [
    { id: 't1', label: 'Egg waffle' },
    { id: 't2', label: 'Egg tart' },
    { id: 't3', label: 'Pineapple bun' },
    { id: 't4', label: 'HK milk tea ou lemon tea en cha chaan teng' }
  ],

  priorities: [
    { id: 'p1', label: 'Gyeongbokgung — visite nocturne du 1er oct',
      note: 'À réserver maintenant : 3 300 places par soir, dont seulement 300 billets sur place pour les étrangers.' },
    { id: 'p2', label: 'Sky Capsule Cheongsapo → Mipo, 29 sep 17h30', note: 'Réservation confirmée.' },
    { id: 'p3', label: 'Leeum Museum, 3 oct', note: 'Réservations individuelles ouvertes 14 jours avant.' },
    { id: 'p4', label: 'Gebangsikdang Seongsu, 2 oct midi', note: 'Réservation recommandée — 11h30–15h avant la pause.' },
    { id: 'p5', label: 'Bar Cham, 1er oct 20h45', note: 'Réservation recommandée — jeudi 18h–01h.' },
    { id: 'p6', label: 'Dîner du 27 sep', note: 'Le meilleur dîner réservé du séjour.' }
  ],

  days: [
/* ── 21 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-21', city: 'En vol', region: 'CH', label: 'Zurich → Hong Kong',
  focus: 'Départ en début d’après-midi, nuit dans l’avion.', hotel: null,
  tip: 'Enregistrement en ligne dès 48h avant le départ. Economy Light : 1 pièce en soute incluse.',
  stops: [
    { s:'transit', k:'plane', m:1, name:'CX382 · Zurich ZRH → Hong Kong HKG', t:'13:30',
      note:'Départ Zurich 13h30, arrivée Hong Kong 06h55 le 22 septembre, Terminal 1. Durée 11h25. Economy Light, 1 pièce en soute incluse. Nuit dans l’avion.',
      lat:47.4502, lng:8.5616, q:'Zurich Airport ZRH' }
  ]},

/* ── 22 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-22', city: 'Hong Kong', region: 'HK', label: 'PoHo · Sheung Wan · Central',
  focus: 'Première immersion douce dans un Hong Kong ancien, créatif et branché, sans pression à cause du jet lag.',
  hotel: 0,
  must: 'Man Mo Temple · Tai Kwun · Bar Leone',
  drop: ['PMQ si le jet lag pèse', 'Luk On Kui — un seul des deux dim sum suffit'],
  tip: 'Airport Express jusqu’à Hong Kong Station, puis taxi vers Wan Chai. Prendre une Octopus dès l’aéroport.',
  stops: [
    { s:'morning', k:'plane', t:'06:55', name:'Arrivée HKG · Terminal 1',
      note:'Puis transfert vers l’hôtel et dépôt des bagages.', lat:22.3080, lng:113.9185, q:'Hong Kong International Airport Terminal 1' },
    { s:'morning', k:'hotel', name:'Hopewell Hotel · dépôt des bagages',
      note:'Wan Chai. Check-in plus tard dans l’après-midi.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'morning', k:'walk', m:1, a:'poho', name:'PoHo', note:'Ruelles créatives et cafés. Balade à pied, sans itinéraire strict.', lat:22.2846, lng:114.1487, q:'PoHo Hong Kong' },
    { s:'morning', k:'cafe', name:'Halfway Coffee', note:'Café rétro, porcelaine hongkongaise.', lat:22.2841, lng:114.1494, q:'Halfway Coffee Upper Lascar Row' },
    { s:'morning', k:'walk', a:'poho', name:'Tai Ping Shan Street', note:'Petites boutiques et vieux immeubles.', lat:22.2848, lng:114.1483, q:'Tai Ping Shan Street Hong Kong' },
    { s:'morning', k:'cafe', name:'OneThird Coffee Roasters', note:'Micro-roaster specialty coffee pointu.', lat:22.2852, lng:114.1476, q:'OneThird Coffee Roasters Hong Kong' },
    { s:'morning', k:'shop', a:'sheungwan', name:'Upper Lascar Row', note:'Antiquaires et curiosités vintage.', lat:22.2840, lng:114.1503, q:'Upper Lascar Row Hong Kong' },
    { s:'morning', k:'sight', m:1, name:'Man Mo Temple', note:'Temple taoïste historique.', lat:22.2836, lng:114.1504, q:'Man Mo Temple Hollywood Road' },
    { s:'morning', k:'walk', a:'sheungwan', name:'Hollywood Road', note:'Galeries, street art et antiquaires.', lat:22.2843, lng:114.1520, q:'Hollywood Road Hong Kong' },

    { s:'lunch', k:'food', name:'Hei Baat Fong', note:'Dumplings maison, petite adresse locale.', lat:22.2847, lng:114.1481, q:'Hei Baat Fong Tai Ping Shan' },
    { s:'lunch', k:'food', o:1, name:'Luk On Kui', note:'Dim sum old-school très local. Alternative.', lat:22.2866, lng:114.1503, q:'Luk On Kui Sheung Wan' },

    { s:'afternoon', k:'hotel', name:'Check-in Hopewell Hotel', note:'Petite pause si besoin.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'afternoon', k:'shop', o:1, name:'PMQ', note:'Ancienne résidence de police devenue hub design. Optionnel : le premier à sauter si le jet lag pèse — Tai Kwun juste après couvre le même registre.', lat:22.2836, lng:114.1526, q:'PMQ Hong Kong' },
    { s:'afternoon', k:'shop', name:'G.O.D. · PMQ shops', note:'Design pop inspiré de Hong Kong. Studios et créateurs hongkongais sur place.', lat:22.2837, lng:114.1528, q:'G.O.D. PMQ Hong Kong' },
    { s:'afternoon', k:'museum', m:1, name:'Tai Kwun', note:'Ancienne prison devenue centre culturel.', lat:22.2818, lng:114.1546, q:'Tai Kwun Hong Kong' },

    { s:'evening', k:'walk', a:'soho', name:'SoHo', note:'Ruelles pentues, restaurants et bars. Descendre depuis Tai Kwun.', lat:22.2822, lng:114.1520, q:'SoHo Hong Kong' },
    { s:'evening', k:'food', name:'Dîner à SoHo', note:'Dîner puis cocktail.', lat:22.2820, lng:114.1516, q:'SoHo Central Hong Kong restaurants' },
    { s:'evening', k:'bar', m:1, name:'Bar Leone', note:'Cocktails italiens, ambiance décontractée. Bar à prioriser pendant le séjour.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' },
    { s:'evening', k:'bar', name:'COA', note:'Cocktails agave et mezcal.', lat:22.2826, lng:114.1508, q:'COA Hong Kong Shin Hing Street' },
    { s:'evening', k:'bar', o:1, name:'001 Tai Kwun', note:'Speakeasy élégant. En alternative.', lat:22.2818, lng:114.1548, q:'001 Bar Hong Kong Graham Street' }
  ]},

/* ── 23 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-23', city: 'Hong Kong', region: 'HK', label: 'Sai Ying Pun · The Peak · Happy Valley',
  focus: 'Quartier résidentiel le matin, panorama iconique l’après-midi, puis vraie soirée hongkongaise aux courses.',
  hotel: 0,
  must: 'Peak Circle Walk au coucher du soleil · Happy Valley',
  drop: ['Kennedy Town', 'ArtLane'],
  tip: 'Ding ding : prendre le tram historique vers Happy Valley en début de soirée. Une fois suffit — c’est un moyen de transport, pas une attraction. Peak Tram : file plus courte en fin d’après-midi.',
  alert: 'Fenêtre Peak : 16h15 au tram, 16h45 en haut, boucle Lugard vers 17h10, redescente vers 18h40 après les premières lumières.',
  stops: [
    { s:'morning', k:'walk', a:'saiyingpun', name:'Sai Ying Pun', note:'Quartier résidentiel, pentes et petits commerces.', lat:22.2860, lng:114.1420, q:'Sai Ying Pun Hong Kong' },
    { s:'morning', k:'cafe', name:'Fineprint', note:'Specialty coffee de quartier.', lat:22.2864, lng:114.1418, q:'Fineprint Sai Ying Pun' },
    { s:'morning', k:'sight', name:'ArtLane', note:'Fresques murales entre Hill Road et Ki Ling Lane.', lat:22.2865, lng:114.1385, q:'ArtLane Sai Ying Pun' },
    { s:'morning', k:'cafe', name:'NOC', note:'Roaster hongkongais moderne.', lat:22.2854, lng:114.1440, q:'NOC Coffee Sai Ying Pun' },
    { s:'morning', k:'walk', o:1, a:'kennedytown', name:'Kennedy Town', note:'Éventuellement, en prolongement.', lat:22.2820, lng:114.1290, q:'Kennedy Town Hong Kong' },
    { s:'morning', k:'food', name:'Sun Hing Restaurant', note:'Yum cha très local, dim sum old-school.', lat:22.2823, lng:114.1276, q:'Sun Hing Restaurant Kennedy Town' },

    { s:'lunch', k:'food', m:1, name:'Yung’s Tangerine Peel Roast Goose', note:'Oie rôtie à la peau de mandarine. Retour vers Central / Wan Chai.', lat:22.2778, lng:114.1740, q:'Yung\'s Tangerine Peel Roast Goose Hong Kong' },
    { s:'lunch', k:'food', o:1, name:'Joy Hing Roasted Meat', note:'Char siu et viandes rôties old-school. En alternative.', lat:22.2777, lng:114.1732, q:'Joy Hing Roasted Meat Wan Chai' },

    { s:'afternoon', k:'transit', m:1, t:'16:15', name:'Peak Tram', note:'Terminus Garden Road. Viser 16h15 : la file est plus courte et vous êtes en haut pour la lumière de fin de journée.', lat:22.2790, lng:114.1600, q:'Peak Tram Lower Terminus Garden Road' },
    { s:'afternoon', k:'view', m:1, a:'thepeak', t:'16:45', name:'Victoria Peak', note:'Panorama iconique. Arrivée vers 16h45.', lat:22.2712, lng:114.1500, q:'Victoria Peak Hong Kong' },
    { s:'afternoon', k:'nature', m:1, a:'thepeak', t:'17:10', name:'Peak Circle Walk · Lugard Rd + Harlech Rd', note:'Boucle de 1h15–1h30, plate et calme. Rester pour le coucher du soleil puis les premières lumières de la skyline, et redescendre vers 18h40.', lat:22.2718, lng:114.1443, q:'Lugard Road Victoria Peak' },

    { s:'evening', k:'transit', name:'Ding ding · tram vers Happy Valley', note:'Le tram historique a une boucle dédiée Happy Valley. À prendre comme moyen de transport, pas comme attraction : une fois dans le séjour suffit, et ça complète parfaitement le Star Ferry.', lat:22.2800, lng:114.1720, q:'Hong Kong Tramways Happy Valley' },
    { s:'evening', k:'sight', m:1, a:'happyvalley', name:'Happy Valley Racecourse', note:'Regarder plusieurs courses, boire un verre et parier de petites sommes pour l’expérience.', lat:22.2718, lng:114.1822, q:'Happy Valley Racecourse Hong Kong' },
    { s:'evening', k:'bar', name:'The Savory Project', note:'Cocktails salés, Dirty Martini.', lat:22.2823, lng:114.1512, q:'The Savory Project Hong Kong' },
    { s:'evening', k:'bar', o:1, name:'Bar Leone', note:'Si pas fait la veille.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' }
  ]},

/* ── 24 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-24', city: 'Hong Kong', region: 'HK', label: 'Sham Shui Po · Mong Kok · Tai Hang',
  focus: 'Journée la plus locale et créative, entre vieux commerces, street food, ateliers, design et quartiers ultra-denses.',
  hotel: 0,
  must: 'Fire Dragon à Tai Hang, sur place 18h30',
  alert: 'Fire Dragon confirmé du 24 au 26 septembre à Tai Hang. Sur place entre 18h30 et 19h00 — la danse est publiée 19h30–22h30 mais les ruelles se remplissent bien avant. Lanternes de Victoria Park allumées 18h30–23h00, juste à côté.',
  drop: ['Jordan', 'Yau Ma Tei — ne sacrifiez pas la soirée pour les marchés'],
  tip: 'Quitter Kowloon à 17h30, pas plus tard. MTR Yau Ma Tei → Tin Hau environ 25 min, puis 8 min à pied. Le tram et les bus seront bloqués autour de Tai Hang en soirée.',
  stops: [
    { s:'morning', k:'walk', m:1, a:'shamshuipo', name:'Sham Shui Po', note:'Mini food crawl plutôt qu’un gros déjeuner.', lat:22.3303, lng:114.1622, q:'Sham Shui Po Hong Kong' },
    { s:'morning', k:'shop', a:'shamshuipo', name:'Tai Nan Street', note:'Ateliers, merceries et jeunes boutiques.', lat:22.3288, lng:114.1615, q:'Tai Nan Street Sham Shui Po' },
    { s:'morning', k:'food', name:'Kung Wo Beancurd Factory', note:'Tofu frais, soy milk et tofu pudding.', lat:22.3319, lng:114.1626, q:'Kung Wo Beancurd Factory Sham Shui Po' },
    { s:'morning', k:'shop', a:'shamshuipo', name:'Apliu Street', note:'Marché électronique et bric-à-brac.', lat:22.3305, lng:114.1625, q:'Apliu Street Market Sham Shui Po' },
    { s:'morning', k:'shop', name:'DX Design Hub', note:'Design hongkongais et expositions.', lat:22.3286, lng:114.1610, q:'DX Design Hub Sham Shui Po' },

    { s:'lunch', k:'food', name:'Lau Sum Kee', note:'Nouilles traditionnelles au bambou.', lat:22.3300, lng:114.1601, q:'Lau Sum Kee Noodle Sham Shui Po' },
    { s:'lunch', k:'food', name:'Sun Heung Yuen', note:'Cha chaan teng old-school.', lat:22.3298, lng:114.1630, q:'Sun Heung Yuen Sham Shui Po' },

    { s:'afternoon', k:'shop', a:'taikoktsui', name:'Twemco · Tai Kok Tsui', note:'Flip clocks fabriquées à Hong Kong.', lat:22.3220, lng:114.1620, q:'Twemco Tai Kok Tsui' },
    { s:'afternoon', k:'walk', a:'mongkok', name:'Mong Kok', note:'Quartier ultra-dense.', lat:22.3193, lng:114.1694, q:'Mong Kok Hong Kong' },
    { s:'afternoon', k:'walk', a:'yaumatei', name:'Yau Ma Tei', note:'Pas besoin de consacrer du temps spécifiquement à Ladies’ Market / Temple Street. Les marchés ne valent pas de rogner sur la soirée.', lat:22.3110, lng:114.1706, q:'Yau Ma Tei Hong Kong' },
    { s:'afternoon', k:'walk', o:1, a:'jordan', name:'Jordan', note:'En prolongement vers le sud, seulement si vous êtes en avance.', lat:22.3048, lng:114.1716, q:'Jordan Hong Kong' },
    { s:'afternoon', k:'transit', m:1, t:'17:30', name:'Quitter Kowloon', note:'Heure limite ferme. MTR Yau Ma Tei → Tin Hau, environ 25 min, puis 8 min à pied jusqu’à Tai Hang. Partir à 17h30 est ce qui rend l’arrivée à 18h30 possible.', lat:22.3110, lng:114.1706, q:'Yau Ma Tei MTR Station' },

    { s:'evening', k:'sight', m:1, hard:1, t:'18:30', a:'taihang', name:'Tai Hang · Fire Dragon Dance', note:'Le moment le plus spécial du voyage, et le seul point non négociable de la semaine à Hong Kong. Arriver entre 18h30 et 19h00 : la danse est publiée entre 19h30 et 22h30, mais les ruelles se remplissent bien avant et les meilleures positions partent tôt. Confirmé du 24 au 26 septembre.', lat:22.2792, lng:114.1905, q:'Tai Hang Fire Dragon Dance' },
    { s:'evening', k:'sight', m:1, t:'21:15', a:'causewaybay', name:'Victoria Park · lanternes', note:'Juste à côté de Tai Hang, 10 min à pied. Lanternes éclairées de 18h30 à 23h00, donc aucune raison de courir : le dragon d’abord, les lanternes après.', lat:22.2822, lng:114.1885, q:'Victoria Park Hong Kong' },
    { s:'evening', k:'food', a:'taihang', name:'Dîner Tai Hang / Causeway Bay', note:'Autour de Tai Hang ou Causeway Bay, après ou entre les deux.', lat:22.2800, lng:114.1855, q:'Tai Hang restaurants Hong Kong' }
  ]},

/* ── 25 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-25', city: 'Shenzhen', region: 'CN', label: 'Futian · Nanshan · OCT-LOFT · Luohu',
  focus: 'Rupture totale avec Hong Kong : métropole chinoise récente, architecture monumentale, tech, design et scène créative.',
  hotel: 0,
  must: 'OCT-LOFT · Huaqiangbei · Drawing Room au 96e',
  book: ['Visa ou permis pour la Chine continentale — à vérifier bien avant le départ'],
  drop: ['Les trois bonus : drone, robotaxi, DJI', 'Lianhuashan Park si la frontière prend du temps'],
  tip: 'DiDi fonctionne avec un numéro étranger et une carte internationale ; sinon passez par le mini-programme DiDi dans Alipay ou WeChat. Copiez toujours le nom chinois de la destination avant de commander.',
  checks: [{ id:'sz1', t:'Passeport' }, { id:'sz2', t:'Visa / permis' }, { id:'sz3', t:'Alipay + WeChat Pay' }, { id:'sz4', t:'Carte internationale' }, { id:'sz5', t:'eSIM + VPN' }, { id:'sz6', t:'Cash CNY' }],
  stops: [
    { s:'morning', k:'transit', m:1, zh:'福田口岸', a:'futian', name:'Passage de la frontière · Futian', note:'Passeport + visa/permis. Départ tôt.', lat:22.5164, lng:114.0700, q:'Futian Checkpoint Shenzhen' },
    { s:'morning', k:'sight', zh:'深圳市民中心', a:'futian', name:'Civic Center', note:'Architecture monumentale.', lat:22.5460, lng:114.0590, q:'Shenzhen Civic Center' },
    { s:'morning', k:'nature', zh:'莲花山公园', a:'futian', name:'Lianhuashan Park', note:'Vue sur le skyline de Futian depuis la colline.', lat:22.5560, lng:114.0560, q:'Lianhuashan Park Shenzhen' },
    { s:'morning', k:'nature', zh:'深圳人才公园', a:'nanshan', name:'Shenzhen Talent Park', note:'DiDi vers Nanshan en fin de matinée. Pelouses au bord de l’eau, face aux tours de Qianhai.', lat:22.5180, lng:113.9440, q:'Shenzhen Talent Park' },

    { s:'morning', k:'transit', o:1, name:'Bonus · livraison Meituan par drone', note:'Bonus, pas un objectif. Des points de retrait par drone opèrent dans Nanshan, notamment autour de Talent Park : à tenter seulement si vous tombez dessus.', lat:22.5185, lng:113.9450, zh:'深圳人才公园', q:'Meituan drone delivery Shenzhen Talent Park' },

    { s:'lunch', k:'food', m:1, zh:'八合里海记牛肉店 南山', name:'Baheli Haiji Beef Hotpot', note:'Chaoshan beef hotpot. Nanshan.', lat:22.5280, lng:113.9330, q:'Baheli Haiji Beef Hotpot Nanshan Shenzhen' },
    { s:'lunch', k:'food', o:1, name:'Chao Shan Da Mu Beef Hotpot City', note:'Alternative.', lat:22.5310, lng:113.9300, q:'Chao Shan Da Mu Beef Hotpot Shenzhen' },

    { s:'afternoon', k:'transit', o:1, zh:'前海', name:'Bonus · robotaxi Pony.ai', note:'Bonus, pas un objectif. Nanshan et Qianhai sont dans la zone d’opération : à faire seulement si un véhicule est disponible sans attendre.', lat:22.5300, lng:113.8900, q:'Qianhai Shenzhen' },
    { s:'afternoon', k:'sight', m:1, zh:'华侨城创意文化园 OCT-LOFT', a:'octloft', name:'OCT-LOFT', note:'Ancienne zone industrielle devenue quartier créatif.', lat:22.5450, lng:113.9860, q:'OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', zh:'旧天堂书店 华侨城创意文化园', a:'octloft', name:'Old Heaven', note:'Librairie, musique, vinyles et art.', lat:22.5452, lng:113.9866, q:'Old Heaven Books OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', o:1, zh:'大疆旗舰店 欢乐海岸', name:'Bonus · DJI Flagship Store', note:'Bonus, pas un objectif. OCT Harbour, en milieu d’après-midi, seulement si vous êtes en avance sur Huaqiangbei.', lat:22.5210, lng:113.9880, q:'DJI Flagship Store OCT Harbour Shenzhen' },
    { s:'afternoon', k:'market', zh:'华强北 赛格广场', a:'huaqiangbei', name:'Huaqiangbei · SEG Plaza', note:'Le plus grand marché électronique du monde. Fin d’après-midi.', lat:22.5473, lng:114.0862, q:'SEG Plaza Huaqiangbei Shenzhen' },

    { s:'evening', k:'view', m:1, t:'17:00', zh:'深圳瑞吉酒店 京基100', name:'Drawing Room · St. Regis, 96e étage', note:'DiDi vers The St. Regis Shenzhen dans KK100 vers 17h–17h30, puis Drawing Room pour voir la ville s’illuminer.', lat:22.5450, lng:114.1080, q:'The St. Regis Shenzhen KK100' },
    { s:'evening', k:'bar', o:1, zh:'深圳瑞吉酒店 京基100', name:'St. Regis Bar', note:'Éventuellement un cocktail avant de redescendre.', lat:22.5450, lng:114.1080, q:'St. Regis Bar Shenzhen' },
    { s:'evening', k:'transit', zh:'罗湖口岸', a:'luohu', name:'Frontière de Luohu → Hong Kong', note:'Retour à Hong Kong en fin de soirée.', lat:22.5320, lng:114.1160, q:'Luohu Port Shenzhen' }
  ]},

/* ── 26 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-26', city: 'Hong Kong', region: 'HK', label: 'Sai Kung · Tai Long Wan · plage',
  focus: 'Vraie coupure nature avec mer, montagne et plage, puis grosse soirée en ville.',
  hotel: 0,
  must: 'Tai Long Wan — ou basculer sur le programme du 27 si la météo est mauvaise',
  drop: ['Le retour à pied — prendre le bateau depuis Ham Tin si la journée est longue', 'Sing Kee'],
  tip: 'Sai Kung Town → Sai Wan Pavilion en taxi (~20 min) ou minibus NR29. Vérifier sur place l’heure du dernier bateau Ham Tin → Sai Kung.',
  alert: 'Journée météo-dépendante. Sous la pluie ou par vent fort, échangez-la avec le 27 septembre : M+, Tsim Sha Tsui et le Star Ferry se font très bien par mauvais temps, Tai Long Wan non.',
  stops: [
    { s:'morning', k:'walk', a:'saikung', name:'Sai Kung Town', note:'Point de départ. Minibus / taxi vers Sai Wan Pavilion.', lat:22.3817, lng:114.2712, q:'Sai Kung Town Hong Kong' },
    { s:'morning', k:'nature', m:1, w:1, name:'Sai Wan Pavilion · départ randonnée', note:'Début du sentier vers Sai Wan / Tai Long Wan. Vérifier la météo la veille au soir : sous la pluie ce sentier n’a aucun intérêt.', lat:22.3960, lng:114.3560, q:'Sai Wan Pavilion Sai Kung' },

    { s:'lunch', k:'nature', m:1, w:1, name:'Sai Wan Beach', note:'Baignade si la météo le permet.', lat:22.4030, lng:114.3600, q:'Sai Wan Beach Sai Kung' },
    { s:'lunch', k:'nature', m:1, w:1, name:'Tai Long Wan', note:'Le point fort de la journée. Randonnée, plage et baignade ; retour à pied ou en bateau selon les conditions. Par mauvais temps, échanger la journée avec le 27 septembre — M+ et Tsim Sha Tsui se font aussi bien sous la pluie.', lat:22.4090, lng:114.3670, q:'Tai Long Wan Sai Kung' },

    { s:'afternoon', k:'food', name:'Loaf On', note:'Seafood cantonais réputé. Retour à Sai Kung Town en fin d’après-midi.', lat:22.3818, lng:114.2716, q:'Loaf On Sai Kung' },
    { s:'afternoon', k:'food', o:1, name:'Sing Kee Seafood Restaurant', note:'Alternative plus locale.', lat:22.3815, lng:114.2721, q:'Sing Kee Seafood Sai Kung' },

    { s:'evening', k:'hotel', name:'Retour hôtel · douche', note:'Puis dîner et cocktails en ville.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'evening', k:'bar', name:'Green Room', note:'Cocktails.', lat:22.2810, lng:114.1530, q:'Green Room bar Hong Kong Central' },
    { s:'evening', k:'bar', name:'GOKAN', note:'Cocktails.', lat:22.2822, lng:114.1533, q:'GOKAN bar Hong Kong' },
    { s:'evening', k:'bar', o:1, name:'COA', note:'Si pas déjà fait.', lat:22.2826, lng:114.1508, q:'COA Hong Kong' },
    { s:'evening', k:'bar', o:1, name:'Bar Leone', note:'Si pas encore fait.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' }
  ]},

/* ── 27 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-27', city: 'Hong Kong', region: 'HK', label: 'West Kowloon · M+ · Tsim Sha Tsui',
  focus: 'Dernière journée facile : design et culture contemporaine, Kowloon et skyline, puis grande dernière soirée.',
  hotel: 0,
  must: 'M+ · Star Ferry au blue hour · le dîner réservé',
  book: ['Le dîner du soir — le meilleur du séjour, à réserver'],
  drop: ['Jordan', 'Kapok'],
  tip: 'Star Ferry TST → Central au moment du blue hour : le meilleur rapport temps / vue de la ville.',
  stops: [
    { s:'morning', k:'walk', a:'westkowloon', name:'West Kowloon Cultural District', note:'Fin de matinée, promenade au bord de l’eau.', lat:22.3020, lng:114.1600, q:'West Kowloon Cultural District' },
    { s:'morning', k:'museum', m:1, name:'M+', note:'Musée de la culture visuelle contemporaine. Dimanche : 10h–18h.', lat:22.3020, lng:114.1580, q:'M+ Museum Hong Kong' },
    { s:'morning', k:'shop', name:'M+ Shop', note:'Livres et design asiatique.', lat:22.3021, lng:114.1583, q:'M+ Shop Hong Kong' },

    { s:'lunch', k:'food', name:'Mak Man Kee', note:'Wonton noodles.', lat:22.3060, lng:114.1700, q:'Mak Man Kee Noodle Shop Jordan' },
    { s:'lunch', k:'food', name:'Australia Dairy Company', note:'Cha chaan teng culte.', lat:22.3061, lng:114.1703, q:'Australia Dairy Company Jordan' },

    { s:'afternoon', k:'walk', a:'tst', name:'Tsim Sha Tsui · Nathan Road', note:'Éventuellement pousser jusqu’à Jordan.', lat:22.2990, lng:114.1720, q:'Nathan Road Tsim Sha Tsui' },
    { s:'afternoon', k:'shop', name:'Kapok', note:'Mode et design indépendant.', lat:22.2960, lng:114.1730, q:'Kapok Tsim Sha Tsui' },

    { s:'evening', k:'view', m:1, a:'tst', name:'Avenue of Stars', note:'Attendre les lumières.', lat:22.2935, lng:114.1740, q:'Avenue of Stars Hong Kong' },
    { s:'evening', k:'transit', m:1, name:'Star Ferry · nuit / blue hour', note:'TST → Central au moment des lumières.', lat:22.2937, lng:114.1685, q:'Star Ferry Pier Tsim Sha Tsui' },
    { s:'evening', k:'food', m:1, b:'must', name:'Dîner — le meilleur du séjour', note:'Le dîner réservé du séjour, puis dernier cocktail.', lat:22.2820, lng:114.1560, q:'Central Hong Kong fine dining' }
  ]},

/* ── 28 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-28', city: 'Busan', region: 'KR', label: 'Hong Kong → Busan · Haeundae · Gwangalli',
  focus: 'Vol du matin, puis premier contact avec la mer de Busan et les néons de Gwangalli.',
  hotel: 1,
  must: 'Haeundae Beach · Gwangalli face au pont',
  drop: ['Marine City', 'Dongbaekseom si l’arrivée traîne'],
  tip: 'Gimhae → Haeundae : ~50 min en taxi. Acheter une T-money ou Cashbee à l’aéroport.',
  stops: [
    { s:'morning', k:'plane', m:1, t:'09:10', name:'CX5674 · HKG T2 → Busan Gimhae PUS', note:'Départ 09h10, arrivée 13h35. Durée 3h25. Commercialisé par Cathay Pacific, opéré par Hong Kong Express Airways. Economy Light, 1 pièce en soute.', lat:22.3170, lng:113.9350, q:'Hong Kong International Airport Terminal 2' },

    { s:'afternoon', k:'hotel', t:'13:35', name:'L7 Haeundae by LOTTE · dépôt des bagages', note:'Transfert depuis Gimhae en début d’après-midi.', lat:35.1607, lng:129.1613, q:'L7 Haeundae by LOTTE' },
    { s:'afternoon', k:'nature', m:1, a:'haeundae', name:'Haeundae Beach', note:'Première marche au bord de l’eau.', lat:35.1587, lng:129.1603, q:'Haeundae Beach Busan' },
    { s:'afternoon', k:'market', a:'haeundae', name:'Haeundae Traditional Market', note:'Street food.', lat:35.1630, lng:129.1620, q:'Haeundae Traditional Market' },
    { s:'afternoon', k:'food', name:'Kumsu Bokguk', note:'Soupe de poisson-globe.', lat:35.1628, lng:129.1608, q:'Kumsu Bokguk Haeundae' },
    { s:'afternoon', k:'nature', name:'Dongbaekseom', note:'Sentier côtier autour de l’îlot.', lat:35.1533, lng:129.1500, q:'Dongbaekseom Island Busan' },
    { s:'afternoon', k:'walk', name:'Marine City', note:'Tours et front de mer.', lat:35.1540, lng:129.1400, q:'Marine City Busan' },

    { s:'evening', k:'view', m:1, a:'gwangalli', name:'Gwangalli Beach · Gwangan Bridge', note:'Face au pont illuminé.', lat:35.1531, lng:129.1186, q:'Gwangalli Beach Busan' },
    { s:'evening', k:'bar', name:'HQ Gwangan', note:'Bar face à la plage.', lat:35.1533, lng:129.1180, q:'HQ Gwangan Busan' },
    { s:'evening', k:'bar', name:'Hongdan', note:'Cocktails.', lat:35.1528, lng:129.1190, q:'Hongdan bar Gwangalli Busan' }
  ]},

/* ── 29 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-29', city: 'Busan', region: 'KR', label: 'Yonggungsa · Cheongsapo · Sky Capsule',
  focus: 'Grande journée iconique de Busan entre temple, mer, petits villages et Sky Capsule.',
  hotel: 1,
  must: 'Haedong Yonggungsa · Sky Capsule 17h30',
  book: ['Sky Capsule 17h30, Cheongsapo → Mipo — réservation confirmée'],
  drop: ['Songjeong Beach', 'Daritdol Observatory si vous êtes juste avant 17h00'],
  tip: 'Yonggungsa tôt : bus 181 depuis Haeundae ou taxi (~20 min). Être à la station Cheongsapo à 17h00 pour la capsule de 17h30.',
  stops: [
    { s:'morning', k:'sight', m:1, name:'Haedong Yonggungsa', note:'Temple au bord de la mer. Y aller tôt.', lat:35.1884, lng:129.2233, q:'Haedong Yonggungsa Temple' },

    { s:'lunch', k:'nature', a:'songjeong', name:'Songjeong Beach', note:'Fin de matinée.', lat:35.1786, lng:129.1996, q:'Songjeong Beach Busan' },
    { s:'lunch', k:'food', a:'cheongsapo', name:'Cheongsapo seafood', note:'Petits restaurants de fruits de mer du village.', lat:35.1607, lng:129.1937, q:'Cheongsapo seafood Busan' },
    { s:'lunch', k:'cafe', name:'Cafés de Cheongsapo', note:'Cafés avec vue sur le port.', lat:35.1604, lng:129.1942, q:'Cheongsapo cafe Busan' },

    { s:'afternoon', k:'view', name:'Cheongsapo Daritdol Observatory', note:'Plateforme vitrée au-dessus de la mer.', lat:35.1592, lng:129.1970, q:'Cheongsapo Daritdol Skywalk' },
    { s:'afternoon', k:'walk', name:'Haeundae Green Railway', note:'Ancienne voie ferrée côtière.', lat:35.1600, lng:129.1900, q:'Haeundae Blueline Park Green Railway' },
    { s:'afternoon', k:'transit', m:1, t:'17:00', name:'Station Sky Capsule Cheongsapo', note:'Arriver vers 17h00 pour la réservation de 17h30.', lat:35.1601, lng:129.1932, q:'Cheongsapo Sky Capsule Station' },

    { s:'evening', k:'view', m:1, b:'ok', t:'17:30', name:'Sky Capsule · Cheongsapo → Mipo', note:'Réservation confirmée. Environ 30 min.', lat:35.1610, lng:129.1720, q:'Mipo Sky Capsule Station' },
    { s:'evening', k:'walk', name:'Mipo → Haeundae Beach → L7', note:'Promenade le long de la plage en début de soirée.', lat:35.1595, lng:129.1650, q:'Haeundae Beach walk Busan' },
    { s:'evening', k:'food', m:1, name:'Haeundae Rib Barbecue Restaurant', note:'Galbi de Haeundae.', lat:35.1621, lng:129.1616, q:'Haeundae Rib Barbecue Restaurant' },
    { s:'evening', k:'food', o:1, name:'Kumsu Bokguk', note:'Si pas fait la veille.', lat:35.1628, lng:129.1608, q:'Kumsu Bokguk Haeundae' },
    { s:'evening', k:'bar', name:'Gunam-ro bars', note:'Rue principale de Haeundae, bars et izakaya.', lat:35.1610, lng:129.1610, q:'Gunam-ro Haeundae bars' }
  ]},

/* ── 30 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-30', city: 'Busan → Séoul', region: 'KR', label: 'Gamcheon · Jagalchi · KTX → Séoul',
  focus: 'Matinée dense à Busan, KTX en début d’après-midi, arrivée douce à Séoul.',
  hotel: 2,
  must: 'Gamcheon · Jagalchi · KTX 14h47',
  alert: 'Journée minutée, KTX 14h47 = deadline ferme. 08h00 départ L7 · 08h45 bagages en consigne · 09h15 Gamcheon · 10h45 Nampo / Jagalchi · 12h30 déjeuner · 13h30 bagages · 14h47 départ.',
  book: ['KTX046 14h47 — voiture 1, siège 7B, billet confirmé'],
  drop: ['BIFF Square', 'Nampo-dong — Gamcheon et Jagalchi d’abord'],
  tip: 'Taxis entre les étapes plutôt que le métro, sinon vous passerez la matinée à regarder l’heure. Consigne à Busan Station dès 08h45.',
  stops: [
    { s:'morning', k:'hotel', m:1, t:'08:00', name:'Check-out L7 Haeundae', note:'Départ ferme à 08h00 : toute la matinée en dépend.', lat:35.1607, lng:129.1613, q:'L7 Haeundae by LOTTE' },
    { s:'morning', k:'transit', m:1, t:'08:45', name:'Bagages en consigne · Busan Station', note:'08h45–09h00. Casiers ou consigne de la gare, puis taxi direct vers Gamcheon.', lat:35.1150, lng:129.0420, q:'Busan Station' },
    { s:'morning', k:'sight', m:1, t:'09:15', a:'gamcheon', name:'Gamcheon Culture Village', note:'Taxi depuis Busan Station, environ 20 min. Compter 1h15 sur place.', lat:35.0975, lng:129.0106, q:'Gamcheon Culture Village' },
    { s:'morning', k:'walk', t:'10:45', a:'nampo', name:'Nampo-dong · BIFF Square', note:'Taxi depuis Gamcheon. Stands de street food de BIFF Square, en passant.', lat:35.0982, lng:129.0281, q:'BIFF Square Nampo-dong Busan' },
    { s:'morning', k:'market', m:1, a:'jagalchi', name:'Jagalchi Market', note:'Le grand marché aux poissons de Busan, cinq minutes à pied de BIFF Square.', lat:35.0966, lng:129.0305, q:'Jagalchi Market Busan' },

    { s:'lunch', k:'food', m:1, t:'12:30', name:'Bonjeon Dwaeji Gukbap', note:'Soupe porc-riz typique de Busan. Taxi depuis Jagalchi.', lat:35.1140, lng:129.0410, q:'Bonjeon Dwaeji Gukbap Busan' },
    { s:'lunch', k:'transit', m:1, t:'13:30', name:'Récupérer les bagages · Busan Station', note:'13h30 : une heure de marge avant le départ.', lat:35.1150, lng:129.0420, q:'Busan Station' },

    { s:'afternoon', k:'transit', m:1, hard:1, b:'ok', t:'14:47', name:'KTX046 · Busan → Seoul Station', note:'Départ 14h47, arrivée 17h28. Durée 2h41. Voiture 1, siège 7B (dos à la marche). Economy / Adult, KRW 53 500. Ticket 80022-0903-10020-03.', lat:35.1150, lng:129.0420, q:'Busan Station KTX' },
    { s:'afternoon', k:'hotel', t:'17:28', name:'Seoul Station → Nine Brick Hotel Hongdae', note:'Transfert puis check-in.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },

    { s:'evening', k:'food', name:'Dîner tranquille · Hongdae', note:'Sans programme lourd.', lat:37.5560, lng:126.9240, q:'Hongdae restaurants Seoul' },
    { s:'evening', k:'walk', a:'hongdae', name:'Première balade Hongdae / Yeonnam', note:'Prendre la température du quartier.', lat:37.5620, lng:126.9250, q:'Yeonnam-dong Seoul' }
  ]},

/* ── 1 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-01', city: 'Séoul', region: 'KR', label: 'Yeonnam · Seochon · Bukchon · Gyeongbokgung',
  focus: 'Commencer doucement autour de l’hôtel et du rendez-vous skincare, puis vieux Séoul, patrimoine, cafés et soirée.',
  hotel: 2,
  must: 'Gyeongbokgung de nuit · Seochon · Bukchon',
  alert: 'Gyeongbokgung de nuit : billets en ligne épuisés. Plan A, 300 billets du jour réservés aux étrangers au guichet de Gwanghwamun, 2 max par personne, passeport obligatoire. Plan B, en hanbok l’entrée nocturne est gratuite et sans réservation.',
  book: ['Gyeongbokgung nuit 19h00–21h30, dernière entrée 20h30 — épuisé en ligne, voir Plan A / Plan B', 'Bar Cham si vous le gardez — réservation recommandée, jeudi 18h–01h'],
  drop: ['Woo Lae Oak et Bar Cham — hors programme principal', 'Cheonggyecheon', 'Ikseon-dong et Euljiro si la soirée traîne'],
  tip: 'Colonne vertébrale intouchable : Forena → Yeonnam → Seochon → Bukchon / Samcheong → Gyeongbokgung. Taxi Yeonnam → Seochon, environ 20 min. Tout le reste vient après le palais, pas avant.',
  stops: [
    { s:'morning', k:'sight', m:1, t:'10:00', name:'Forena Clinic Hongdae', note:'7th Floor, H-CUBE, 140 Yanghwa-ro. Horaire compatible avec les heures d’ouverture du jeudi. Le point de départ fixe de la journée.', lat:37.5555, lng:126.9236, q:'Forena Clinic Hongdae 140 Yanghwa-ro' },
    { s:'morning', k:'cafe', name:'Centralsite Coffee Roasters Yeonnam', note:'Fin de matinée à Yeonnam-dong, à dix minutes à pied de la clinique.', lat:37.5630, lng:126.9245, q:'Centralsite Coffee Roasters Yeonnam' },
    { s:'morning', k:'shop', name:'Object', note:'Papeterie, illustration et objets de designers coréens.', lat:37.5545, lng:126.9245, q:'Object Sangsang Hongdae Seoul' },
    { s:'morning', k:'nature', a:'yeonnam', name:'Gyeongui Line Forest Park', note:'La coulée verte de Yeonnam, sur l’ancienne voie ferrée.', lat:37.5610, lng:126.9255, q:'Gyeongui Line Forest Park Yeonnam' },

    { s:'lunch', k:'food', name:'Déjeuner léger · Yeonnam / Hongdae', note:'Léger : la journée est longue et se termine tard. Puis taxi vers Seochon, environ 20 min.', lat:37.5615, lng:126.9250, q:'Yeonnam-dong restaurants Seoul' },

    { s:'afternoon', k:'walk', m:1, a:'seochon', t:'13:30', name:'Seochon', note:'Ruelles et petites boutiques à l’ouest du palais. Tongin Market pour le système de jetons.', lat:37.5790, lng:126.9705, q:'Seochon Village Seoul' },
    { s:'afternoon', k:'food', o:1, name:'Hwangsaengga Kalguksu', note:'Option déjeuner tardif dans le secteur, si vous avez sauté Yeonnam.', lat:37.5817, lng:126.9838, q:'Hwangsaengga Kalguksu Bukchon' },
    { s:'afternoon', k:'sight', m:1, a:'bukchon', t:'15:00', name:'Bukchon Hanok Village & Samcheong-dong', note:'Village de hanok entre les deux palais, puis Samcheong-dong le long de la bordure est pour les galeries et les cafés. Quartier résidentiel : rester discret dans les ruelles.', lat:37.5826, lng:126.9850, q:'Bukchon Hanok Village' },
    { s:'afternoon', k:'cafe', o:1, name:'Pause café · Samcheong-dong', note:'Avant de redescendre vers le palais. Prévoir d’être à Gwanghwamun vers 18h00 si vous tentez les billets sur place.', lat:37.5840, lng:126.9815, q:'Samcheong-dong cafe Seoul' },

    { s:'evening', k:'food', o:1, t:'17:15', name:'Woo Lae Oak · dîner tôt', note:'Hors programme principal. Pyongyang naengmyeon et bulgogi. Si vous y tenez, c’est le seul créneau possible : il ferme vers 21h et il y a souvent de l’attente. À sacrifier sans regret si vous visez les billets du palais.', lat:37.5673, lng:126.9958, q:'Woo Lae Oak Seoul' },
    { s:'evening', k:'food', o:1, name:'Maksamga Euljiro', note:'Hors programme principal. Alternative plus tardive et plus brute, à faire après le palais.', lat:37.5665, lng:126.9915, q:'Maksamga Euljiro' },
    { s:'evening', k:'sight', m:1, hard:1, b:'sold', t:'19:00', name:'Gyeongbokgung · visite nocturne', note:'La pièce maîtresse de la journée et le point non négociable du séjour à Séoul. Visite nocturne 19h00–21h30, dernière entrée 20h30. Les billets en ligne sont épuisés — voir les deux plans ci-dessous. Le 1er octobre, performances de musique et de danse de cour dans les cours du palais.',
      plans:[
        { k:'Plan A', d:'Billets du jour. 300 billets sont réservés aux visiteurs étrangers et vendus le jour même au guichet de Gwanghwamun. Maximum 2 par personne, passeport obligatoire pour chacun. Y être largement avant l’ouverture du guichet : la file se forme tôt et 300 billets partent vite.' },
        { k:'Plan B', d:'Hanbok. En hanbok l’entrée est gratuite et sans réservation préalable, y compris pour la visite nocturne. Plusieurs loueurs autour de Gwanghwamun et de Bukchon ouvrent en fin d’après-midi. C’est le plan de secours le plus fiable si le guichet est épuisé.' }
      ],
      lat:37.5796, lng:126.9770, q:'Gyeongbokgung Palace' },
    { s:'evening', k:'walk', o:1, a:'ikseon', t:'21:30', name:'Ikseon-dong', note:'Après le palais, pas avant. Hanok des années 1920 reconvertis en cafés et bars, à 15 min à pied de Gwanghwamun.', lat:37.5740, lng:126.9895, q:'Ikseon-dong Seoul' },
    { s:'evening', k:'walk', o:1, name:'Cheonggyecheon', note:'Optionnel. La descente à pied entre Ikseon-dong et Euljiro passe par le ruisseau.', lat:37.5690, lng:126.9840, q:'Cheonggyecheon Stream Seoul' },
    { s:'evening', k:'cafe', o:1, a:'euljiro', name:'Coffee Hanyakbang', note:'Café rétro caché dans une ruelle d’Euljiro. Ouvert jusqu’à 22h au rez-de-chaussée.', lat:37.5673, lng:126.9910, q:'Coffee Hanyakbang Euljiro' },
    { s:'evening', k:'bar', o:1, b:'must', t:'22:00', name:'Bar Cham', note:'Hors programme principal, à garder pour la fin si vous avez encore de l’énergie. Cocktails autour d’alcools et d’ingrédients coréens, à Seochon, 10 min à pied du palais. Jeudi 18h–01h, réservation recommandée.', lat:37.5768, lng:126.9705, q:'Bar Cham Seoul' },
    { s:'evening', k:'bar', o:1, name:'Euljiro late-night', note:'Bars, ruelles et late-night food, si la soirée continue.', lat:37.5665, lng:126.9920, q:'Euljiro Seoul bars' }
  ]},

/* ── 2 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-02', city: 'Séoul', region: 'KR', label: 'Seongsu · Dosan · Apgujeong · Cheongdam',
  focus: 'Séoul contemporain : anciens entrepôts, mode coréenne, specialty coffee et architecture retail, puis design et cocktails au sud de la ville.',
  hotel: 2,
  must: 'Seongsu · Haus Nowhere Dosan · ZEST',
  book: ['Gebangsikdang Seongsu — réservation recommandée, 11h30–15h'],
  drop: ['Point of View', 'Apgujeong Rodeo'],
  tip: 'Seoul Forest et le café d’abord : MUSINSA EMPTY n’ouvre qu’à 11h. Taxi Seongsu → Dosan (~25 min).',
  stops: [
    { s:'morning', k:'nature', name:'Seoul Forest', note:'Faire le parc et le café en premier : MUSINSA EMPTY n’ouvre qu’à 11h.', lat:37.5444, lng:127.0374, q:'Seoul Forest Park' },
    { s:'morning', k:'walk', m:1, a:'seongsu', name:'Seongsu-dong', note:'Anciens ateliers de chaussures en brique rouge, convertis bâtiment par bâtiment. À parcourir à pied avant que le retail n’ouvre.', lat:37.5445, lng:127.0557, q:'Seongsu-dong Seoul' },
    { s:'morning', k:'cafe', name:'LowKey Seongsu', note:'Specialty coffee.', lat:37.5430, lng:127.0560, q:'LowKey Coffee Seongsu' },
    { s:'morning', k:'shop', m:1, name:'LCDC Seoul', note:'Complexe retail et design.', lat:37.5410, lng:127.0570, q:'LCDC Seoul Seongsu' },
    { s:'morning', k:'shop', name:'MUSINSA EMPTY SEONGSU', note:'Ouvre à 11h.', lat:37.5448, lng:127.0553, q:'MUSINSA EMPTY Seongsu' },
    { s:'morning', k:'shop', name:'Point of View', note:'Papeterie et objets d’écriture.', lat:37.5433, lng:127.0568, q:'Point of View Seongsu' },

    { s:'lunch', k:'food', m:1, b:'must', name:'Gebangsikdang Seongsu', note:'Ganjang-gejang (crabe mariné à la sauce soja) et autres plats coréens. 11h30–15h avant la pause, réservation recommandée. Ggupdang Seongsu est retiré du déjeuner : horaires de semaine trop tardifs pour le planning.', lat:37.5420, lng:127.0530, q:'Gebangsikdang Seongsu' },

    { s:'afternoon', k:'nature', a:'dosan', name:'Dosan Park', note:'Taxi depuis Seongsu, puis balade autour du parc.', lat:37.5240, lng:127.0350, q:'Dosan Park Seoul' },
    { s:'afternoon', k:'shop', m:1, name:'GENTLE MONSTER HAUS NOWHERE DOSAN', note:'Flagship spectaculaire. Ouvert 11h–21h tous les jours.', lat:37.5236, lng:127.0367, q:'Haus Nowhere Dosan Gentle Monster' },
    { s:'afternoon', k:'walk', a:'cheongdam', name:'Apgujeong Rodeo · Cheongdam', note:'Fin d’après-midi entre mode et galeries.', lat:37.5270, lng:127.0400, q:'Apgujeong Rodeo Seoul' },

    { s:'evening', k:'food', name:'Apgujeong Dakhanmari', note:'Poulet mijoté.', lat:37.5265, lng:127.0395, q:'Apgujeong Dakhanmari' },
    { s:'evening', k:'bar', m:1, name:'ZEST SEOUL', note:'Priorité cocktails. Vendredi à partir de 18h30.', lat:37.5238, lng:127.0388, q:'Zest Seoul bar' },
    { s:'evening', k:'bar', o:1, name:'Alice Cheongdam', note:'Plus théâtral. En alternative.', lat:37.5247, lng:127.0435, q:'Alice Cheongdam' },
    { s:'evening', k:'bar', o:1, name:'Le Chamber', note:'Plus classique et chic. En alternative.', lat:37.5245, lng:127.0420, q:'Le Chamber Seoul' }
  ]},

/* ── 3 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-03', city: 'Séoul', region: 'KR', label: 'Hannam · Leeum · Itaewon · Namsan',
  focus: 'Journée lifestyle et arty avec architecture, design, art contemporain, puis panorama sur Séoul et vraie soirée.',
  hotel: 2,
  must: 'Leeum · Namsan pour 17h15',
  alert: 'National Foundation Day (개천절) — jour férié. Séoul sera plus fréquenté, Namsan en particulier.',
  book: ['Leeum Museum — la fenêtre de réservation ouvre le 19 septembre, réserver ce jour-là'],
  drop: ['Itaewon', 'Cakeshop'],
  tip: 'Jour férié : quitter Hannam vers 16h15 pour être en haut de Namsan à 17h15–17h30. Le sentier depuis Hannam ou Itaewon évite la file du téléphérique.',
  stops: [
    { s:'morning', k:'walk', m:1, a:'hannam', name:'Hannam-dong', note:'Petites rues, boutiques indépendantes, galeries et cafés.', lat:37.5340, lng:127.0000, q:'Hannam-dong Seoul' },

    { s:'lunch', k:'food', name:'Tadak Tadak Seotbab Room', note:'Petits plats coréens et riz.', lat:37.5345, lng:127.0005, q:'Tadak Tadak Seotbab Hannam' },

    { s:'afternoon', k:'museum', m:1, b:'must', name:'Leeum Museum of Art', note:'Ouvert le samedi 10h–18h, billetterie jusqu’à 17h30. Les réservations individuelles ouvrent 14 jours avant, soit le 19 septembre : réserver ce jour-là, c’est un jour férié et les créneaux partent vite.', lat:37.5384, lng:126.9990, q:'Leeum Museum of Art Seoul' },
    { s:'afternoon', k:'walk', a:'itaewon', name:'Itaewon', note:'En redescendant du musée.', lat:37.5345, lng:126.9945, q:'Itaewon Seoul' },
    { s:'afternoon', k:'view', m:1, a:'namsan', t:'17:15', name:'Namsan · N Seoul Tower', note:'Être en haut pour 17h15–17h30, avant le coucher du soleil. Jour férié : il y aura du monde et de la file au téléphérique, donc quitter Hannam vers 16h15. Pas indispensable de passer du temps dans l’observatoire, la promenade et les vues suffisent.', lat:37.5512, lng:126.9882, q:'N Seoul Tower' },

    { s:'evening', k:'food', m:1, name:'Namyeongdon', note:'Korean BBQ.', lat:37.5405, lng:126.9721, q:'Namyeongdon Seoul BBQ' },
    { s:'evening', k:'bar', name:'Southside Parlor', note:'Cocktails, ambiance détendue. Ouvert tard le samedi.', lat:37.5340, lng:126.9930, q:'Southside Parlor Seoul' },
    { s:'evening', k:'bar', o:1, name:'Cakeshop', note:'Club électronique si vous voulez continuer.', lat:37.5342, lng:126.9935, q:'Cakeshop Seoul' }
  ]},

/* ── 4 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-04', city: 'Séoul → vol', region: 'KR', label: 'Mangwon · Yeonnam · départ',
  focus: 'Dernière demi-journée simple et locale, sans partir à l’autre bout de Séoul.',
  hotel: 2,
  must: 'Mangwon Market · AREX All Stop 15h30',
  alert: 'Départ vers Incheon à 15h30 — heure cible fixe pour un vol à 20h05.',
  drop: ['Taecho BBQ', 'Boutiques de Hongdae'],
  tip: 'C’est l’AREX All Stop (train tous arrêts) qui dessert Hongik University — l’Express ne part que de Seoul Station. Ne visez pas l’Express depuis Hongdae.',
  stops: [
    { s:'morning', k:'market', m:1, t:'10:00', a:'mangwon', name:'Mangwon Market', note:'Annoncé tous les jours environ 10h–21h, même si les horaires varient selon les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market Seoul' },
    { s:'morning', k:'walk', a:'mangwon', name:'Mangwon-dong', note:'Puis retour vers Hongdae / Yeonnam.', lat:37.5555, lng:126.9020, q:'Mangwon-dong Seoul' },
    { s:'morning', k:'cafe', a:'yeonnam', name:'Coffee Nap Roasters Yeonnam', note:'Ouvert dès 8h le dimanche et jusqu’à 18h.', lat:37.5625, lng:126.9250, q:'Coffee Nap Roasters Yeonnam' },
    { s:'morning', k:'shop', a:'hongdae', name:'Musinsa · boutiques de Hongdae', note:'Dernières emplettes.', lat:37.5550, lng:126.9240, q:'Musinsa Standard Hongdae' },

    { s:'lunch', k:'food', name:'Mangwon Market food crawl', note:'Déjeuner sur le pouce entre les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market food' },
    { s:'lunch', k:'food', o:1, name:'Taecho BBQ', note:'Alternative pour un vrai dernier Korean BBQ.', lat:37.5565, lng:126.9040, q:'Taecho BBQ Mangwon' },

    { s:'afternoon', k:'walk', name:'Dernière balade · récupération des bagages', note:'Début d’après-midi, à boucler pour 15h15.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },
    { s:'afternoon', k:'transit', m:1, hard:1, t:'15:30', name:'AREX All Stop · Hongik Univ. → Incheon T1', note:'Heure de départ ferme, pas une fourchette : 15h30 pour un vol à 20h05. Prendre l’AREX All Stop (train tous arrêts) — c’est le seul qui dessert Hongik University. L’AREX Express ne part que de Seoul Station. Compter environ 55 min jusqu’au Terminal 1.', lat:37.5570, lng:126.9245, q:'Hongik University Station AREX' },

    { s:'evening', k:'plane', m:1, t:'20:05', name:'CX419 · Incheon T1 → Hong Kong T1', note:'Départ 20h05, arrivée 23h00. Durée 3h55. Economy Light, 1 pièce en soute. Correspondance à Hong Kong : 1h25, même terminal.', lat:37.4490, lng:126.4505, q:'Incheon International Airport Terminal 1' }
  ]},

/* ── 5 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-05', city: 'Retour', region: 'HK', label: 'Hong Kong → Zurich',
  focus: 'Correspondance de nuit, arrivée à Zurich lundi matin.', hotel: null,
  tip: 'Correspondance de 1h25 à Hong Kong, même terminal.',
  stops: [
    { s:'morning', k:'plane', m:1, t:'00:25', name:'CX383 · Hong Kong T1 → Zurich', note:'Départ 00h25, arrivée 07h30. Durée 13h05. Economy Light, 1 pièce en soute. Arrivée à Zurich lundi 5 octobre à 07h30.', lat:22.3080, lng:113.9185, q:'Hong Kong International Airport Terminal 1' }
  ]}
  ]
};

/* assign stable ids + running numbers */
TRIP.days.forEach((d, di) => {
  d.i = di;
  d.stops.forEach((st, si) => { st.n = si + 1; st.id = di + '.' + si; st.day = di; st.region = d.region; });
});
