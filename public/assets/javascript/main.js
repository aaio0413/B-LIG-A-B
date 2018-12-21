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

  if ($(".navbar").height() > 100) {
    $(".navbar").css("height", "69px");
    console.log("this is trying to get back");
  } else {
    $(".navbar").height(172);
  }

  //   console.log(document.getElementByClassName(".nav-item").style.display);
  //   console.log("this is what I got", test + test2);
}

function dropdown() {
  $("#drop-down-system").toggleClass("addon-dropdown");

  const test = $("#navbarDropdownMenuLink").find("id", "drop-down-system");
  console.log("the button is working?", test);
}

// $(function() {
//     if (window.matchMedia("(max-width: 768px)").matches) {
//       $("#mobileFoot").attr("display", "flex");
//     }
//   });

// $(function() {
//   if ($(window).width() > 768) {
//     console.log("screen width is greater than 768px");
//   } else {
//     $("#footerLaptop").attr("css", { display: "none !important" });
//     $("#mobileFoot").attr("css", { display: "flex" });
//   }
// });
