


//OBTENEMOS LOS USUARIOS


const saveButtons = Array.from(document.getElementsByClassName("safeButt"));

saveButtons.map((button) => {
  button.addEventListener("click", () => {
    user1 = getUser();
    user2 = getUser2();
    sessionStorage.setItem("first", user1)
    sessionStorage.setItem("second", user2)

  })
})

const getUser = () => {
  let inputValue = document.getElementById("user1").value;
  return inputValue
}


const getUser2 = () => {
  let inputValue = document.getElementById("user2").value;
  return inputValue
}






//VALIDAMOS EL MODO DE JUEGO

const gameModeValidate = (gamemode, gamemodevalue) => {
  if (gamemode) {
    sessionStorage.setItem("gamemode", gamemodevalue)
  }
}




let opciones = Array.from(document.getElementsByClassName("radio"))

opciones.map((opcion) => {
  opcion.addEventListener("click", () => {
    switch (opcion.value) {
      case "PlayerVsCPU":
        document.getElementById("firstPlayer").innerHTML = "Name Player"
        document.getElementById("secondPlayer").innerHTML = "Name CPU"
        gameModeValidate(opcion.checked, opcion.value)
        break;
      case "CPUvsPlayer":
        document.getElementById("firstPlayer").innerHTML = "Name CPU"
        document.getElementById("secondPlayer").innerHTML = "Name Player"
        gameModeValidate(opcion.checked, opcion.value)
        break;
      case "PlayerVsPlayer":
        document.getElementById("firstPlayer").innerHTML = "Name Player"
        document.getElementById("secondPlayer").innerHTML = "Name Player 2"
        gameModeValidate(opcion.checked, opcion.value)
        break;

    }
  })
})




//EMPIEZA EL JUEGO 

let fichasUser1 = 3
let fichasUser2 = 3

let interruptor = false;



let casillas = Array.from(document.getElementsByClassName("casillas"))

casillas.map((casilla) => {


  casilla.addEventListener("click", () => {
    if (fichasUser1 > 0 || fichasUser2 > 0){
      if (casilla.innerHTML == "") {
        casilla.innerHTML = (interruptor) ? "X" : "O"
        interruptor = !interruptor
        console.log("Funciono2")
        if (casilla.innerHTML == "X") {
          console.log("Turno para X")
          fichasUser1 -= 1
          console.log(fichasUser1, "fichas te quedan")
          
  
  
        }
        if (casilla.innerHTML == "O") {
          console.log("Turno para O")
          fichasUser2 -= 1
          console.log(fichasUser2, "fichas te quedan")
          
  
        }
  
      }


    }
    

    
  })



}
)






//UTILIZAMOS MAP PORQUE NOS PERMITE TRATAR A CADA ELEMENTO DEL ARRAY COMO UN OBJETO


// casillas.map((casilla)=> {
//     casilla.addEventListener("click", ()=>{
        // if (casilla.innerHTML == ""){
        //     casilla.innerHTML = (interruptor) ? "X" : "O"
        //     interruptor = !interruptor
//             console.log("Funciono")
//         }
//     })
// })