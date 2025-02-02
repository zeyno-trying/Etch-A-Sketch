const defaultSize = 16;
let userSize = 0;
let container = document.querySelector(".container")
let button = document.querySelector(".btn");
function createGrid(size){
    for(let i = 0 ; i < size ; i++){
        const row = document.createElement("div");
        row.classList.toggle("grid-row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("grid");
            row.appendChild(newDiv);
          }
    }
}
createGrid(defaultSize);
function changeBC(){
        const divs = document.querySelectorAll(".grid");
        divs.forEach((item) => {
          item.addEventListener("mouseover", (e) => {
            if (isCtrlPressed) {
                e.target.style.backgroundColor = getRandomColor();
                if (!e.target.style.opacity) e.target.style.opacity = 0.1;
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            }
          });
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Control") {
                isCtrlPressed = true;
            }
        document.addEventListener("keyup", (e) => {
            if (e.key === "Control") {
                isCtrlPressed = false;
            }
        });
        });
      }
changeBC();
function changeSize(){
    userSize = parseInt(prompt("Choose the number of squares per side for a new Grid: "))
    if(userSize > 100){
       return alert("Input a size < 100");
    }
    container.replaceChildren();
    createGrid(userSize);
    changeBC();
}
button.addEventListener("click", changeSize);
function getRandomColor() {
    function getRandom () {
        return Math.floor(Math.random() * 256);
    }
    return 'rgb(' + [getRandom(),getRandom(),getRandom()].join(',') + ')'
}

