const pressBtn = document.getElementById(playGame)


const gridEl = document.querySelector(".grid")
console.log(gridEl)
const levelSelectEl = document.getElementById("level")
// let valueEasy = document.getElementById("easy").value;
// let valueMedium = document.getElementById("medium").value;
// let valueHard = document.getElementById("hard").value;

playGame.addEventListener('click', readyP1)

function readyP1() {
    
    const size = getSize()
    const numOfGridIt = size ** 2
    gridEl.innerHTML = ""

    for (let i = 0; i < numOfGridIt; i++) {
        const num = i + 1
        console.log(num)


        const gridItem = document.createElement('div');
        gridItem.className = 'gridEl';
        gridItem.innerHTML = num;
        gridItem.style.width = `repeat(${size}, 1fr)`

        gridEl.append(gridItem);

        gridItem.addEventListener('click', function () {
            console.log('click sulla casella', num)
            gridItem.classList.toggle('bg-blue')
        }
        )
    }
}

function getSize (){
    let size = 7
    let level = levelSelectEl.value

    if(level === "easy"){
        size = 10
    } else if(level === "medium"){
        size = 9
    }

    return size 
}