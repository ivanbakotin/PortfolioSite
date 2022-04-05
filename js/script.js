const body = document.querySelector("body");
const themeSlider = document.querySelector("#theme-mode");

themeSlider.addEventListener("click", () => {
  if (body.className == "theme--light") {
    body.className = "theme--dark";
  } else {
    body.className = "theme--light";
  }
});

const burger = document.querySelector(".nav__burger");
const navItems = document.querySelectorAll(".nav__item");
const nav = document.querySelector(".nav");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const projects = document.querySelectorAll(".projects__item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList += " animate-item";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
  }
);

projects.forEach((project) => {
  observer.observe(project);
});

const titleH1 = document.querySelector(".about__title");

const h1 = "Hi, I'm Ivan";

let counter = 0;

const interval = setInterval(() => {
  titleH1.textContent += h1[counter];
  counter++;
  if (h1.length === counter) {
    titleH1.classList.toggle("typing");
    clearInterval(interval);
  }
}, 200);
