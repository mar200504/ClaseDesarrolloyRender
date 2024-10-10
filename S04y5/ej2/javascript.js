const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight; 

function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function renderOneLine(colorTrazo, grosorLinea,origenX, origenT, finalX, finalY){
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenX, origenY);
    CTX.lineTo(finalX,finalY);
    CTX.stroke();
}

//Definir funcion de dibujo que estaremos repitiendo usuando requestAnimatioFrame()
function renderLines() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    //Secuencia de comandos para dibujar una linea
    //1.Definir el estilo de la lina (color o grosor)
    //2.Definir el inicio de la linea usando la funcion beginPath()
    //3.Definir el punto de origen de la linea usando la funcion moveTo(x, y)
    //4.Definir otro punto en el canvas al cual se va a conectar la linea usando lineTo(x, y)
    //5.Definir tantos puntos como se desee *(opcional) usar la funcion closePath() para trazar una linea desde el ultimo punto hasta el origen de la linea.
    //6.Usar la funcion stroke() para renderizar la linea en el canvas
    //7.En caso de desear realizar mas lineas, se repiten los pasos del 1 al 6

    
    CTX.strokeStyke = "auqa";
    CTX.lineWidth = 20;

    CTX.beginPath();
    CTX.moveTo(30, 30);
    CTX.lineTo(160, 160);
    CTX.lineTo(360, 360);
    CTX.closePath();
    CTX.stroke();

    CTX.strokeStyle = "#ab3eff";
    CTX.lineWidth = 11;
    CTX.beginPath();
    CTX.moveTo(100, 30);
    CTX.lineTo(60,260)
    CTX.stroke();

    renderOneLine("green", 5, 0, 0, 50, 500);

    requestAnimationFrame(renderLines);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);