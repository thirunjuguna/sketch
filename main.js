const container = document.querySelector(".container");
let item;
let size = 16;
let solid = true;
let random = false;

createGrid(size);

function newGrid() {
	size = prompt("New grid size: ", "16");
  	createGrid(size);
}

function createGrid(size) {
	while(container.hasChildNodes())
  		container.removeChild(container.lastChild);

  	let gridModel = "auto ".repeat(size);

  	container.setAttribute("style", `grid-template-rows: ${gridModel}; grid-template-columns: ${gridModel};`);
    
	for(i = 0; i < size; i++) {
		for(j = 0; j < size; j++) {
  		item = document.createElement("div");
    	item.className = "item";
      item.style.opacity = 0.1;
    	item.addEventListener("mouseover", paint);
    	container.appendChild(item);
  		}
	}
}

function paint(e) {
  if(solid) {
    if(random) 
      e.target.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    e.target.style.opacity = 1;
  }
  else {
    if(random) 
      e.target.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
  }
}

function reset() {
	createGrid(size);
}

function setSolid(set) {
  if(set) {
    solid = true;
    document.getElementById('solid').className += " selected";
    document.getElementById('gradient').className = "btn";
  } else {
    solid = false;
    document.getElementById('gradient').className += " selected";
    document.getElementById('solid').className = "btn";
  }
}

function setRandom(set) {
  if(set) {
    random = true;
    document.getElementById('rainbow').className += " selected";
    document.getElementById('black').className = "btn";
  } else {
    random = false;
    document.getElementById('rainbow').className = "btn";
    document.getElementById('black').className += " selected";
  }
}
