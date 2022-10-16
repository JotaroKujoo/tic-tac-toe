


//OBTENEMOS LOS USUARIOS Y EL MODO DE JUEGO 


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



