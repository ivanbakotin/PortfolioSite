const body = document.querySelector("body");
const themeSlider = document.querySelector("#theme-mode");

themeSlider.addEventListener("click", () => {
  if (body.className == "theme--light") {
    body.className = "theme--dark";
  } else {
    body.className = "theme--light";
  }
});

const projects = document.querySelectorAll(".projects__item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList += " show";
        observer.unobserve(entry.target);
      }
    });
    console.log(entries);
  },
  {
    threshold: 0.4,
  }
);

projects.forEach((project) => {
  observer.observe(project);
});
