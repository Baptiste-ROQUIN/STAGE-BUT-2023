DROP TABLE IF EXISTS DOMAINE;
DROP TABLE IF EXISTS NEWS;
DROP TABLE IF EXISTS DIRECTIONS;

CREATE TABLE DOMAINE (
    idDomaine INT(9) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    surnom VARCHAR(55),
    image VARCHAR(500),
    text VARCHAR(55)
);

CREATE TABLE NEWS (
    idNews INT(9) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    imageNews VARCHAR(500),
    titreNews VARCHAR(255),
    dateNews timestamp(3),
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

