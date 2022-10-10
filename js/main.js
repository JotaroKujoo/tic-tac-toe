


//OBTENEMOS LOS USUARIOS


const getUser = () => {
    let inputValue = document.getElementById("user1").value;
    return inputValue
}
  
  
const getUser2 = () => {
  let inputValue = document.getElementById("user2").value;
  return inputValue 
}
  


const saveUsers = (user1,user2) => {
  sessionStorage.setItem("first",user1)
  sessionStorage.setItem("second",user2)
}



const buttonSave = document.getElementById("saveButton")

buttonSave.addEventListener("click",saveUsers(getUser(),getUser2()))
  





let opciones = Array.from(document.getElementsByClassName("radio"))

opciones.map((opcion)=>{
    opcion.addEventListener("click",()=>{
      switch ( opcion.value){
        case "PlayerVsCPU":
            document.getElementById("firstPlayer").innerHTML = "Name Player"
            document.getElementById("secondPlayer").innerHTML = "Name CPU"
          break;
        case "CPUvsPlayer":
          document.getElementById("firstPlayer").innerHTML = "Name CPU"
          document.getElementById("secondPlayer").innerHTML = "Name Player"
          break;
        case "PlayerVsPlayer":
          document.getElementById("firstPlayer").innerHTML = "Name Player"
          document.getElementById("secondPlayer").innerHTML = "Name Player 2"
          break;
        
      }
    })
})

//   function myKeyUpFunction() {

//         let input = document.getElementById("user1").value;
      
//         console.log(input);
      
//       }