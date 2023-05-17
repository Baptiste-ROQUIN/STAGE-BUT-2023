function scrollPageBelowPresentation(){
        window.scroll({
            top: (window.innerHeight*0.93),
            behavior: "smooth",
        });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML prêt !');
   

});

window.onscroll = function(){
    const header = document.getElementById("header_changeant");
    const li_menu = document.querySelectorAll(".menu>li");
    const liens_menu = document.querySelectorAll(".menu>li>a");
    const image = document.getElementById("logo_ANRH")
    console.log(image)
    
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

}