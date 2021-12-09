document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
      preloader.classList.add("dn");
    }
  }, 1000);
};

let anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

let burger = document.getElementById("showBurger");
let navLinks = document.querySelector(".burger");
let remBurger = document.getElementById("remBurger");
let links = document.querySelectorAll(".header__nav_burger");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
remBurger.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}
let w = window.screen.availWidth;
if (w > 1000) {
  let navImg = document.getElementById("header__img");
  let headerImg = document.getElementById("expt__img");
  let footerImg = document.getElementById("footer__img");
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    navImg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    headerImg.style.transform =
      "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    footerImg.style.transform =
      "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
  });
}
