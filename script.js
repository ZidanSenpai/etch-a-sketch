const container = document.getElementById("container");
function createGrid(size){
    container.innerHTML = "";
    const cellSize = 640/size;
    for(let i = 1; i<= size*size; i++){
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
        div.addEventListener("mouseover", ()=>{
            div.style.background = "blue";
        })
        container.appendChild(div);
    }
}
function reset() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cells => {
        cells.style.background = "white";
    });
}
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", ()=>{
    reset();
})

const genGrid = document.getElementById("genGrid");
genGrid.addEventListener("click", ()=>{
    const size = parseInt(document.getElementById("size").value);
    reset();
    createGrid(size);
})
createGrid(16);
