const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
let sides = 16;

btn.addEventListener("click", () => {
  let size = prompt("What size should the grid be?");
  sides = parseInt(size);

  if (sides > 100) {
    alert("Too big! Try smaller!")
  } else {
    createGrid();
  }
});



function createGrid() {
  container.replaceChildren();
  
  for (let i = 1; i <= (sides * sides); i++) {
    const box = document.createElement('div');       
    container.appendChild(box);
  }
  
  document.documentElement.style.setProperty('--number', sides);
};

createGrid();
