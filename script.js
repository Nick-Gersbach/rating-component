const submitBtn = document.getElementById("submit-btn");
const ratingComponent = document.querySelector(".rating-component");
const thankYouCompoenent = document.querySelector(".thankyou-component");
const ratingBtns = document.querySelectorAll(".btn");
let ratingScore = document.querySelector(".dynamic-number");
let defaultScore = 3;

submitBtn.addEventListener("click", submitScore);
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", ratingBtnClick);
});

function submitScore(e) {
  e.preventDefault();
  ratingComponent.style.display = "none";
  ratingScore.textContent = defaultScore;
  thankYouCompoenent.style.display = "flex";
}

function ratingBtnClick(e) {
  //Add orange BG Background class
  if (e.target.classList.contains("btn")) {
    e.target.classList.add("active");
  } else {
    e.target.parentElement.classList.add("active");
  }

  defaultScore = e.target.textContent;
}
