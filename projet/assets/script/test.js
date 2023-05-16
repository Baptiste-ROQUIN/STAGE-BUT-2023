function scrollPageBelowPresentation(){
        window.scroll({
            top: (window.innerHeight*0.93),
            behavior: "smooth",
        });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML prêt !');
   
    
    console.log(liens_menu)


    
    
});

window.onscroll = function(){
    const header = document.getElementById("header_changeant");
    const liens_menu = document.querySelector(".menu>li>a");
    if (scrollY > 100)
        header.style.backgroundColor = "black";
        liens_menu.style.color = "white";
    if ((scrollY <= 100))
        header.style.backgroundColor = "transparent";
        liens_menu.style.color = "black"
}