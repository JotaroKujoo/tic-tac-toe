class User1 {
    constructor(namePlayer, rol, fichas = 3, symbol = "X") {
        this.namePlayer = namePlayer
        this.rol = rol
        this.fichas = fichas
        this.symbol = symbol
    }

    getUserData() {
        this.namePlayer = sessionStorage.getItem("first")

    }
    
    setNameOnScreen(){
        let htmlUser1Content = document.getElementById("namePlayer1")
        htmlUser1Content.innerHTML = this.namePlayer
    }
}



class User2 {
    constructor(namePlayer, rol, fichas = 3, symbol = "O") {
        this.namePlayer = namePlayer
        this.rol = rol
        this.fichas = fichas
        this.symbol = symbol
    }

    

    getUserData() {
        this.namePlayer = sessionStorage.getItem("second")
    }

    setNameOnScreen(){
        let htmlUser1Content = document.getElementById("namePlayer2")
        htmlUser1Content.innerHTML = this.namePlayer
    }
}


class Game {
    constructor(user1, user2, gamemode, casillas, interruptor = true) {
        this.user1 = user1;
        this.user2 = user2;
        this.gamemode = gamemode
        this.casillas = casillas
        this.interruptor = interruptor
    }

    getGameMode() {
        this.gamemode = sessionStorage.getItem("gamemode")
    }

    countTurns() {
        this.casillas = Array.from(document.getElementsByClassName("celda"))
        this.casillas.map((casilla) => {
            casilla.addEventListener("click", () => {
                if (this.interruptor == true) {
                    let rivalTurn = document.getElementById("player2Turn")
                    rivalTurn.innerHTML = "O"
                    let turn = document.getElementById("player1Turn")
                    turn.innerHTML = `<h1>${turn.innerHTML}</h1>`
                    // console.log("Aqui tambien")
                } else {
                    let rivalTurn = document.getElementById("player1Turn")
                    rivalTurn.innerHTML = "X"
                    let turn = document.getElementById("player2Turn")
                    turn.innerHTML = `<h1>${turn.innerHTML}</h1>`
                    // console.log("funciono")

                }
            })
        })
    }





