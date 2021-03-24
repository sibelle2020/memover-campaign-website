let myNav = document.getElementById("myNav");
window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 200) {
    myNav.classList.add("nav-colored");
    myNav.classList.add("nav-shadow");
    myNav.classList.remove("nav-transparent");
  }
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.add("nav-shadow");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav.classList.remove("nav-shadow");
  }
};

const smallDevice = window.matchMedia("(max-width: 576px)").matches;
if (smallDevice) {
  console.log();
  document.querySelector("#videoBG").remove();
  const img = document.createElement("img");
  img.src = "img/memover-family.jpg";
  img.alt = "family on me-movers together in copenhagen";
  document.querySelector(".background-header").appendChild(img);
}
