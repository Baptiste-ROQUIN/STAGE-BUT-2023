DROP TABLE IF EXISTS DOMAINE;
DROP TABLE IF EXISTS NEWS;
DROP TABLE IF EXISTS DIRECTIONS;

CREATE TABLE DOMAINE (
    idDomaine INT(9) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    surnom VARCHAR(55),
    image VARCHAR(255),
    adresseWeb VARCHAR(255),
    text VARCHAR(55)
);

CREATE TABLE NEWS (
    idNews INT(9) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    imageNews VARCHAR(255),
    titreNews VARCHAR(255),
    -- dateNews timestamp(3),
    textNews VARCHAR(10000)
);

CREATE TABLE DIRECTIONS (
    nom VARCHAR(55) PRIMARY KEY,
    adresse VARCHAR(255),
    tel1 VARCHAR(55),
    tel2 VARCHAR(55),
    fax VARCHAR(55),
    mail VARCHAR(55)
);

    
    
-- insertion of values
insert into DOMAINE(surnom, image, adresseWeb, text) values (
    'ASA',
    './../assets/image/accueil/notre_domaine/ASA.png',
    'https://asal.dz/',
    'Agence Spacial Algérienne'
),(
    'AGIRE',
    './../assets/image/accueil/notre_domaine/AGIRE.png',
    'http://agire.dz/',
    ''
),(
    'ANBT',
    './../assets/image/accueil/notre_domaine/ANBT.png',
    'http://197.112.0.211/soudoud-dzair/',
    'Agence National des Barrages et Transpherts'
),(
    'INCT',
    './../assets/image/accueil/notre_domaine/INCT.png',
    'http://www.inct.mdn.dz/',
    'Institut National de Cartographie et de Télédétection'
),(
    'MADRP',
    './../assets/image/accueil/notre_domaine/MADRP.png',
    'https://madr.gov.dz/',
    "Ministère de l'Agriculture et du Développement Rural"
),(
    'MRE',
    './../assets/image/accueil/notre_domaine/MRE.png',
    'https://www.mre.gov.dz/',
    'Ministère des Ressources en Eau'
),(
    'ONA',
    './../assets/image/accueil/notre_domaine/ONA.png',
    'http://ona-dz.org/',
    "Office National de l'Assainissement"
),(
    'ONID',
    './../assets/image/accueil/notre_domaine/ONID.png',
    'https://onidri.dz/',
    "Office National de l'Irrigation et du Drainage"
),(
    'SEAAL',
    './../assets/image/accueil/notre_domaine/SEAAL.png',
    'https://www.seaal.dz/',
    "Société des Eaux et de l'Assainissement d'Alger"
);





