//configuracion del canvas
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight; 

//Evento para asegurarnos de que el size del render sucediendo en el canvas coincida con el size del DOM
function updateCanvasSize(){
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
    // Más info sobre la funcion getBoundingClientRect() disponible en los elementos HTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

    //Al actualizar el aize del canvas automanticamente se "limpia" borrando lo que hayamos renderizado. Por ello en este ejemplo renderizamos nuevamente el rectangulo para verlo en pantallaya que no se esta renderizando constantemente mediante un requestFrame Animation, cuando configuremos eso ya no sera necesario llamar la funcion de dibujo o render aqui

    renderRectangle();
}

//renderiza usando API de dibujo
function renderRectangle(){
    //define el color de relleno
    CTX.fillStyle = "aqua";

    //Dibujo de rectangulo en el CANVAS
    //Sintaxis siendo (x,y,width,height)
    CTX.fillRect(10,10,150,100);
}

//Ejecutar codigo
window.addEventListener("resize",updateCanvasSize);
renderRectangle();