const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//Definir parametros de movimiento
let speed = {
    x1: 2,
    y1: 1,
    x2: 1,
    y2: 1
};

//Usaremos variables para definir la posicion de los circulos, asi al actualizar estas variables, los circulos seran renderizados en diferentes posiciones poco a poco
let circPos = {
    x1: 50,
    y1: 40,
    x2: 120,
    y2: 70
};

//Definit funcion de dibujo que estaremos repitiendo usando requestAnimationFrame()
function renderCircles(){
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    /*Secuencia de comandos para dibujar circulos o elipses
    1.Definir el estilo de la linea o relleno (color y grosor)
    2.Definir el inicio de la figura usando la funcion beginPath()
    3.Usar la funcion ellipse() para crear el circulo o elipse. los parametros que recibe esa funcion son: ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise)
        Ojo: 
        -Ellipsed crea circunferencias o fragmento de circunferencia, esto se define a traaves de los angulos: angulo de inicio y un angulo final, para dibujar una circunferencia conpleta el angulo inicial seria 0 y el final seria 360
        -Los angulos estan en radianes y no en grados esto quiere decir que debemos realizar la conversion a radianes para especificar el angulo
        -1 vuelta completa equivale a 360, que en radianes equivale a PI * 2 (3.1416 *2)
        -1/2 vuelta equivale a 360, que en radianes equivale a PI (3.1416)
        -"counterclockwise" es opcional
        *(Opcional)
        -Usar la funcion closePath() para trazar una linea entre el angulo (o punto de inicio) y el final
    4.Usar la funcion stroke() para renderizar el orde de la figura en el canvas // o usar full() para renderizar el relleno de la figura en el canvas
        -Nota: se pueden usar ambos y con diferentes colores: un estilo de relleno (CTX.fillStyle) y otro para el borde (CTX.strokeStyke)
    5.En caso de desear realizar mas circulos repetir pasos del 1 al 4 */

    CTX.strokeStyle = "#00FF99";
    CTX.lineWidth = 4;
    CTX.beginPath();
    CTX.ellipse(circPos.x1, circPos.y1, 30, 30, 0, 0, Math.PI);
    CTX.closePath();
    CTX.stroke();

    CTX.fillStyle = "#ff9900";
    CTX.beginPath();
    CTX.ellipse(circPos.x2, circPos.y2, 15, 15, 0, 0, PI2);
    CTX.fill();

  /*///// 4. Actualizaremos la posición de los círculos antes de llamar renderCircles en el siguiente frame ///*/
  circPos.x1 = circPos.x1 + speed.x1;
  circPos.y1 = circPos.y1 + speed.y1;
  
  circPos.x2 = circPos.x2 + speed.x2;
  circPos.y2 = circPos.y2 + speed.y2;
  
  
  requestAnimationFrame(renderCircles);
}



/*///// 5. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderCircles);