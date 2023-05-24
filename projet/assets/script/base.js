document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML prêt !');

    const btnScrollTop = document.getElementById("scrollUp");
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
    console.log(btnScrollTop)
});

/**
 * ## Changement de page
 * Cette fonction permet de changer la page.
 * @param {str} path Chemin vers notre page
 */
function switchPage(path) {
    document.getElementById("eventContainer").setAttribute("src", path);
}
/*
window.onscroll = function () {
    const header = document.querySelector("header");
    const li_menu = document.querySelectorAll(".menu>li");
    const liens_menu = document.querySelectorAll(".menu>li>a");
    const image = document.getElementById("logo_ANRH")

    console.log(scrollY)

    if (scrollY > 100) {
        header.style.backgroundColor = "black";
        for (const li of li_menu) {
            li.style.color = "white";
        }
        for (const lien of liens_menu) {
            lien.style.color = "white";
        }
    }

    if ((scrollY <= 100)) {
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
    if (scrollY >= innerHeight * 0.30) {  // Quand on est à 200pixels du haut de page,
        btnScrollTop.style.right = "10px"; // Replace à 10pixels de la droite l'image

        // on affiche aussi le menu a gauche un fois descendu

    } else {
        btnScrollTop.style.right = "-100px"; // Enlève les attributs CSS affectés par javascript
    }
}*/