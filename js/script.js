/************** Toggle mobile menu */
let menu = document.getElementById("menu");
let mobile = document.getElementsByClassName("mobile-menu");
let bg = document.getElementById("backdrop");
let toggle = document.getElementById("toggle");
let boolMenu = false;

function toggleMenu() {
  if (boolMenu == false) {
    mobile[0].classList.add("visibility");
    boolMenu = true;
  }
  else if (boolMenu == true) {
    mobile[0].classList.remove("visibility");
    boolMenu = false;
  }
}
