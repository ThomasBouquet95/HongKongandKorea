/* Trip data — Hong Kong · Shenzhen · Busan · Seoul — 21 Sep → 5 Oct 2026
   Source content kept verbatim from the itinerary brief (FR).
   s(): stop factory.  k = kind, m = must-do, o = optional/alternative.       */

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
  stops: [
    { s:'transit', k:'plane', m:1, name:'CX382 · Zurich ZRH → Hong Kong HKG', t:'13:30',
      note:'Départ Zurich 13h30, arrivée Hong Kong 06h55 le 22 septembre, Terminal 1. Durée 11h25. Economy Light, 1 pièce en soute incluse. Nuit dans l’avion.',
      lat:47.4502, lng:8.5616, q:'Zurich Airport ZRH' }
  ]},

/* ── 22 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-22', city: 'Hong Kong', region: 'HK', label: 'PoHo · Sheung Wan · Central',
  focus: 'Première immersion douce dans un Hong Kong ancien, créatif et branché, sans pression à cause du jet lag.',
  hotel: 0,
  stops: [
    { s:'morning', k:'plane', t:'06:55', name:'Arrivée HKG · Terminal 1',
      note:'Puis transfert vers l’hôtel et dépôt des bagages.', lat:22.3080, lng:113.9185, q:'Hong Kong International Airport Terminal 1' },
    { s:'morning', k:'hotel', name:'Hopewell Hotel · dépôt des bagages',
      note:'Wan Chai. Check-in plus tard dans l’après-midi.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'morning', k:'walk', m:1, name:'PoHo', note:'Ruelles créatives et cafés. Balade à pied, sans itinéraire strict.', lat:22.2846, lng:114.1487, q:'PoHo Hong Kong' },
    { s:'morning', k:'cafe', name:'Halfway Coffee', note:'Café rétro, porcelaine hongkongaise.', lat:22.2841, lng:114.1494, q:'Halfway Coffee Upper Lascar Row' },
    { s:'morning', k:'walk', name:'Tai Ping Shan Street', note:'Petites boutiques et vieux immeubles.', lat:22.2848, lng:114.1483, q:'Tai Ping Shan Street Hong Kong' },
    { s:'morning', k:'cafe', name:'OneThird Coffee Roasters', note:'Micro-roaster specialty coffee pointu.', lat:22.2852, lng:114.1476, q:'OneThird Coffee Roasters Hong Kong' },
    { s:'morning', k:'shop', name:'Upper Lascar Row', note:'Antiquaires et curiosités vintage.', lat:22.2840, lng:114.1503, q:'Upper Lascar Row Hong Kong' },
    { s:'morning', k:'sight', m:1, name:'Man Mo Temple', note:'Temple taoïste historique.', lat:22.2836, lng:114.1504, q:'Man Mo Temple Hollywood Road' },
    { s:'morning', k:'walk', name:'Hollywood Road', note:'Galeries, street art et antiquaires.', lat:22.2843, lng:114.1520, q:'Hollywood Road Hong Kong' },

    { s:'lunch', k:'food', name:'Hei Baat Fong', note:'Dumplings maison, petite adresse locale.', lat:22.2847, lng:114.1481, q:'Hei Baat Fong Tai Ping Shan' },
    { s:'lunch', k:'food', o:1, name:'Luk On Kui', note:'Dim sum old-school très local. Alternative.', lat:22.2866, lng:114.1503, q:'Luk On Kui Sheung Wan' },

    { s:'afternoon', k:'hotel', name:'Check-in Hopewell Hotel', note:'Petite pause si besoin.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'afternoon', k:'shop', m:1, name:'PMQ', note:'Ancienne résidence de police devenue hub design.', lat:22.2836, lng:114.1526, q:'PMQ Hong Kong' },
    { s:'afternoon', k:'shop', name:'G.O.D. · PMQ shops', note:'Design pop inspiré de Hong Kong. Studios et créateurs hongkongais sur place.', lat:22.2837, lng:114.1528, q:'G.O.D. PMQ Hong Kong' },
    { s:'afternoon', k:'museum', m:1, name:'Tai Kwun', note:'Ancienne prison devenue centre culturel.', lat:22.2818, lng:114.1546, q:'Tai Kwun Hong Kong' },

    { s:'evening', k:'walk', name:'SoHo', note:'Ruelles pentues, restaurants et bars. Descendre depuis Tai Kwun.', lat:22.2822, lng:114.1520, q:'SoHo Hong Kong' },
    { s:'evening', k:'food', name:'Dîner à SoHo', note:'Dîner puis cocktail.', lat:22.2820, lng:114.1516, q:'SoHo Central Hong Kong restaurants' },
    { s:'evening', k:'bar', m:1, name:'Bar Leone', note:'Cocktails italiens, ambiance décontractée. Bar à prioriser pendant le séjour.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' },
    { s:'evening', k:'bar', name:'COA', note:'Cocktails agave et mezcal.', lat:22.2826, lng:114.1508, q:'COA Hong Kong Shin Hing Street' },
    { s:'evening', k:'bar', o:1, name:'001 Tai Kwun', note:'Speakeasy élégant. En alternative.', lat:22.2818, lng:114.1548, q:'001 Bar Hong Kong Graham Street' }
  ]},

/* ── 23 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-23', city: 'Hong Kong', region: 'HK', label: 'Sai Ying Pun · The Peak · Happy Valley',
  focus: 'Quartier résidentiel le matin, panorama iconique l’après-midi, puis vraie soirée hongkongaise aux courses.',
  hotel: 0,
  stops: [
    { s:'morning', k:'walk', name:'Sai Ying Pun', note:'Quartier résidentiel, pentes et petits commerces.', lat:22.2860, lng:114.1420, q:'Sai Ying Pun Hong Kong' },
    { s:'morning', k:'cafe', name:'Fineprint', note:'Specialty coffee de quartier.', lat:22.2864, lng:114.1418, q:'Fineprint Sai Ying Pun' },
    { s:'morning', k:'sight', name:'ArtLane', note:'Fresques murales entre Hill Road et Ki Ling Lane.', lat:22.2865, lng:114.1385, q:'ArtLane Sai Ying Pun' },
    { s:'morning', k:'cafe', name:'NOC', note:'Roaster hongkongais moderne.', lat:22.2854, lng:114.1440, q:'NOC Coffee Sai Ying Pun' },
    { s:'morning', k:'walk', o:1, name:'Kennedy Town', note:'Éventuellement, en prolongement.', lat:22.2820, lng:114.1290, q:'Kennedy Town Hong Kong' },
    { s:'morning', k:'food', name:'Sun Hing Restaurant', note:'Yum cha très local, dim sum old-school.', lat:22.2823, lng:114.1276, q:'Sun Hing Restaurant Kennedy Town' },

    { s:'lunch', k:'food', m:1, name:'Yung’s Tangerine Peel Roast Goose', note:'Oie rôtie à la peau de mandarine. Retour vers Central / Wan Chai.', lat:22.2778, lng:114.1740, q:'Yung\'s Tangerine Peel Roast Goose Hong Kong' },
    { s:'lunch', k:'food', o:1, name:'Joy Hing Roasted Meat', note:'Char siu et viandes rôties old-school. En alternative.', lat:22.2777, lng:114.1732, q:'Joy Hing Roasted Meat Wan Chai' },

    { s:'afternoon', k:'transit', name:'Peak Tram', note:'Terminus Garden Road.', lat:22.2790, lng:114.1600, q:'Peak Tram Lower Terminus Garden Road' },
    { s:'afternoon', k:'view', m:1, name:'Victoria Peak', note:'Panorama iconique.', lat:22.2712, lng:114.1500, q:'Victoria Peak Hong Kong' },
    { s:'afternoon', k:'nature', m:1, name:'Peak Circle Walk · Lugard Rd + Harlech Rd', note:'Prévoir 1h15–1h30. Rester jusqu’au coucher du soleil puis aux premières lumières de la skyline.', lat:22.2718, lng:114.1443, q:'Lugard Road Victoria Peak' },

    { s:'evening', k:'sight', m:1, name:'Happy Valley Racecourse', note:'Regarder plusieurs courses, boire un verre et parier de petites sommes pour l’expérience.', lat:22.2718, lng:114.1822, q:'Happy Valley Racecourse Hong Kong' },
    { s:'evening', k:'bar', name:'The Savory Project', note:'Cocktails salés, Dirty Martini.', lat:22.2823, lng:114.1512, q:'The Savory Project Hong Kong' },
    { s:'evening', k:'bar', o:1, name:'Bar Leone', note:'Si pas fait la veille.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' }
  ]},

/* ── 24 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-24', city: 'Hong Kong', region: 'HK', label: 'Sham Shui Po · Mong Kok · Tai Hang',
  focus: 'Journée la plus locale et créative, entre vieux commerces, street food, ateliers, design et quartiers ultra-denses.',
  hotel: 0,
  stops: [
    { s:'morning', k:'walk', m:1, name:'Sham Shui Po', note:'Mini food crawl plutôt qu’un gros déjeuner.', lat:22.3303, lng:114.1622, q:'Sham Shui Po Hong Kong' },
    { s:'morning', k:'shop', name:'Tai Nan Street', note:'Ateliers, merceries et jeunes boutiques.', lat:22.3288, lng:114.1615, q:'Tai Nan Street Sham Shui Po' },
    { s:'morning', k:'food', name:'Kung Wo Beancurd Factory', note:'Tofu frais, soy milk et tofu pudding.', lat:22.3319, lng:114.1626, q:'Kung Wo Beancurd Factory Sham Shui Po' },
    { s:'morning', k:'shop', name:'Apliu Street', note:'Marché électronique et bric-à-brac.', lat:22.3305, lng:114.1625, q:'Apliu Street Market Sham Shui Po' },
    { s:'morning', k:'shop', name:'DX Design Hub', note:'Design hongkongais et expositions.', lat:22.3286, lng:114.1610, q:'DX Design Hub Sham Shui Po' },

    { s:'lunch', k:'food', name:'Lau Sum Kee', note:'Nouilles traditionnelles au bambou.', lat:22.3300, lng:114.1601, q:'Lau Sum Kee Noodle Sham Shui Po' },
    { s:'lunch', k:'food', name:'Sun Heung Yuen', note:'Cha chaan teng old-school.', lat:22.3298, lng:114.1630, q:'Sun Heung Yuen Sham Shui Po' },

    { s:'afternoon', k:'shop', name:'Twemco · Tai Kok Tsui', note:'Flip clocks fabriquées à Hong Kong.', lat:22.3220, lng:114.1620, q:'Twemco Tai Kok Tsui' },
    { s:'afternoon', k:'walk', name:'Mong Kok', note:'Quartier ultra-dense.', lat:22.3193, lng:114.1694, q:'Mong Kok Hong Kong' },
    { s:'afternoon', k:'walk', name:'Yau Ma Tei', note:'Pas besoin de consacrer du temps spécifiquement à Ladies’ Market / Temple Street.', lat:22.3110, lng:114.1706, q:'Yau Ma Tei Hong Kong' },
    { s:'afternoon', k:'walk', o:1, name:'Jordan', note:'En prolongement vers le sud.', lat:22.3048, lng:114.1716, q:'Jordan Hong Kong' },

    { s:'evening', k:'sight', m:1, name:'Tai Hang Fire Dragon Dance', note:'Vraie priorité de la journée. Retour vers Tai Hang en fin d’après-midi.', lat:22.2792, lng:114.1905, q:'Tai Hang Fire Dragon Dance' },
    { s:'evening', k:'sight', o:1, name:'Victoria Park · lanternes', note:'Éventuellement, après le dragon.', lat:22.2822, lng:114.1885, q:'Victoria Park Hong Kong' },
    { s:'evening', k:'food', name:'Dîner Tai Hang / Causeway Bay', note:'Autour de Tai Hang ou Causeway Bay.', lat:22.2800, lng:114.1855, q:'Tai Hang restaurants Hong Kong' }
  ]},

/* ── 25 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-25', city: 'Shenzhen', region: 'CN', label: 'Futian · Nanshan · OCT-LOFT · Luohu',
  focus: 'Rupture totale avec Hong Kong : métropole chinoise récente, architecture monumentale, tech, design et scène créative.',
  hotel: 0,
  stops: [
    { s:'morning', k:'transit', m:1, name:'Passage de la frontière · Futian', note:'Passeport + visa/permis. Départ tôt.', lat:22.5164, lng:114.0700, q:'Futian Checkpoint Shenzhen' },
    { s:'morning', k:'sight', name:'Civic Center', note:'Architecture monumentale.', lat:22.5460, lng:114.0590, q:'Shenzhen Civic Center' },
    { s:'morning', k:'nature', name:'Lianhuashan Park', note:'Vue sur le skyline de Futian depuis la colline.', lat:22.5560, lng:114.0560, q:'Lianhuashan Park Shenzhen' },
    { s:'morning', k:'nature', name:'Shenzhen Talent Park', note:'DiDi vers Nanshan en fin de matinée. Si possible, tester une livraison Meituan par drone.', lat:22.5180, lng:113.9440, q:'Shenzhen Talent Park' },

    { s:'lunch', k:'food', m:1, name:'Baheli Haiji Beef Hotpot', note:'Chaoshan beef hotpot. Nanshan.', lat:22.5280, lng:113.9330, q:'Baheli Haiji Beef Hotpot Nanshan Shenzhen' },
    { s:'lunch', k:'food', o:1, name:'Chao Shan Da Mu Beef Hotpot City', note:'Alternative.', lat:22.5310, lng:113.9300, q:'Chao Shan Da Mu Beef Hotpot Shenzhen' },

    { s:'afternoon', k:'transit', o:1, name:'Robotaxi Pony.ai · Nanshan / Qianhai', note:'Si disponible, faire un trajet en robotaxi.', lat:22.5300, lng:113.8900, q:'Qianhai Shenzhen' },
    { s:'afternoon', k:'shop', m:1, name:'OCT-LOFT', note:'Ancienne zone industrielle devenue quartier créatif.', lat:22.5450, lng:113.9860, q:'OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', name:'Old Heaven', note:'Librairie, musique, vinyles et art.', lat:22.5452, lng:113.9866, q:'Old Heaven Books OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', o:1, name:'DJI Flagship Store · OCT Harbour', note:'Éventuellement, en milieu d’après-midi.', lat:22.5210, lng:113.9880, q:'DJI Flagship Store OCT Harbour Shenzhen' },
    { s:'afternoon', k:'shop', name:'Huaqiangbei · SEG Plaza', note:'Le plus grand marché électronique du monde. Fin d’après-midi.', lat:22.5473, lng:114.0862, q:'SEG Plaza Huaqiangbei Shenzhen' },

    { s:'evening', k:'view', m:1, t:'17:00', name:'Drawing Room · St. Regis, 96e étage', note:'DiDi vers The St. Regis Shenzhen dans KK100 vers 17h–17h30, puis Drawing Room pour voir la ville s’illuminer.', lat:22.5450, lng:114.1080, q:'The St. Regis Shenzhen KK100' },
    { s:'evening', k:'bar', o:1, name:'St. Regis Bar', note:'Éventuellement un cocktail avant de redescendre.', lat:22.5450, lng:114.1080, q:'St. Regis Bar Shenzhen' },
    { s:'evening', k:'transit', name:'Frontière de Luohu → Hong Kong', note:'Retour à Hong Kong en fin de soirée.', lat:22.5320, lng:114.1160, q:'Luohu Port Shenzhen' }
  ]},

/* ── 26 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-26', city: 'Hong Kong', region: 'HK', label: 'Sai Kung · Tai Long Wan · plage',
  focus: 'Vraie coupure nature avec mer, montagne et plage, puis grosse soirée en ville.',
  hotel: 0,
  stops: [
    { s:'morning', k:'walk', name:'Sai Kung Town', note:'Point de départ. Minibus / taxi vers Sai Wan Pavilion.', lat:22.3817, lng:114.2712, q:'Sai Kung Town Hong Kong' },
    { s:'morning', k:'nature', m:1, name:'Sai Wan Pavilion · départ randonnée', note:'Début du sentier vers Sai Wan / Tai Long Wan.', lat:22.3960, lng:114.3560, q:'Sai Wan Pavilion Sai Kung' },

    { s:'lunch', k:'nature', m:1, name:'Sai Wan Beach', note:'Baignade si la météo le permet.', lat:22.4030, lng:114.3600, q:'Sai Wan Beach Sai Kung' },
    { s:'lunch', k:'nature', m:1, name:'Tai Long Wan', note:'Randonnée, plage et baignade. Retour à pied ou randonnée + bateau selon les conditions.', lat:22.4090, lng:114.3670, q:'Tai Long Wan Sai Kung' },

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
  stops: [
    { s:'morning', k:'walk', name:'West Kowloon Cultural District', note:'Fin de matinée, promenade au bord de l’eau.', lat:22.3020, lng:114.1600, q:'West Kowloon Cultural District' },
    { s:'morning', k:'museum', m:1, name:'M+', note:'Musée de la culture visuelle contemporaine.', lat:22.3020, lng:114.1580, q:'M+ Museum Hong Kong' },
    { s:'morning', k:'shop', name:'M+ Shop', note:'Livres et design asiatique.', lat:22.3021, lng:114.1583, q:'M+ Shop Hong Kong' },

    { s:'lunch', k:'food', name:'Mak Man Kee', note:'Wonton noodles.', lat:22.3060, lng:114.1700, q:'Mak Man Kee Noodle Shop Jordan' },
    { s:'lunch', k:'food', name:'Australia Dairy Company', note:'Cha chaan teng culte.', lat:22.3061, lng:114.1703, q:'Australia Dairy Company Jordan' },

    { s:'afternoon', k:'walk', name:'Tsim Sha Tsui · Nathan Road', note:'Éventuellement pousser jusqu’à Jordan.', lat:22.2990, lng:114.1720, q:'Nathan Road Tsim Sha Tsui' },
    { s:'afternoon', k:'shop', name:'Kapok', note:'Mode et design indépendant.', lat:22.2960, lng:114.1730, q:'Kapok Tsim Sha Tsui' },

    { s:'evening', k:'view', m:1, name:'Avenue of Stars', note:'Attendre les lumières.', lat:22.2935, lng:114.1740, q:'Avenue of Stars Hong Kong' },
    { s:'evening', k:'transit', m:1, name:'Star Ferry · nuit / blue hour', note:'TST → Central au moment des lumières.', lat:22.2937, lng:114.1685, q:'Star Ferry Pier Tsim Sha Tsui' },
    { s:'evening', k:'food', m:1, name:'Dîner — le meilleur du séjour', note:'Dîner réservé, puis dernier cocktail.', lat:22.2820, lng:114.1560, q:'Central Hong Kong fine dining' }
  ]},

/* ── 28 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-28', city: 'Busan', region: 'KR', label: 'Hong Kong → Busan · Haeundae · Gwangalli',
  focus: 'Vol du matin, puis premier contact avec la mer de Busan et les néons de Gwangalli.',
  hotel: 1,
  stops: [
    { s:'morning', k:'plane', m:1, t:'09:10', name:'CX5674 · HKG T2 → Busan Gimhae PUS', note:'Départ 09h10, arrivée 13h35. Durée 3h25. Commercialisé par Cathay Pacific, opéré par Hong Kong Express Airways. Economy Light, 1 pièce en soute.', lat:22.3170, lng:113.9350, q:'Hong Kong International Airport Terminal 2' },

    { s:'afternoon', k:'hotel', t:'13:35', name:'L7 Haeundae by LOTTE · dépôt des bagages', note:'Transfert depuis Gimhae en début d’après-midi.', lat:35.1607, lng:129.1613, q:'L7 Haeundae by LOTTE' },
    { s:'afternoon', k:'nature', m:1, name:'Haeundae Beach', note:'Première marche au bord de l’eau.', lat:35.1587, lng:129.1603, q:'Haeundae Beach Busan' },
    { s:'afternoon', k:'market', name:'Haeundae Traditional Market', note:'Street food.', lat:35.1630, lng:129.1620, q:'Haeundae Traditional Market' },
    { s:'afternoon', k:'food', name:'Kumsu Bokguk', note:'Soupe de poisson-globe.', lat:35.1628, lng:129.1608, q:'Kumsu Bokguk Haeundae' },
    { s:'afternoon', k:'nature', name:'Dongbaekseom', note:'Sentier côtier autour de l’îlot.', lat:35.1533, lng:129.1500, q:'Dongbaekseom Island Busan' },
    { s:'afternoon', k:'walk', name:'Marine City', note:'Tours et front de mer.', lat:35.1540, lng:129.1400, q:'Marine City Busan' },

    { s:'evening', k:'view', m:1, name:'Gwangalli Beach · Gwangan Bridge', note:'Face au pont illuminé.', lat:35.1531, lng:129.1186, q:'Gwangalli Beach Busan' },
    { s:'evening', k:'bar', name:'HQ Gwangan', note:'Bar face à la plage.', lat:35.1533, lng:129.1180, q:'HQ Gwangan Busan' },
    { s:'evening', k:'bar', name:'Hongdan', note:'Cocktails.', lat:35.1528, lng:129.1190, q:'Hongdan bar Gwangalli Busan' }
  ]},

/* ── 29 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-29', city: 'Busan', region: 'KR', label: 'Yonggungsa · Cheongsapo · Sky Capsule',
  focus: 'Grande journée iconique de Busan entre temple, mer, petits villages et Sky Capsule.',
  hotel: 1,
  stops: [
    { s:'morning', k:'sight', m:1, name:'Haedong Yonggungsa', note:'Temple au bord de la mer. Y aller tôt.', lat:35.1884, lng:129.2233, q:'Haedong Yonggungsa Temple' },

    { s:'lunch', k:'nature', name:'Songjeong Beach', note:'Fin de matinée.', lat:35.1786, lng:129.1996, q:'Songjeong Beach Busan' },
    { s:'lunch', k:'food', name:'Cheongsapo seafood', note:'Petits restaurants de fruits de mer du village.', lat:35.1607, lng:129.1937, q:'Cheongsapo seafood Busan' },
    { s:'lunch', k:'cafe', name:'Cafés de Cheongsapo', note:'Cafés avec vue sur le port.', lat:35.1604, lng:129.1942, q:'Cheongsapo cafe Busan' },

    { s:'afternoon', k:'view', name:'Cheongsapo Daritdol Observatory', note:'Plateforme vitrée au-dessus de la mer.', lat:35.1592, lng:129.1970, q:'Cheongsapo Daritdol Skywalk' },
    { s:'afternoon', k:'walk', name:'Haeundae Green Railway', note:'Ancienne voie ferrée côtière.', lat:35.1600, lng:129.1900, q:'Haeundae Blueline Park Green Railway' },
    { s:'afternoon', k:'transit', m:1, t:'17:00', name:'Station Sky Capsule Cheongsapo', note:'Arriver vers 17h00 pour la réservation de 17h30.', lat:35.1601, lng:129.1932, q:'Cheongsapo Sky Capsule Station' },

    { s:'evening', k:'view', m:1, t:'17:30', name:'Sky Capsule · Cheongsapo → Mipo', note:'Réservation confirmée. Environ 30 min.', lat:35.1610, lng:129.1720, q:'Mipo Sky Capsule Station' },
    { s:'evening', k:'walk', name:'Mipo → Haeundae Beach → L7', note:'Promenade le long de la plage en début de soirée.', lat:35.1595, lng:129.1650, q:'Haeundae Beach walk Busan' },
    { s:'evening', k:'food', m:1, name:'Haeundae Rib Barbecue Restaurant', note:'Galbi de Haeundae.', lat:35.1621, lng:129.1616, q:'Haeundae Rib Barbecue Restaurant' },
    { s:'evening', k:'food', o:1, name:'Kumsu Bokguk', note:'Si pas fait la veille.', lat:35.1628, lng:129.1608, q:'Kumsu Bokguk Haeundae' },
    { s:'evening', k:'bar', name:'Gunam-ro bars', note:'Rue principale de Haeundae, bars et izakaya.', lat:35.1610, lng:129.1610, q:'Gunam-ro Haeundae bars' }
  ]},

/* ── 30 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-30', city: 'Busan → Séoul', region: 'KR', label: 'Gamcheon · Jagalchi · KTX → Séoul',
  focus: 'Matinée dense à Busan, KTX en début d’après-midi, arrivée douce à Séoul.',
  hotel: 2,
  stops: [
    { s:'morning', k:'hotel', name:'Check-out L7 · bagages à Busan Station', note:'Déposer les bagages en consigne à Busan Station avant Gamcheon.', lat:35.1150, lng:129.0420, q:'Busan Station' },
    { s:'morning', k:'sight', m:1, name:'Gamcheon Culture Village', note:'Taxi depuis Busan Station.', lat:35.0975, lng:129.0106, q:'Gamcheon Culture Village' },
    { s:'morning', k:'walk', name:'Nampo-dong · BIFF Square', note:'Stands de street food de BIFF Square.', lat:35.0982, lng:129.0281, q:'BIFF Square Nampo-dong Busan' },
    { s:'morning', k:'market', m:1, name:'Jagalchi Market', note:'Le grand marché aux poissons de Busan.', lat:35.0966, lng:129.0305, q:'Jagalchi Market Busan' },

    { s:'lunch', k:'food', m:1, name:'Bonjeon Dwaeji Gukbap', note:'Soupe porc-riz typique de Busan.', lat:35.1140, lng:129.0410, q:'Bonjeon Dwaeji Gukbap Busan' },
    { s:'lunch', k:'transit', t:'13:30', name:'Récupérer les bagages · Busan Station', note:'Vers 13h30, avant le KTX.', lat:35.1150, lng:129.0420, q:'Busan Station' },

    { s:'afternoon', k:'transit', m:1, t:'14:47', name:'KTX046 · Busan → Seoul Station', note:'Départ 14h47, arrivée 17h28. Durée 2h41. Voiture 1, siège 7B (dos à la marche). Economy / Adult, KRW 53 500. Ticket 80022-0903-10020-03.', lat:35.1150, lng:129.0420, q:'Busan Station KTX' },
    { s:'afternoon', k:'hotel', t:'17:28', name:'Seoul Station → Nine Brick Hotel Hongdae', note:'Transfert puis check-in.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },

    { s:'evening', k:'food', name:'Dîner tranquille · Hongdae', note:'Sans programme lourd.', lat:37.5560, lng:126.9240, q:'Hongdae restaurants Seoul' },
    { s:'evening', k:'walk', name:'Première balade Hongdae / Yeonnam', note:'Prendre la température du quartier.', lat:37.5620, lng:126.9250, q:'Yeonnam-dong Seoul' }
  ]},

/* ── 1 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-01', city: 'Séoul', region: 'KR', label: 'Yeonnam · Seochon · Bukchon · Gyeongbokgung',
  focus: 'Commencer doucement autour de l’hôtel et du rendez-vous skincare, puis vieux Séoul, patrimoine, cafés et soirée.',
  hotel: 2,
  stops: [
    { s:'morning', k:'sight', m:1, t:'10:00', name:'Forena Clinic Hongdae', note:'7th Floor, H-CUBE, 140 Yanghwa-ro. Horaire compatible avec les heures d’ouverture du jeudi.', lat:37.5555, lng:126.9236, q:'Forena Clinic Hongdae 140 Yanghwa-ro' },
    { s:'morning', k:'cafe', name:'Centralsite Coffee Roasters Yeonnam', note:'Fin de matinée à Yeonnam-dong.', lat:37.5630, lng:126.9245, q:'Centralsite Coffee Roasters Yeonnam' },
    { s:'morning', k:'shop', name:'Object', note:'Papeterie, illustration et objets de designers coréens.', lat:37.5545, lng:126.9245, q:'Object Sangsang Hongdae Seoul' },
    { s:'morning', k:'nature', name:'Gyeongui Line Forest Park', note:'La coulée verte de Yeonnam.', lat:37.5610, lng:126.9255, q:'Gyeongui Line Forest Park Yeonnam' },

    { s:'lunch', k:'food', name:'Déjeuner léger · Yeonnam / Hongdae', note:'Puis taxi ou métro vers Seochon.', lat:37.5615, lng:126.9250, q:'Yeonnam-dong restaurants Seoul' },

    { s:'afternoon', k:'walk', name:'Seochon', note:'Ruelles et petites boutiques à l’ouest du palais.', lat:37.5790, lng:126.9705, q:'Seochon Village Seoul' },
    { s:'afternoon', k:'food', o:1, name:'Hwangsaengga Kalguksu', note:'Option déjeuner dans le secteur.', lat:37.5817, lng:126.9838, q:'Hwangsaengga Kalguksu Bukchon' },
    { s:'afternoon', k:'sight', m:1, name:'Bukchon Hanok Village', note:'Village de hanok entre les deux palais.', lat:37.5826, lng:126.9850, q:'Bukchon Hanok Village' },
    { s:'afternoon', k:'walk', name:'Ikseon-dong', note:'Hanok reconvertis, cafés et boutiques.', lat:37.5740, lng:126.9895, q:'Ikseon-dong Seoul' },
    { s:'afternoon', k:'walk', o:1, name:'Cheonggyecheon', note:'Éventuellement, en descendant vers Euljiro.', lat:37.5690, lng:126.9840, q:'Cheonggyecheon Stream Seoul' },
    { s:'afternoon', k:'cafe', name:'Coffee Hanyakbang', note:'Café rétro caché dans une ruelle d’Euljiro. Ouvert jusqu’à 22h au rez-de-chaussée.', lat:37.5673, lng:126.9910, q:'Coffee Hanyakbang Euljiro' },

    { s:'evening', k:'food', t:'17:15', name:'Woo Lae Oak · dîner tôt', note:'Pyongyang naengmyeon et bulgogi. Placé ici car il ferme vers 21h et il peut y avoir de l’attente. Si vous voulez absolument le faire.', lat:37.5673, lng:126.9958, q:'Woo Lae Oak Seoul' },
    { s:'evening', k:'food', o:1, name:'Maksamga Euljiro', note:'Alternative plus tardive et plus brute.', lat:37.5665, lng:126.9915, q:'Maksamga Euljiro' },
    { s:'evening', k:'sight', m:1, t:'19:00', name:'Gyeongbokgung · visite nocturne', note:'Rejoindre vers 18h40. Ouverture 19h–21h30, dernière entrée 20h30. À réserver maintenant plutôt que compter sur les billets sur place : 3 300 places par soir, dont seulement 300 sur place pour les étrangers. Bonus : performances de musique et danse de cour du 30 sep au 2 oct.', lat:37.5796, lng:126.9770, q:'Gyeongbokgung Palace' },
    { s:'evening', k:'bar', m:1, t:'20:45', name:'Bar Cham', note:'Cocktails autour d’alcools et ingrédients coréens. À Seochon, juste à côté du palais. Jeudi 18h–01h, réservation recommandée.', lat:37.5768, lng:126.9705, q:'Bar Cham Seoul' },
    { s:'evening', k:'bar', o:1, name:'Euljiro late-night', note:'Si vous avez encore de l’énergie : bars, ruelles et late-night food.', lat:37.5665, lng:126.9920, q:'Euljiro Seoul bars' }
  ]},

/* ── 2 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-02', city: 'Séoul', region: 'KR', label: 'Seongsu · Dosan · Apgujeong · Cheongdam',
  focus: 'Séoul contemporain : anciens entrepôts, mode coréenne, specialty coffee et architecture retail, puis design et cocktails au sud de la ville.',
  hotel: 2,
  stops: [
    { s:'morning', k:'nature', name:'Seoul Forest', note:'Faire le parc et le café en premier : MUSINSA EMPTY n’ouvre qu’à 11h.', lat:37.5444, lng:127.0374, q:'Seoul Forest Park' },
    { s:'morning', k:'cafe', name:'LowKey Seongsu', note:'Specialty coffee.', lat:37.5430, lng:127.0560, q:'LowKey Coffee Seongsu' },
    { s:'morning', k:'shop', m:1, name:'LCDC Seoul', note:'Complexe retail et design.', lat:37.5410, lng:127.0570, q:'LCDC Seoul Seongsu' },
    { s:'morning', k:'shop', name:'MUSINSA EMPTY SEONGSU', note:'Ouvre à 11h.', lat:37.5448, lng:127.0553, q:'MUSINSA EMPTY Seongsu' },
    { s:'morning', k:'shop', name:'Point of View', note:'Papeterie et objets d’écriture.', lat:37.5433, lng:127.0568, q:'Point of View Seongsu' },

    { s:'lunch', k:'food', m:1, name:'Gebangsikdang Seongsu', note:'Ganjang-gejang (crabe mariné à la sauce soja) et autres plats coréens. 11h30–15h avant la pause, réservation recommandée. Ggupdang Seongsu est retiré du déjeuner : horaires de semaine trop tardifs pour le planning.', lat:37.5420, lng:127.0530, q:'Gebangsikdang Seongsu' },

    { s:'afternoon', k:'nature', name:'Dosan Park', note:'Taxi depuis Seongsu, puis balade autour du parc.', lat:37.5240, lng:127.0350, q:'Dosan Park Seoul' },
    { s:'afternoon', k:'shop', m:1, name:'GENTLE MONSTER HAUS NOWHERE DOSAN', note:'Flagship spectaculaire. Ouvert 11h–21h tous les jours.', lat:37.5236, lng:127.0367, q:'Haus Nowhere Dosan Gentle Monster' },
    { s:'afternoon', k:'walk', name:'Apgujeong Rodeo · Cheongdam', note:'Fin d’après-midi entre mode et galeries.', lat:37.5270, lng:127.0400, q:'Apgujeong Rodeo Seoul' },

    { s:'evening', k:'food', name:'Apgujeong Dakhanmari', note:'Poulet mijoté.', lat:37.5265, lng:127.0395, q:'Apgujeong Dakhanmari' },
    { s:'evening', k:'bar', m:1, name:'ZEST SEOUL', note:'Priorité cocktails. Vendredi à partir de 18h30.', lat:37.5238, lng:127.0388, q:'Zest Seoul bar' },
    { s:'evening', k:'bar', o:1, name:'Alice Cheongdam', note:'Plus théâtral. En alternative.', lat:37.5247, lng:127.0435, q:'Alice Cheongdam' },
    { s:'evening', k:'bar', o:1, name:'Le Chamber', note:'Plus classique et chic. En alternative.', lat:37.5245, lng:127.0420, q:'Le Chamber Seoul' }
  ]},

/* ── 3 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-03', city: 'Séoul', region: 'KR', label: 'Hannam · Leeum · Itaewon · Namsan',
  focus: 'Journée lifestyle et arty avec architecture, design, art contemporain, puis panorama sur Séoul et vraie soirée.',
  hotel: 2,
  stops: [
    { s:'morning', k:'walk', m:1, name:'Hannam-dong', note:'Petites rues, boutiques indépendantes, galeries et cafés.', lat:37.5340, lng:127.0000, q:'Hannam-dong Seoul' },

    { s:'lunch', k:'food', name:'Tadak Tadak Seotbab Room', note:'Petits plats coréens et riz.', lat:37.5345, lng:127.0005, q:'Tadak Tadak Seotbab Hannam' },

    { s:'afternoon', k:'museum', m:1, name:'Leeum Museum of Art', note:'Ouvert le samedi 10h–18h, billetterie jusqu’à 17h30. Les réservations individuelles ouvrent 14 jours avant.', lat:37.5384, lng:126.9990, q:'Leeum Museum of Art Seoul' },
    { s:'afternoon', k:'walk', name:'Itaewon', note:'En redescendant du musée.', lat:37.5345, lng:126.9945, q:'Itaewon Seoul' },
    { s:'afternoon', k:'view', m:1, name:'Namsan · N Seoul Tower', note:'Montée pour le coucher du soleil. Pas indispensable de passer beaucoup de temps dans l’observatoire : la promenade et les vues suffisent.', lat:37.5512, lng:126.9882, q:'N Seoul Tower' },

    { s:'evening', k:'food', m:1, name:'Namyeongdon', note:'Korean BBQ.', lat:37.5405, lng:126.9721, q:'Namyeongdon Seoul BBQ' },
    { s:'evening', k:'bar', name:'Southside Parlor', note:'Cocktails, ambiance détendue. Ouvert tard le samedi.', lat:37.5340, lng:126.9930, q:'Southside Parlor Seoul' },
    { s:'evening', k:'bar', o:1, name:'Cakeshop', note:'Club électronique si vous voulez continuer.', lat:37.5342, lng:126.9935, q:'Cakeshop Seoul' }
  ]},

/* ── 4 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-04', city: 'Séoul → vol', region: 'KR', label: 'Mangwon · Yeonnam · départ',
  focus: 'Dernière demi-journée simple et locale, sans partir à l’autre bout de Séoul.',
  hotel: 2,
  stops: [
    { s:'morning', k:'market', m:1, t:'10:00', name:'Mangwon Market', note:'Annoncé tous les jours environ 10h–21h, même si les horaires varient selon les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market Seoul' },
    { s:'morning', k:'walk', name:'Mangwon-dong', note:'Puis retour vers Hongdae / Yeonnam.', lat:37.5555, lng:126.9020, q:'Mangwon-dong Seoul' },
    { s:'morning', k:'cafe', name:'Coffee Nap Roasters Yeonnam', note:'Ouvert dès 8h le dimanche et jusqu’à 18h.', lat:37.5625, lng:126.9250, q:'Coffee Nap Roasters Yeonnam' },
    { s:'morning', k:'shop', name:'Musinsa · boutiques de Hongdae', note:'Dernières emplettes.', lat:37.5550, lng:126.9240, q:'Musinsa Standard Hongdae' },

    { s:'lunch', k:'food', name:'Mangwon Market food crawl', note:'Déjeuner sur le pouce entre les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market food' },
    { s:'lunch', k:'food', o:1, name:'Taecho BBQ', note:'Alternative pour un vrai dernier Korean BBQ.', lat:37.5565, lng:126.9040, q:'Taecho BBQ Mangwon' },

    { s:'afternoon', k:'walk', name:'Dernière balade · récupération des bagages', note:'Début d’après-midi.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },
    { s:'afternoon', k:'transit', m:1, t:'15:30', name:'AREX · Hongik Univ. → Incheon', note:'Départ vers 15h30–16h00. Depuis Hongdae, l’AREX est particulièrement pratique.', lat:37.5570, lng:126.9245, q:'Hongik University Station AREX' },

    { s:'evening', k:'plane', m:1, t:'20:05', name:'CX419 · Incheon T1 → Hong Kong T1', note:'Départ 20h05, arrivée 23h00. Durée 3h55. Economy Light, 1 pièce en soute. Correspondance à Hong Kong : 1h25, même terminal.', lat:37.4490, lng:126.4505, q:'Incheon International Airport Terminal 1' }
  ]},

/* ── 5 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-05', city: 'Retour', region: 'HK', label: 'Hong Kong → Zurich',
  focus: 'Correspondance de nuit, arrivée à Zurich lundi matin.', hotel: null,
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
