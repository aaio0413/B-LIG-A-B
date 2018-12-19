// function burgerButton() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "nav-bar") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-bar";
//   }
// }

// ("#navbarNavDropdown");

// function dropDown() {
//   const el = document.getElementById("navbarDropdownMenuLink");
//   el.parentElement.classList.toggle("show");
// }

function burgerButton() {
  $(".navbar-nav")
    .find("a")
    .toggleClass("display-active");

  //   console.log(document.getElementByClassName(".nav-item").style.display);
  //   console.log("this is what I got", test + test2);
}

function dropdown() {
  $("#drop-down-system").toggleClass("addon-dropdown");

  const test = $("#navbarDropdownMenuLink").find("id", "drop-down-system");
  console.log("the button is working?", test);
}
