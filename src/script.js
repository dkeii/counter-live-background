"use strict";

let counter = 0;
const val = document.getElementById("number-counter");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const element = e.currentTarget.classList;
    console.log(element);

    if (element.contains("btn-decrease")) {
      counter--;
    } else if (element.contains("btn-increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter < 0) {
      val.style.color = "red";
    }
    if (counter > 0) {
      val.style.color = "green";
    }
    if (counter === 0) {
      val.style.color = "black";
    }
    val.textContent = counter;
  });
});
