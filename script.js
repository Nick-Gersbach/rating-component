const ratingForm = document.querySelector(".rating-container");
const thankYouCard = document.querySelector(".thankyou-component");

const submitBtn = document
  .getElementById("submit-btn")
  .addEventListener("click", function (e) {
    //Prevent Form From Submitting
    e.preventDefault();

    //Input Variables
    const rating1 = document.getElementById("rating-1");
    const rating2 = document.getElementById("rating-2");
    const rating3 = document.getElementById("rating-3");
    const rating4 = document.getElementById("rating-4");
    const rating5 = document.getElementById("rating-5");
    const dynamicNumber = document.getElementById("dynamic-number");

    if (rating1.checked === true) {
      dynamicNumber.innerHTML = rating1.value;
    } else if (rating2.checked === true) {
      dynamicNumber.innerHTML = rating2.value;
    } else if (rating3.checked === true) {
      dynamicNumber.innerHTML = rating3.value;
    } else if (rating4.checked === true) {
      dynamicNumber.innerHTML = rating4.value;
    } else if (rating5.checked === true) {
      dynamicNumber.innerHTML = rating5.value;
    }

    ratingForm.style.display = "none";
    thankYouCard.style.display = "flex";
  });
