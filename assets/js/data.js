/* Trip data — Hong Kong · Shenzhen · Busan · Seoul — 21 Sep → 5 Oct 2026
   Source content kept verbatim from the itinerary brief (FR).
   s(): stop factory.  k = kind, m = must-do, o = optional/alternative.       */

/* Contexte de quartier — pré-généré, disponible hors ligne.
   one : la phrase affichée sous le nom dans le déroulé
   h/t/n : Histoire · Aujourd’hui · À remarquer   (80–120 mots au total) */
const AREAS = {
poho: { name:'PoHo',
  one:'« PoHo » est un surnom récent pour les ruelles autour de Po Hing Fong, sur les pentes de Tai Ping Shan.',
  h:'Le nom PoHo, formé sur Po Hing Fong, s’est répandu dans les années 2010 pour désigner ces quelques ruelles. Le quartier plus large, Tai Ping Shan, fut l’un des premiers foyers de la peste de 1894 : l’administration coloniale y rasa des îlots entiers et laissa le terrain dégagé qui deviendra Blake Garden.',
  t:'La reconstruction est restée basse et domestique, et les loyers modérés des étages d’avant-guerre ont attiré ateliers, torréfacteurs et petites galeries plutôt que des enseignes.',
  n:'Les balcons d’avant-guerre en surplomb, les seuils de boutiques carrelés, et des rues qui montent par paliers plutôt qu’à plat.' },

sheungwan: { name:'Sheung Wan',
  one:'Le premier quartier commerçant chinois de Hong Kong, où les négoces traditionnels tiennent encore des rues entières.',
  h:'Des marchands chinois s’installent ici dès les années 1840, pendant que l’administration coloniale occupe Central. Hollywood Road, ouverte en 1844, est l’une des premières voies tracées par les Britanniques ; le commerce du poisson séché, du ginseng et des herbes s’est lui organisé plus bas et plus à l’ouest, autour de Des Voeux Road West et des rues voisines.',
  t:'Ces spécialisations n’ont pas bougé : chaque rue garde son négoce au rez-de-chaussée pendant que les étages sont devenus bureaux et logements.',
  n:'Les sacs de produits séchés à même le trottoir plus bas, et, sur les hauteurs, les antiquaires d’Upper Lascar Row — l’ancienne Cat Street.' },

soho: { name:'SoHo',
  one:'Les ruelles en pente au sud de Hollywood Road, transformées par l’escalator des Mid-Levels.',
  h:'L’escalator Central–Mid-Levels, ouvert en 1993, a été construit pour les trajets domicile-travail : il descend le matin et remonte le reste de la journée.',
  t:'Le flux de piétons qu’il a créé a converti des ruelles résidentielles en une bande dense de petits restaurants et de bars, empilée sur la pente faute de terrain plat.',
  n:'Le sens de l’escalator qui s’inverse en milieu de matinée, les bars installés à ses paliers, et la déclivité de Shelley Street qui fait le reste.' },

saiyingpun: { name:'Sai Ying Pun',
  one:'Une pente résidentielle très dense, transformée par l’arrivée du métro en 2014.',
  h:'Le nom désigne l’ancien camp occidental de la garnison coloniale. Le quartier s’est ensuite rempli d’immeubles de rapport et de petits commerces au service des docks en contrebas.',
  t:'Le prolongement de l’Island Line a ouvert une station sous la colline en 2014 ; cafés de spécialité et petits bars sont arrivés en deux ou trois ans, au-dessus de quincailleries et de marchands de produits séchés déjà installés.',
  n:'Les escaliers de High Street et Third Street, les ladder streets qui les relient, et l’alternance d’enseignes anciennes et récentes sur un même pâté.' },

kennedytown: { name:'Kennedy Town',
  one:'Le terminus du tramway et la limite ouest de l’île, longtemps occupé par ce que Central voulait éloigner.',
  h:'Nommé d’après un gouverneur du XIXe siècle, le quartier a accueilli abattoirs, dépôts de charbon et entrepôts, et le tramway a été prolongé vers l’ouest pour les desservir.',
  t:'Ces activités ont fermé, le métro est arrivé en 2014 : la promenade du front de mer et des loyers encore modérés ont amené bars et cafés, tandis que les grands ensembles juste derrière n’ont pas changé.',
  n:'Les trams qui font demi-tour au terminus, le port qui s’ouvre vers l’ouest, et des immeubles d’avant-guerre face à des tours neuves.' },

thepeak: { name:'Victoria Peak',
  one:'Une station d’altitude coloniale où la hauteur a longtemps été un statut inscrit dans la loi.',
  h:'Les Européens y ont bâti des maisons d’été pour l’air plus frais. À partir de 1904, la Peak District Reservation Ordinance interdisait aux résidents chinois de s’y installer sans autorisation du gouverneur ; elle n’a été abrogée qu’en 1946.',
  t:'Le tramway, ouvert en 1888 pour desservir ces maisons, transporte aujourd’hui des visiteurs, et les terrains résidentiels au-dessus du terminus restent parmi les plus chers du monde.',
  n:'Lugard Road suit la courbe de niveau : le chemin est plat, la vue se dégage et la foule s’éclaircit à mesure qu’on avance.' },

happyvalley: { name:'Happy Valley',
  one:'Un fond de vallée marécageux drainé en hippodrome dès 1845, devenu le rendez-vous du mercredi soir.',
  h:'Le premier établissement britannique installé ici a échoué à cause des fièvres. Le terrain plat a été drainé et affecté aux courses en 1845 ; les pentes autour ont reçu les cimetières catholique, protestant, parsi, musulman et hindou, côte à côte.',
  t:'Les réunions de milieu de semaine sont devenues une institution d’après-bureau plus qu’un événement sportif : foule de sortie de travail, bière bon marché et petits paris sous les projecteurs.',
  n:'Les cimetières étagés au-dessus de la piste, et la proximité immédiate des tours d’habitation.' },

shamshuipo: { name:'Sham Shui Po',
  one:'Le district au revenu médian le plus bas de Hong Kong, et le plus inventif par ses commerces spécialisés.',
  h:'Les ateliers et le textile du Kowloon industriel s’y sont concentrés à partir des années 1950, avec réfugiés et ouvriers logés dans les immeubles au-dessus des boutiques.',
  t:'La production est partie vers Shenzhen mais les filières d’approvisionnement sont restées : une rue entière ne vend que du tissu, des boutons, des perles ou des composants électroniques.',
  n:'L’électronique d’occasion posée au sol sur Apliu Street, les rouleaux de tissu de Ki Lung Street, et les jeunes studios installés en rez-de-chaussée sur Tai Nan Street.' },

mongkok: { name:'Mong Kok',
  one:'L’un des tissus urbains les plus denses jamais recensés, organisé en hauteur faute d’espace au sol.',
  h:'Village de champs et de ruisseaux jusqu’aux remblais des années 1920, le quartier s’est rempli d’immeubles de rapport puis de tours parmi les plus denses de Kowloon. Le nom signifie « coin animé ».',
  t:'Le rez-de-chaussée est commerçant, le premier étage abrite salons et salles de jeux, tout le reste est logement — d’où des enseignes qui avancent au-dessus de la rue au lieu de rester à plat.',
  n:'Les enseignes empilées jusqu’au quatrième étage, et des rues spécialisées : baskets, poissons rouges, fleurs, oiseaux.' },

yaumatei: { name:'Yau Ma Tei',
  one:'Un ancien rivage de pêcheurs qui a gardé ses marchés de gros pendant que Kowloon montait autour.',
  h:'Les pêcheurs y calfataient leurs coques — le nom renvoie à l’huile et au chanvre utilisés. Un abri anti-typhon, un temple Tin Hau et les commerces de gros se sont installés derrière.',
  t:'Le marché aux fruits travaille toujours de nuit sous des hangars de brique d’avant-guerre, et la place du temple reste une vraie pièce de quartier plutôt qu’un décor conservé.',
  n:'Le marché au jade sous le viaduc, les enseignes de prêteurs sur gages en forme de chauve-souris inversée, et les caisses empilées au marché aux fruits avant l’aube.' },

jordan: { name:'Jordan',
  one:'Une bande de transition entre les vitrines de Tsim Sha Tsui et les marchés de Yau Ma Tei, meilleure tard.',
  h:'Bâti sur des terrains gagnés sur la mer au début du XXe siècle, en immeubles de rapport et petits commerces, avec le marché de nuit de Temple Street formé le long.',
  t:'Les loyers n’ont jamais atteint ceux de Tsim Sha Tsui trois rues plus au sud : cha chaan teng, marchands de nouilles et boutiques de desserts sont restés, pendant que le marché de nuit glissait vers le souvenir.',
  n:'L’enfilade de desserts et de wonton autour de Parkes Street et Ning Po Street, la plus animée vers minuit.' },

taikoktsui: { name:'Tai Kok Tsui',
  one:'Une ancienne pointe industrielle de petites usines, en grande partie reconvertie, en partie encore en activité.',
  h:'Chantiers navals et industrie légère ont occupé ce front de mer remblayé ; des immeubles-usines ont été construits dans les années 1950 et 1960 pour loger des centaines de petits fabricants, un par étage.',
  t:'La rénovation urbaine a remplacé beaucoup d’îlots par des tours, mais des poches d’immeubles industriels subsistent et produisent encore quincaillerie, horloges, pièces métalliques et plastiques.',
  n:'Les quais de chargement ouverts sur la rue, les enseignes peintes à la main des années 1970, et des monte-charges dimensionnés pour une palette.' },

taihang: { name:'Tai Hang',
  one:'Un ancien village hakka derrière Causeway Bay, dont le dragon de feu court chaque mi-automne depuis 1880.',
  h:'Après une épidémie et un typhon en 1880, les habitants ont fait danser un dragon de paille planté de bâtons d’encens pour chasser le malheur. Le rite est répété chaque année depuis, et figure au patrimoine culturel immatériel national.',
  t:'Le village est devenu une grille de rues étroites cernée de tours. D’anciens garages de réparation automobile en rez-de-chaussée sont devenus des cafés, mais les ruelles restent assez serrées pour que le dragon les remplisse d’un mur à l’autre.',
  n:'L’encens allumé planté dans le corps du dragon, la ligne de tambours qui le précède, et la foule maintenue en file simple sur le trottoir.' },

victoriapark: { name:'Victoria Park',
  one:'Le plus grand parc urbain de l’île, aménagé sur un remblai de l’ancien abri anti-typhon de Causeway Bay.',
  h:'Le parc a été ouvert en 1957 sur des terrains gagnés sur la mer, à l’emplacement de l’ancien abri anti-typhon reporté plus au nord. Il porte le nom de la reine Victoria, dont la statue de bronze — revenue après avoir été emportée au Japon pendant l’occupation — se dresse près de l’entrée.',
  t:'C’est depuis lors le principal terrain public de l’île : terrains de sport et courts occupés du matin au soir, grande foire aux fleurs du Nouvel An lunaire, et installations de lanternes à la mi-automne.',
  n:'La statue à l’entrée, les terrains pris d’assaut dès l’aube, et l’échelle du parc face aux tours de Causeway Bay.' },

saikung: { name:'Sai Kung',
  one:'Un port de pêche devenu la porte d’entrée du plus vaste littoral protégé de Hong Kong.',
  h:'Communautés vivant sur des bateaux et villages hakka ont exploité cette côte pendant des siècles. Les grands chantiers de réservoirs des années 1970 ont amené les premières routes, puis les parcs de campagne.',
  t:'Le front de mer vend toujours le poisson au sortir des bateaux, mais l’essentiel de la péninsule derrière est classé parc de campagne — c’est la seule raison pour laquelle les plages de Tai Long Wan restent vides.',
  n:'Les sampans qui hèlent pour les îles voisines, et les viviers alignés le long de la promenade devant les restaurants.' },

westkowloon: { name:'West Kowloon',
  one:'Quarante hectares gagnés sur le port, réservés à la culture puis débattus pendant vingt ans.',
  h:'Le site a été remblayé dans les années 1990, en partie avec les déblais du chemin de fer de l’aéroport, puis laissé en attente pendant que gouvernement et public discutaient de ce qu’il fallait y construire.',
  t:'Il a ouvert par morceaux — le Xiqu Centre, puis M+ en 2021, puis le Palace Museum — ce qui explique qu’il se lise encore comme un parc où l’on a posé des bâtiments plutôt que comme un quartier.',
  n:'La façade est de M+ qui sert d’écran à la nuit tombée, et la promenade, d’où la vue sur la skyline de l’île est la moins encombrée de la ville.' },

tst: { name:'Tsim Sha Tsui',
  one:'La pointe de Kowloon, où le ferry, le train vers l’Europe et la vue sur le port arrivaient ensemble.',
  h:'Le terminus du Kowloon–Canton Railway s’est tenu ici de 1916 à sa démolition en 1978 : on arrivait d’Europe par bateau et on repartait par le train. Seule la tour de l’horloge subsiste.',
  t:'Le terrain libéré est devenu le centre culturel et les musées, et les rues derrière se sont remplies d’hôtels, de tailleurs et de commerces vivant du passage.',
  n:'La tour de l’horloge seule sur le front de mer, la profondeur de néons de Nathan Road, et le Star Ferry qui assure la même traversée depuis 1888.' },

futian: { name:'Futian',
  one:'Le centre civique planifié de Shenzhen, dessiné sur un axe avant même d’être construit.',
  h:'Des rizières jusqu’à la création de la zone économique spéciale en 1980. Le district a été planifié dans les années 1990 autour d’un axe nord-sud allant de la colline de Lianhua jusqu’à la baie.',
  t:'Administration, banques et centre d’exposition ont été posés sur cet axe, ce qui explique la largeur des avenues et le fait que chaque îlot se lise comme un objet unique plutôt que comme une rangée d’immeubles.',
  n:'La perspective de l’axe depuis Lianhuashan, et le fait que presque rien ici n’est plus vieux que les gens qui y marchent.' },

nanshan: { name:'Nanshan',
  one:'Le district technologique de Shenzhen, où les campus et les parcs ont été planifiés ensemble.',
  h:'La zone industrielle de Shekou y a ouvert en 1979 — première pièce de l’expérience des réformes chinoises, un an avant la zone économique spéciale elle-même.',
  t:'L’assemblage matériel a laissé place aux sièges sociaux et au logiciel, et le district a été reconstruit autour d’eux avec des parcs en bord de baie et des universités plutôt qu’avec de nouvelles usines.',
  n:'Les pelouses de Talent Park qui se couvrent de badges d’entreprise à l’heure du déjeuner, et les drones de livraison et robotaxis traités comme une infrastructure ordinaire.' },

octloft: { name:'OCT-LOFT',
  one:'Un ensemble industriel des années 1980 conservé et reconverti plutôt que démoli.',
  h:'Le site appartient au groupe Overseas Chinese Town, qui a bâti là des halls industriels aux premières années de la zone économique spéciale. L’activité s’en est retirée dans les années 1990 et les bâtiments sont restés vides.',
  t:'Plutôt que de raser, le propriétaire les a convertis un par un à partir du milieu des années 2000 : ossatures béton, quais de chargement et arbres des cours intérieures sont d’origine.',
  n:'Les numéros d’usine encore peints sur les murs, librairies et studios derrière des rideaux métalliques, et une échelle basse et horizontale qui ne ressemble à rien d’autre à Shenzhen.' },

huaqiangbei: { name:'Huaqiangbei',
  one:'Le plus grand marché d’électronique du monde, organisé en tours de comptoirs individuels.',
  h:'Des usines d’électronique bordaient cette rue dans les années 1980. Leurs surplus de composants se vendaient au rez-de-chaussée, et le négoce a fini par dépasser la production qui l’alimentait.',
  t:'Des milliers d’étals indépendants occupent aujourd’hui les immeubles étage par étage, chacun sur une catégorie étroite : une chaîne d’approvisionnement entière compressée en quelques îlots.',
  n:'Des plateaux entiers consacrés à un seul composant, des établis de réparation à ciel ouvert, et des marchandises déplacées d’une tour à l’autre sur des diables.' },

luohu: { name:'Luohu',
  one:'Le poste-frontière historique, et la partie de Shenzhen qui existait avant Shenzhen.',
  h:'Le bourg installé au pont ferroviaire vers Hong Kong était le seul établissement d’une certaine taille lorsque la zone économique spéciale a été créée en 1980.',
  t:'Il a grandi le premier et le plus vite : il est plus dense et visiblement plus ancien que Futian ou Nanshan, et fonctionne encore surtout comme un point de passage et un quartier de marchés.',
  n:'Le pont ferroviaire et piéton vers Hong Kong, et des tours des années 1980 qui font déjà figure d’ancien dans une ville de cet âge.' },

haeundae: { name:'Haeundae',
  one:'La plage la plus connue de Corée, adossée à un front de tours élevé presque entièrement ce siècle.',
  h:'Station thermale sous l’occupation japonaise, puis modeste station balnéaire qui se vidait hors saison, jusqu’à ce que la promotion immobilière prenne le front de mer à partir des années 2000.',
  t:'Marine City et les tours derrière ont remplacé un bâti bas en une vingtaine d’années : le sable est devenu une bande étroite au pied d’une skyline, et c’est ce contraste qui fait le lieu.',
  n:'Les ruelles du marché quelques pâtés en arrière, inchangées, où l’on mange réellement, et la pointe boisée de Dongbaekseom qui ferme l’ouest.' },

gwangalli: { name:'Gwangalli',
  one:'Une plage urbaine de Suyeong-gu tournée vers le pont de Gwangan et son éclairage nocturne.',
  h:'Le pont de Gwangan, construit de 1994 à 2003, a donné à la baie sa silhouette actuelle. La plage s’est réorientée vers cette vue à mesure que le front de mer se reconstruisait derrière elle.',
  t:'Cafés et bars alignés sur le front regardent le pont plutôt que le large ; le pont suit une séquence d’éclairage nocturne, et la ville programme des spectacles de drones au-dessus de la baie.',
  n:'Tout le monde assis face à la même direction, un bâti arrière volontairement bas qui dégage la vue, et une eau plus calme qu’à Haeundae.' },

cheongsapo: { name:'Cheongsapo',
  one:'Un port de pêche de Haeundae-gu resté petit derrière l’ancienne voie ferrée du littoral.',
  h:'La ligne Donghae Nambu longeait cette côte depuis les années 1930 et séparait le village de la mer. Le hameau a gardé son port, marqué par deux phares, l’un rouge et l’autre blanc, de part et d’autre de la passe.',
  t:'La ligne a fermé en 2013 ; son emprise a rouvert en 2020 en promenade et en Blueline Park, avec le train de plage et la Sky Capsule, ce qui a amené des visiteurs sans jamais élargir les ruelles du village.',
  n:'Les deux phares qui se font face, les tentes à coquillages du port, et l’ancienne plateforme ferroviaire qui traverse le village.' },

songjeong: { name:'Songjeong',
  one:'La plage de surf de Busan, à l’extrémité est de Haeundae-gu.',
  h:'Plage de pêche bordée de pins, au bout de l’ancienne ligne côtière Donghae Nambu fermée en 2013, le bourg s’est développé autour de son port et de sa gare, à l’écart du développement balnéaire concentré plus à l’ouest.',
  t:'Un fond peu profond et une houle régulière et modérée en ont fait la principale plage-école de surf du pays ; le bâti derrière est resté bas.',
  n:'Les racks à planches devant un immeuble sur deux, le sentier vers la pointe de Jukdo au nord, et une plage plus fréquentée au lever du jour qu’à midi.' },

gamcheon: { name:'Gamcheon',
  one:'Un quartier de réfugiés bâti à flanc de colline, sauvé de la démolition par un programme artistique.',
  h:'Construit à partir de 1955 par des réfugiés de la guerre de Corée et des membres de la communauté religieuse Taegeukdo, en rangées étagées disposées pour qu’aucune maison ne bouche la lumière ni la vue de celle du dessus.',
  t:'Le dépeuplement l’a mis sur la liste des démolitions jusqu’à ce qu’un programme artistique public le repeigne et le répare à partir de 2009. Le plan n’a pas été modifié et environ 8 000 personnes y vivent toujours.',
  n:'Chaque faîtage sous le seuil de la maison supérieure, des ruelles qui sont des escaliers, et des portes d’habitants qui ouvrent directement sur le parcours.' },

nampo: { name:'Nampo-dong',
  one:'Le vieux centre de Busan, et le berceau du cinéma coréen en salle.',
  h:'Les salles de cinéma de la ville se sont regroupées dans ces rues à partir des années 1950, et le Festival international du film de Busan y a été fondé en 1996 — d’où le nom de BIFF Square.',
  t:'Le festival a depuis déménagé vers Centum City, mais la rue a gardé les salles, les empreintes de mains et une densité inhabituelle de stands de nourriture ouverts tard.',
  n:'Les empreintes scellées dans le trottoir, et les stands de ssiat hotteok — la crêpe fourrée aux graines est propre à cette rue.' },

jagalchi: { name:'Jagalchi',
  one:'Le plus grand marché aux poissons de Corée, tenu depuis l’après-guerre en grande partie par des femmes.',
  h:'Le commerce a commencé sur la grève de galets à laquelle le nom renvoie. Après 1950, le marché a été porté par des veuves et des femmes déplacées vendant le poisson depuis le quai — les jagalchi ajumma, toujours son visage public.',
  t:'Le bâtiment de 2006 a mis la vente en gros au rez-de-chaussée et les restaurants au-dessus, mais les étals extérieurs le long de l’eau fonctionnent exactement comme avant.',
  n:'La règle est d’acheter en bas et de faire cuire en haut — et la ruelle du poisson séché derrière la halle.' },

hongdae: { name:'Hongdae',
  one:'Le quartier de l’école d’art de l’université Hongik, qui en a fixé le caractère avant les clubs.',
  h:'La faculté des beaux-arts de Hongik a attiré ateliers et bars d’étudiants dès les années 1980. La scène live et les labels indépendants sont sortis de cette population étudiante, pas du tourisme.',
  t:'La hausse des loyers a poussé les ateliers vers Yeonnam et Mangwon, laissant les rues principales aux chaînes et aux performances de rue, tandis que les petites salles et les disquaires se sont repliés dans les ruelles.',
  n:'Les fresques des ruelles de l’école d’art, des musiciens qui reprennent les mêmes emplacements chaque soir, et la bascule résidentielle deux rues plus loin.' },

yeonnam: { name:'Yeonnam-dong',
  one:'Une trame résidentielle basse transformée par l’enfouissement d’une voie ferrée et le parc posé dessus.',
  h:'Le bâti bas, en partie construit pour des habitants sino-coréens, s’est développé le long de l’ancienne ligne Gyeongui, qui traversait le quartier au niveau de la rue.',
  t:'La ligne est passée en souterrain et la surface est devenue un parc linéaire en 2016. Les maisons qui le bordent ont converti leur rez-de-chaussée en cafés et boutiques en deux ou trois ans.',
  n:'Les jardinets devenus terrasses, le commerce qui s’arrête exactement où finit le parc, et les restaurants sino-coréens plus anciens dans les rues adjacentes.' },

mangwon: { name:'Mangwon',
  one:'Un quartier résidentiel voisin de Hongdae qui a gardé son marché traditionnel.',
  h:'Le bâti s’est développé autour d’un marché de quartier en activité depuis les années 1970, séparé de Hongdae par quelques pâtés de maisons seulement.',
  t:'De jeunes commerces s’y sont installés quand Hongdae et Yeonnam sont devenus chers, mais à côté du marché plutôt qu’à sa place : les deux servent aujourd’hui la même rue.',
  n:'Les stands de croquettes, de jeon et de tteok à l’extrémité couverte du marché, la halle qui reste le centre de gravité du quartier, et le retour au résidentiel dès le pâté suivant.' },

seochon: { name:'Seochon',
  one:'Le village à l’ouest du palais, longtemps habité par ceux qui servaient la cour sans en être.',
  h:'Sous le Joseon, le quartier logeait des fonctionnaires proches du palais, des jungin — interprètes, médecins, astronomes, peintres — et des artisans travaillant pour la cour. Écrivains et peintres s’y sont installés au XXe siècle, dont le poète Yi Sang, dont la maison est aujourd’hui un lieu de mémoire.',
  t:'Les limites de hauteur protégeant le palais ont maintenu une échelle basse : les ruelles gardent des commerces de plain-pied et des fragments de hanok au lieu des tours bâties ailleurs dans le centre.',
  n:'Les jetons de laiton du marché de Tongin, les toits de hanok au-dessus des devantures, et la crête d’Inwangsan qui ferme la perspective.' },

bukchon: { name:'Bukchon & Samcheong',
  one:'Le quartier aristocratique entre les deux grands palais, et la plus forte concentration de hanok urbains.',
  h:'Des fonctionnaires yangban y vivaient pour être près de Gyeongbokgung et de Changdeokgung. L’essentiel de ce qui subsiste date pourtant des années 1930, quand des promoteurs ont loti les grands domaines en hanok compacts destinés à la vente.',
  t:'Le quartier reste habité, d’où les panneaux demandant le silence et les horaires d’accès dans les ruelles classées. Samcheong-dong, la rue qui borde le flanc est, a absorbé galeries et cafés à la place.',
  n:'Les hanok des années 1930, plus petits et plus serrés que ceux du Joseon ; les ruelles montent, et la vue sur les toits de tuiles se prend depuis le haut.' },

ikseon: { name:'Ikseon-dong',
  one:'Le premier lotissement de hanok planifié de Séoul, construit dans les années 1920 comme logement abordable.',
  h:'Le promoteur Jeong Se-gwon a racheté des domaines aristocratiques et les a lotis en petits hanok standardisés vendus à des Coréens ordinaires — une réponse commerciale délibérée au logement de type japonais.',
  t:'Promis à la démolition pendant des décennies et sauvé surtout par le blocage entre propriétaires, le quartier a été converti à partir de 2015 en cafés et bars sans que personne n’élargisse les ruelles ni ne rase d’îlot.',
  n:'Des ruelles à peine larges de deux personnes, des verrières posées sur d’anciennes cours, et des portes basses.' },

euljiro: { name:'Euljiro',
  one:'Un quartier d’imprimeurs, de luminaires et d’ateliers métal qui devient quartier de bars une fois les rideaux baissés.',
  h:'Le Séoul d’après-guerre y a concentré la petite production — imprimerie, carrelage, éclairage, pièces mécaniques — îlot par îlot, chaque métier tenant sa rue.',
  t:'La rénovation urbaine en a pris des morceaux, mais les ateliers tournent toujours le jour. Les bars occupent les étages et les arrière-salles et ouvrent quand les rideaux descendent, d’où le surnom de Hipjiro donné par tout le monde sauf ceux qui y travaillent.',
  n:'Presque aucune enseigne — chercher une cage d’escalier éclairée — et le bruit des machines qui s’arrête vers dix-neuf heures.' },

seongsu: { name:'Seongsu',
  one:'L’ancien quartier de la chaussure de Séoul, reconverti bâtiment par bâtiment plutôt que rasé.',
  h:'Tanneries, imprimeries et plusieurs centaines de petites fabriques de chaussures ont rempli ces îlots de brique à partir des années 1970, fournissant l’essentiel de la production nationale depuis des ateliers de cinq ou dix personnes.',
  t:'La production a reculé mais les bâtiments et une partie des ateliers sont restés. Cafés et flagships ont pris les étages vides en gardant la brique, les portes de chargement et les cours.',
  n:'Des ateliers de chaussure encore en activité au rez-de-chaussée sous les nouveaux occupants, et une brique rouge qui date tout le quartier d’une même vague de construction.' },

dosan: { name:'Dosan & Apgujeong',
  one:'Le cœur du Gangnam planifié, où les enseignes ont investi le bâtiment plutôt que la vitrine.',
  h:'Terres agricoles au sud du fleuve jusqu’aux années 1970, quand l’État y a transféré des lycées prestigieux et bâti des grands ensembles pour y attirer les classes moyennes. Dosan Park, ouvert en 1973, est un parc commémoratif autour de la tombe du militant An Chang-ho, dit Dosan.',
  t:'Apgujeong s’est imposée comme adresse de fortune récente, et les marques qui ont suivi ont fait de leurs immeubles leur principal support.',
  n:'Des façades conçues pour être photographiées, et un niveau de rue étonnamment calme pour la valeur du foncier.' },

cheongdam: { name:'Cheongdam',
  one:'L’extrémité luxe et industrie du divertissement de Gangnam, plus fermée qu’Apgujeong.',
  h:'Aménagé avec Apgujeong dans les années 1970 et 1980, le quartier a d’abord été choisi par les maisons de luxe pour leurs flagships coréens, puis par les grandes agences de divertissement pour leurs sièges.',
  t:'Les flagships tiennent une avenue tandis que les rues adjacentes abritent agences, galeries privées et restaurants qui ne font aucune publicité et se transmettent par recommandation.',
  n:'Des portes sans enseigne et des bars en sous-sol, des fans qui attendent devant les agences, et très peu de vie de rue pour la valeur du terrain.' },

hannam: { name:'Hannam-dong',
  one:'Un versant d’ambassades et de grandes maisons devenu un quartier de galeries et de design.',
  h:'Sa position entre Namsan et le fleuve en a fait très tôt un secteur diplomatique et résidentiel. Des familles industrielles coréennes y ont bâti, et le musée Leeum y a ouvert en 2004.',
  t:'Le musée a fixé autour de lui une grappe de galeries, de showrooms et de petits ateliers le long de la pente ; le commerce y reste en retrait de la rue, souvent derrière un portail sans enseigne.',
  n:'Des entrées de galerie qui ressemblent à des maisons, des murs d’ambassade, et la pente — rien ici n’est à plat.' },

itaewon: { name:'Itaewon',
  one:'Façonné pendant soixante-dix ans par la garnison voisine, et en train de se redéfinir sans elle.',
  h:'La base de Yongsan, japonaise puis américaine, a fait de ce quartier celui où les étrangers logeaient, buvaient et se faisaient tailler des costumes ; tailleurs et bars s’y sont installés pour la desservir.',
  t:'La base a été transférée pour l’essentiel en 2018 et son emprise devient un parc, si bien que la rue se rééquilibre vers des adresses tenues par des Coréens. Un mémorial marque la ruelle où 159 personnes ont perdu la vie lors du mouvement de foule d’Halloween 2022.',
  n:'Les tailleurs hérités des années de garnison, la mosquée au-dessus de la rue principale, et la montée de Gyeongnidan.' },

namsan: { name:'Namsan',
  one:'La montagne autour de laquelle Séoul s’est construite, et le tracé de son ancienne muraille.',
  h:'La muraille de la capitale du Joseon franchissait ce sommet dès 1396, et des feux de signalisation y relayaient chaque soir les nouvelles de la frontière jusqu’au palais.',
  t:'La tour de 1975 était un émetteur avant d’être un belvédère, et les pentes sont protégées : c’est pourquoi il reste une montagne boisée au milieu de la ville.',
  n:'Les sections de muraille restaurées le long des sentiers, les cinq tertres de signalisation au sommet, et le tracé du rempart encore lisible dans le plan des rues en contrebas.' },

gyeongbokgung: { name:'Gyeongbokgung',
  one:'Le palais principal du Joseon, fondé en 1395, détruit puis reconstruit à deux reprises.',
  h:'Bâti en 1395 comme palais principal de la nouvelle dynastie, il est incendié lors des invasions japonaises de 1592 et laissé en ruine près de trois siècles. Reconstruit dans les années 1860, il est ensuite largement démantelé pendant la colonisation japonaise ; la restauration en cours depuis 1990 rebâtit les bâtiments détruits.',
  t:'On visite donc un ensemble en partie restitué, ce qui explique le contraste entre bois anciens et charpentes récentes.',
  n:'La relève de la garde à Gwanghwamun, le pavillon de Gyeonghoeru sur son bassin, et Bugaksan qui ferme l’axe derrière la salle du trône.' }
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
      dur: '2h41', cls: 'Economy / Adult · KRW 53 500', bag: 'Ticket 80022-0903-10020-03 · 1 adulte', op: 'Korail KTX — dos à la marche' },
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

  /* state: 'todo' = encore à réserver · 'ok' = confirmé */
  priorities: [
    { id:'p3', state:'todo', label:'Leeum Museum — 3 oct',
      note:'À réserver le 19 septembre : la fenêtre ouvre 14 jours avant la visite.' },
    { id:'p4', state:'todo', label:'Gebangsikdang Seongsu — 2 oct, déjeuner',
      note:'Réservation recommandée. Service 11h30–15h avant la pause.' },
    { id:'p6', state:'todo', label:'Dîner du 27 sep',
      note:'Le meilleur dîner du séjour. À choisir et réserver à l’avance.' },
    { id:'p2', state:'ok', label:'Sky Capsule Cheongsapo → Mipo — 29 sep 17h30',
      note:'Confirmé.' },
    { id:'p7', state:'ok', label:'KTX046 Busan → Séoul — 30 sep 14h47',
      note:'Confirmé. Voiture 1, siège 7B — un seul billet adulte enregistré ; le second n’est pas renseigné.' }
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
  must: 'Man Mo Temple · Tai Kwun · Bar Leone vers 17h00',
  drop: ['PMQ si le jet lag pèse', 'Luk On Kui', '001 Tai Kwun'],
  tip: 'Airport Express jusqu’à Hong Kong Station, puis taxi vers Wan Chai. Prendre une Octopus dès l’aéroport.',
  tip: 'Airport Express jusqu’à Hong Kong Station, puis taxi vers Wan Chai. Octopus dès l’aéroport. Le soir, Tai Kwun → Bar Leone → dîner SoHo se fait entièrement à pied.',
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
    { s:'lunch', k:'food', o:1, name:'Luk On Kui', note:'Dim sum old-school très local. Optionnel.', lat:22.2866, lng:114.1503, q:'Luk On Kui Sheung Wan' },

    { s:'afternoon', k:'hotel', name:'Check-in Hopewell Hotel', note:'Petite pause si besoin.', lat:22.2745, lng:114.1716, q:'Hopewell Hotel Hong Kong' },
    { s:'afternoon', k:'shop', o:1, name:'PMQ', note:'Ancienne résidence de police devenue hub design. Optionnel : le premier à sauter si le jet lag pèse — Tai Kwun juste après couvre le même registre.', lat:22.2836, lng:114.1526, q:'PMQ Hong Kong' },
    { s:'afternoon', k:'shop', name:'G.O.D. · PMQ shops', note:'Design pop inspiré de Hong Kong. Studios et créateurs hongkongais sur place.', lat:22.2837, lng:114.1528, q:'G.O.D. PMQ Hong Kong' },
    { s:'afternoon', k:'museum', m:1, name:'Tai Kwun', note:'Ancienne prison devenue centre culturel.', lat:22.2818, lng:114.1546, q:'Tai Kwun Hong Kong' },
    { s:'evening', k:'bar', m:1, t:'17:00', name:'Bar Leone', note:'Walk-in uniquement, aucune réservation. Y aller tôt, entre 17h00 et 18h00 : cinq minutes à pied depuis Tai Kwun, et la file s’allonge vite en soirée.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' },

    { s:'evening', k:'walk', a:'soho', name:'SoHo', note:'Ruelles pentues, restaurants et bars, en redescendant depuis Bar Leone.', lat:22.2822, lng:114.1520, q:'SoHo Hong Kong' },
    { s:'evening', k:'food', gen:1, name:'Dîner à SoHo', note:'À choisir sur place, dans les ruelles entre Elgin Street et Staunton Street.', lat:22.2820, lng:114.1516, q:'SoHo Central Hong Kong restaurants' },
    { s:'evening', k:'bar', o:1, name:'COA', note:'Cocktails agave et mezcal. Optionnel, après le dîner.', lat:22.2826, lng:114.1508, q:'COA Hong Kong Shin Hing Street' },
    { s:'evening', k:'bar', o:1, name:'001 Tai Kwun', note:'Speakeasy élégant. En alternative.', lat:22.2818, lng:114.1548, q:'001 Bar Hong Kong Graham Street' }
  ]},

