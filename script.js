const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        let val = 255;
        gridItem.style.backgroundColor = `rgb(${val}, ${val}, ${val})`;
        gridItem.addEventListener('mouseover', e => {
            val -= 25.5
            strVal = Math.floor(val).toString(16);
            e.target.style.backgroundColor = "#" + strVal + strVal + strVal; 
        });
    });
};

makeGrid(16,16);

const divBtn = document.createElement("div");
divBtn.className = "button";
const btn = document.createElement("button");
btn.innerHTML = "Request for new grid dimension";
divBtn.appendChild(btn);
document.body.insertBefore(divBtn, container);

btn.addEventListener('click', e => {
    container.innerText = "";
    let rowPrompt;
    let colPrompt;
    do {
        rowPrompt = prompt("Enter the number of rows for the new grid. The input should be from 1 to 100 only.");
    } while (isNaN(rowPrompt) || !(0 < rowPrompt && rowPrompt <= 100));

    do {
        colPrompt = prompt("Enter the number of columns for the new grid. The input should be from 1 to 100 only.");
    } while (isNaN(colPrompt) || !(0 < colPrompt && colPrompt <= 100));
    makeGrid(rowPrompt, colPrompt);
})