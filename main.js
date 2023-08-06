const container = document.querySelector(".container");

const createSquare = () => {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
};

createSquare(); // Create 4 x 4 grid
const squares = document.querySelectorAll(".square");

console.log(squares);

function hover(squares, color) {
  squares.forEach((square) =>
    square.addEventListener("mouseenter", (e) => square.classList.add(color))
  );
}

hover(squares, "red");
