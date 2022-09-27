const numberBtn = document.querySelector(".btn");
const form = document.querySelector("form");

numberBtn.addEventListener("click", btnBg);
form.addEventListener("submit", submitFeedback);

function btnBg(e) {
  numberBtn.style.background = "#fc7614";
  numberBtn.style.color = "#fff";
  console.log("Button Clicked");
  e.preventDefault();
}

function submitFeedback(e) {
  console.log("form submitted");
  e.preventDefault();
}
