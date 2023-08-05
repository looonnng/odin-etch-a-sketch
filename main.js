const container = document.querySelector(".container");

// Create 8 x 8 grid
const createSquare = () => {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.className = 'square';
    container.appendChild(square);
  }
};

createSquare();