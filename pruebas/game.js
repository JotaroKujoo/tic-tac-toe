const getData = () => {
    let user1 = sessionStorage.getItem("first")
    let user2 = sessionStorage.getItem("second")
    let gamemode = sessionStorage.getItem("gamemode")
    return [gamemode, user1, user2]
}
const validateMove = (casilla) => {
    if (fichas1 > 0 || fichas2 > 0) {
        if (casilla.innerHTML == ".") {
            casilla.classList.add("estiloCelda2")
            casilla.innerHTML = (interruptor) ? "O" : "X"
            interruptor = !interruptor
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
        return fichas2 -= 1
    }
}
const checkCell = () => {
    if (fichas1 > 0 || fichas2 > 0) {
        if (interruptor) {
            cpuMove()
            return fichas1 -= 1
        }
    }
}
let fichas1 = 3
let fichas2 = 3
let gamemode = getData()[0]
let user1 = getData()[1]
let user2 = getData()[2]
let interruptor = false
let casillas = Array.from(document.getElementsByClassName("celda"))
switch(gamemode){
    case "PlayerVsCPU":
        casillas.map((casilla) => {
            if (fichas1 > 0 || fichas2 > 0) {
                casilla.addEventListener("click", () => {
                    validateMove(casilla)
                    checkCell()
                    console.log(fichas1,fichas2)
                })
            }
        })
        break
    case "CPUvsPlayer":
        casillas.map((casilla) => {
            if (fichas1 > 0 || fichas2 > 0) {
                casilla.addEventListener("click", () => {
                    if (fichas2==3){
                        cpuMove()
                    }
                    validateMove(casilla)
                    checkCell(casilla)
                })
            }
        })
    
    case "PlayerVsPlayer":
        casillas.map((casilla) => {
            if (fichas1 > 0 || fichas2 > 0) {
                casilla.addEventListener("click", () => {
                    validateMove(casilla)
                    checkCell(casilla)
                })
            }
        })
}







// casillas.map((casilla)=>{
//     console.log(casilla)
// })