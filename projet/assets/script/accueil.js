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

document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML prêt !');

    const tout_les_bouton_info = document.getElementsByClassName("bouton_info");
    for (const bouton_info of tout_les_bouton_info) {
        bouton_info.lastChild.style.display = "none";
        bouton_info.addEventListener("click", () =>  { afficher_last_child(bouton_info);});
    }


});