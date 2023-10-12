//variables
let tiempoEspera = 100; // El tiempo se especifica en milisegundos (en este caso, 2 segundos)
let caja2 = document.getElementById("caja2");
//evento
setTimeout(mostrarCaja, 400);


function mostrarCaja(){
    caja2.classList.add("caja2");
}
