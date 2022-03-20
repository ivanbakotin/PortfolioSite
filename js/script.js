const body = document.querySelector("body");
const themeSlider = document.querySelector("#theme-mode");

themeSlider.addEventListener("click", () => {
  if (body.className == "theme--light") {
    body.className = "theme--dark";
  } else {
    body.className = "theme--light";
  }
});
