


//OBTENEMOS LOS USUARIOS


const saveButtons = Array.from(document.getElementsByClassName("safeButt"));

saveButtons.map((button)=>{
  button.addEventListener("click",()=>{
    user1 = getUser();
    user2 = getUser2();
    sessionStorage.setItem("first",user1)
    sessionStorage.setItem("second",user2)

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
  







const gameModeValidate = (gamemode, gamemodevalue) => {
  if (gamemode) {
    sessionStorage.setItem("gamemode",gamemodevalue)
  }
}




let opciones = Array.from(document.getElementsByClassName("radio"))

opciones.map((opcion)=>{
    opcion.addEventListener("click",()=>{
      switch ( opcion.value){
        case "PlayerVsCPU":
            document.getElementById("firstPlayer").innerHTML = "Name Player"
            document.getElementById("secondPlayer").innerHTML = "Name CPU"
            gameModeValidate(opcion.checked,opcion.value)
          break;
        case "CPUvsPlayer":
          document.getElementById("firstPlayer").innerHTML = "Name CPU"
          document.getElementById("secondPlayer").innerHTML = "Name Player"
          gameModeValidate(opcion.checked,opcion.value)
          break;
        case "PlayerVsPlayer":
          document.getElementById("firstPlayer").innerHTML = "Name Player"
          document.getElementById("secondPlayer").innerHTML = "Name Player 2"
          gameModeValidate(opcion.checked,opcion.value)
          break;
        
      }
    })
})




//   function myKeyUpFunction() {

//         let input = document.getElementById("user1").value;
      
//         console.log(input);
      
//       }