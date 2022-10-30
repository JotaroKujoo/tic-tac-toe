const getData = () => {
    let user1 = sessionStorage.getItem("first")
    let user2 = sessionStorage.getItem("second")
    let gamemode = sessionStorage.getItem("gamemode")
    return [gamemode, user1, user2]
}

const checkCell = (casilla) => {
    if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
        validateMove(casilla)
    }
}


const clickableMap = (casilla) => {
    casilla.classList.add("estiloCelda2")
    casilla.innerHTML = (interruptor) ? "X" : "O"
    
    if (casilla.innerHTML=="X"){
        interruptor = !interruptor 
        fichas1-=1
    }
    if (casilla.innerHTML=="O"){
        interruptor = !interruptor 
        fichas2-=1
    }
}






const valCPU = (casilla) => {
    if (gamemode=="CPUvsPlayer"){
        if (casilla.innerHTML=="O"){
            cpuMove()
        }
    }
    if(gamemode=="PlayerVsCPU"){
        if (casilla.innerHTML=="X"){
            cpuMove()
        }
    }
}


const cpuMove = () => {
    if (fichas1 > 0 || fichas2 > 0){
        let freeCell = casillas.filter((casilla) => {
            if (casilla.innerHTML == ".") {
                return casilla
            }
        })
        let randomChoice = parseInt(Math.random() * freeCell.length)
        freeCell[randomChoice].click()
    }
}




const checkVictory = (symbol) => {
    return (
        (casillas[0].innerHTML == symbol && casillas[0].innerHTML != "." && casillas[0].innerHTML == casillas[1].innerHTML && casillas[0].innerHTML == casillas[2].innerHTML) ||
        (casillas[3].innerHTML == symbol && casillas[3].innerHTML != "." && casillas[3].innerHTML == casillas[4].innerHTML && casillas[3].innerHTML == casillas[5].innerHTML) ||
        (casillas[6].innerHTML == symbol && casillas[6].innerHTML != "." && casillas[6].innerHTML == casillas[7].innerHTML && casillas[6].innerHTML == casillas[8].innerHTML) ||
        (casillas[0].innerHTML == symbol && casillas[0].innerHTML != "." && casillas[0].innerHTML == casillas[3].innerHTML && casillas[0].innerHTML == casillas[6].innerHTML) ||
        (casillas[1].innerHTML == symbol && casillas[1].innerHTML != "." && casillas[1].innerHTML == casillas[4].innerHTML && casillas[1].innerHTML == casillas[7].innerHTML) ||
        (casillas[2].innerHTML == symbol && casillas[2].innerHTML != "." && casillas[2].innerHTML == casillas[5].innerHTML && casillas[2].innerHTML == casillas[8].innerHTML) ||
        (casillas[0].innerHTML == symbol && casillas[0].innerHTML != "." && casillas[0].innerHTML == casillas[4].innerHTML && casillas[0].innerHTML == casillas[8].innerHTML) ||
        (casillas[2].innerHTML == symbol && casillas[2].innerHTML != "." && casillas[2].innerHTML == casillas[4].innerHTML && casillas[2].innerHTML == casillas[6].innerHTML)

    )
}


let fichas1 = 3
let fichas2 = 3
let gamemode = getData()[0]
let user1 = getData()[1]
let user2 = getData()[2]
let interruptor = true
let casillas = Array.from(document.getElementsByClassName("celda"))



casillas.map((casilla)=>{
    casilla.addEventListener("click",function StartGame(){
        if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
            clickableMap(casilla)
            valCPU(casilla)
            if (checkVictory("X")){
                console.log("Ha ganado X")
            }
            if(checkVictory("O")){
                console.log("Ha ganado O")
            }
            console.log("Sigo funcionando")
        }
        
        
    })
})
if (fichas1 == 0 && fichas2 == 0){
    casillas.map((casilla)=>{
        casilla.removeEventListener("click",StartGame())
    })
    
}



switch(gamemode){
    case "PlayerVsCPU":
        break

    case "CPUvsPlayer":
        cpuMove()
        break
        
    case "PlayerVsPlayer":
        break
}


