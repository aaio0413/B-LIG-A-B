function burgerButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}