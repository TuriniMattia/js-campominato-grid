const pressBtn = document.getElementById(playGame)


const gridEl = document.querySelector(".grid")
console.log(gridEl)

const size = 10
const numOfGridIt = size * size 

for (let i = 0; i < numOfGridIt; i++){
    const num = i + 1
    console.log(num)

    const gridItem = document.createElement('div');
    gridItem.className = 'gridEl';
    gridItem.innerHTML = num ;

    gridEl.append(gridItem);

    gridItem.addEventListener('click', function(){
        console.log('click sulla casella', num)
        gridItem.classList.toggle('bg-blue')
    }
    )
}