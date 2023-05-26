
/**
 * ## Changement de page
 * Cette fonction permet de changer la page.
 * @param {str} path Chemin vers notre page
 */
function switchPage(path) {
    document.getElementById("eventContainer").setAttribute("src", path);

    // on supprime la liste permettant de naviguer a gauche
    const menu_nav = document.querySelector('.menu_navigation');
    while (menu_nav.hasChildNodes()) {
        menu_nav.removeChild(menu_nav.firstChild);
    }

}

document.addEventListener('DOMContentLoaded', function () {

    // AGENCE
    historique.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/historique.html')
    );
    juridique.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/juridique.html')
    );
    nos_missions.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/missions.html')
    );
    mot_du_directeur.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/mot_du_directeur.html')
    );
    moyens.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/moyens.html')
    );
    organisation.addEventListener('click', () =>
        switchPage('../../projet/templates/agence/organisation.html')
    );

    // CLIENT
    devis.addEventListener('click', () =>
        switchPage('../../projet/templates/client/devis.html')
    );
    engagements.addEventListener('click', () =>
        switchPage('../../projet/templates/client/engagements.html')
    );
    prestations.addEventListener('click', () =>
        switchPage('../../projet/templates/client/prestations.html')
    );

    // ACTIVITES
    produits.addEventListener('click', () =>
        switchPage('../../projet/templates/activites/produits.html')
    );
    projets.addEventListener('click', () =>
        switchPage('../../projet/templates/activites/projets.html')
    );

    // CARTOGRAPHIE
    cartographie.addEventListener('click', () =>
        switchPage('../../projet/templates/cartographie/index.html')
    );

    // BIBLIOGRAPHIE
    documentation.addEventListener('click', () =>
        switchPage('../../projet/templates/bibliographie/documentation.html')
    );
    metadonnees.addEventListener('click', () =>
        switchPage('../../projet/templates/bibliographie/metadonnees.html')
    );

    // CONTACT
    contactez_nous.addEventListener('click', () =>
        switchPage('../../projet/templates/contact/index.html')
    );

});