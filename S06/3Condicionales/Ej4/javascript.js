/*Vamos a modificar el color del borde de un div segun el size de la pantalla
El default es blanco, si el ancho de la pantalla es < a 800px sera rojo
Si es => a 800px sera verde
Si es => a 1200px sera azul
*/

//Establecemos las variables que determinen el limite del ancho de la pantalla para crear nuestra condicion
let screenThreshold = 800;
let upperScreenThreshold = 1200;

//Luego identificaremos nuestro <div> que existe en el HTML
const DIV = document.getElementById("tester");

//Crearemos nuestra funcion con la condicion que evaluara el size de la ventana para cambiar el color del borde segun la regla
function isWindowWideEnough(event){
    if(window.innerWidth >= upperScreenThreshold){
        DIV.style.borderColor = "blue";
    } else if(window.innerWidth >= screenThreshold){
        DIV.style.borderColor = "00ff00";
    } else{
        DIV.style.borderColor = "red";
    }
}

//Finalmente configuramos el evento "window resize" para escuchar cuando la ventana cambie de size y asi disparar nuestra funcion 
window.addEventListener("resize", isWindowWideEnough);