    StartGame() {
        this.casillas = Array.from(document.getElementsByClassName("celda"))
        this.casillas.map((casilla) => {
            casilla.addEventListener("click", this.Start = () => {
                if (user1.fichas > 0 || user2.fichas > 0) {
                    if (casilla.innerHTML == ".") {
                        casilla.classList.add("estiloCelda2")
                        casilla.innerHTML = (this.interruptor) ? "X" : "O"
                        this.interruptor = !this.interruptor
                        switch (this.gamemode) {



                            case "PlayerVsCPU":
                                if (casilla.innerHTML == "X") {
                                    user1.fichas -= 1
                                    this.validateCPU()
                                }
                                if (casilla.innerHTML == "O") {
                                    user2.fichas -= 1
                                }
                                break



                            case "CPUvsPlayer":
                                if (this.interruptor==false) {
                                    user1.fichas -= 1
                                }
                                if (this.interruptor==true) {
                                    user2.fichas -= 1
                                    this.validateCPU()
                                }
                                break



                            case "PlayerVsPlayer":
                                if (casilla.innerHTML == "X") {
                                    user1.fichas -= 1
                                    if (this.checkVictory("X")) {
                                        console.log("Ha ganado X")
                                        sessionStorage.setItem("winner", user1.namePlayer)

                                        this.getWin()
                                        break
                                    }

                                }
                                if (casilla.innerHTML == "O") {
                                    user2.fichas -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        sessionStorage.setItem("winner", user2.namePlayer)

                                        this.getWin()
                                        break
                                    }
                                }
                                break
                        }

                    }
                }
                if (user1.fichas == 0 && user2.fichas == 0) {
                    if(this.interruptor==false){
                        console.log("prueba aqui")
                    }
                    
                    casilla.addEventListener("click", () => {

                        
                        
                        switch (this.gamemode) {



                            case "CPUvsPlayer":

                                if (casilla.innerHTML == "X" && this.interruptor == true) {
                                    casilla.innerHTML = "."
                                    user1.fichas = 1
                                    this.interruptor = true
                                    this.Start()
                                }
                                if (casilla.innerHTML == "O" && this.interruptor == false) {
                                    casilla.innerHTML = "."
                                    user2.fichas = 1
                                    this.interruptor = false
                                    this.Start()
                                }

                                break
                            case "PlayerVsCPU":
                                if (casilla.innerHTML == "X" && this.interruptor == true) {
                                    casilla.innerHTML = "."
                                    user1.fichas = 1
                                    this.interruptor = true
                                    this.Start()
                                }
                                if (casilla.innerHTML == "O" && this.interruptor == false) {
                                    casilla.innerHTML = "."
                                    
                                    this.interruptor = false
                                    this.Start()
                                }
                                break
                            case "PlayerVsPlayer":
                                if (casilla.innerHTML == "X" && this.interruptor == true) {
                                    user1.fichas = 1
                                    casilla.innerHTML = "."
                                    this.interruptor = true
                                    break
                                }
                                if (casilla.innerHTML == "O" && this.interruptor == false) {
                                    user2.fichas = 1
                                    this.interruptor = false
                                    casilla.innerHTML = "."
                                    break
                                }
                                break
                        }
                    })


                }
            })
        })
    }

   

    validateCPU() {

        if (user1.fichas > 0 || user2.fichas > 0) {
            let freeCells = this.casillas.filter((celda) => {
                if (celda.innerHTML == ".") {
                    return celda
                }
            })
            let randomChoice = parseInt(Math.random() * freeCells.length)
            freeCells[randomChoice].click()
        }



    }

    validateCPU2(symbol) {
        if (user1.fichas == 0 || user2.fichas == 0) {
            let freeCells = this.casillas.filter((celda) => {
                if (celda.innerHTML == symbol) {
                    return celda
                }
            })

            let randomChoice = parseInt(Math.random() * freeCells.length)
            console.log(symbol)
            console.log(freeCells[randomChoice])
            freeCells[randomChoice].click()
            freeCells[randomChoice].click()
            this.interruptor = true
            user2.fichas = 1
        }
    }

    checkVictory(symbol) {
            return (
                (this.casillas[0].innerHTML == symbol && this.casillas[0].innerHTML != "." && this.casillas[0].innerHTML == this.casillas[1].innerHTML && this.casillas[0].innerHTML == this.casillas[2].innerHTML) ||
                (this.casillas[3].innerHTML == symbol && this.casillas[3].innerHTML != "." && this.casillas[3].innerHTML == this.casillas[4].innerHTML && this.casillas[3].innerHTML == this.casillas[5].innerHTML) ||
                (this.casillas[6].innerHTML == symbol && this.casillas[6].innerHTML != "." && this.casillas[6].innerHTML == this.casillas[7].innerHTML && this.casillas[6].innerHTML == this.casillas[8].innerHTML) ||
                (this.casillas[0].innerHTML == symbol && this.casillas[0].innerHTML != "." && this.casillas[0].innerHTML == this.casillas[3].innerHTML && this.casillas[0].innerHTML == this.casillas[6].innerHTML) ||
                (this.casillas[1].innerHTML == symbol && this.casillas[1].innerHTML != "." && this.casillas[1].innerHTML == this.casillas[4].innerHTML && this.casillas[1].innerHTML == this.casillas[7].innerHTML) ||
                (this.casillas[2].innerHTML == symbol && this.casillas[2].innerHTML != "." && this.casillas[2].innerHTML == this.casillas[5].innerHTML && this.casillas[2].innerHTML == this.casillas[8].innerHTML) ||
                (this.casillas[0].innerHTML == symbol && this.casillas[0].innerHTML != "." && this.casillas[0].innerHTML == this.casillas[4].innerHTML && this.casillas[0].innerHTML == this.casillas[8].innerHTML) ||
                (this.casillas[2].innerHTML == symbol && this.casillas[2].innerHTML != "." && this.casillas[2].innerHTML == this.casillas[4].innerHTML && this.casillas[2].innerHTML == this.casillas[6].innerHTML)

            )
        }
        getWin() {
            window.location = "../pages/win.html"
        }




}



let user1 = new User1()
let user2 = new User2()
user1.getUserData()
user1.setNameOnScreen()

user2.getUserData()
user2.setNameOnScreen()
let tictac = new Game(user1, user2)

tictac.getGameMode()
tictac.StartGame()
tictac.countTurns()
if (tictac.gamemode == "CPUvsPlayer") {
    tictac.validateCPU()
    tictac.validateCPU2("X")
}

tictac.casillas.map((casilla)=>{
    casilla.addEventListener("click",()=>{
        if (user1.fichas == 0 && user2.fichas == 0) {
            if (tictac.gamemode == "CPUvsPlayer") {
                
                tictac.validateCPU2("X")
            }
            console.log("Funciono")
        }
    })
})