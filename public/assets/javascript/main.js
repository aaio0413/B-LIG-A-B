function burgerButton() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

// ("#navbarNavDropdown");

function dropDown() {
  const el = document.getElementById("navbarDropdownMenuLink");
  el.parentElement.classList.toggle("show");
}
