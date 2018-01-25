let container = document.querySelector(".container");

for(let i = 0; i < 432; i++) {
  let div = document.createElement('div');
  div.classList.add('pixel');
  div.style.height = "2.1875vh";
  div.style.width = "2.2222vw";
  div.style.backgroundColor = "white";
  container.appendChild(div);
}

let pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener('mouseover', changeColor)
});

function changeColor() {
  this.style.backgroundColor = "black";
}

// Clear Etch-a-Sketch
let leftButton = document.querySelector(".left");
leftButton.addEventListener('click', clearScreen);

function clearScreen() {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

// Change Size
let gridSize = document.querySelector(".grid-size");
let decreaseGridSizeButton = document.querySelector("#decrease");
let increaseGridSizeButton = document.querySelector("#increase");

decreaseGridSizeButton.addEventListener('click', decreaseGridSize);
increaseGridSizeButton.addEventListener('click', increaseGridSize);

function decreaseGridSize() {
  if(+gridSize.textContent > 1) {
    gridSize.textContent = +gridSize.textContent - 1;
  }
}

function increaseGridSize() {
  if(+gridSize.textContent < 50) {
    gridSize.textContent = +gridSize.textContent + 1;
  }
}

// Change Grid Size


// 35 / x (vh); 60 / y (vw);
// 60 / 35 x = y
// x * y = pixels

let rightButton = document.querySelector(".right");
rightButton.addEventListener('click', createGrid);

function createGrid() {
  console.log("hello");
  let x = +gridSize.textContent;
  let y = Math.floor(x * 60 / 35);
  let numberOfPixels = x * y;
  let pixelHeight = 35 / x;
  let pixelWidth = 60 / y;

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  for(let i = 0; i < numberOfPixels; i++) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    div.style.height = `${pixelHeight}vh`;
    div.style.width = `${pixelWidth}vw`;
    div.style.backgroundColor = "white";
    container.appendChild(div);
  }

  pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', changeColor)
  });

  function changeColor() {
    this.style.backgroundColor = "black";
  }
}
