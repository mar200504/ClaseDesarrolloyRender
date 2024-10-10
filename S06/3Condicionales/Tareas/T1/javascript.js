//inspo del ej2.1-s6

//base de documento de dibujo
const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

//adjusment del canvas al display
function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//definiendo mis circulos
function renderCircleRed(x, y) {
    CTX.fillStyle = "#ab1c71";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}

//variable de la pos de mis circulos
let CircleY = 0;

//contador para agregar circulitos
let whileCounter = 0;


//funcion que animara mis circulitos en cada frame
function frame() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    //for crea circulos iniciando en valor de 50*0.5 para que no empiece en 0 y el primer circulo se vea completo, se limita por el ancho del canvas, posicion en x es 50 y en y depende del for
    for (let i = 0.5; i < window.innerWidth; i++) {
        CircleY = i * 50; 
        renderCircleRed(50, CircleY);
    }

    requestAnimationFrame(frame);
}




window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(frame);