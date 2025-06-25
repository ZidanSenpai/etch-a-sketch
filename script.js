const container = document.getElementById("container");
for(let i = 1; i<= 16*16; i++){
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = `${640/16}px`;
    div.style.height = `${640/16}px`;
    div.addEventListener("mouseover", ()=>{
        div.style.background = "blue";
    })
    container.appendChild(div);
}
