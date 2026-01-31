const container = document.querySelector(".container");
const newGrid = document.querySelector(".grid-size-btn");
const colorPicker = document.querySelector("#colorPicker");
const userColor = document.querySelector(".userColor");

let size = 16;
let gridSize = 600 / size;

createGrid();

function createGrid() {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${gridSize}px`;
    div.style.height = `${gridSize}px`;

    div.addEventListener("mouseover", () => {
      div.style.background = colorPicker.value;
    });
    container.appendChild(div);
  }
}

newGrid.addEventListener("click", () => {
  let userGrid = Number(
    prompt("What grid size would you like? (from 1 to 100)"),
  );
  if (userGrid <= 100) {
    container.innerHTML = "";
    size = userGrid;
    gridSize = 600 / userGrid;
    createGrid();
  } else alert("Maximum is 100. Please try again.");
});
