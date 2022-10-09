
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

