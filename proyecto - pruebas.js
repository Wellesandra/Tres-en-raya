//Proyecto de TeachTech. Se trata de desarrollar un tres en raya.

// Casillas del tres en raya
//Se obtiene un nodeList object (similar a un array)
var casillas=document.querySelectorAll('.casilla');

var casilla1=casillas[0];
var casilla2=casillas[1];
var casilla3=casillas[2];
var casilla4=casillas[3];
var casilla5=casillas[4];
var casilla6=casillas[5];
var casilla7=casillas[6];
var casilla8=casillas[7];
var casilla9=casillas[8];





//Variables del jugador
var dificultad = 1;
var juegaCon = "circulos";
var turno = "jugador";



//FUNCIONES: Parte 1. No relacionadas con el juego en sí.
// guardarNombre();
function guardarNombre(){
    var jugador = window.prompt('Introduce tu nombre', "Puedes usar un seudónimo");
    if (jugador != null) {
        document.getElementById("nombreJugador").innerHTML = "Espero que te guste el juego, " + jugador + ".";}
    return;
}
//La persona que juega escoge tanto la dificultad y la ficha (con un cambio de texto). 
//Si no fuera así, default: círculo y dificultad 1.
function seleccionarDificultad(eleccionDicultad){

    if (eleccionDicultad==1){
        dificultad=1;
    } else if (eleccionDicultad==2){
        dificultad=2;
    } else if (eleccionDicultad==3){
        dificultad=3;
    } else{
        dificultad=1;
    }
    document.getElementById("textoDificultad").innerHTML="La dificultad escogida es " +dificultad;
    return dificultad;
}
function juegaConQueFicha(eleccion){
    if (eleccion==1){
        juegaCon="circulos";
    } else if (eleccion==2){
        juegaCon="cruces";
    } else{
        juegaCon="circulos";
    }
    document.getElementById("textoJuegasCon").innerHTML="Has elegido jugar con " +juegaCon;
    return juegaCon;
}
//Elimina las clases de los tokens
function reset(){
    document.querySelectorAll(".fichaCirculo").forEach(function(token) {
        token.classList.remove("fichaCirculo");
    });
    document.querySelectorAll(".fichaCruz").forEach(function(token) {
        token.classList.remove("fichaCruz");
    });    
}


//FUNCIONES: Parte 2. Tres en raya.
function colocarFicha(casilla){

    if (casillas[casilla].classList.contains("fichaCirculo") || casillas[casilla].classList.contains("fichaCruz")) {
        window.alert('Esta celda ya está ocupada'); 
       }
    if (casillas[casilla] != null) {
        if (juegaCon =="circulos") {
            casillas[casilla].classList.add("fichaCirculo");
        } else {
            casillas[casilla].classList.add("fichaCruz");
        }
    }
    condicionVictoria();  
    condicionFinJuego();
    juegaMaquina();
                  
}                



function juegaMaquina(){
    
    if (dificultad==1){  

        for(i= 0; i<=8; i++){
            if (casillas[i] != null){                                  
                if (juegaCon =="circulos"){
                    casillas[i].classList.add("fichaCruz");
                    break;
                } else {
                    casillas[i].classList.add("fichaCirculo");
                    break;
                }            
            }            
        }
    }
}    


function condicionFinJuego(){
  
    var totalOes = document.getElementsByClassName('fichaCirculo').length;
    var totalXes = document.getElementsByClassName('fichaCruz').length;
    let totalTokens = totalOes + totalXes;
    if (totalTokens>=9){
        window.alert("Habéis quedado empate");
    }
}


//Próximos objetivos
function condicionVictoria(){
    // var c1=casilla1.classList;
    // var c2=casilla2.classList;
    // var c3=casilla3.classList;
    // var c4=casilla4.classList;
    // var c5=casilla5.classList;
    // var c6=casilla6.classList;
    // var c7=casilla7.classList;
    // var c8=casilla8.classList;
    // var c9=casilla9.classList;
    // if (c1.value == c2.value && c2.value == c3.value||c4.value == c5.value && c5.value == c6.value||c7.value == c8.value && c8.value == c9.value||
    // c1.value == c4.value && c4.value == c7.value||c2.value == c5.value && c5.value == c8.value||c3.value == c6.value && c6.value == c9.value||
    // c1.value == c5.value && c5.value == c9.value||c3.value == c5.value && c5.value == c7.value){
    //     window.alert('Has ganado al tres en raya, <br> ¡¡Enhorabuena!!')
    // }
}

//PRÓXIMOS PASOS: ESTADÍSTICAS
 // Constantes para dar valor a las estadísticas y calcular el winrate//
const ratioFacil = 1;
const ratioMedio = 2;
const ratioDificil = 5;
//Variables auxiliares para las estadísticas de cada jugador por sesión
let jugadas=0;
let ganadas=0;
let perdidas=0;
let empatadas=0;
let winrate=0;

    class estadisticasJugador {
        constructor(nombre, totalJugadas, victorias, derrotas, empates) {
           this.nombre = nombre;
           this.totalJugadas = totalJugadas;
           this.victorias = victorias;
           this.derrotas = derrotas;
           this.empates = empates;
        }
    }
    
    class victorias {
        constructor(total, enFacil, enMedio, enDificil) {
           this.total = total;
           this.enFacil = enFacil;
           this.enMedio = enMedio;
           this.enDificil = enDificil;
        }
    }
    
    class derrotas {
        constructor(total, enFacil, enMedio, enDificil) {
           this.total = total;
           this.enFacil = enFacil;
           this.enMedio = enMedio;
           this.enDificil = enDificil;
        }
    }
    
    class empates {
        constructor(total, enFacil, enMedio, enDificil) {
           this.total = total;
           this.enFacil = enFacil;
           this.enMedio = enMedio;
           this.enDificil = enDificil;
        }
    }


    function guardarEstadisticas(){
        //si se da la condición de victoria y/o si no quedan espacios vacios
        //Actualizar contador de estadisticasJugador
            return;
    }

    function calcularWinrate(jugador){
        let victorias= jugador.victorias.enFacil*ratioFacil + jugador.victorias.enMedio*ratioMedio + jugador.victorias.enDificil*ratioDificil;
        let empates= jugador.empates.enFacil*ratioFacil + jugador.empates.enMedio*ratioMedio + jugador.empates.enDificil*ratioDificil;
        let derrotas= jugador.derrotas.enFacil*ratioFacil + jugador.derrotas.enMedio*ratioMedio + jugador.derrotas.enDificil*ratioDificil;

        winrate= victorias - derrotas + (0.5*empates);
        return winrate
    }