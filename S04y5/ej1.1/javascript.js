const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//Definir la posicion del rectangulo que vamos a dibujar como una variable para que sea modificada en cada frame y creemos la ilusion de animacion
let offsetX = 0;

//Definir funcion a repetir usando requestFrameAnimation
function renderRectangle(){

    //Limpiar el canavas para dibujar nuevamente sobre el
    CTX.clearRect(0,0,CANVAS.width,CANVAS.height)

    CTX.fillStyle = "aqua";
    CTX.fillRect = (offsetX, 10, 150, 100);

    //Calcular la nueva posicion en x con offsetX para que en el siguiente frame tenga una posicon distinta creando movimiento
    offsetX = offsetX + 1;

    //invocar la funcion requestAnimationFrame() usando como callback esta misma funcion para generar la recursion para generar la recursion o bucle que genera la ulusion de animacion
    requestAnimationFrame(renderRectangle);
}

//Ejecutar nuestro codigo
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame