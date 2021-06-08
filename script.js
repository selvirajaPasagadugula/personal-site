const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    header.classList.add("header--onscroll");
    hero.classList.add("hero--onscroll");
  } else {
    header.classList.remove("header--onscroll");
    hero.classList.remove("hero--onscroll");
  }
};
