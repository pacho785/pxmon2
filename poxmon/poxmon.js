function iniciarJuego() {
    let botonCompañeroJugador = document.getElementById("boton-compañero")
    botonCompañeroJugador.addEventListener("click", seleccionarCompañeroJugador)
}

function seleccionarCompañeroJugador() {
    let inputURSHIFU = document.getElementById("URSHIFU")
    let inputMETAGROSS = document.getElementById("METAGROSS")
    let inputZEKROM = document.getElementById("ZEKROM")
    let inputLUCARIO =document.getElementById("LUCARIO")
    let spanCompañeroJugador = document.getElementById("compañero-jugador")

    if (inputURSHIFU.checked) {
        spanCompañeroJugador.innerHTML = "URSHIFU"
    } else if (inputMETAGROSS.checked) { 
        spanCompañeroJugador.innerHTML = "METAGROSS"
    } else if  (inputZEKROM.checked){
        spanCompañeroJugador.innerHTML = "ZEKROM"
    } else if  (inputLUCARIO.checked){
        spanCompañeroJugador.innerHTML = "LUCARIO"
    } else [
        alert("SELECCIONA UN MASCOTA O PIERDE")
    ]

    seleccionarCompañeroEnemigo() 

}

function seleccionarCompañeroEnemigo() {
    let ataqueAleatorio = aleatoria(1,4)
    let spanMascotaEnemigo = document.getElementById("compañero-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "URSHIFU"
    } else if(ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "METAGROSS"
    } else if(ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "ZEKROM"
    } else {
        spanMascotaEnemigo.innerHTML = "LUCARIO"
    }
}

function aleatoria(min, max){ return Math.floor(Math.random() * (max - min + 1) + min); }

window.addEventListener("load", iniciarJuego)
