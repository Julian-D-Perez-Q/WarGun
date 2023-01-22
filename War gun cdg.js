let ataqueJugador
let ataqueEnemigo
let vidasJugador = 8
let vidasEnemigo = 5

function iniciarJuego(){
    let seccionElejirAtaque = document.getElementById("elejir-ataque")
    seccionElejirAtaque.style.display = "none"

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let btnArma = document.getElementById("selecciona-arma")
    btnArma.addEventListener("click", seleccionarArmaJugador)

    let btn3mm = document.getElementById("3-mm")
    btn3mm.addEventListener("click", ataque3mm)

    let btn45 = document.getElementById("45")
    btn45.addEventListener("click", ataque45)

    let btnCalibre = document.getElementById("calibre")
    btnCalibre.addEventListener("click", ataqueCalibre)

    let boton_reiniciar = document.getElementById("volver-jugar")
    boton_reiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarArmaJugador(){
    let seccionElejirArma = document.getElementById("elejir-arma")
    seccionElejirArma.style.display = "none"

    let seccionElejirAtaque = document.getElementById("elejir-ataque")
    seccionElejirAtaque.style.display = "flex"

    let inputRifle = document.getElementById("Rifle")
    let inputMp40 = document.getElementById("Mp-40")
    let inputRevolver = document.getElementById("Revolver")
    let spanArma = document.getElementById("arma")

    if(inputRifle.checked){
        alert("Seleccionaste un Rifle")
        spanArma.innerHTML = "Rifle🔫"
    } 
    else if(inputMp40.checked){
        alert("Seleccionaste una Mp-40")
        spanArma.innerHTML = "Mp-40🔫"
    } 
    else if(inputRevolver.checked){
        alert("Seleccionaste una Revolver")
        spanArma.innerHTML = "Revolver🔫"
    }
    else{
        alert("AUN NO HAS SELECCIONADO UNA ARMA!")
        reiniciarJuego()
    }
    seleccionarArmaEnemigo()
}

function seleccionarArmaEnemigo(){
    let enemigoAleatorio = aleatorio(1,3)
    let spanArmaEnemigo = document.getElementById("arma-ene")

    if(enemigoAleatorio == 1){
        spanArmaEnemigo.innerHTML = "Rifle🔫"
    }
    else if(enemigoAleatorio == 2){
        spanArmaEnemigo.innerHTML = "Mp-40🔫"
    }
    else {
        spanArmaEnemigo.innerHTML = "Revolver🔫"
    }
}


function ataque3mm(){
    ataqueJugador = "3mm"
    ataqueAleatorioEnemigo()
}
function ataque45(){
    ataqueJugador = "45ACP"
    ataqueAleatorioEnemigo()
}
function ataqueCalibre(){
    ataqueJugador = "Calibre12"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "3mm"
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = "45ACP"
    } 
    else {
        ataqueEnemigo = "Calibre12"
    }
    combate()
}

function combate(){
    let spanVidas = document.getElementById("vidas")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate")
    }
    else if (ataqueJugador == "Calibre 12" && ataqueEnemigo == "3mm"){
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "3mm" && ataqueEnemigo == "45ACP"){
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "45ACP" && ataqueEnemigo == "Calibre 12"){
        crearMensaje("Ganaste")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje("Perdiste")
        vidasJugador = vidasJugador - 1
        spanVidas.innerHTML = vidasJugador
    }
    revisarVidas()
}

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Atacaste con " + ataqueJugador + ", el enemigo ataco con " + ataqueEnemigo + " - " + resultado

    seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(final){
let seccionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = final

    seccionMensajes.appendChild(parrafo)

    let btn3mm = document.getElementById("3-mm")
    btn3mm.disabled = true

    let btn45 = document.getElementById("45")
    btn45.disabled = true

    let btnCalibre = document.getElementById("calibre")
    btnCalibre.disabled = true

    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "flex"
}

function revisarVidas(){

    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicidades, Ganaste el Duelo.")
    }else if (vidasJugador == 0){
        crearMensajeFinal("Lastimosamente, Perdiste el duelo.")
    }
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)