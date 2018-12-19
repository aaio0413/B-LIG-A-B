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
  //   const burgerBtn = document.getElementsByClassName("burger-button");
  //   const test = $(".burger-button")
  //     .find("a")
  //     .toggle("display");

  $(".nav-item")
    .find("a")
    .toggle("display");

  //   console.log("this is what I got", test + test2);
}
