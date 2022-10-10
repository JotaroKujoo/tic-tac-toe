










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


const getUser = () => {
  let inputValue = document.getElementById("user1").value;
  return inputValue

}


const getCPU = () => {
  let inputValue = document.getElementById("CPU").value;
  return inputValue 
}




const Mostrar = (usuario) => {
  console.log(usuario)
}


const Formar = (user, user2) => {
  sessionStorage.setItem("first", user);
  sessionStorage.setItem("second",user2);
  let data = [sessionStorage.getItem("first")]
  data.push(sessionStorage.getItem("second"))
  console.log(data)
  return data
}


const VerUsers = () =>{
  console.log(sessionStorage.getItem("first"))
  console.log(sessionStorage.getItem("second"))
}


const ModificarLabel = label => {
  document.getElementById(label).innerHTML="Es tu turno te quedan 3"
}

const setNames = () => {
  user = sessionStorage.getItem("first")
  user2 = sessionStorage.getItem("second")
  document.getElementById("player1Name").innerHTML = user
  document.getElementById("player2Name").innerHTML = user2
  

}


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

