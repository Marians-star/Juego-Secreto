let numeroSecreto = 0;
let contadorIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (contadorIntentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste el numero en ${contadorIntentos} ${(contadorIntentos===1?"vez":"veces")}`)
        document.getElementById ("reiniciar").removeAttribute('disabled');
    }else {
        //EL usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ("p", "El numero secreto es menor")
        } else {
           asignarTextoElemento ("p", "El numero secreto es mayor") 
        }
        contadorIntentos ++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja (){
    let ValorCaja = document.querySelector("#valorUsuario").value ="";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p", "Ya se sortearon todos los numeros posibles");
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
         } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }
}

function condicionesiniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto!!!");
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
     //Inicializar el numero de intentos
    condicionesiniciales ();
    //Deshabilitar boton juego nuevo
    document.querySelector ('#reiniciar').setAttribute('disabled', 'true');
}

condicionesiniciales();


