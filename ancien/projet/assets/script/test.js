
function essai() {
    let bulles = document.getElementsByClassName("bouton");
    console.log(bulles);
    for (let item of bulles) {
        console.log(item);
    }

    for (var i = 0; i < bulles.length; i++) {
        console.log(bulles); //second console output
    }
}

essai();