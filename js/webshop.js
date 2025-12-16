const categoriBar = document.querySelector(".catergories_bar");
const brandBar = document.querySelector(".brand_bar");
const decadesBar = document.querySelector(".decades_bar");
const menuBar = document.querySelector(".categories_menuBar");

document.querySelector(".catergories_button").addEventListener("click", showCategori);

function showCategori() {
  console.log("der klikkes");
  categoriBar.classList.remove("hide");
  brandBar.classList.add("hide");
  decadesBar.classList.add("hide");
  menuBar.classList.remove("hide");
}

document.querySelector(".brand_button").addEventListener("click", showBrand);

function showBrand() {
  console.log("der klikkes");
  brandBar.classList.remove("hide");
  categoriBar.classList.add("hide");
  decadesBar.classList.add("hide");
  menuBar.classList.remove("hide");
}

document.querySelector(".decades_button").addEventListener("click", showDecades);

function showDecades() {
  console.log("der klikkes");
  decadesBar.classList.remove("hide");
  categoriBar.classList.add("hide");
  brandBar.classList.add("hide");
  menuBar.classList.remove("hide");
}

/*********** Animation_on_cards *******************/

document.querySelector("#product_card-1").addEventListener("mouseover", changeImg);
function changeImg() {
  console.log("Der sker noget");
  document.querySelector(".product_img1").classList.add("hide");
  document.querySelector(".product_img1_2").classList.remove("hide");
}

document.querySelector("#product_card-1").addEventListener("mouseout", changeImgBack);
function changeImgBack() {
  console.log("Der sker noget");

  document.querySelector(".product_img1_2").classList.add("hide");
  document.querySelector(".product_img1").classList.remove("hide");
}

/* NR 2 */

document.querySelector("#product_card-2").addEventListener("mouseover", changeImg2);
function changeImg2() {
  console.log("Der sker noget");
  document.querySelector(".product_img2").classList.add("hide");
  document.querySelector(".product_img2_2").classList.remove("hide");
}

document.querySelector("#product_card-2").addEventListener("mouseout", changeImg2Back);
function changeImg2Back() {
  console.log("Der sker noget");

  document.querySelector(".product_img2_2").classList.add("hide");
  document.querySelector(".product_img2").classList.remove("hide");
}

/* NR 3 */

document.querySelector("#product_card-3").addEventListener("mouseover", changeImg3);
function changeImg3() {
  console.log("Der sker noget");
  document.querySelector(".product_img3").classList.add("hide");
  document.querySelector(".product_img3_2").classList.remove("hide");
}

document.querySelector("#product_card-3").addEventListener("mouseout", changeImg3Back);
function changeImg3Back() {
  console.log("Der sker noget");

  document.querySelector(".product_img3_2").classList.add("hide");
  document.querySelector(".product_img3").classList.remove("hide");
}

/******STAFF-PICK Button */
document.querySelector(".staff-picks_button").addEventListener("click", scrollDown);

function scrollDown() {
  document.querySelector("#staff_picks").scrollIntoView({
    behavior: "smooth",
  });
}
