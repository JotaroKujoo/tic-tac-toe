










/*


  -Requerimientos para el tic tac toe
    Vista principal con boton para iniciar
    Pasar a vista de seleccion de jugadores
      2 input para los nombres de los jugadores
      radios para humano o cpu 
      boton para comenzar
    Pasar los datos a sessionStorage 
    Abrir la vista del tablero
      Tablero con 9 casillas
      Una barra lateral con la informacion de los jugadores y el turno del juego
        Variable para el turno / usuario
      COMENZAR JUEGO
        Al pulsar en una casilla se marca con su simbolo 
        Cada jugador solo puede  tener 3 fichas en el tablero
        cuando estan todas las fichas solo se pueden mover de posicion
        al colocar una ficha, controlar que la casilla este vacia
        a partir del 5 turno comprobar al final del todo la victoria
          comprobar si tienen el mismo simbolo
            0 1 2
            3 4 5
            6 7 8
            0 3 6
            1 4 7
            2 5 8
            0 4 8
            2 4 6
          si ha ganado uno de los 2 se notifica
        si esta la cpu
          si el centro esta vacio, lo ocupa
          si no, hacer random para obtener una aleatoria
          si el random devuelve una casilla ocupada. que repita hasta conseguir una vacia 


*/











// OnKeyUp Event and Syntax
// Eventos "Cuando escribas" y su sintaxis


// Is usefull to snip the users input
// Es util para mostrar el contenido que introduce el usuario

// function myKeyUpFunction() {

//     let input = document.getElementById("firstname").value;

//     document.getElementById("Test").innerHTML = input;

//   }


// OnCLick Events and Syntax
// Eventos "Cuando hagas click" y su sintaxis


// json = `[
//   {
//     "id": 197
//   }
// ]
// `;
// const newJson = JSON.parse(json)

// console.log(typeof newJson)





// const Formar = (usuario1,usuario2) => {
//   let usuari1 = {"name":usuario1 , "turnos":3 };
//   let usuari2 = {"name":usuario2 , "turnos":3};

//   let usuario1Json = JSON.stringify(usuari1);
//   let usuario2Json = JSON.stringify(usuari2);

//   console.log(usuari1)
//   console.log(usuario1Json)
//   console.log(usuari2)
//   console.log(usuario2Json)
// }




//   // class Luchador{
//   //   constructor(nombre,vida = 100,)
//   // }



//          ESTABLECEMOS USUARIOS Y MODO DE JUEGO

class GameMode {
  constructor(gamemode, user1, user2) {

    this.gamemode = gamemode
    this.user1 = user1
    this.user2 = user2
  }


  getGameModeFromHTML() {

    let opciones = Array.from(document.getElementsByClassName("radio"))

    opciones.map((opcion) => {
      opcion.addEventListener("click", () => {
        switch (opcion.value) {
          case "PlayerVsCPU":
            document.getElementById("firstPlayer").innerHTML = "Name Player"
            document.getElementById("secondPlayer").innerHTML = "Name CPU"
            this.gamemode = "PlayerVsCPU"
            sessionStorage.setItem("gamemode", this.gamemode)
            // console.log(sessionStorage.getItem("gamemode"))
            break;
          case "CPUvsPlayer":
            document.getElementById("firstPlayer").innerHTML = "Name CPU"
            document.getElementById("secondPlayer").innerHTML = "Name Player"
            this.gamemode = "CPUvsPlayer"
            sessionStorage.setItem("gamemode", this.gamemode)
            // console.log(sessionStorage.getItem("gamemode"))
            break;
          case "PlayerVsPlayer":
            document.getElementById("firstPlayer").innerHTML = "Name Player"
            document.getElementById("secondPlayer").innerHTML = "Name Player 2"
            this.gamemode = "PlayerVsPlayer"
            sessionStorage.setItem("gamemode", this.gamemode)
            // console.log(sessionStorage.getItem("gamemode"))
            break;
        }
      })
    })
  }


  getUsers() {
    const saveButtons = Array.from(document.getElementsByClassName("safeButt"));

    saveButtons.map((button) => {
      button.addEventListener("click", () => {
        this.user1 = document.getElementById("user1").value;
        this.user2 = document.getElementById("user2").value;
        sessionStorage.setItem("first", this.user1)
        sessionStorage.setItem("second", this.user2)
      })
    })
  }
}

let modo = new GameMode();

modo.getGameModeFromHTML()

modo.getUsers()










//        JUEGO TIC TAC TOE 

class Game{
  constructor(user1,user2,gamemode,casillas,fichas1=3,fichas2=3,interruptor=false){
    this.user1 = user1;
    this.user2 = user2;
    this.gamemode = gamemode
    this.casillas = casillas
    this.fichas1 = fichas1
    this.fichas2 = fichas2
    this.interruptor = interruptor
  }

