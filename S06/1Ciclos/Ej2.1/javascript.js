const PI2 = Math.PI * 2;
const CANVAS = document. getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.heght = window.innerHeight;

function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//Primero creamos una funcion para renderizar las figuras que queremos para simplificar el codigo que escribiremos en los ciclos or y while
function renderCircleRed(x, y) {
    CTX.fillStyle = "#ff0000";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}

function renderCircleGreen(x, y) {
    CTX.fillStyle = "#00ff00";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}


//Creamos las variables que estaremos modificando en cada frame, en este caso las variable de posicion de las figuras y en el contador que necesitamos para el "cicl while" ya que no cuenta con uno como lo tiene el "ciclo for"
let redCircleX = 0;
let greenCircleX = 0;
let whileCounter = 0;

function frame(){
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    //Tras limpiar el canvas, el primer ciclo para renderizar 10 irculos es este ejemplo
    for (let i = 0; i < 10; i++){
        //Aqui estamos calculando la posicion de cada circulo, con una distancia de 35px entre sus centros, el primer circulo estara en la coordenada x 0*35, el segundo en 1*35, el segundo en 2*35(aka70) and so on.\
        redCircleX = i * 35; 
        renderCircleRed(redCircleX, 35);
    }

    //Para el contador del while, necesitamos reiniciar en cada frame a 0, asi como en la sintaxis del cicl for, cada vez que se ejecuta, el indice "i" vale 0, aqui lo estamos haciendo ya que el while no cuenta con esa variable indice en su declaracion
    whileCounter = 0;

    //De igual forma, debemos reiniciar la pos del circulo verde para que se cumpla la condicion al ejecutar nuestro codigo en el siguiente frame
    greenCircleX = 0;

    //La condicion que estanos estableciendo para ejecutar es que la posicion del ultimo circulo verde este dentro de los limites del canvas o dicho de otra manera, que haya espacio para dibujar otro circulo en el canvas, dependiendo del canvas los circulos que caben
    while(greenCircleX < window.innerWidth){

        greenCircleX = whileCounter * 60;
        renderCircleGreen(greenCircleX,90);

        //Similar al ciclo for, estamos usando el operador "++" para incrementar en 1 unidad cada repeticion del ciclo while
        whileCounter++;
    
    }
requestAnimationFrame(frame);

}
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(frame);