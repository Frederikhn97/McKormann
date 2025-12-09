const categoriBar = document.querySelector(".catergories_bar");
const brandBar = document.querySelector(".brand_bar");
const decadesBar = document.querySelector(".decades_bar");

document.querySelector(".catergories_button").addEventListener("click", showCategori);

function showCategori() {
  console.log("der klikkes");
  categoriBar.classList.remove("hide");
  brandBar.classList.add("hide");
  decadesBar.classList.add("hide");
}

document.querySelector(".brand_button").addEventListener("click", showBrand);

function showBrand() {
  console.log("der klikkes");
  brandBar.classList.remove("hide");
  categoriBar.classList.add("hide");
  decadesBar.classList.add("hide");
}

document.querySelector(".decades_button").addEventListener("click", showDecades);

function showDecades() {
  console.log("der klikkes");
  decadesBar.classList.remove("hide");
  categoriBar.classList.add("hide");
  brandBar.classList.add("hide");
}
