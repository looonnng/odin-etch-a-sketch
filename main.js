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

// Set default grid size for the slider
const defaultGridSize = 5;
const gridSize = document.querySelector("#gridSize");
gridSize.value = defaultGridSize;

//Color when hover
function hover(squares, color) {
  squares.forEach((square) =>
    square.addEventListener("mouseenter", (e) => square.classList.add(color))
  );
}

//Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.classList.remove("color"));
});

//User input to resize grid
gridSize.addEventListener("input", (e) => {
  container.innerHTML = "";
  createSquare(e.target.value);
  const squares = document.querySelectorAll(".square");
  hover(squares, "color");
});

// Initial grid size
createSquare(defaultGridSize);

// Initial hover for the initial squares
const squares = document.querySelectorAll(".square");
hover(squares, "color");
