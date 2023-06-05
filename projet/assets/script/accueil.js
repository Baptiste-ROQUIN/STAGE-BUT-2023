function scrollPageBelowPresentation() {
    window.scroll({
        top: (window.innerHeight * 0.93),
        behavior: "smooth",
    });
}

function afficher_last_child(parent_text) {
    const text_a_afficher = parent_text.lastChild;
    if (text_a_afficher.style.display == "none"){
        text_a_afficher.style.display = "block";
        parent_text.style.height = "auto";
    }
    else {
        text_a_afficher.style.display = "none";
        parent_text.style.height = "10vh";
    }
}

function afficher_n_enfant(start, liste_a_afficher, n=5){
    

    var cpt = 0;
    start = start%liste_a_afficher.length
    var end = (start+n)%liste_a_afficher.length;


    console.log("start = "+ start + "; end = " + end + "; cpt = " + cpt)

    for (let index = 0; index < liste_a_afficher.length; index++) {
        const un_domaine = liste_a_afficher[index];

        if (start<index && index<end) {
            un_domaine.style.visibility = "visible";
            un_domaine.style.width = "auto";
        }

        else if (end < start && index>start || end < start && index < end){
            un_domaine.style.visibility = "visible";
            un_domaine.style.width = "auto";
        }

        else {
            un_domaine.style.visibility = "collapse";
            un_domaine.style.width = "0px";
        }

        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML prêt !');

    const tout_les_bouton_info = document.getElementsByClassName("bouton_info");
    for (const bouton_info of tout_les_bouton_info) {
        bouton_info.lastChild.style.display = "none";
        bouton_info.addEventListener("click", () =>  { afficher_last_child(bouton_info);});
    }


    // DOMAINE
    const tout_les_domaines = document.querySelectorAll(".partenaires>a, .partenaires>a");

    var start = 0;
    afficher_n_enfant(start, tout_les_domaines);
    

    const fleche_gauche_domaine = document.querySelector(".partenaires>.gauche");
    const fleche_droite_domaine = document.querySelector(".partenaires>.droite");

    fleche_gauche_domaine.addEventListener("click", () => {
        start--;
        // si start est trop grand on le remet a 0 
        if ((start+5) < 0) start=tout_les_domaines.length;
        afficher_n_enfant(start, tout_les_domaines);

    })

    fleche_droite_domaine.addEventListener("click", () => {
        start++;
        // si start est trop grand on le remet a 0 
        if (start > tout_les_domaines.length) start=0;
        afficher_n_enfant(start, tout_les_domaines);

    })

    


});