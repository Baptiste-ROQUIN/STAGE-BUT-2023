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


});