/* ── 23 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-23', city: 'Hong Kong', region: 'HK', label: 'Sai Ying Pun · The Peak · Happy Valley',
  focus: 'Quartier résidentiel le matin, panorama iconique l’après-midi, puis vraie soirée hongkongaise aux courses.',
  hotel: 0,
  must: 'Peak Circle Walk au coucher du soleil · Happy Valley',
  drop: ['Kennedy Town', 'ArtLane'],
  tip: 'Après le Peak : ding ding si vous êtes confortablement dans les temps, taxi direct vers Happy Valley si vous êtes en retard. Une seule fois dans le séjour pour le tram.',
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

    { s:'afternoon', k:'transit', m:1, t:'16:15', name:'Peak Tram', note:'Terminus Garden Road. Viser 16h15 pour être en haut à la bonne lumière. L’attente reste imprévisible : s’il y a trop de monde, le bus 15 ou un taxi montent aussi.', lat:22.2790, lng:114.1600, q:'Peak Tram Lower Terminus Garden Road' },
    { s:'afternoon', k:'view', m:1, a:'thepeak', t:'16:45', name:'Victoria Peak', note:'Panorama iconique. Arrivée vers 16h45.', lat:22.2712, lng:114.1500, q:'Victoria Peak Hong Kong' },
    { s:'afternoon', k:'nature', m:1, a:'thepeak', t:'17:10', name:'Peak Circle Walk · Lugard Rd + Harlech Rd', note:'Boucle de 1h15–1h30, plate et calme. Rester pour le coucher du soleil puis les premières lumières de la skyline, et redescendre vers 18h40.', lat:22.2718, lng:114.1443, q:'Lugard Road Victoria Peak' },

    { s:'evening', k:'transit', name:'Ding ding · tram vers Happy Valley', note:'Le tram historique dessert Happy Valley par une boucle dédiée. À prendre si vous êtes confortablement dans les temps ; en retard, taxi direct vers l’hippodrome. C’est un transport, pas une attraction : une fois dans le séjour suffit.', lat:22.2800, lng:114.1720, q:'Hong Kong Tramways Happy Valley' },
    { s:'evening', k:'sight', m:1, a:'happyvalley', hard:1, name:'Happy Valley Racecourse', note:'Regarder plusieurs courses, boire un verre et parier de petites sommes pour l’expérience.', lat:22.2718, lng:114.1822, q:'Happy Valley Racecourse Hong Kong' },
    { s:'evening', k:'bar', name:'The Savory Project', note:'Cocktails salés, Dirty Martini.', lat:22.2823, lng:114.1512, q:'The Savory Project Hong Kong' },
    { s:'evening', k:'bar', o:1, name:'Bar Leone', note:'Si pas fait la veille.', lat:22.2843, lng:114.1516, q:'Bar Leone Hong Kong' }
  ]},

/* ── 24 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-24', city: 'Hong Kong', region: 'HK', label: 'Sham Shui Po · Mong Kok · Tai Hang',
  focus: 'Journée la plus locale et créative, entre vieux commerces, street food, ateliers, design et quartiers ultra-denses.',
  hotel: 0,
  must: 'Fire Dragon à Tai Hang, sur place 18h30',
  alert: 'Fire Dragon confirmé du 24 au 26 septembre à Tai Hang. Sur place entre 18h30 et 19h00 — la danse est publiée 19h30–22h30 mais les ruelles se remplissent bien avant. Lanternes de Victoria Park allumées 18h30–23h00, juste à côté.',
  drop: ['Jordan', 'Yau Ma Tei', 'Mong Kok — aucun des trois ne doit retarder Tai Hang'],
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
    { s:'afternoon', k:'walk', o:1, a:'jordan', name:'Jordan', note:'En prolongement vers le sud, et seulement si vous êtes en avance. Rien à Kowloon ne justifie de rogner sur Tai Hang.', lat:22.3048, lng:114.1716, q:'Jordan Hong Kong' },
    { s:'afternoon', k:'transit', m:1, t:'17:30', name:'Quitter Kowloon', note:'Heure limite ferme. MTR Yau Ma Tei → Tin Hau, environ 25 min, puis 8 min à pied jusqu’à Tai Hang. Partir à 17h30 est ce qui rend l’arrivée à 18h30 possible.', lat:22.3110, lng:114.1706, q:'Yau Ma Tei MTR Station' },

    { s:'evening', k:'sight', m:1, hard:1, t:'18:30', a:'taihang', name:'Tai Hang · Fire Dragon Dance', note:'Le moment le plus spécial du voyage, et le seul point non négociable de la semaine à Hong Kong. Arriver entre 18h30 et 19h00 : la danse est publiée entre 19h30 et 22h30, mais les ruelles se remplissent bien avant et les meilleures positions partent tôt. Confirmé du 24 au 26 septembre.', lat:22.2792, lng:114.1905, q:'Tai Hang Fire Dragon Dance' },
    { s:'evening', k:'sight', m:1, t:'21:15', a:'victoriapark', name:'Victoria Park · lanternes', note:'À dix minutes à pied de Tai Hang. Installations de lanternes de la mi-automne dans le plus grand parc de l’île, éclairées de 18h30 à 23h00 : le dragon d’abord, les lanternes après.', lat:22.2822, lng:114.1885, q:'Victoria Park Hong Kong' },
    { s:'evening', k:'food', a:'taihang', gen:1, name:'Dîner Tai Hang / Causeway Bay', note:'Autour de Tai Hang ou Causeway Bay, après ou entre les deux.', lat:22.2800, lng:114.1855, q:'Tai Hang restaurants Hong Kong' }
  ]},

/* ── 25 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-25', city: 'Shenzhen', region: 'CN', label: 'Futian · Nanshan · OCT-LOFT · Luohu',
  focus: 'Rupture totale avec Hong Kong : métropole chinoise récente, architecture monumentale, tech, design et scène créative.',
  hotel: 0,
  must: 'OCT-LOFT · Huaqiangbei · Drawing Room 17h15–18h00',
  book: ['Entrée en Chine continentale — vérifier l’éligibilité selon la nationalité du passeport avant de partir'],
  drop: ['Les trois bonus : drone, robotaxi, DJI', 'Lianhuashan Park si la frontière prend du temps'],
  tip: 'Passeport ordinaire français ou suisse : entrée sans visa pour un séjour touristique jusqu’à 30 jours, au titre du dispositif en vigueur jusqu’au 31 décembre 2026. Passeport d’une autre nationalité : vérifiez vos propres conditions d’entrée avant de partir. DiDi fonctionne avec un numéro étranger et une carte internationale, sinon passez par le mini-programme DiDi dans Alipay ou WeChat. Copiez toujours le nom chinois de la destination avant de commander.',
  checks: [{ id:'sz1', t:'Passeport' }, { id:'sz2', t:'Visa / permis' }, { id:'sz3', t:'Alipay + WeChat Pay' }, { id:'sz4', t:'Carte internationale' }, { id:'sz5', t:'eSIM + VPN' }, { id:'sz6', t:'Cash CNY' }],
  checks: [{ id:'sz1', t:'Passeport' }, { id:'sz2', t:'Éligibilité entrée Chine' }, { id:'sz3', t:'Alipay' }, { id:'sz7', t:'WeChat Pay' }, { id:'sz8', t:'DiDi' }, { id:'sz5', t:'Roaming / eSIM utilisable en Chine' }, { id:'sz6', t:'Cash CNY (optionnel)' }],
  stops: [
    { s:'morning', k:'transit', m:1, zh:'福田口岸', a:'futian', name:'Passage de la frontière · Futian', note:'Passeport + visa/permis. Départ tôt.', lat:22.5164, lng:114.0700, q:'Futian Checkpoint Shenzhen' },
    { s:'morning', k:'sight', zh:'深圳市民中心', a:'futian', name:'Civic Center', note:'Architecture monumentale.', lat:22.5460, lng:114.0590, q:'Shenzhen Civic Center' },
    { s:'morning', k:'nature', zh:'莲花山公园', a:'futian', name:'Lianhuashan Park', note:'Vue sur le skyline de Futian depuis la colline.', lat:22.5560, lng:114.0560, q:'Lianhuashan Park Shenzhen' },
    { s:'morning', k:'nature', zh:'深圳人才公园', a:'nanshan', name:'Shenzhen Talent Park', note:'DiDi vers Nanshan en fin de matinée. Pelouses au bord de la baie de Shenzhen, dans le secteur de Houhai — pas Qianhai, qui est plus à l’ouest.', lat:22.5180, lng:113.9440, q:'Shenzhen Talent Park' },

    { s:'morning', k:'transit', o:1, gen:1, name:'Bonus · livraison Meituan par drone', note:'Bonus, pas un objectif. Des points de retrait par drone opèrent dans Nanshan, notamment autour de Talent Park : à tenter seulement si vous tombez dessus.', lat:22.5185, lng:113.9450, zh:'深圳人才公园', q:'Meituan drone delivery Shenzhen Talent Park' },

    { s:'lunch', k:'food', m:1, zh:'八合里海记牛肉店 南山', name:'Baheli Haiji Beef Hotpot', note:'Chaoshan beef hotpot. Nanshan.', lat:22.5280, lng:113.9330, q:'Baheli Haiji Beef Hotpot Nanshan Shenzhen' },
    { s:'lunch', k:'food', o:1, name:'Chao Shan Da Mu Beef Hotpot City', note:'Alternative.', lat:22.5310, lng:113.9300, q:'Chao Shan Da Mu Beef Hotpot Shenzhen' },

    { s:'afternoon', k:'transit', o:1, zh:'前海', name:'Bonus · robotaxi Pony.ai', note:'Bonus, pas un objectif. Nanshan et Qianhai sont dans la zone d’opération : à faire seulement si un véhicule est disponible sans attendre.', lat:22.5300, lng:113.8900, q:'Qianhai Shenzhen' },
    { s:'afternoon', k:'sight', m:1, zh:'华侨城创意文化园 OCT-LOFT', a:'octloft', name:'OCT-LOFT', note:'Ancienne zone industrielle devenue quartier créatif.', lat:22.5450, lng:113.9860, q:'OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', zh:'旧天堂书店 华侨城创意文化园', a:'octloft', name:'Old Heaven', note:'Librairie, musique, vinyles et art.', lat:22.5452, lng:113.9866, q:'Old Heaven Books OCT-LOFT Shenzhen' },
    { s:'afternoon', k:'shop', o:1, zh:'大疆旗舰店 欢乐海岸', name:'Bonus · DJI Flagship Store', note:'Bonus, pas un objectif. OCT Harbour, en milieu d’après-midi, seulement si vous êtes en avance sur Huaqiangbei.', lat:22.5210, lng:113.9880, q:'DJI Flagship Store OCT Harbour Shenzhen' },
    { s:'afternoon', k:'market', zh:'华强北 赛格广场', a:'huaqiangbei', name:'Huaqiangbei · SEG Plaza', note:'Le plus grand marché électronique du monde. Fin d’après-midi.', lat:22.5473, lng:114.0862, q:'SEG Plaza Huaqiangbei Shenzhen' },

    { s:'evening', k:'view', m:1, t:'17:15', zh:'深圳瑞吉酒店 京基100', name:'Drawing Room · St. Regis, 96e étage', note:'Créneau 17h15–18h00, pas plus tard : le Drawing Room ferme à 18h00. Caler le DiDi depuis Huaqiangbei en conséquence.', lat:22.5450, lng:114.1080, q:'The St. Regis Shenzhen KK100' },
    { s:'evening', k:'bar', o:1, zh:'深圳瑞吉酒店 京基100', t:'18:00', name:'St. Regis Bar · skyline du soir', note:'À 18h00, quand le Drawing Room ferme, descendre au St. Regis Bar si vous voulez rester devant la ville illuminée.', lat:22.5450, lng:114.1080, q:'St. Regis Bar Shenzhen' },
    { s:'evening', k:'transit', zh:'罗湖口岸', a:'luohu', name:'Frontière de Luohu → Hong Kong', note:'Retour à Hong Kong en fin de soirée.', lat:22.5320, lng:114.1160, q:'Luohu Port Shenzhen' }
  ]},

/* ── 26 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-26', city: 'Hong Kong', region: 'HK', label: 'Sai Kung · Tai Long Wan · plage',
  focus: 'Vraie coupure nature avec mer, montagne et plage, puis grosse soirée en ville.',
  hotel: 0,
  must: 'Tai Long Wan — ou basculer sur le programme du 27 si la météo est mauvaise',
  drop: ['Pousser jusqu’à Ham Tin si l’heure tourne — s’arrêter à Sai Wan Beach', 'Sing Kee'],
  tip: 'Sai Kung Town → Sai Wan Pavilion en taxi (~20 min) ou minibus NR29. Sentier : Sai Wan Pavilion → Sai Wan Beach → Ham Tin / Tai Long Wan. Bateau de retour depuis Ham Tin uniquement s’il est confirmé sur place le jour même ; sinon prévoir le retour à pied.',
  alert: 'Journée météo-dépendante. Sous la pluie ou par vent fort, échangez-la avec le 27 septembre : M+, Tsim Sha Tsui et le Star Ferry se font très bien par mauvais temps, Tai Long Wan non.',
  stops: [
    { s:'morning', k:'walk', a:'saikung', name:'Sai Kung Town', note:'Point de départ. Minibus / taxi vers Sai Wan Pavilion.', lat:22.3817, lng:114.2712, q:'Sai Kung Town Hong Kong' },
    { s:'morning', k:'nature', m:1, w:1, name:'Sai Wan Pavilion · départ randonnée', note:'Départ du sentier. Itinéraire : Sai Wan Pavilion → Sai Wan Beach → Ham Tin / Tai Long Wan. Vérifier la météo la veille au soir.', lat:22.3960, lng:114.3560, q:'Sai Wan Pavilion Sai Kung' },

    { s:'lunch', k:'nature', m:1, w:1, name:'Sai Wan Beach', note:'Baignade si la météo le permet.', lat:22.4030, lng:114.3600, q:'Sai Wan Beach Sai Kung' },
    { s:'lunch', k:'nature', m:1, w:1, name:'Ham Tin / Tai Long Wan', note:'Le point fort de la journée, au bout du sentier depuis Sai Wan Beach. Retour à pied par le même chemin, ou en bateau depuis Ham Tin : les navettes dépendent de la météo, de la houle et de l’opérateur, et se confirment sur place le jour même. Ne jamais compter dessus à l’avance.', lat:22.4090, lng:114.3670, q:'Tai Long Wan Sai Kung' },

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
  drop: ['Kapok', 'M+ Shop'],
  tip: 'Star Ferry TST → Central au moment du blue hour : le meilleur rapport temps / vue de la ville.',
  tip: 'Enchaînement géographique : West Kowloon / M+ → déjeuner à Jordan → Nathan Road / Tsim Sha Tsui → Avenue of Stars → Star Ferry vers Central. Le Star Ferry au blue hour est le meilleur rapport temps / vue de la ville.',
  stops: [
    { s:'morning', k:'walk', a:'westkowloon', name:'West Kowloon Cultural District', note:'Fin de matinée, promenade au bord de l’eau.', lat:22.3020, lng:114.1600, q:'West Kowloon Cultural District' },
    { s:'morning', k:'museum', m:1, name:'M+', note:'Musée de la culture visuelle contemporaine. Dimanche : 10h–18h.', lat:22.3020, lng:114.1580, q:'M+ Museum Hong Kong' },
    { s:'morning', k:'shop', name:'M+ Shop', note:'Livres et design asiatique.', lat:22.3021, lng:114.1583, q:'M+ Shop Hong Kong' },

    { s:'lunch', k:'food', name:'Mak Man Kee', note:'Wonton noodles, à Jordan. Au choix avec Australia Dairy Company — un seul des deux, ils sont à deux minutes l’un de l’autre.', lat:22.3060, lng:114.1700, q:'Mak Man Kee Noodle Shop Jordan' },
    { s:'lunch', k:'food', o:1, name:'Australia Dairy Company', note:'Cha chaan teng culte. Au choix avec Mak Man Kee, pas les deux.', lat:22.3061, lng:114.1703, q:'Australia Dairy Company Jordan' },

    { s:'afternoon', k:'walk', a:'tst', name:'Tsim Sha Tsui · Nathan Road', note:'Éventuellement pousser jusqu’à Jordan.', lat:22.2990, lng:114.1720, q:'Nathan Road Tsim Sha Tsui' },
    { s:'afternoon', k:'shop', name:'Kapok', note:'Mode et design indépendant.', lat:22.2960, lng:114.1730, q:'Kapok Tsim Sha Tsui' },

    { s:'evening', k:'view', m:1, a:'tst', name:'Avenue of Stars', note:'Attendre les lumières.', lat:22.2935, lng:114.1740, q:'Avenue of Stars Hong Kong' },
    { s:'evening', k:'transit', m:1, name:'Star Ferry · nuit / blue hour', note:'TST → Central au moment des lumières.', lat:22.2937, lng:114.1685, q:'Star Ferry Pier Tsim Sha Tsui' },
    { s:'evening', k:'food', m:1, b:'todo', gen:1, name:'Dîner — le meilleur du séjour', note:'Le dîner réservé du séjour, côté Central après le Star Ferry, puis dernier cocktail.', lat:22.2820, lng:114.1560, q:'Central Hong Kong fine dining' }
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
    { s:'lunch', k:'food', a:'cheongsapo', gen:1, name:'Cheongsapo seafood', note:'Recommandation de zone : les tentes et petits restaurants de fruits de mer du port, à choisir sur place.', lat:35.1607, lng:129.1937, q:'Cheongsapo seafood Busan' },
    { s:'lunch', k:'cafe', gen:1, name:'Cafés de Cheongsapo', note:'Recommandation de zone : plusieurs cafés avec vue sur le port et les deux phares.', lat:35.1604, lng:129.1942, q:'Cheongsapo cafe Busan' },

    { s:'afternoon', k:'view', name:'Cheongsapo Daritdol Observatory', note:'Plateforme vitrée au-dessus de la mer.', lat:35.1592, lng:129.1970, q:'Cheongsapo Daritdol Skywalk' },
    { s:'afternoon', k:'walk', name:'Haeundae Green Railway', note:'Ancienne voie ferrée côtière.', lat:35.1600, lng:129.1900, q:'Haeundae Blueline Park Green Railway' },
    { s:'afternoon', k:'transit', m:1, t:'17:00', name:'Station Sky Capsule Cheongsapo', note:'Arriver vers 17h00 pour la réservation de 17h30.', lat:35.1601, lng:129.1932, q:'Cheongsapo Sky Capsule Station' },

    { s:'evening', k:'view', m:1, b:'ok', t:'17:30', name:'Sky Capsule · Cheongsapo → Mipo', note:'Réservation confirmée. Environ 30 min.', lat:35.1610, lng:129.1720, q:'Mipo Sky Capsule Station' },
    { s:'evening', k:'walk', name:'Mipo → Haeundae Beach → L7', note:'Promenade le long de la plage en début de soirée.', lat:35.1595, lng:129.1650, q:'Haeundae Beach walk Busan' },
    { s:'evening', k:'food', m:1, name:'Haeundae Rib Barbecue Restaurant', note:'Galbi de Haeundae.', lat:35.1621, lng:129.1616, q:'Haeundae Rib Barbecue Restaurant' },
    { s:'evening', k:'food', o:1, name:'Kumsu Bokguk', note:'Si pas fait la veille.', lat:35.1628, lng:129.1608, q:'Kumsu Bokguk Haeundae' },
    { s:'evening', k:'bar', gen:1, name:'Gunam-ro bars', note:'Recommandation de zone : la rue principale de Haeundae, bars et izakaya.', lat:35.1610, lng:129.1610, q:'Gunam-ro Haeundae bars' }
  ]},

/* ── 30 SEP ───────────────────────────────────────────────────────────── */
{ date: '2026-09-30', city: 'Busan → Séoul', region: 'KR', label: 'Gamcheon · Jagalchi · KTX → Séoul',
  focus: 'Matinée dense à Busan, KTX en début d’après-midi, arrivée douce à Séoul.',
  hotel: 2,
  must: 'Gamcheon · Jagalchi · KTX 14h47',
  alert: 'Journée minutée, KTX 14h47 = échéance ferme. 08h00 départ L7 · 08h45 bagages en consigne · 09h15 Gamcheon · 10h45 Nampo / Jagalchi · 12h15 déjeuner optionnel · 13h30 bagages · 14h47 départ.',
  book: ['KTX046 14h47 — voiture 1, siège 7B, billet confirmé'],
  drop: ['Bonjeon Dwaeji Gukbap si la file est longue', 'BIFF Square', 'Nampo-dong — Gamcheon et Jagalchi d’abord'],
  tip: 'Taxis entre les étapes plutôt que le métro, sinon vous passerez la matinée à regarder l’heure. Consigne à Busan Station dès 08h45.',
  tip: 'Taxis entre les étapes plutôt que le métro. Le déjeuner est la seule variable d’ajustement : dès qu’il met en risque les bagages de 13h30, on l’abandonne sans hésiter et on rejoint la gare.',
  stops: [
    { s:'morning', k:'hotel', m:1, t:'08:00', name:'Check-out L7 Haeundae', note:'Départ ferme à 08h00 : toute la matinée en dépend.', lat:35.1607, lng:129.1613, q:'L7 Haeundae by LOTTE' },
    { s:'morning', k:'transit', m:1, t:'08:45', name:'Bagages en consigne · Busan Station', note:'08h45–09h00. Casiers ou consigne de la gare, puis taxi direct vers Gamcheon.', lat:35.1150, lng:129.0420, q:'Busan Station' },
    { s:'morning', k:'sight', m:1, t:'09:15', a:'gamcheon', name:'Gamcheon Culture Village', note:'Taxi depuis Busan Station, environ 20 min. Compter 1h15 sur place.', lat:35.0975, lng:129.0106, q:'Gamcheon Culture Village' },
    { s:'morning', k:'walk', t:'10:45', a:'nampo', name:'Nampo-dong · BIFF Square', note:'Taxi depuis Gamcheon. Stands de street food de BIFF Square, en passant.', lat:35.0982, lng:129.0281, q:'BIFF Square Nampo-dong Busan' },
    { s:'morning', k:'market', m:1, a:'jagalchi', name:'Jagalchi Market', note:'Le grand marché aux poissons de Busan, cinq minutes à pied de BIFF Square.', lat:35.0966, lng:129.0305, q:'Jagalchi Market Busan' },

    { s:'lunch', k:'food', t:'12:15', o:1, name:'Bonjeon Dwaeji Gukbap', note:'Optionnel — uniquement si l’horaire et la file le permettent. Soupe porc-riz typique de Busan, taxi depuis Jagalchi. À la moindre incertitude, on saute le déjeuner et on file à la gare : le train prime.', lat:35.1140, lng:129.0410, q:'Bonjeon Dwaeji Gukbap Busan' },
    { s:'lunch', k:'transit', m:1, t:'13:30', dl:1, name:'Récupérer les bagages · Busan Station', note:'13h30, échéance ferme. Une heure de marge avant le départ.', lat:35.1150, lng:129.0420, q:'Busan Station' },

    { s:'afternoon', k:'transit', m:1, hard:1, b:'ok', t:'14:47', dl:1, name:'KTX046 · Busan → Seoul Station', note:'Départ 14h47, arrivée 17h28. Durée 2h41. Voiture 1, siège 7B (dos à la marche). Economy / Adult, KRW 53 500. Ticket 80022-0903-10020-03.', lat:35.1150, lng:129.0420, q:'Busan Station KTX' },
    { s:'afternoon', k:'hotel', t:'17:28', name:'Seoul Station → Nine Brick Hotel Hongdae', note:'Transfert puis check-in.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },

    { s:'evening', k:'food', gen:1, name:'Dîner tranquille · Hongdae', note:'Sans programme lourd.', lat:37.5560, lng:126.9240, q:'Hongdae restaurants Seoul' },
    { s:'evening', k:'walk', a:'hongdae', name:'Première balade Hongdae / Yeonnam', note:'Prendre la température du quartier.', lat:37.5620, lng:126.9250, q:'Yeonnam-dong Seoul' }
  ]},

/* ── 1 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-01', city: 'Séoul', region: 'KR', label: 'Yeonnam · Seochon · Bukchon · Gyeongbokgung',
  focus: 'Commencer doucement autour de l’hôtel et du rendez-vous skincare, puis le vieux Séoul, et une soirée sans contrainte à Ikseon et Euljiro.',
  hotel: 2,
  must: 'Seochon · Bukchon avant 17h00 · Ikseon-dong',
  alert: 'Bukchon Red Zone : l’accès touristique aux ruelles résidentielles réglementées, autour de Bukchon-ro 11-gil, n’est autorisé que de 10h00 à 17h00. Quitter la zone avant 17h00. Samcheong-dong, en dehors des ruelles restreintes, reste accessible ensuite.',
  drop: ['Object', 'Cheonggyecheon', 'Café à Samcheong-dong'],
  tip: 'Colonne vertébrale : Forena → Yeonnam → déjeuner → Seochon → Bukchon / Samcheong → Ikseon-dong → Euljiro. Taxi Yeonnam → Seochon, environ 20 min ; Bukchon → Ikseon-dong à pied, quinze minutes. La soirée est volontairement libre.',
  label: 'Yeonnam · Seochon · Bukchon · Ikseon · Euljiro',
  stops: [
    { s:'morning', k:'sight', m:1, t:'10:00', name:'Forena Clinic Hongdae', note:'7th Floor, H-CUBE, 140 Yanghwa-ro. Point de départ fixe de la journée.', lat:37.5555, lng:126.9236, q:'Forena Clinic Hongdae 140 Yanghwa-ro' },
    { s:'morning', k:'cafe', name:'Centralsite Coffee Roasters Yeonnam', note:'Dix minutes à pied depuis la clinique.', lat:37.5630, lng:126.9245, q:'Centralsite Coffee Roasters Yeonnam' },
    { s:'morning', k:'nature', a:'yeonnam', name:'Gyeongui Line Forest Park', note:'La coulée verte de Yeonnam, sur l’ancienne voie ferrée.', lat:37.5610, lng:126.9255, q:'Gyeongui Line Forest Park Yeonnam' },
    { s:'morning', k:'shop', o:1, name:'Object', note:'Papeterie, illustration et objets de designers coréens.', lat:37.5545, lng:126.9245, q:'Object Sangsang Hongdae Seoul' },

    { s:'lunch', k:'food', gen:1, t:'12:30', name:'Déjeuner · Yeonnam', note:'À choisir sur place autour de la coulée verte, puis taxi vers Seochon, environ 20 min.', lat:37.5615, lng:126.9250, q:'Yeonnam-dong restaurants Seoul' },

    { s:'afternoon', k:'walk', m:1, a:'seochon', t:'14:00', name:'Seochon', note:'Ruelles et petites boutiques à l’ouest du palais.', lat:37.5790, lng:126.9705, q:'Seochon Village Seoul' },
    { s:'afternoon', k:'market', name:'Tongin Market', note:'Marché couvert de Seochon, connu pour son système de jetons de laiton : on achète des jetons à l’entrée et on compose son plateau de stand en stand.', lat:37.5806, lng:126.9700, q:'Tongin Market Seoul' },
    { s:'afternoon', k:'sight', m:1, dl:1, a:'bukchon', t:'15:15', name:'Bukchon Hanok Village & Samcheong-dong', note:'Quartier habité : rester discret dans les ruelles, et en sortir avant 17h00. Puis Samcheong-dong, la rue qui borde le flanc est, pour les galeries et les cafés.', lat:37.5826, lng:126.9850, q:'Bukchon Hanok Village' },
    { s:'afternoon', k:'cafe', o:1, gen:1, name:'Café · Samcheong-dong', note:'Hors des ruelles résidentielles réglementées, Samcheong-dong reste accessible après 17h00.', lat:37.5840, lng:126.9815, q:'Samcheong-dong cafe Seoul' },

    { s:'evening', k:'walk', m:1, a:'ikseon', t:'17:30', name:'Ikseon-dong', note:'Hanok des années 1920 reconvertis en cafés et bars, à quinze minutes à pied de Bukchon.', lat:37.5740, lng:126.9895, q:'Ikseon-dong Seoul' },
    { s:'evening', k:'walk', o:1, name:'Cheonggyecheon', note:'La descente à pied entre Ikseon-dong et Euljiro longe le ruisseau.', lat:37.5690, lng:126.9840, q:'Cheonggyecheon Stream Seoul' },
    { s:'evening', k:'cafe', o:1, a:'euljiro', name:'Coffee Hanyakbang', note:'Café rétro caché dans une ruelle d’Euljiro. Ouvert jusqu’à 22h au rez-de-chaussée — à faire s’il est encore ouvert en arrivant.', lat:37.5673, lng:126.9910, q:'Coffee Hanyakbang Euljiro' },
    { s:'evening', k:'food', gen:1, name:'Dîner à Euljiro', note:'À choisir sur place : grillades, nouilles ou pojangmacha dans les ruelles autour de Euljiro 3-ga.', lat:37.5665, lng:126.9915, q:'Euljiro Seoul restaurants' },
    { s:'evening', k:'bar', gen:1, name:'Bars d’Euljiro', note:'Presque aucune enseigne : chercher une cage d’escalier éclairée. Soirée sans programme imposé.', lat:37.5665, lng:126.9920, q:'Euljiro Seoul bars' }
  ]},

/* ── 2 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-02', city: 'Séoul', region: 'KR', label: 'Seongsu · Dosan · Apgujeong · Cheongdam',
  focus: 'Le grand palais du Joseon à l’ouverture, puis le Séoul contemporain : anciens ateliers de Seongsu, mode coréenne, architecture retail et cocktails au sud du fleuve.',
  hotel: 2,
  must: 'Gyeongbokgung à l’ouverture · Seongsu · Haus Nowhere Dosan',
  book: ['Gebangsikdang Seongsu — réservation recommandée, 11h30–15h'],
  drop: ['Seoul Forest', 'Point of View', 'Apgujeong Rodeo'],
  tip: 'Gyeongbokgung dès 09h00, puis taxi vers Seongsu (~25 min) pour arriver vers 11h00, quand MUSINSA EMPTY ouvre. Taxi Seongsu → Dosan ensuite, environ 25 min.',
  label: 'Gyeongbokgung · Seongsu · Dosan · Apgujeong · Cheongdam',
  stops: [
    { s:'morning', k:'sight', m:1, a:'gyeongbokgung', t:'09:00', name:'Gyeongbokgung Palace', note:'Palais principal du Joseon, fondé en 1395. Visite de jour, sans billet nocturne à réserver : 09h00–10h30, compter 1h15 à 1h30 sur place. Relève de la garde à Gwanghwamun. Puis taxi vers Seongsu, environ 25 min.', lat:37.5796, lng:126.9770, q:'Gyeongbokgung Palace' },
    { s:'morning', k:'nature', o:1, t:'11:00', name:'Seoul Forest', note:'Optionnel, le premier à sauter si le palais a pris plus de temps que prévu.', lat:37.5444, lng:127.0374, q:'Seoul Forest Park' },
    { s:'morning', k:'walk', m:1, a:'seongsu', name:'Seongsu-dong', note:'Anciens ateliers de chaussures en brique rouge, convertis bâtiment par bâtiment. À parcourir à pied.', lat:37.5445, lng:127.0557, q:'Seongsu-dong Seoul' },
    { s:'morning', k:'cafe', name:'LowKey Seongsu', note:'Specialty coffee.', lat:37.5430, lng:127.0560, q:'LowKey Coffee Seongsu' },
    { s:'morning', k:'shop', m:1, name:'LCDC Seoul', note:'Complexe retail et design.', lat:37.5410, lng:127.0570, q:'LCDC Seoul Seongsu' },
    { s:'morning', k:'shop', name:'MUSINSA EMPTY SEONGSU', note:'Ouvre à 11h.', lat:37.5448, lng:127.0553, q:'MUSINSA EMPTY Seongsu' },
    { s:'morning', k:'shop', name:'Point of View', note:'Papeterie et objets d’écriture.', lat:37.5433, lng:127.0568, q:'Point of View Seongsu' },

    { s:'lunch', k:'food', m:1, b:'todo', t:'12:30', name:'Gebangsikdang Seongsu', note:'Ganjang-gejang, crabe mariné à la sauce soja, et autres plats coréens. Service 11h30–15h avant la pause, réservation recommandée.', lat:37.5420, lng:127.0530, q:'Gebangsikdang Seongsu' },

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
  must: 'Leeum 13h30–15h30 · Namsan pour 17h15',
  alert: 'National Foundation Day (개천절) — jour férié. Séoul sera plus fréquenté, Namsan en particulier.',
  book: ['Leeum Museum — à réserver le 19 septembre, la fenêtre ouvre 14 jours avant'],
  drop: ['Itaewon', 'Cakeshop'],
  tip: 'Jour férié : quitter Hannam vers 16h15 pour être en haut de Namsan à 17h15–17h30. Le sentier depuis Hannam ou Itaewon évite la file du téléphérique.',
  tip: 'Jour férié. Leeum 13h30–15h30, départ de Hannam vers 16h15, sommet de Namsan vers 17h15. Le sentier depuis Hannam ou Itaewon évite la file du téléphérique.',
  stops: [
    { s:'morning', k:'walk', m:1, a:'hannam', name:'Hannam-dong', note:'Petites rues, boutiques indépendantes, galeries et cafés.', lat:37.5340, lng:127.0000, q:'Hannam-dong Seoul' },

    { s:'lunch', k:'food', name:'Tadak Tadak Seotbab Room', note:'Petits plats coréens et riz.', lat:37.5345, lng:127.0005, q:'Tadak Tadak Seotbab Hannam' },

    { s:'afternoon', k:'museum', m:1, b:'todo', t:'13:30', name:'Leeum Museum of Art', note:'Prévoir 13h30–15h30. Ouvert le samedi 10h–18h, billetterie jusqu’à 17h30. À réserver le 19 septembre : la fenêtre de réservation ouvre 14 jours avant.', lat:37.5384, lng:126.9990, q:'Leeum Museum of Art Seoul' },
    { s:'afternoon', k:'walk', a:'itaewon', name:'Itaewon', note:'En redescendant du musée.', lat:37.5345, lng:126.9945, q:'Itaewon Seoul' },
    { s:'afternoon', k:'view', m:1, a:'namsan', t:'17:15', name:'Namsan · N Seoul Tower', note:'Départ de Hannam vers 16h15, en haut vers 17h15 pour le coucher du soleil. Jour férié : téléphérique et sentiers chargés, le sentier depuis Hannam ou Itaewon évite la file.', lat:37.5512, lng:126.9882, q:'N Seoul Tower' },

    { s:'evening', k:'food', m:1, name:'Namyeongdon', note:'Korean BBQ.', lat:37.5405, lng:126.9721, q:'Namyeongdon Seoul BBQ' },
    { s:'evening', k:'bar', name:'Southside Parlor', note:'Cocktails, ambiance détendue. Ouvert tard le samedi.', lat:37.5340, lng:126.9930, q:'Southside Parlor Seoul' },
    { s:'evening', k:'bar', o:1, name:'Cakeshop', note:'Club électronique si vous voulez continuer.', lat:37.5342, lng:126.9935, q:'Cakeshop Seoul' }
  ]},

/* ── 4 OCT ────────────────────────────────────────────────────────────── */
{ date: '2026-10-04', city: 'Séoul → vol', region: 'KR', label: 'Mangwon · Yeonnam · départ',
  focus: 'Dernière demi-journée simple et locale, sans partir à l’autre bout de Séoul.',
  hotel: 2,
  must: 'Mangwon Market · départ 15h30',
  alert: 'Départ ferme à 15h30 : quitter Nine Brick et rejoindre Hongik University Station, puis prochain AREX All Stop vers Incheon Terminal 1. Aucun train n’est réservé.',
  drop: ['Taecho BBQ', 'Boutiques de Hongdae'],
  tip: 'C’est l’AREX All Stop (train tous arrêts) qui dessert Hongik University — l’Express ne part que de Seoul Station. Ne visez pas l’Express depuis Hongdae.',
  tip: 'C’est l’AREX All Stop, train tous arrêts, qui dessert Hongik University ; l’Express ne part que de Seoul Station. Environ 55 min jusqu’au Terminal 1, pour un vol à 20h05.',
  stops: [
    { s:'morning', k:'market', m:1, t:'10:00', a:'mangwon', name:'Mangwon Market', note:'Annoncé tous les jours environ 10h–21h, même si les horaires varient selon les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market Seoul' },
    { s:'morning', k:'walk', a:'mangwon', name:'Mangwon-dong', note:'Puis retour vers Hongdae / Yeonnam.', lat:37.5555, lng:126.9020, q:'Mangwon-dong Seoul' },
    { s:'morning', k:'cafe', a:'yeonnam', name:'Coffee Nap Roasters Yeonnam', note:'Ouvert dès 8h le dimanche et jusqu’à 18h.', lat:37.5625, lng:126.9250, q:'Coffee Nap Roasters Yeonnam' },
    { s:'morning', k:'shop', a:'hongdae', name:'Musinsa · boutiques de Hongdae', note:'Dernières emplettes.', lat:37.5550, lng:126.9240, q:'Musinsa Standard Hongdae' },

    { s:'lunch', k:'food', gen:1, name:'Mangwon Market food crawl', note:'Déjeuner sur le pouce entre les stands.', lat:37.5560, lng:126.9030, q:'Mangwon Market food' },
    { s:'lunch', k:'food', o:1, name:'Taecho BBQ', note:'Alternative pour un vrai dernier Korean BBQ.', lat:37.5565, lng:126.9040, q:'Taecho BBQ Mangwon' },

    { s:'afternoon', k:'walk', name:'Dernière balade · récupération des bagages', note:'Début d’après-midi, à boucler pour 15h15.', lat:37.5553, lng:126.9233, q:'Nine Brick Hotel Hongdae' },
    { s:'afternoon', k:'transit', m:1, hard:1, t:'15:30', dl:1, name:'Quitter Nine Brick → Hongik University Station', note:'Heure de départ ferme : quitter l’hôtel à 15h30 et rejoindre la station Hongik University. Prendre ensuite le prochain AREX All Stop — c’est le seul AREX qui dessert cette station, l’Express ne part que de Seoul Station. Environ 55 min jusqu’au Terminal 1. Aucun train n’est réservé : c’est une heure de départ, pas un horaire de train.', lat:37.5570, lng:126.9245, q:'Hongik University Station AREX' },

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
