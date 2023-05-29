// MENU

function supprContenuMenuGauche() {
    // on supprime la liste permettant de naviguer a gauche
    const menu_nav = document.querySelector('.menu_navigation');
    while (menu_nav.hasChildNodes()) {
        menu_nav.removeChild(menu_nav.firstChild);
    }
}

/**
 * ## Changement de page
 * Cette fonction permet de changer la page.
 * @param {str} path Chemin vers notre page
 */
function switchPage(path) {
    document.getElementById("eventContainer").setAttribute("src", path);
}

document.addEventListener('DOMContentLoaded', function () {

    // ACCUEIL
    logo_ANRH.addEventListener('click', () =>
        switchPage('../../projet/templates/accueil.php')
    );
    accueil.addEventListener('click', () =>
        switchPage('../../projet/templates/accueil.php')
    );

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


    // background du menu et affichage de la fleche ou non
    const header = document.querySelector("header");
    const li_menu = document.querySelectorAll(".menu>li");
    const liens_menu = document.querySelectorAll(".menu>li>a");
    // const image = document.getElementById("logo_ANRH");

    // Le onload permet de ne pas cree de beug quand on change de sous page
    eventContainer.onload = function () {
        var cssLink = document.createElement("link");
        cssLink.href = "./../../../projet/assets/css/common.css"; 
        cssLink.rel = "stylesheet"; 
        cssLink.type = "text/css"; 
        eventContainer.contentDocument.head.appendChild(cssLink);


        eventContainer.contentWindow.onscroll = function () {
            if (eventContainer.contentWindow.scrollY > 100) {
                header.style.backgroundColor = "#222222";
                for (const li of li_menu) {
                    li.style.color = "white";
                }
                for (const lien of liens_menu) {
                    lien.style.color = "white";
                }
            }

            if (eventContainer.contentWindow.scrollY <= 100) {
                header.style.backgroundColor = "transparent";
                for (const li of li_menu) {
                    li.style.color = "black";
                }
                for (const lien of liens_menu) {
                    lien.style.color = "black";
                }
            }

            // afficher ou non le bouton pour remonter dans la page
            const btnScrollTop = document.getElementById('scrollUp');
            if (eventContainer.contentWindow.scrollY >= innerHeight * 0.30) {  // Quand on est à 200pixels du haut de page,
                btnScrollTop.style.right = "10px"; // Replace à 10pixels de la droite l'image

                // on affiche aussi le menu a gauche un fois descendu

            } else {
                btnScrollTop.style.right = "-100px"; // Enlève les attributs CSS affectés par javascript
            }
        }

        // Construction ptit menu a gauche
        // faites tout ce que vous voulez
        const menu_nav = document.querySelector('.menu_navigation')
        supprContenuMenuGauche();
        var element_menu_gauche = eventContainer.contentDocument.getElementsByClassName('sous_menu_gauche');
        for (let titre of element_menu_gauche) {

            // on récupere tout les nom des elements qui on la classe "sous_menu_gauche"
            // Si jamais ils sont trop long on les coups et on rajoute "..." à la fin
            let newContent = document.createElement('a')
            if (titre.textContent.length > 30) {
                var newName = titre.textContent.slice(0, 29);
                newName += '...';
            }
            else var newName = titre.textContent;
            newContent.textContent = newName;

            // Puis on leur ajoute un evenement
            // Si un element est clicker sur le menu a gauche on va a l'endroit de la page ou il est
            newContent.addEventListener('click', () => {
                eventContainer.contentWindow.scrollTo({
                    top: titre.getBoundingClientRect().top - (innerWidth * (0.035)) + eventContainer.contentWindow.pageYOffset,
                    left: 0,
                    behavior: "smooth"
                })
            })
            menu_nav.appendChild(newContent);
        };
    }



    // JS de la fleche
    // permet de remonter tout en haut de la page quand on appuie sur la flèche
    const btnScrollTop = document.getElementById("scrollUp");
    btnScrollTop.addEventListener('click', () => {
        eventContainer.contentWindow.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })

});