const btnEl = document.querySelector("button");
const msgEl = document.querySelector("h2");
const wheelEl = document.querySelector(".color-strip");
const colorPickerEl = document.querySelector(".color-picker");

const colorOptions = ["black", "red", "blue", "green"];
const colorGameArr = [];
let pickedColor;

colorPickerEl.addEventListener("click", setPickedColor);
btnEl.addEventListener("click", spin);

function setPickedColor(e) {
  if (e.target.tagName === "LABEL") return;
  pickedColor = e.target.id;
  console.log(pickedColor);
}

function spin() {
  msgEl.textContent = "";
  colorGameArr.length = 0;
  for (let i = 0; i < 11; i++) {
    colorGameArr.push(colorOptions[getRandomInt(4)]);
  }
  console.log(colorGameArr);
  wheelEl.style.backgroundColor = colorGameArr[getRandomInt(11)];
  checkWinner();
}

function checkWinner() {
  if (wheelEl.style.backgroundColor === pickedColor) {
    msgEl.textContent = "Congrats, you win!";
  } else {
    msgEl.textContent = "You lose!";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
