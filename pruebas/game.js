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



const validateMove = (casilla) => {
            casilla.classList.add("estiloCelda2")
            casilla.innerHTML = (interruptor) ? "X" : "O"
            
            checkTurn(casilla)
      
}


const checkTurn = (casilla) => {
    if (interruptor==true){
        interruptor = !interruptor
        fichas1-=1
        valCPU()
    }
    if (interruptor==false){
        interruptor = !interruptor
        fichas2-=1
        valCPU()
    }
}





const valCPU = () => {
    if (!interruptor){
        cpuMove()

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









let fichas1 = 3
let fichas2 = 3
let gamemode = getData()[0]
let user1 = getData()[1]
let user2 = getData()[2]
let interruptor = false
let casillas = Array.from(document.getElementsByClassName("celda"))

casillas.map((casilla)=>{
    
    if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
        casilla.addEventListener("click",()=>{
            switch(gamemode){
                case "PlayerVsCPU":
                    
                    if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
                        
                            validateMove(casilla)
                            console.log(fichas1,fichas2)
                        
                    }
                    
                    break
                case "CPUvsPlayer":
                    
                    if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
                        interruptor=true
                        if(interruptor){
                            cpuMove()
                        }
                        checkCell(casilla)
                            
                        
                    }
                    
                
                case "PlayerVsPlayer":
                    
                    if (casilla.innerHTML=="." && fichas1 > 0 || casilla.innerHTML=="." && fichas2 > 0) {
                        
                            checkCell(casilla)
                        
                    }
                    
            }
    
    
    
        })



    }


    
})










// casillas.map((casilla)=>{
//     console.log(casilla)
// })