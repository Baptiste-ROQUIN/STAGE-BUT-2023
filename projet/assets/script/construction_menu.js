
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
    historique.addEventListener('click', () =>
        switchPage('./../../templates/agence/historique.html')
    );

    juridique.addEventListener('click', () =>
        switchPage('./../../templates/agence/juridique.html')
    );

    nos_missions.addEventListener('click', () =>
        switchPage('./../../templates/agence/missions.html')
    );

    mot_du_directeur.addEventListener('click', () =>
        switchPage('./../../templates/agence/mot_du_directeur.html')
    );

    moyens.addEventListener('click', () =>
        switchPage('./../../templates/agence/moyens.html')
    );

    organisation.addEventListener('click', () =>
        switchPage('./../../templates/agence/organisation.html')
    );

});