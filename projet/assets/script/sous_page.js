function scrollPageBelowPresentation() {
    window.scroll({
        top: (window.innerHeight * 0.93),
        behavior: "smooth",
    });
}

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

    const les_h2 = document.getElementsByTagName('h2');
    let menu_nav = document.querySelector('.menu_navigation');
    console.log(menu_nav)
    for (let titre of les_h2) {
        let newContent = document.createElement('a')
        if (titre.textContent.length > 30) {
            var newName= titre.textContent.slice(0, 29);
            newName+='...'
        }
        else var newName = titre.textContent;
        newContent.textContent = newName;
        newContent.addEventListener('click', () => {
            window.scrollTo({
                top: titre.getBoundingClientRect().top -(innerWidth*(0.035)) + window.pageYOffset,
                left: 0,
                behavior: "smooth"
            })
        })
        menu_nav.appendChild(newContent);

        let elem = document.elementFromPoint(document.documentElement.clientWidth , 0);
    }

});



window.onscroll = function () {
    const header = document.getElementById("header_changeant");
    const li_menu = document.querySelectorAll(".menu>li");
    const liens_menu = document.querySelectorAll(".menu>li>a");
    const image = document.getElementById("logo_ANRH")

    if (scrollY > 100) {
        header.style.backgroundColor = "black";
        for (const li of li_menu) {
            li.style.color = "white";
        }
        for (const lien of liens_menu) {
            lien.style.color = "white";
        }
        image.style.visibility = "visible";
    }

    if ((scrollY <= 100)) {
        header.style.backgroundColor = "transparent";
        for (const li of li_menu) {
            li.style.color = "black";
        }
        for (const lien of liens_menu) {
            lien.style.color = "black";
        }
        image.style.visibility = "hidden";
    }

    // afficher ou non le bouton pour remonter dans la page
    const btnScrollTop = document.getElementById('scrollUp');
    if (scrollY >= innerHeight * 0.90) {  // Quand on est à 200pixels du haut de page,
        btnScrollTop.style.right = "10px"; // Replace à 10pixels de la droite l'image

        // on affiche aussi le menu a gauche un fois descendu

    } else {
        btnScrollTop.style.right = "-100px"; // Enlève les attributs CSS affectés par javascript
    }
}