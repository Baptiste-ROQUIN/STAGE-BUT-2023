function scrollPageBelowPresentation(){
        window.scroll({
            top: (window.innerHeight*0.93),
            behavior: "smooth",
        });
}

function afficher() {
    const text_a_afficher = document.querySelector("#info_CONSTANTINE>p");
    console.log(text_a_afficher);
    if (text_a_afficher.style.display == "none")
        text_a_afficher.style.display = "block";
    else text_a_afficher.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML prêt !');
   const info_constantine = document.getElementById("info_CONSTANTINE");
   info_constantine.addEventListener("click", afficher)

   const btnScrollTop = document.getElementById("scrollUp");
   btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

    const les_h2 = document.getElementsByTagName('h2')
    console.log(les_h2)

})

});



window.onscroll = function(){
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

    if ((scrollY <= 100)){
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
    if (scrollY >= innerHeight*0.90) {  // Quand on est à 200pixels du haut de page,
        btnScrollTop.style.right = "10px"; // Replace à 10pixels de la droite l'image
        
        // on affiche aussi le menu a gauche un fois descendu

    } else { 
        btnScrollTop.style.right = "-100px"; // Enlève les attributs CSS affectés par javascript
    }
}