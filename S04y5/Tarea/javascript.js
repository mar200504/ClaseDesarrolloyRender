/*\
ESTOY TENIENDO PROBLEMAS CON LA EJECUCION DE LOS PROGRAMAS POR LO QUE NO SE SI ESTE COIGO FUNCIONE, NO PUDE TESTEARLO, PERO MI LOGICA ME DICE QUE ASI IRIA, DEFINO LOS ELEMENTOS, ANALIZO EL MOVIMIENTO DEL MOUSE, EJECUTO MIS LINEAS

1.Dividir la pantalla en partes iguales para tener lineas equidistantes (seran 6)
window.innerWidth/= 6
2.multiplicar la linea por el resultado de la division para obtener la posicion en x1 de cada linea
3. la posicon en y1 = 0
4. conectar x2 y y2 al movimiento del mouse. 

quiero lineas moradas y relativamente gruesas 20px
*/

//variable de espacio 
let espacio = window.innerWidth/= 6;


//base de cualquier documento de dibujo
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight; 

//ajustando el canvas al display
function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//definiendo mis bellas lineas inspo en ej2-s5
function renderOneLine(colorTrazo, grosorLinea,origenX, origenY, finalX, finalY){
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenX, origenY);
    CTX.lineTo(finalX,finalY);
    CTX.stroke();
}

//aqui va lo del mouse cortesia de ej2-s3
let start;
let mouseX = 0;
let mouseY = 0;

function updateMouseCoords(eventData) {
    mouseX = eventData.clientX;
    mouseY = eventData.clientY;
}

document.addEventListener("mousemove",updateMouseCoords);


//repetire esto 6 veces creo que sera lo mas sencillo
//1
function drawLines(){
 CTX.strokeStyke = "4b1c71";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(espacio, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();

//2
 CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(espacio*2, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();
//3
 CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(espacio*3, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();
//4
 CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(espacio*4, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();

//5
 CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;;

    CTX.beginPath();
    CTX.moveTo(espacio*5, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();

//6
 CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(espacio*6, 0);
    CTX.lineTo(mouseX, mouseY);
    CTX.closePath();
    CTX.stroke();
  
  requestAnimationFrame(drawLines);
}

requestAnimationFrame(drawLines)