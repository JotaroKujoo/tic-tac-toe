class Game {
    constructor(user1, user2, gamemode, casillas, fichas1 = 3, fichas2 = 3, interruptor = false) {
        this.user1 = user1;
        this.user2 = user2;
        this.gamemode = gamemode
        this.casillas = casillas
        this.fichas1 = fichas1
        this.fichas2 = fichas2
        this.interruptor = interruptor
    }

    StartGame() {
        this.casillas = Array.from(document.getElementsByClassName("celda"))
        this.casillas.map((casilla) => {
            casilla.addEventListener("click", () => {
                switch (this.gamemode) {
                    case "PlayerVsCPU":
                        if (this.fichas1 > 0 || this.fichas2 > 0) {
                            if (casilla.innerHTML == ".") {

                                casilla.classList.add("estiloCelda2")
                                casilla.innerHTML = (this.interruptor) ? "O" : "X"
                                this.interruptor = !this.interruptor

                                if (casilla.innerHTML == "X") {
                                    this.fichas1 -= 1
                                    if (this.checkVictory("X")) {
                                        console.log("Ha ganado X")
                                        this.fichas1=0
                                        this.fichas2=0
                                        break
                                    }

                                    this.cpuMovement()
                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        this.fichas1=0
                                        this.fichas2=0
                                        break
                                    }
                                }

                            }
                        }

                    case "CPUvsPlayer":
                        if (this.fichas1 > 0 || this.fichas2 > 0) {
                            if (casilla.innerHTML == ".") {

                                casilla.classList.add("estiloCelda2")
                                casilla.innerHTML = (!this.interruptor) ? "X" : "O"
                                this.interruptor = !this.interruptor

                                if (casilla.innerHTML == "X") {
                                    this.fichas1 -= 1
                                    if (this.checkVictory("X")) {
                                        console.log("Ha ganado X")
                                        this.fichas1=0
                                        this.fichas2=0
                                        break
                                    }


                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        this.fichas1=0
                                        this.fichas2=0
                                        break
                                    }

                                    this.cpuMovement()

                                }

                            }
                        }

                    case "PlayerVsPlayer":
                        if (this.fichas1 > 0 || this.fichas2 > 0) {
                            if (casilla.innerHTML == ".") {

                                casilla.classList.add("estiloCelda2")
                                casilla.innerHTML = (this.interruptor) ? "O" : "X"
                                this.interruptor = !this.interruptor

                                if (casilla.innerHTML == "X") {
                                    this.fichas1 -= 1
                                    if (this.checkVictory("X")) {
                                        console.log("Ha ganado X")
                                        this.fichas1=0
                                        this.fichas2=0
                                        break
                                    }

                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        this.fichas1=0
                                        this.fichas2=0                                        
                                        break
                                    }
                                }

                            }
                        }
                }
            })
        })
    }

    countTurns() {

        this.casillas.map((casilla) => {
            casilla.addEventListener("click", () => {
                if (this.interruptor == false) {
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

    getGameData() {
        this.user1 = sessionStorage.getItem("first")
        this.user2 = sessionStorage.getItem("second")
        this.gamemode = sessionStorage.getItem("gamemode")
        let htmlUser1Content = document.getElementById("namePlayer1")
        let htmlUser2Content = document.getElementById("namePlayer2")
        htmlUser1Content.innerHTML = this.user1
        htmlUser2Content.innerHTML = this.user2


    }

    /* 
        012
        345
        678
        036
        147
        258
        048
        246
    */



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






    cpuMovement() {
        if (this.gamemode == "CPUvsPlayer") {
            if (this.fichas2 > 0 || this.fichas1 > 0) {

                let freeCells = this.casillas.filter((celda) => {

                    if (celda.innerHTML == ".") {
                        return celda
                    }


                })
                let randomChoice = parseInt(Math.random() * freeCells.length)

                freeCells[randomChoice].click()


                // let randomChoice = parseInt(Math.random() * freeCells.length)
                // freeCells[randomChoice].click()
            }


        }

        if (this.gamemode == "PlayerVsCPU") {
            if (this.fichas2 > 0 || this.fichas1 > 0) {

                let freeCells = this.casillas.filter((celda) => {

                    if (celda.innerHTML == ".") {
                        return celda
                    }


                })
                let randomChoice = parseInt(Math.random() * freeCells.length)

                freeCells[randomChoice].click()


                // let randomChoice = parseInt(Math.random() * freeCells.length)
                // freeCells[randomChoice].click()
            }
        }
    }








}

let tictac = new Game()

tictac.getGameData()
tictac.StartGame()
tictac.countTurns()

if (tictac.gamemode == "CPUvsPlayer") {
    tictac.cpuMovement()
}