/* Trip data — Hong Kong · Shenzhen · Busan · Seoul — 21 Sep → 5 Oct 2026
   Source content kept verbatim from the itinerary brief (FR).
   s(): stop factory.  k = kind, m = must-do, o = optional/alternative.       */

/* Contexte de quartier — pré-généré, disponible hors ligne.
   one : la phrase affichée sous le nom dans le déroulé
   h/t/n : Histoire · Aujourd’hui · À remarquer   (170–240 mots au total) */
const AREAS = {
poho: { name:'PoHo',
  one:'« PoHo » est un surnom récent pour quelques ruelles autour de Po Hing Fong, sur les pentes de Tai Ping Shan.',
  h:'Le nom PoHo, contraction de Po Hing Fong, est un surnom récent apparu dans les années 2010 avec les premières galeries et les premiers cafés ; il ne couvre que trois ou quatre rues. L’histoire qui compte ici est celle du quartier plus large, Tai Ping Shan. En 1894, la peste bubonique s’y déclare et tue environ 3 500 personnes dans l’année, l’essentiel dans ces îlots surpeuplés. Le Conseil législatif ordonne la démolition de 384 maisons ; le terrain dégagé devient Blake Garden, premier parc public de Hong Kong, du nom du gouverneur Henry Blake qui imposa de laisser l’espace ouvert pour des raisons sanitaires.',
  t:'La reconstruction imposée après 1894 a fixé une échelle basse et aérée, sans les tours qui ont pris Central. Les immeubles d’avant-guerre qui ont suivi offrent des étages peu chers et de petites surfaces en rez-de-chaussée : c’est ce qui a attiré ateliers, torréfacteurs, éditeurs et galeries plutôt que des enseignes de chaîne, sur un périmètre très réduit.',
  n:'Les balcons d’avant-guerre en surplomb de Tai Ping Shan Street, les seuils de boutiques carrelés, les racines de banian qui tiennent les murs de soutènement, les escaliers de Pound Lane, et la façon dont chaque rue monte par paliers au lieu de suivre une pente régulière.' },

sheungwan: { name:'Sheung Wan',
  one:'Le premier grand quartier d’affaires chinois de la colonie, où les négoces traditionnels tiennent encore des rues entières.',
  h:'Des marchands chinois s’installent ici dès les années 1840, pendant que l’administration coloniale s’établit à Central : Sheung Wan devient le premier grand quartier d’affaires chinois de la colonie, avec ses guildes, ses maisons de commerce et ses associations de village. Hollywood Road, ouverte en 1844, est l’une des toutes premières voies tracées par les Britanniques et suivait alors le trait de côte. Le négoce du poisson séché, du ginseng, de l’ormeau et des herbes médicinales s’est lui organisé plus bas et plus à l’ouest, autour de Des Voeux Road West, Ko Shing Street et Wing Lok Street — et non sur Hollywood Road, qui est une rue haute.',
  t:'Cette répartition n’a pas bougé. En bas, les grossistes tiennent encore des rues entières, chacune sur un produit ; en haut, Hollywood Road et Upper Lascar Row gardent les antiquaires, les galeries et le temple Man Mo. Les étages, eux, sont passés aux bureaux et aux logements : le quartier travaille au niveau du sol et vit au-dessus.',
  n:'Les sacs ouverts de coquilles Saint-Jacques et d’ormeaux séchés sur les trottoirs de Des Voeux Road West, les enseignes peintes verticalement, les spirales d’encens suspendues au plafond de Man Mo, et les étals d’Upper Lascar Row, l’ancienne Cat Street.' },

soho: { name:'SoHo',
  one:'Les ruelles en pente au sud de Hollywood Road, littéralement créées comme quartier par un escalator.',
  h:'SoHo — South of Hollywood Road — n’existait pas comme quartier avant 1993. Cette année-là ouvre l’escalator Central–Mid-Levels : 800 mètres, seize escaliers mécaniques et trois tapis roulants réversibles, construits non comme une attraction mais pour désengorger les trajets entre le quartier d’affaires et les immeubles résidentiels de la colline. Le système descend de 6h00 à 10h00 pour les navetteurs du matin, puis remonte jusqu’à minuit. C’est aujourd’hui le plus long escalator extérieur couvert du monde.',
  t:'Le flux de piétons qu’il a créé a transformé des ruelles résidentielles pentues en une bande continue de restaurants et de bars. Faute de terrain plat, tout s’est empilé le long du parcours : les adresses se succèdent aux paliers, en enfilade verticale plutôt qu’en front de rue, et les loyers se règlent sur la distance à l’escalator.',
  n:'Le moment où l’escalator change de sens en fin de matinée, les terrasses calées exactement au niveau des paliers, la pente de Shelley Street que l’on ne mesure vraiment qu’en redescendant à pied, et les quelques échoppes de fruits secs et de tailleurs qui tenaient ces rues avant les bars.' },

saiyingpun: { name:'Sai Ying Pun',
  one:'Une pente résidentielle très dense, transformée en trois ans par l’arrivée du métro en 2014.',
  h:'Le nom renvoie au camp occidental installé par la garnison coloniale au début de la colonie. Le quartier s’est ensuite rempli d’immeubles de rapport et de petits commerces au service des docks et des entrepôts en contrebas, sur un damier de rues numérotées — First, Second, Third Street — tracées à flanc de colline, avec des escaliers là où la pente interdisait la voirie.',
  t:'Sai Ying Pun est resté longtemps à l’écart parce qu’il n’était desservi ni par le métro ni par une voie rapide. Le prolongement de l’Island Line a ouvert une station sous la colline en 2014, et la bascule a été rapide : cafés de spécialité, petits bars et restaurants d’auteur se sont installés en deux ou trois ans, au-dessus de quincailleries, d’herboristeries et de marchands de produits séchés qui n’ont pas bougé.',
  n:'Les volées d’escaliers de High Street et de Third Street, les ladder streets qui les relient, l’ancien asile de High Street dont il ne reste que la façade en granit, et l’alternance d’enseignes anciennes et récentes sur un même pâté.' },

kennedytown: { name:'Kennedy Town',
  one:'Le terminus du tramway et la limite ouest de l’île, longtemps occupé par ce que Central voulait éloigner.',
  h:'Nommé d’après le gouverneur Arthur Kennedy, le quartier a reçu au XIXe siècle les activités que la ville souhaitait tenir à distance : abattoirs, dépôts de charbon, entrepôts, incinérateur. Le tramway a été prolongé vers l’ouest pour les desservir, et le terminus s’est installé au bout de la ligne, là où la ville s’arrêtait. Les logements ouvriers et les praya successifs gagnés sur la mer ont complété l’ensemble.',
  t:'Ces activités ont fermé une à une, et le métro est arrivé en 2014. La promenade du front de mer, la vue dégagée vers l’ouest et des loyers encore modérés ont amené bars, cafés et petits restaurants sur deux ou trois rues, tandis que les grands ensembles juste derrière n’ont pratiquement pas changé : le contraste se joue d’un trottoir à l’autre.',
  n:'Les trams qui font demi-tour sur la boucle du terminus, le port qui s’ouvre vers les îles à l’ouest, les immeubles d’avant-guerre à balcons face aux tours neuves, et la promenade de Sai Wan, très fréquentée au coucher du soleil.' },

thepeak: { name:'Victoria Peak',
  one:'Une station d’altitude coloniale où la hauteur a longtemps été un statut inscrit dans la loi.',
  h:'Les Européens ont bâti ici des maisons d’été pour l’air plus frais, d’abord accessibles en chaise à porteurs, puis par le funiculaire ouvert en 1888. À partir de 1904, la Peak District Reservation Ordinance réserva la zone aux résidents non chinois, sauf autorisation du gouverneur en conseil ; reconduite par des textes successifs, la restriction raciale n’a été levée qu’après la Seconde Guerre mondiale, en 1946. Le tramway lui-même réservait certaines places aux hauts fonctionnaires aux heures de pointe.',
  t:'Le funiculaire construit pour ces maisons transporte aujourd’hui des visiteurs, et le terminus a été recouvert d’un centre commercial et d’une terrasse payante. Les terrains résidentiels au-dessus, eux, restent parmi les plus chers du monde, ce qui explique que l’essentiel du sommet soit privé et que la promenade publique se limite à deux routes de contour.',
  n:'Lugard Road suit la courbe de niveau : le chemin est plat, sans escalier, et la vue se dégage progressivement à mesure que la foule du terminus reste derrière. Les vieilles bornes coloniales et les murs de soutènement en granit jalonnent le parcours.' },

happyvalley: { name:'Happy Valley',
  one:'Un fond de vallée marécageux drainé en hippodrome dès 1845, devenu le rendez-vous du mercredi soir.',
  h:'Le premier établissement britannique installé dans ce fond de vallée a échoué à cause des fièvres, et le nom relève du vœu pieux. Le terrain plat a été drainé et affecté aux courses dès 1845, ce qui en fait l’un des plus anciens hippodromes d’Asie. Les pentes tout autour ont reçu les cimetières de la colonie — catholique, protestant, parsi, musulman, hindou — installés côte à côte et étagés au-dessus de la piste.',
  t:'Les réunions de milieu de semaine sont devenues une institution d’après-bureau plus qu’un rendez-vous sportif : sortie de travail, bière bon marché, petits paris et pelouse ouverte sous les projecteurs. Le produit des courses alimente par ailleurs le Jockey Club, l’un des premiers contributeurs caritatifs du territoire, ce qui explique la place particulière des courses dans la vie locale.',
  n:'Les cimetières étagés juste au-dessus de la piste, la proximité immédiate des tours d’habitation dont les balcons donnent sur la ligne droite, le tramway qui contourne l’hippodrome par une boucle dédiée, et l’écran géant qui éclaire tout le fond de vallée les soirs de course.' },

shamshuipo: { name:'Sham Shui Po',
  one:'Le district au revenu médian le plus bas de Hong Kong, et le plus inventif par ses commerces spécialisés.',
  h:'Les ateliers et le textile du Kowloon industriel se sont concentrés ici à partir des années 1950, quand l’afflux de réfugiés a fourni une main-d’œuvre nombreuse et bon marché. Les familles logeaient dans les immeubles au-dessus des boutiques, souvent en sous-location de pièces partagées. Le quartier a gardé de cette période une densité extrême, un parc de logements ancien et une réputation de dureté sociale qui ne s’est jamais démentie.',
  t:'La production est partie vers Shenzhen à partir des années 1980, mais les filières d’approvisionnement, elles, sont restées : une rue entière ne vend que du tissu, des boutons, des perles, des rubans ou des composants électroniques. Cette spécialisation par rue, héritée de l’industrie, est ce qui attire aujourd’hui les jeunes créateurs, qui trouvent ici en une heure ce qu’il faudrait commander ailleurs.',
  n:'L’électronique d’occasion posée à même le sol sur Apliu Street, les rouleaux de tissu de Ki Lung Street, les grossistes en perles de Yu Chau Street, et les studios de design installés en rez-de-chaussée sur Tai Nan Street, entre deux merceries.' },

mongkok: { name:'Mong Kok',
  one:'L’un des tissus urbains les plus denses jamais recensés, organisé en hauteur faute d’espace au sol.',
  h:'Village de champs et de ruisseaux jusqu’aux remblais des années 1920, Mong Kok s’est rempli d’immeubles de rapport, puis de tours parmi les plus denses de Kowloon. Le nom, aujourd’hui écrit avec les caractères de « coin prospère », vient d’une graphie antérieure signifiant à peu près « coin des herbes ». Le quartier a servi de zone de report pour toutes les vagues de population que le centre ne pouvait plus absorber.',
  t:'Le rez-de-chaussée est commerçant, le premier étage abrite salons, écoles du soir et salles de jeux, tout le reste est logement. Cette superposition explique le paysage : quand la vitrine ne suffit plus, l’enseigne avance au-dessus de la rue, et les commerces des étages se signalent par des panneaux verticaux plutôt que par une devanture.',
  n:'Les enseignes empilées jusqu’au quatrième étage, et des rues entièrement spécialisées : baskets sur Fa Yuen Street, poissons rouges sur Tung Choi Street, fleurs sur Flower Market Road, oiseaux au Yuen Po Street Bird Garden. Le marché de rue de Fa Yuen Street, lui, sert d’abord les habitants du quartier.' },

yaumatei: { name:'Yau Ma Tei',
  one:'Un ancien rivage de pêcheurs qui a gardé ses marchés de gros pendant que Kowloon montait autour.',
  h:'Les pêcheurs venaient calfater leurs coques sur cette grève : le nom renvoie à l’huile et au chanvre utilisés pour l’étanchéité. Un abri anti-typhon, un temple Tin Hau et les commerces de gros qui servaient la flotte se sont installés derrière, et le quartier s’est structuré autour d’eux bien avant que la ville n’arrive jusqu’ici. Le marché aux fruits, ouvert en 1913, occupe toujours ses hangars de brique et de béton d’avant-guerre.',
  t:'La pêche a disparu mais les fonctions de gros sont restées, décalées la nuit : le marché aux fruits travaille de 3h à 6h du matin, à quelques mètres d’immeubles d’habitation. La place du temple Tin Hau, elle, reste une vraie pièce de quartier — joueurs d’échecs, diseurs de bonne aventure, chanteurs d’opéra de rue — plutôt qu’un décor conservé.',
  n:'Le marché au jade sous le viaduc, les enseignes de prêteurs sur gages en forme de chauve-souris renversée tenant une pièce, les caisses empilées à hauteur d’homme avant l’aube, et le cinéma Broadway Cinematheque au milieu des tours.' },

jordan: { name:'Jordan',
  one:'Une bande de transition entre les vitrines de Tsim Sha Tsui et les marchés de Yau Ma Tei, meilleure tard.',
  h:'Jordan s’est construit au début du XXe siècle sur des terrains gagnés sur la mer, en immeubles de rapport et petits commerces destinés aux employés et aux ouvriers du port. Le marché de nuit de Temple Street s’est formé le long du temple Tin Hau, d’abord comme marché de colporteurs, puis comme rendez-vous nocturne avec ses diseurs de bonne aventure et ses chanteurs d’opéra cantonais.',
  t:'Les loyers n’ont jamais atteint ceux de Tsim Sha Tsui, trois rues plus au sud, et c’est ce décalage qui a tout conservé : cha chaan teng, marchands de nouilles, boutiques de desserts et échoppes de nuit sont restés en place pendant que le marché de nuit, lui, glissait vers le souvenir touristique. L’intérêt du quartier s’est déplacé du marché vers les rues qui l’entourent.',
  n:'L’enfilade de desserts, de wonton et de nouilles autour de Parkes Street et Ning Po Street, la plus animée vers minuit ; les échoppes de claypot rice qui sortent leurs réchauds sur le trottoir en soirée ; et les devantures d’avant-guerre encore visibles au-dessus des enseignes récentes.' },

taikoktsui: { name:'Tai Kok Tsui',
  one:'Une ancienne pointe industrielle de petites usines, en grande partie reconvertie, en partie encore en activité.',
  h:'Chantiers navals et industrie légère ont occupé cette pointe remblayée dès le début du XXe siècle. Des immeubles-usines ont été construits dans les années 1950 et 1960 pour loger des centaines de petits fabricants, souvent un par étage : c’était le modèle industriel hongkongais, fait d’ateliers minuscules et interdépendants plutôt que de grandes unités. Les logements ouvriers occupaient les rues juste derrière.',
  t:'La rénovation urbaine a remplacé beaucoup d’îlots par des tours résidentielles, mais des poches d’immeubles industriels subsistent et produisent encore quincaillerie, horloges, pièces métalliques et plastiques, souvent pour des acheteurs qui viennent à la porte. Le quartier vit donc sur deux registres qui s’ignorent : des halls d’immeubles neufs d’un côté, des monte-charges et des quais de chargement de l’autre.',
  n:'Les quais de chargement ouverts directement sur la rue, les enseignes peintes à la main des années 1970, les monte-charges dimensionnés pour une palette, les ateliers dont on entend la machine avant de voir la porte, et les cages d’escalier ouvertes qui donnent directement sur les plateaux de production.' },

taihang: { name:'Tai Hang',
  one:'Un ancien village hakka derrière Causeway Bay, dont le dragon de feu court chaque mi-automne depuis 1880.',
  h:'En 1880, le village hakka, alors sur le rivage, est frappé par une épidémie après le passage d’un typhon. Suivant le conseil d’un devin, les habitants fabriquent un dragon de paille hérissé de bâtons d’encens et le font danser trois nuits durant, les 14e, 15e et 16e jours du huitième mois lunaire, au milieu des pétards. L’épidémie cesse, et le rite est reconduit chaque année depuis. Il a été inscrit en 2011 sur la troisième liste nationale du patrimoine culturel immatériel de Chine.',
  t:'Le village est devenu une grille de rues étroites cernée de tours. D’anciens garages de réparation automobile en rez-de-chaussée sont devenus cafés et petits restaurants, mais le plan n’a pas changé : les ruelles restent assez serrées pour que le dragon, long d’une soixantaine de mètres et porté par des dizaines de personnes, les remplisse d’un mur à l’autre.',
  n:'Les quelque douze mille bâtons d’encens allumés plantés dans le corps du dragon, la ligne de tambours qui le précède, la fumée qui reste bloquée entre les façades, et la foule maintenue en file simple sur le trottoir.' },

victoriapark: { name:'Victoria Park',
  one:'Le plus grand parc de l’île, aménagé sur le remblai de l’ancien abri anti-typhon de Causeway Bay.',
  h:'Au début des années 1950, le gouvernement décide de combler la baie de Causeway Bay et de reporter l’abri anti-typhon plus au nord. Le parc ouvre en octobre 1957 sur le terrain ainsi gagné. Il prend le nom de la reine Victoria à cause de la statue de bronze installée à son entrée : sculptée par Mario Raggi pour le jubilé d’or de 1887 et inaugurée en 1896 sur l’actuelle Statue Square, elle avait été emportée au Japon pendant l’occupation pour être fondue, puis récupérée après la guerre, restaurée et transférée ici.',
  t:'C’est depuis lors le principal terrain public de l’île : courts de tennis, terrains de football et piscine occupés du matin au soir, et un usage collectif qui déborde largement le sport. Deux grands rendez-vous annuels s’y installent — la foire aux fleurs du Nouvel An lunaire et les installations de lanternes de la mi-automne — et le parc sert plus généralement d’espace de rassemblement pour la ville.',
  n:'La statue à l’entrée, dont la main et la couronne portent encore les traces de la restauration d’après-guerre ; les terrains pris d’assaut dès l’aube par les joueurs et les pratiquants de tai-chi ; et l’échelle du parc face au mur de tours de Causeway Bay.' },

saikung: { name:'Sai Kung',
  one:'Un port de pêche devenu la porte d’entrée du plus vaste littoral protégé de Hong Kong.',
  h:'Communautés vivant sur des bateaux et villages hakka ont exploité cette côte pendant des siècles, avec une économie de pêche, de riz et de sel, et des liaisons qui se faisaient par la mer plutôt que par la terre. Les grands chantiers de réservoirs des années 1970, notamment High Island, ont amené les premières vraies routes ; dans la foulée, la création des parcs de campagne a gelé l’essentiel de la péninsule.',
  t:'Le front de mer vend toujours le poisson au sortir des bateaux, et les restaurants de la promenade fonctionnent au vivier. Mais c’est le classement en parc de campagne qui explique le reste : au-delà du bourg, il n’y a ni lotissement ni route côtière, et c’est la seule raison pour laquelle les plages de Tai Long Wan sont restées vides à une heure du centre-ville.',
  n:'Les sampans qui hèlent pour les îles voisines depuis le quai, les viviers alignés devant les restaurants, les villages hakka abandonnés que le sentier traverse, et l’absence totale de bâti une fois passé le pavillon de Sai Wan.' },

westkowloon: { name:'West Kowloon',
  one:'Quarante hectares gagnés sur le port, réservés à la culture puis débattus pendant vingt ans.',
  h:'Le site a été remblayé dans les années 1990, en partie avec les déblais des grands chantiers de l’aéroport et de sa liaison ferroviaire. Le gouvernement a ensuite proposé de confier l’ensemble à un promoteur unique sous une immense verrière, projet abandonné après une longue controverse publique. Il a fallu près de vingt ans, plusieurs concours et un changement complet de méthode pour que le quartier culturel sorte de terre.',
  t:'Il a ouvert par morceaux — le Xiqu Centre en 2019, M+ en 2021, le Hong Kong Palace Museum en 2022 — sur un terrain volontairement laissé très ouvert. C’est ce qui explique la sensation dominante : un parc au bord de l’eau dans lequel on a posé quelques bâtiments, plutôt qu’un quartier constitué avec ses rues et ses rez-de-chaussée.',
  n:'La façade est de M+, qui sert d’écran géant à la nuit tombée ; la promenade, d’où la vue sur la skyline de l’île est la moins encombrée de la ville ; et les pelouses, où l’on vient surtout pique-niquer et regarder le port.' },

tst: { name:'Tsim Sha Tsui',
  one:'La pointe de Kowloon, où le ferry, le train vers l’Europe et la vue sur le port arrivaient ensemble.',
  h:'Le terminus du Kowloon–Canton Railway s’est tenu ici de 1916 à 1978 : on arrivait d’Europe par bateau et on repartait par le train, en théorie jusqu’à Londres via la Chine et la Sibérie. La gare a été démolie malgré une campagne de sauvegarde, et seule la tour de l’horloge de 1915 subsiste, aujourd’hui monument classé et seul témoin de l’ensemble.',
  t:'Le terrain libéré est devenu le Cultural Centre et les musées, dont l’architecture aveugle sur le port reste l’une des décisions les plus discutées de la ville. Les rues derrière se sont remplies d’hôtels, de tailleurs, de bijoutiers et de boutiques vivant du passage, avec une densité d’enseignes qui tient à ce flux plus qu’à la population résidente.',
  n:'La tour de l’horloge seule sur le front de mer, la profondeur de néons de Nathan Road, les immeubles-bazars comme Chungking Mansions, les tailleurs qui hèlent encore le passant sur le trottoir, la passerelle piétonne qui contourne le carrefour de Nathan Road, et le Star Ferry, qui assure la même traversée depuis 1888 pour le prix d’un café.' },

futian: { name:'Futian',
  one:'Le centre civique planifié de Shenzhen, dessiné sur un axe avant même d’être construit.',
  h:'Il n’y avait ici que des rizières et des villages lorsque la zone économique spéciale est créée en 1980. Le district a été planifié dans les années 1990 comme nouveau centre administratif, autour d’un axe nord-sud reliant la colline de Lianhua à la baie de Shenzhen, avec le Civic Center et son immense toiture au milieu. C’est un centre-ville conçu d’un seul tenant, avant d’être habité.',
  t:'Administration, sièges bancaires et centre d’exposition ont été posés le long de cet axe, ce qui explique la largeur des avenues et le fait que chaque îlot se lise comme un objet isolé plutôt que comme une rangée d’immeubles. La vie de rue s’en trouve reportée dans les galeries commerciales et les passages souterrains, et le quartier se parcourt plus volontiers en métro qu’à pied.',
  n:'La perspective de l’axe depuis le sommet de Lianhuashan, avec la statue de Deng Xiaoping au premier plan ; la toiture ondulante du Civic Center ; et le fait que presque rien ici n’est plus vieux que les gens qui y marchent.' },

nanshan: { name:'Nanshan',
  one:'Le district technologique de Shenzhen, où les campus et les parcs ont été planifiés ensemble.',
  h:'La zone industrielle de Shekou ouvre ici en 1979, à l’initiative du groupe China Merchants : c’est la première pièce concrète de l’expérience des réformes chinoises, un an avant la création de la zone économique spéciale elle-même. Le district a donc commencé par l’industrie d’exportation et les conteneurs, avant de se réorienter vers l’électronique puis vers le logiciel.',
  t:'L’assemblage matériel a laissé place aux sièges sociaux et à la recherche — Tencent, DJI, ZTE, plusieurs universités — et le district a été reconstruit autour d’eux, avec des parcs en bord de baie plutôt que de nouvelles usines. Cette planification simultanée des bureaux et des espaces publics explique une densité très différente de celle de Luohu ou de Futian.',
  n:'Les pelouses de Talent Park qui se couvrent de badges d’entreprise à l’heure du déjeuner, les drones de livraison et les robotaxis traités comme une infrastructure ordinaire plutôt que comme une curiosité, la promenade de la baie de Shenzhen, d’où l’on voit les collines de Hong Kong juste en face, et les vélos et trottinettes en libre-service alignés par centaines devant chaque sortie de métro.' },

octloft: { name:'OCT-LOFT',
  one:'Un ancien complexe d’usines d’électronique des débuts de la zone économique spéciale, conservé et reconverti.',
  h:'Le site appartient au groupe Overseas Chinese Town, qui y a bâti des halls d’usine électronique parmi les tout premiers bâtiments industriels de la zone économique spéciale. L’activité s’en est retirée dans les années 1990 et les bâtiments sont restés vides. La reconversion a été confiée à l’agence shenzhennoise Urbanus : les travaux commencent en août 2004, le centre d’art contemporain OCAT ouvre début 2005 et l’ensemble est inauguré en 2006.',
  t:'Plutôt que de raser, le propriétaire a converti bâtiment par bâtiment : ossatures béton, quais de chargement, escaliers extérieurs et arbres des cours intérieures sont d’origine, et les circulations ont été reliées par des passages et des allées plantées. Le résultat est une échelle basse et horizontale, à pied, qui ne ressemble à rien d’autre dans une ville bâtie en tours.',
  n:'Les numéros d’usine encore peints sur les murs, les librairies et studios installés derrière des rideaux métalliques, les cours plantées entre les halls, les passerelles ajoutées entre deux bâtiments, et la brique et le béton laissés bruts partout où c’était possible.' },

huaqiangbei: { name:'Huaqiangbei',
  one:'Le plus grand marché d’électronique du monde, organisé en tours de comptoirs individuels.',
  h:'Des usines d’électronique bordaient cette rue dans les années 1980, à l’époque où Shenzhen assemblait pour l’export. Leurs surplus de composants se vendaient au rez-de-chaussée, puis dans des halls dédiés ; le négoce a fini par dépasser largement la production qui l’alimentait, et les usines ont cédé la place aux immeubles de comptoirs. SEG Plaza, achevée à la fin des années 1990, est devenue le symbole de ce basculement.',
  t:'Des milliers d’étals indépendants occupent aujourd’hui les tours étage par étage, chacun spécialisé sur une catégorie très étroite. C’est une chaîne d’approvisionnement entière compressée en quelques îlots : on y trouve le composant, l’outil, la réparation et le petit atelier d’assemblage dans le même immeuble, ce qui explique pourquoi tant de prototypes électroniques se fabriquent encore ici plutôt qu’ailleurs.',
  n:'Des plateaux entiers consacrés à un seul composant, des établis de réparation qui travaillent à ciel ouvert, les diables qui déplacent les marchandises d’une tour à l’autre, les vendeuses qui testent les puces au multimètre devant le client, et les rouleaux de câbles empilés jusqu’au plafond des allées.' },

luohu: { name:'Luohu',
  one:'Le poste-frontière historique, et la partie de Shenzhen qui existait avant Shenzhen.',
  h:'Le bourg installé au pont ferroviaire vers Hong Kong était le seul établissement d’une certaine taille de la région lorsque la zone économique spéciale est créée en 1980. Tout est parti de là : le poste-frontière, la gare, les premiers hôtels, les premières tours de bureaux. Le Shenzhen que voyaient les visiteurs des années 1980 et 1990 était essentiellement Luohu.',
  t:'Le district a grandi le premier et le plus vite, si bien qu’il est aujourd’hui plus dense, plus serré et visiblement plus ancien que Futian ou Nanshan. Il fonctionne encore largement comme un point de passage et un quartier de marchés, avec un commerce tourné vers les visiteurs venus de Hong Kong, et il porte l’essentiel du bâti de la première génération.',
  n:'Le pont ferroviaire et piéton vers Hong Kong, les tours des années 1980 et 1990 qui font déjà figure d’ancien dans une ville de cet âge, les centres commerciaux collés au poste-frontière, organisés pour un aller-retour dans la journée, et les files de valises à roulettes du matin.' },

haeundae: { name:'Haeundae',
  one:'La plage la plus connue de Corée, adossée à un front de tours élevé presque entièrement ce siècle.',
  h:'Haeundae doit son nom au lettré Choe Chi-won, qui aurait gravé son nom de plume sur un rocher de Dongbaekseom au IXe siècle. Station thermale développée sous l’occupation japonaise pour ses sources chaudes, la baie est restée jusqu’aux années 1990 une station balnéaire saisonnière, animée deux mois par an et vide le reste du temps. Le tournant vient de la promotion immobilière des années 2000, qui a pris tout le front de mer et l’a reconstruit en tours.',
  t:'Marine City et les tours derrière ont remplacé un bâti bas en une vingtaine d’années : le sable est devenu une bande étroite au pied d’une skyline, et c’est précisément ce contraste qui fait le lieu. Le quartier fonctionne aussi comme un second centre-ville, avec ses bureaux et son centre de congrès, ce qui le rend actif hors saison.',
  n:'Les ruelles du marché traditionnel quelques pâtés en arrière, inchangées, où l’on mange réellement ; la pointe boisée de Dongbaekseom qui ferme l’ouest et se contourne à pied en vingt minutes ; et les tours de Marine City qui se reflètent dans l’eau à la nuit tombée.' },

gwangalli: { name:'Gwangalli',
  one:'Une plage urbaine de Suyeong-gu entièrement tournée vers le pont de Gwangan et son éclairage nocturne.',
  h:'Gwangalli était une plage de quartier sans réputation particulière jusqu’à l’ouverture du pont de Gwangan, chantier des années 1990 mis en service en 2003. Ce pont suspendu de plus de sept kilomètres a donné à la baie sa silhouette et a inversé l’orientation du quartier : le front de mer, qui regardait le large, s’est reconstruit face à l’ouvrage. La plage a été réaménagée dans la foulée.',
  t:'Cafés, bars et restaurants alignés sur le front regardent donc le pont plutôt que la mer, et le quartier vit surtout le soir. Le pont suit une séquence d’éclairage nocturne, et la ville programme régulièrement des spectacles de drones au-dessus de la baie, ce qui concentre la foule sur le sable à heure fixe. Les rues arrière, elles, restent résidentielles et basses.',
  n:'Tout le monde assis face à la même direction sur le sable ; un bâti arrière volontairement bas qui préserve la vue ; une eau plus calme qu’à Haeundae parce que la baie est abritée ; et les tables installées à même la plage en soirée.' },

cheongsapo: { name:'Cheongsapo',
  one:'Un port de pêche de Haeundae-gu resté petit derrière l’ancienne voie ferrée du littoral.',
  h:'La ligne Donghae Nambu, ouverte en 1935, longeait cette côte et passait entre le village et la mer. Elle a fixé la taille de Cheongsapo pendant quatre-vingts ans : pas de route côtière, pas de front de mer constructible, un port et quelques rangées de maisons. La passe est marquée par deux phares, l’un rouge et l’autre blanc, qui signalent les côtés bâbord et tribord du chenal.',
  t:'La ligne a fermé en 2013 et son emprise a rouvert en octobre 2020 sous la forme du Haeundae Blueline Park : promenade littorale, train de plage et Sky Capsule circulant au-dessus de l’ancienne voie. Le village reçoit donc beaucoup de visiteurs sans que ses ruelles aient été élargies, et l’activité de pêche continue en parallèle, sur le même quai.',
  n:'Les deux phares qui se font face de part et d’autre de la passe, les tentes à coquillages installées sur le port, l’observatoire vitré de Daritdol un peu plus loin, et l’ancienne plate-forme ferroviaire qui traverse le village de part en part. Le contraste entre les capsules qui passent en hauteur et les casiers à poulpe empilés en dessous résume assez bien le lieu.' },

songjeong: { name:'Songjeong',
  one:'La plage de surf de Busan, à l’extrémité est de Haeundae-gu, restée basse et sans tours.',
  h:'Songjeong est une plage de pêche bordée de pins, au bout de l’ancienne ligne côtière Donghae Nambu fermée en 2013. Le bourg s’est développé autour de son port et de sa gare, à l’écart du développement balnéaire qui s’est concentré plus à l’ouest, sur Haeundae. La voie ferrée passait entre la ville et le sable, ce qui a longtemps limité la constructibilité du front de mer.',
  t:'Un fond peu profond et une houle régulière et modérée en ont fait la principale plage-école de surf du pays, ce qui donne au quartier une économie très différente de celle des autres plages de Busan : locations, écoles, réparations, boutiques d’équipement. Le bâti derrière est resté bas, et la fréquentation s’étale sur l’année plutôt que sur deux mois d’été.',
  n:'Les racks à planches devant un immeuble sur deux, le sentier vers la pointe de Jukdo au nord, les cafés installés dans d’anciennes maisons de pêcheurs, et une plage plus fréquentée au lever du jour qu’à midi. Le port de pêche, à l’extrémité nord, continue de fonctionner à quelques mètres des écoles de surf.' },

gamcheon: { name:'Gamcheon',
  one:'Un quartier de réfugiés bâti à flanc de colline, sauvé de la démolition par un programme artistique.',
  h:'En 1955, la ville de Busan installe sur ce versant la communauté religieuse Taegeukdo, fondée par Cho Cheol-je, ainsi que des réfugiés de la guerre de Corée : environ 800 familles, soit quelques milliers de personnes. Le village est bâti en rangées étagées suivant la courbe de niveau, disposées pour qu’aucune maison ne bouche la lumière ni la vue de celle qui se trouve derrière — une règle de construction dictée autant par la pente que par la communauté.',
  t:'Le dépeuplement des années 2000 l’avait mis sur la liste des démolitions. En 2009, un programme du ministère de la Culture, du Sport et du Tourisme y installe des œuvres et rénove des maisons abandonnées en galeries, avec la participation des habitants. Le plan urbain n’a pas été modifié d’un mètre, et le village reste habité : c’est ce qui explique les panneaux demandant le silence dans les ruelles.',
  n:'Chaque faîtage passe sous le seuil de la maison du dessus ; les ruelles sont des escaliers ; les portes des habitants ouvrent directement sur le parcours touristique ; et les compteurs, canalisations et lignes électriques courent en façade faute de sous-sol.' },

nampo: { name:'Nampo-dong',
  one:'Le vieux centre de Busan, et le berceau du cinéma coréen en salle.',
  h:'Nampo-dong a concentré les salles de cinéma de la ville à partir des années 1950, quand Busan, épargnée par les combats, accueillait réfugiés et industrie culturelle pendant la guerre de Corée. Le Festival international du film de Busan y est fondé en 1996 et s’y tient pendant ses premières éditions : la rue principale en a gardé le nom de BIFF Square et les empreintes de mains scellées dans le trottoir.',
  t:'Le festival a depuis déménagé vers Centum City, à l’est, et Nampo-dong a perdu son rôle de centre. La rue a conservé les salles, les empreintes et une densité inhabituelle de stands de nourriture ouverts tard, mais elle vit surtout du commerce de proximité et de la proximité immédiate du marché de Jagalchi et du marché international.',
  n:'Les empreintes de mains dans le trottoir, les stands de ssiat hotteok — la crêpe fourrée aux graines est une spécialité propre à cette rue —, les couloirs du marché international juste derrière, et le funiculaire qui monte vers la tour de Busan.' },

jagalchi: { name:'Jagalchi',
  one:'Le plus grand marché aux poissons de Corée, tenu depuis l’après-guerre en grande partie par des femmes.',
  h:'Le commerce a commencé sur la grève de galets à laquelle le nom fait référence. Après 1950, alors que Busan absorbait des centaines de milliers de réfugiés, le marché a été porté par des veuves et des femmes déplacées qui vendaient le poisson à même le quai — les jagalchi ajumma, restées le visage public du marché. C’est de cette économie de survie qu’est né l’un des plus grands marchés de la mer d’Asie.',
  t:'Le bâtiment ouvert en 2006, avec sa toiture en forme de mouette, a mis la vente en gros au rez-de-chaussée et les restaurants aux étages, mais il n’a pas remplacé la rue : les étals extérieurs le long de l’eau fonctionnent exactement comme avant, et l’essentiel de l’activité reste en plein air, entre les bassins et les caisses de glace.',
  n:'La règle est d’acheter en bas et de faire préparer en haut ; la ruelle du poisson séché derrière la halle ; les femmes qui découpent le poisson debout devant leur bassin ; et l’heure de la criée, tôt le matin, très différente de l’ambiance de midi.' },

hongdae: { name:'Hongdae',
  one:'Le quartier de l’école d’art de l’université Hongik, qui en a fixé le caractère bien avant les clubs.',
  h:'La faculté des beaux-arts de Hongik, l’une des plus réputées du pays, a attiré dès les années 1980 des ateliers d’étudiants, des imprimeurs, des encadreurs et des bars bon marché. La scène live et les labels indépendants coréens sont sortis de cette population étudiante à partir des années 1990, dans de petites salles installées en sous-sol, et non d’une programmation touristique.',
  t:'La hausse des loyers a poussé les ateliers vers Yeonnam, Mangwon et Sangsu, laissant les rues principales aux chaînes, aux boutiques de cosmétiques et aux performances de rue. Les salles de concert, disquaires et bars d’auteur se sont repliés dans les ruelles et les sous-sols : le quartier se lit donc en deux couches, l’avenue commerciale et les rues derrière.',
  n:'Les fresques des ruelles proches de l’école d’art, les musiciens qui reprennent les mêmes emplacements chaque soir sur la place, les entrées de club signalées par un simple escalier, et la bascule vers le résidentiel deux rues plus loin. Les affiches de concerts collées en couches successives sur les mêmes murs donnent une idée de la densité de la programmation.' },

yeonnam: { name:'Yeonnam-dong',
  one:'Une trame résidentielle basse transformée par l’enfouissement d’une voie ferrée et le parc posé dessus.',
  h:'Le bâti bas de Yeonnam, en partie construit pour des habitants sino-coréens installés près de l’ambassade et de l’école chinoises, s’est développé le long de la ligne ferroviaire Gyeongui, ouverte en 1905 et qui traversait le quartier au niveau de la rue. La voie coupait les îlots en deux et tenait les prix bas : les maisons qui la bordaient tournaient le dos aux rails.',
  t:'La ligne est passée en souterrain et l’emprise de surface a rouvert en 2016 en parc linéaire, le Gyeongui Line Forest Park, surnommé Yeontral Park. Les maisons qui lui font face ont converti leur rez-de-chaussée en cafés, librairies et boutiques en deux ou trois ans, et le quartier s’est réorienté à cent quatre-vingts degrés : ce qui était l’arrière est devenu la façade.',
  n:'Les jardinets transformés en terrasses, le commerce qui s’arrête exactement où finit le parc, les restaurants sino-coréens plus anciens dans les rues adjacentes, et la pelouse occupée dès les premiers beaux jours. Les rails d’origine, laissés en place par endroits dans le revêtement du parc, rappellent ce que le sol était encore il y a dix ans.' },

mangwon: { name:'Mangwon',
  one:'Un quartier résidentiel voisin de Hongdae qui a gardé son marché traditionnel et ses prix.',
  h:'Mangwon s’est construit en quartier d’habitation ordinaire de Mapo-gu, à l’écart des grands axes, autour d’un marché de rue couvert qui sert la population locale depuis les années 1970. Rien ici n’a été planifié comme destination : la rue commerçante suit simplement le tracé du marché, et l’essentiel du bâti est constitué de petits immeubles de trois ou quatre étages avec commerce au rez-de-chaussée.',
  t:'De jeunes commerces s’y sont installés à partir des années 2010, quand Hongdae et Yeonnam sont devenus trop chers, mais ils se sont ajoutés au marché au lieu de le remplacer. C’est ce qui distingue Mangwon : les deux clientèles se croisent sur la même rue, et les prix sont restés ceux d’un quartier qui fait ses courses plutôt que ceux d’un quartier de sortie.',
  n:'Les stands de croquettes, de jeon et de tteok à l’extrémité couverte du marché, la halle qui reste le centre de gravité du quartier, le retour au résidentiel dès le pâté suivant, et les berges du Han à dix minutes à pied.' },

seochon: { name:'Seochon',
  one:'Le « village de l’ouest » du palais, habité par ceux qui servaient la cour sans appartenir à la noblesse.',
  h:'Seochon s’étend de la porte ouest de Gyeongbokgung jusqu’au pied de l’Inwangsan. Sous le Joseon, quand les yangban s’installaient à Bukchon à l’est du palais, c’est ici que logeaient les jungin : interprètes, médecins, astronomes, peintres de cour, lettrés n’ayant pas passé les concours, ainsi que les artisans qui travaillaient pour le palais. Le quartier a gardé cette vocation au XXe siècle en attirant écrivains et peintres, dont le poète Yi Sang, dont la maison est aujourd’hui un lieu de mémoire.',
  t:'Les limites de hauteur protégeant les abords du palais ont maintenu une échelle basse : les ruelles gardent des commerces de plain-pied, des ateliers et des fragments de hanok là où le reste du centre s’est reconstruit en tours. Le quartier est resté habité et discret, et son commerce s’adresse d’abord aux résidents.',
  n:'Les jetons de laiton du marché de Tongin, créé en 1941, qui servent à composer un plateau de stand en stand ; les toits de hanok qui dépassent au-dessus des devantures ; les librairies et ateliers d’artistes ; et la crête granitique d’Inwangsan qui ferme la perspective de presque chaque rue.' },

bukchon: { name:'Bukchon & Samcheong',
  one:'Le quartier aristocratique entre les deux grands palais, et la plus forte concentration de hanok urbains.',
  h:'Des fonctionnaires yangban s’installaient ici pour être à distance de marche de Gyeongbokgung et de Changdeokgung, sur de vastes parcelles. L’essentiel de ce qui subsiste date pourtant des années 1920 et 1930 : des promoteurs coréens ont racheté ces grands domaines et les ont lotis en hanok compacts et standardisés, vendus à une classe moyenne urbaine, dans un contexte où le logement de type japonais progressait dans la ville.',
  t:'Bukchon est resté un quartier habité, et c’est tout le problème de sa fréquentation : les panneaux demandent le silence, et l’accès aux ruelles résidentielles les plus exposées est désormais encadré par des horaires. Samcheong-dong, la rue qui borde le flanc est, a absorbé galeries, cafés et boutiques, ce qui permet au reste du quartier de rester résidentiel.',
  n:'Les hanok des années 1930, nettement plus petits et plus serrés que ceux du Joseon ; les ruelles qui montent, la vue sur les toits de tuiles se prenant depuis le haut ; les portes de bois et les murs de pierre alternés ; et Bugaksan qui ferme l’horizon au nord.' },

ikseon: { name:'Ikseon-dong',
  one:'Le premier lotissement de hanok planifié de Séoul, construit dans les années 1920 comme logement abordable.',
  h:'À la fin des années 1920, le promoteur Jeong Se-gwon, également militant indépendantiste, rachète par sa société Geonyang-sa d’anciens domaines aristocratiques, les démolit et les relotit en petits hanok standardisés bâtis serrés. Ces maisons dites « hanok améliorés » étaient vendues à des commerçants, enseignants et fonctionnaires coréens : une réponse commerciale explicite à l’extension du logement japonais vers le nord de Cheonggyecheon.',
  t:'Promis à la démolition pendant des décennies et sauvé surtout par le blocage entre propriétaires, l’îlot a été converti à partir du milieu des années 2010 en cafés, bars et petites boutiques. La conversion s’est faite maison par maison, sans élargir une ruelle ni raser un îlot, ce qui explique que le plan de 1920 soit encore parfaitement lisible.',
  n:'Des ruelles à peine larges de deux personnes, des verrières posées sur d’anciennes cours intérieures, des portes basses qu’il faut franchir en se baissant, et les tuiles d’origine visibles depuis les rares points hauts. Les climatiseurs et les conduits ajoutés en façade racontent la conversion aussi bien que les intérieurs restaurés.' },

euljiro: { name:'Euljiro',
  one:'Un quartier d’imprimeurs, de luminaires et d’ateliers métal qui devient quartier de bars une fois les rideaux baissés.',
  h:'Le Séoul d’après-guerre a concentré ici la petite production urbaine — imprimerie, carrelage, éclairage, enseignes, pièces mécaniques — organisée par rue, chaque métier occupant son alignement d’immeubles bas. Cette spécialisation en filières courtes a fait du quartier l’atelier du centre-ville pendant un demi-siècle, à quelques centaines de mètres des grands magasins.',
  t:'La rénovation urbaine en a effacé des pans entiers, remplacés par des tours de bureaux, mais les ateliers restants tournent toujours le jour. Les bars et restaurants se sont installés dans les étages et les arrière-cours, et ouvrent quand les rideaux métalliques descendent : d’où le surnom de Hipjiro, employé par tout le monde sauf par ceux qui y travaillent.',
  n:'Presque aucune enseigne — il faut chercher une cage d’escalier éclairée ou une porte entrouverte ; les palettes et les rouleaux de papier sur le trottoir en journée ; et le basculement sonore, vers dix-neuf heures, quand les machines s’arrêtent et que les tables sortent. Les enseignes lumineuses fabriquées sur place servent d’échantillons aux ateliers qui les vendent, alignées le long des trottoirs comme une vitrine involontaire.' },

seongsu: { name:'Seongsu',
  one:'L’ancien quartier de la chaussure de Séoul, reconverti bâtiment par bâtiment plutôt que rasé.',
  h:'Tanneries, imprimeries et plusieurs centaines de petites fabriques de chaussures ont rempli ces îlots de brique à partir des années 1960 et 1970. Le quartier produisait alors une large part de la chaussure faite main du pays, depuis des ateliers de cinq ou dix personnes travaillant en sous-traitance les uns pour les autres ; la rue de la chaussure artisanale s’est constituée dans les années 1970.',
  t:'La production a fortement reculé, mais elle n’a pas disparu : plusieurs centaines d’ateliers subsistent, souvent au rez-de-chaussée ou en sous-sol des mêmes immeubles. Cafés, studios et flagships ont pris les étages vides en conservant la brique, les portes de chargement et les cours, ce qui donne cette superposition improbable entre machines à coudre le cuir et boutiques de marque.',
  n:'Les ateliers de chaussure en activité juste sous les nouveaux occupants, les chariots de semelles poussés sur le trottoir, la brique rouge qui date tout le quartier d’une même vague de construction, et les toits-terrasses ajoutés sur les anciens hangars. Les plaques d’atelier vissées à côté des interphones donnent la liste des métiers encore présents dans l’immeuble.' },

dosan: { name:'Dosan & Apgujeong',
  one:'Le cœur du Gangnam planifié, où les enseignes ont investi le bâtiment plutôt que la vitrine.',
  h:'Ce n’étaient que des terres agricoles au sud du fleuve jusqu’aux années 1970, quand l’État a lancé le développement de Gangnam : transfert de lycées prestigieux, construction de grands ensembles, incitations fiscales pour y attirer les classes moyennes. Dosan Park, aménagé en 1973, est un parc commémoratif créé autour de la tombe du militant indépendantiste An Chang-ho, dont le nom de plume était Dosan, et de celle de son épouse.',
  t:'Apgujeong s’est imposée en une génération comme adresse de fortune récente, et les marques qui s’y sont installées ont fait de leurs immeubles leur principal support de communication : d’où une concentration inhabituelle de bâtiments d’auteur sur quelques rues. La contrepartie est un niveau de rue très calme, dimensionné pour la voiture plutôt que pour la promenade.',
  n:'Des façades conçues pour être photographiées, un trottoir souvent vide malgré la valeur du foncier, le parc commémoratif qui tranche avec le reste du quartier, et les entrées de showroom sans vitrine ni nom visible. Les allées du parc, très fréquentées le matin par les habitants, sont le seul endroit du secteur où l’on croise une vie de quartier ordinaire.' },

cheongdam: { name:'Cheongdam',
  one:'L’extrémité luxe et industrie du divertissement de Gangnam, plus fermée qu’Apgujeong.',
  h:'Aménagé avec Apgujeong dans le grand plan de développement de Gangnam des années 1970 et 1980, Cheongdam a d’abord été choisi par les maisons de luxe pour leurs flagships coréens, puis, à partir des années 2000, par les grandes agences de divertissement pour installer leurs sièges et leurs studios. Le quartier a donc deux histoires superposées, commerciale et culturelle, sur le même damier.',
  t:'Les flagships tiennent une avenue, tandis que les rues adjacentes abritent agences, galeries privées, salons et restaurants qui ne font aucune publicité et se transmettent par recommandation. Cette économie de la discrétion explique l’absence presque totale de signalétique et le fait que l’essentiel de l’activité se passe derrière des portes fermées.',
  n:'Des portes sans enseigne et des bars en sous-sol, des fans qui attendent devant certains immeubles d’agence, très peu de vie de rue pour la valeur du terrain, et les voituriers comme seul indice qu’une adresse est ouverte. Les vitrines, quand il y en a, sont souvent vides et servent de décor plutôt que de présentation de produit ; l’essentiel se passe à l’étage ou en sous-sol, sur rendez-vous.' },

hannam: { name:'Hannam-dong',
  one:'Un versant d’ambassades et de grandes maisons devenu un quartier de galeries et de design.',
  h:'Sa position entre le Namsan et le fleuve, à distance du centre historique mais bien relié, en a fait très tôt un secteur diplomatique et résidentiel : ambassades, résidences officielles, puis maisons de familles industrielles coréennes construites sur la pente. Le musée Leeum, fondé par la famille Samsung et ouvert en 2004 avec des bâtiments signés Mario Botta, Jean Nouvel et Rem Koolhaas, a fixé la vocation culturelle du quartier.',
  t:'Le musée a agrégé autour de lui une grappe de galeries, de showrooms et de petits ateliers le long du versant, rejointe plus récemment par des boutiques de créateurs. Le commerce y reste en retrait de la rue, souvent derrière un portail ou dans un rez-de-jardin, ce qui donne un quartier dense en adresses mais visuellement très calme.',
  n:'Des entrées de galerie qui ressemblent à des portails de maison, des murs d’ambassade et des caméras, la pente permanente — rien ici n’est à plat — et la vue qui se dégage sur le fleuve à chaque rue transversale. Les escaliers publics entre deux rues, souvent raides et étroits, sont le moyen le plus rapide de circuler dans le quartier.' },

itaewon: { name:'Itaewon',
  one:'Façonné pendant plus d’un siècle par la garnison voisine, et en train de se redéfinir sans elle.',
  h:'La base de Yongsan, occupée par l’armée impériale japonaise dès la fin du XIXe siècle puis reprise par l’armée américaine en 1945, a fait d’Itaewon le quartier où les étrangers logeaient, buvaient et se faisaient tailler des costumes. Tailleurs, bars, disquaires et commerces d’import s’y sont installés pour cette clientèle, et le quartier a longtemps été l’un des rares endroits de Séoul où plusieurs langues et plusieurs cuisines cohabitaient.',
  t:'Le commandement américain a officiellement quitté Yongsan pour Camp Humphreys en juillet 2018, après quarante-quatre ans, et l’emprise doit devenir un grand parc. La rue se rééquilibre depuis vers des adresses tenues par des Coréens, tandis que le caractère international se concentre sur quelques rues. Un mémorial marque la ruelle où 159 personnes ont perdu la vie lors du mouvement de foule d’Halloween 2022.',
  n:'Les tailleurs hérités des années de garnison, la mosquée centrale au-dessus de la rue principale et les commerces halal autour, la montée de Gyeongnidan, et le mur de l’ancienne base qui longe encore l’avenue. Les enseignes en plusieurs alphabets, superposées au fil des décennies, gardent la trace des vagues successives de clientèle.' },

namsan: { name:'Namsan',
  one:'La montagne autour de laquelle Séoul s’est construite, et le tracé de son ancienne muraille.',
  h:'Le roi Taejo fit franchir ce sommet par la muraille de la capitale du Joseon dès 1396. Namsan portait aussi cinq tertres de signalisation, les bongsudae : pendant cinq siècles, les nouvelles venues des frontières remontaient de colline en colline par la fumée le jour et le feu la nuit, et le signal reçu ici était transmis au palais. La montagne était par ailleurs considérée comme un site sacré.',
  t:'La tour a été construite entre 1969 et 1971 comme premier émetteur de radio et de télévision du pays ; elle n’a été ouverte au public qu’en 1980, et le belvédère est venu après l’antenne. Les pentes sont protégées et interdites à la construction, ce qui explique qu’il subsiste une montagne boisée au milieu d’une ville de dix millions d’habitants.',
  n:'Les sections de muraille restaurées qui longent les sentiers, les cinq tertres de signalisation reconstitués au sommet, le tracé du rempart encore lisible dans le plan des rues en contrebas, et les chemins forestiers qui montent depuis Hannam ou Itaewon, bien plus calmes que le téléphérique.' },

gyeongbokgung: { name:'Gyeongbokgung',
  one:'Le palais principal du Joseon, fondé en 1395, détruit puis reconstruit à deux reprises.',
  h:'Bâti en 1395 comme palais principal de la nouvelle dynastie, Gyeongbokgung est incendié lors des invasions japonaises de 1592 et reste en ruine près de deux cent soixante-dix ans. La reconstruction est lancée en 1867 par le régent Heungseon Daewongun, à une échelle considérable. Sous la colonisation japonaise, l’essentiel des bâtiments alors relevés est démonté ou vendu, et un bâtiment du gouvernement général est édifié devant la salle du trône ; il ne restera qu’une dizaine de constructions d’origine.',
  t:'Le bâtiment colonial a été démoli en 1995-1996 et un programme de restauration de long terme, engagé dans les années 1990, rebâtit progressivement les ailes disparues. On visite donc un ensemble en partie restitué, ce qui explique le contraste très net entre charpentes anciennes et bois récents, et le fait que le plan se lise mieux que les bâtiments eux-mêmes.',
  n:'La relève de la garde devant Gwanghwamun, le pavillon de Gyeonghoeru posé sur son bassin, la salle du trône de Geunjeongjeon et ses stèles de rang dans la cour, et Bugaksan qui ferme l’axe juste derrière le palais.' }
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
