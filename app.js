let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor")
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        console.log(intentos);
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = " ";
    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales()

}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Indica un numero del 1 al 10");
    generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

condicionesIniciales();