  StartGame(){
    this.casillas = Array.from(document.getElementsByClassName("celda"))
    this.casillas.map((casilla)=>{
      casilla.addEventListener("click",()=>{
        if ( this.fichas1>0 || this.fichas2 > 0 ){
          if(casilla.innerHTML == "."){
            
            casilla.classList.add("estiloCelda2")
            casilla.innerHTML = (this.interruptor) ? "X" : "O"
            this.interruptor = !this.interruptor
            if(casilla.innerHTML=="X"){
              this.cpuMovement()
              setTimeout(()=>{
                
                console.log("Turno para O")},
                "1000"
              )
              this.fichas1 -= 1
              console.log(this.fichas1,"fichas te quedan")

            }
            if (casilla.innerHTML == "O"){
              console.log("Turno para X")
              this.fichas2 -=1
              console.log(this.fichas2,"fichas te quedan")
            }
          }
        }
      })
    })
  }

   countTurns(){
    
    this.casillas.map((casilla)=>{
      casilla.addEventListener("click",()=>{
        if (this.interruptor){
          let rivalTurn = document.getElementById("player2Turn")
          rivalTurn.innerHTML = "O"
          let turn = document.getElementById("player1Turn")
          turn.innerHTML = `<h1>${turn.innerHTML}</h1>`
          // console.log("Aqui tambien")
        }else{
          let rivalTurn = document.getElementById("player1Turn")
          rivalTurn.innerHTML = "X"
          let turn = document.getElementById("player2Turn")
          turn.innerHTML = `<h1>${turn.innerHTML}</h1>`
          // console.log("funciono")
          
        }
      })
    })
  }

  getGameData(){
    this.user1=sessionStorage.getItem("first")
    this.user2=sessionStorage.getItem("second")
    this.gamemode = sessionStorage.getItem("gamemode")
    let htmlUser1Content = document.getElementById("namePlayer1")
    let htmlUser2Content = document.getElementById("namePlayer2")
    htmlUser1Content.innerHTML = this.user1
    htmlUser2Content.innerHTML = this.user2

    
  }

  checkVictory(){
    const winningCombs = [
      ['0','1','2'],
      ['3','4','5'],
      ['6','7','8'],
      ['0','3','6'],
      ['1','4','7'],
      ['2','5','8'],
      ['0','4','8'],
      ['2','4','6']
    ]
    let xPositions = [];
    let oPositions = []

    this.casillas.map((casilla)=>{
      casilla.addEventListener("click",()=>{
        if (casilla.innerHTML == "X"){
          xPositions.push(casilla.id)
          xPositions.sort()
          console.log(xPositions)
          winningCombs.forEach((combs,i)=>{
            
            console.log(combs,winningCombs[i][i])
            
          })
        }
        if (casilla.innerHTML=="O"){
          oPositions.push(casilla.id)
          oPositions.sort()
          console.log(oPositions)
        }
        
      })


    })
  }


  cpuMovement(){
    if (this.gamemode == "PlayerVsCPU" || this.gamemode == "CPUvsPlayer"){
      if (this.fichas2>0 ){
        
        let freeCells = this.casillas.filter((celda)=>{

          if(celda.innerHTML=="."){
           return celda 
          }
          

        })
        let randomChoice = parseInt(Math.random()*freeCells.length)
          
            freeCells[randomChoice].click()
            this.casillas.disabled = true
            console.log(freeCells)
          
          
        // let randomChoice = parseInt(Math.random() * freeCells.length)
        // freeCells[randomChoice].click()
      }
      

    }
  }








}

let tictac = new Game()

tictac.getGameData()
tictac.StartGame()
tictac.checkVictory()
tictac.countTurns()
tictac.cpuMovement()



// let fichasUser1 = 3
// let fichasUser2 = 3

// let interruptor = false;



// let casillas = Array.from(document.getElementsByClassName("celda"))

// casillas.map((casilla) => {


//   casilla.addEventListener("click", () => {
//     if (fichasUser1 > 0 || fichasUser2 > 0){
//       if (casilla.innerHTML == "") {
//         casilla.innerHTML = (interruptor) ? "X" : "O"
//         interruptor = !interruptor
//         console.log("Funciono2")
//         if (casilla.innerHTML == "X") {
//           console.log("Turno para X")
//           fichasUser1 -= 1
//           console.log(fichasUser1, "fichas te quedan")
          
  
  
//         }
//         if (casilla.innerHTML == "O") {
//           console.log("Turno para O")
//           fichasUser2 -= 1
//           console.log(fichasUser2, "fichas te quedan")
          
  
//         }
  
//       }


//     }
    

    
//   })



// }
// )