insert into NEWS(imageNews, titreNews, textNews) values (
    './../assets/image/accueil/actualites/news_1.png',
    'La 17ème édition du Salon International des Equipements, Technologies et Services de l’Eau ” SIEE POLUTTEC “',
    'Le Salon International des Equipements, Technologies et Services de l’Eau ” SIEE POLUTTEC ” <br>
    Lundi 20 juin 2022, l’Agence Nationale des Ressources en Eau a participé aux activités de lancement de la 17ème édition du Salon International des Equipements, Technologies et Services de l’Eau SIEE POLUTTEC au niveau du Centre International de Conférences Abdellatif Rahal dans la capitale.
    Où l’agence a eu la visite du Ministre des Ressources en Eau et de la Sécurité hydriques, M. Karim Hosni, accompagné d’une importante délégation ministérielle qui comprend : le Ministre de la pèche et des productions halieutiques, le Ministre de l’Industrie, le Ministre de l’Environnement, 
    le Ministre de Transition Energétique et Energies Renouvelables ; Où le Directeur Général de l’Agence Nationale des Ressources hydriques, M. El Mahdi Oggad, a présenté les projets les plus importants de l’Agence dédiés à la mobilisation, l’étude et la préservation de la ressource en eau.
    Le directeur régional de l’Agence nationale des ressources hydriques de la wilaya d’Adrar, M. Taha Ansari, a également participé aux conférences programmées pendant les jours de l’exposition, pour échanger des expériences dans le domaine des ressources en eau ainsi que discuter des défis 
    les plus importants auxquels le secteur est confronté pour parvenir à la sécurité hydriques. La conférence à portée sur « La valeur ajoutée dans la gestion de l’eau et la numérisation des données hydrogéologiques et hydrologiques pour la région du sud-ouest dans 09 wilayas.'
),(
    './../assets/image/accueil/actualites/news_2.png',
    'La journée mondiale de l’eau 2022',
    'Sous le thème : « Les eaux souterraines : rendre l’invisible visible », l’agence nationale des ressources hydriques a célébré la journée mondiale de l’eau, coïncidant avec le 22 mars, à l’instar des entreprises et organismes du secteur des Ressources en Eau et de la Sécurité Hydrique. Aux palais d’exposition BOUHRAOUA a Ghardaïa.
    Cette journée portes ouvertes a accueilli multiples entreprises opérant dans le domaine de l’eau. Une journée marquée par la visite du Secrétaire général des Ressources en eau et de la sécurité hydriques, Mr. Taha derbal, qui lors de son passage à notre stand, a évoqué l’importance du rôle de l’ANRH dans le secteur des ressources en eau et de la sécurité hydrique en particulier. Car l’agence est un portail de données pour tout ce qui concerne les ressources en eaux de surface et souterraines au niveau national.
    Il a également noté que les dossiers des autorisations de forage de puits doivent être traités de manière rapide pour faciliter le bénéfice des autorisations pour les agriculteurs.
    Au cours de cette journée, l’Agence Nationale des Ressources hydriques a présenté son rôle dans la mobilisation et la préservation des eaux souterraines à travers les données et études dont dispose l’ANRH dans ce domaine. Des présentations ont été faites aux étudiants et élèves pour les familiariser avec les différentes fonctions de l’Agence et son rôle effectif dans le secteur des ressources en eau et de la sécurité hydriques.
'
),(
    './../assets/image/accueil/actualites/news_3.jpg',
    'Salon International de l’Equipement, des Technologies et des Services de l’Eau 2021.',
    'Sous l’autorité du Directeur Général de l’Agence Nationale des Ressources hydriques, l’agence a participé aux activités du Salon International des équipements, des Technologies et des services de l’eau dans sa 16ème édition du 27 au 30 septembre 2021 au Centre International de Conférences Abdel Latif Rahal (CIC).
    En présence de diverses entreprises du secteur public et privé et les cadres de l’ANRH, l’agence a présenté à travers son pavillon ses missions ainsi que ses prestations. Elle a également exposé les équipements de chaque département et quelques cartes illustrant les ressources en eaux de surface et des souterraines.
    Cette édition était une occasion pour s’initier aux dernières technologies techniques et équipements liés au secteur des ressources en eau. C’était aussi une occasion pour les professionnels du secteur des ressources en eau pour échanger leurs expériences, notamment avec les séminaires et les discussions qui ont été programmés lors de l’événement sur la évolutions et enjeux du secteur des ressources en eau, notamment avec les récents changements climatiques qui ont lieu dans le monde.'
);




insert into DIRECTIONS values (
    'ANRH BLIDA',
    'Route de Guerrouaou B.P. 150 Soumâa Wilaya de BLIDA',
    '+213 (0) 25/29/91/01',
    '+213 (0) 29/91/00',
    '+213 (0) 25/29/91/02',
    'drc@anrh.dz'
),(
    'ANRH ORAN',
    'Avenue Chakib ARSLANE Haî-El-Badr B.P.10009 ORAN',
    '+213 (0) 41/25/48/39',
    '+213 (0) 41/25/65/77',
    '+213 (0) 41/25/85/83',
    'dro@anrh.dz'
),(
    'ANRH SAIDA',
    'B.P. 357.RP  20000 Saida',
    '+213 (0) 48/41/12/20',
    '',
    '+213 (0) 48/41/20/18',
    'drsaida@anrh.dz'
),(
    'ANRH SUD OUEST - ADRAR',
    'B.P. 364 ADRAR',
    '+213 (0) 49/96/66/95',
    '',
    '+213 (0) 49/96/66/92',
    'dradrar@anrh.dz'
),(
    'ANRH DJELFA',
    'B.P. 364 ADRAR',
    '+213 (0) 49/96/66/95',
    '',
    '+213 (0) 49/96/66/92',
    'dro@anrh.dz'
),(
    'ANRH SUD-EST - Ouargla',
    'Route de M’KHADMA B.P.140 OUARGLA',
    '+213 (0) 29/71/14/87',
    '+213 (0) 29/71/18/87',
    '+213 (0) 29/71/11/29',
    'drouargla@anrh.dz'
),(
    'ANRH EST - CONSTANTINE',
    'Bureau de poste 20 Août 1955 B.P. 532 CONSTANTINE',
    '+213 (0) 31/60/71/63',
    '',
    '+213 (0) 31/60/71/64',
    'dre@anrh.dz'
);

