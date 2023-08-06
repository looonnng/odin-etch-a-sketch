const container = document.querySelector(".container");
const createSquare = (numOfSquare) => {
  const squareLength = 41.75 / numOfSquare - 0.25; // squareLength = (containerLength / numOfSquare) - gap

  for (let i = 0; i < numOfSquare ** 2; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareLength}rem`;
    square.style.height = `${squareLength}rem`;
    square.className = "square";
    container.appendChild(square);
  }
};
createSquare(5);

//Color when hover
const squares = document.querySelectorAll(".square");
function hover(squares, color) {
  squares.forEach((square) =>
    square.addEventListener("mouseenter", (e) => square.classList.add(color))
  );
}
hover(squares, "color");

//Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  squares.forEach((square) => 
    square.classList.remove("color")
  );
});

//User input to resize grid
