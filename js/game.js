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


//      PLAYER VS CPU


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
                                        sessionStorage.setItem("winner",this.user1)
                                        this.getWin()
                                        break
                                    }

                                    this.cpuMovement()
                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        sessionStorage.setItem("winner",this.user2)

                                        this.getWin()
                                        break
                                    }
                                }

                            }
                        }else{
                            this.fichas1=0
                            this.fichas2=0
                        }


                        if (this.fichas1 < 1 && this.fichas2 < 1) {
                            this.rest()
                        }








//CPU VS PLAYER


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
                                        sessionStorage.setItem("winner",this.user1)

                                        this.getWin()
                                        break
                                    }


                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        sessionStorage.setItem("winner",this.user2)

                                        this.getWin()
                                        break
                                    }

                                    this.cpuMovement()

                                }

                            }
                        } else {
                            this.fichas1 = 0
                            this.fichas2 = 0
                        }
                        if (this.fichas1 == 0 && this.fichas2 == 0) {
                            if (this.interruptor){
                                this.rest()
                                this.cpuMovement()
                                this.interruptor=this.interruptor
                            }else{
                                this.rest()

                            }
                        }






// PLAYER VS PLAYER


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
                                        sessionStorage.setItem("winner",this.user1)

                                        this.getWin()
                                        break
                                    }

                                }

                                if (casilla.innerHTML == "O") {
                                    this.fichas2 -= 1
                                    if (this.checkVictory("O")) {
                                        console.log("Ha ganado O")
                                        sessionStorage.setItem("winner",this.user2)

                                        this.getWin()
                                        break
                                    }
                                }

                            }
                        } else {
                            this.fichas1 = 0
                            this.fichas2 = 0
                            this.rest()
                        }
                }
            })
        })
    }



//GESTOR DE TURNOS

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



// PARA OBTENER TODOS LOS DATOS NECESARIOS

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


    getWin(){
        window.location = "../pages/win.html"
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






    dropCPU() {
        let freeCells = this.casillas.filter((celda) => {

            if (celda.innerHTML == ".") {
                return celda
            }


        })
        let randomChoice = parseInt(Math.random() * freeCells.length)

        let cpuCells = this.casillas.filter((celda) => {

            if (celda.innerHTML == "O") {
                return celda
            }


        })
        let randomChoice2 = parseInt(Math.random() * cpuCells.length)

        freeCells[randomChoice].innerHTML = "."


        cpuCells[randomChoice2].innerHTML = "O"
        





    }

    rest() {

        switch(this.gamemode){
            case "PlayerVsCPU":
                this.casillas.map((casilla)=>{
                    casilla.addEventListener("click",()=>{
                        if (casilla.innerHTML=="X"){
                            casilla.innerHTML="."
                            this.fichas2 += 1
                            this.StartGame()
                        }
                        if (casilla.innerHTML=="O"){
                            casilla.innerHTML="."
                            this.fichas1 += 1
                            this.interruptor = false
                            this.StartGame()
                            this.cpuMovement()
                        }
                    })
                })

            case "CPUvsPlayer":
                this.casillas.map((casilla) => {
                    casilla.addEventListener("click", () => {
        
                        if (casilla.innerHTML == "X") {
                            casilla.innerHTML = "."
                            this.fichas1+=1
                            console.log(this.fichas1)
                            this.StartGame()

                            this.getGameData()
                            this.countTurns()
                            if (this.gamemode == "CPUvsPlayer") {
                                this.cpuMovement()
                            }





                        }
        
                        if (casilla.innerHTML == "O") {
                            casilla.innerHTML = "."
                            this.fichas2+=1
                            console.log(this.fichas2)
                            this.StartGame()
                        }
        
        
                    })
                })

            case "PlayerVsPlayer":
                this.casillas.map((casilla) => {
                    casilla.addEventListener("click", () => {
        
                        if (casilla.innerHTML == "X") {
                            casilla.innerHTML = "."
                            this.fichas1+=1
                            console.log(this.fichas1)
                            this.StartGame()

                            this.getGameData()
                            this.countTurns()
                            if (this.gamemode == "CPUvsPlayer") {
                                this.cpuMovement()
                            }





                        }
        
                        if (casilla.innerHTML == "O") {
                            casilla.innerHTML = "."
                            this.fichas2+=1
                            console.log(this.fichas2)
                            this.StartGame()
                        }
        
        
                    })
                })
        }
        


    }








}

let tictac = new Game()

tictac.getGameData()
tictac.StartGame()
tictac.countTurns()
// tictac.atEnd()
if (tictac.gamemode == "CPUvsPlayer") {
    tictac.cpuMovement()
}

