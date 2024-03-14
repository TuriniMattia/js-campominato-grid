const gridEl = document.querySelector(".grid")
console.log(gridEl)

const size = 10
const numOfGridIt = size * size 

for (let i = 0; i < numOfGridIt; i++){
    const num = i + 1
    console.log(num)
    // const gridItString = `<div class="grid-item"></div>` 
    // numOfGridIt.innerHTML += gridItString
    const gridItString = `<div class="grid-item">${num}</div>`
    gridEl.innerHTML += gridItString
}