const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


/*///// 1. Definición del círculo como un objeto {} ///*/
let circulo = {
   // Empezamos definiendo las "propiedades" del objeto, es decir los datos, como lo son: color, grosor de linea, posicion y velocidad; aunque pueden ser más. ///*/
    borderColor: "#00ff99",
    borderWidth: 4,
    x: 0,
    y: 0,
    speed: {
        x: 0.7,
        y: 0.3
    },

    //Continuamos con los "metodos" del objeto, es decir las funciones, como lo son: actualizar la pos para crear la "animacion" y los comandos para renderizar; aunque pueden ser mas
    updatePosition(){
        this.x += this.speed.x;
        this.y += this.speed.y;

        //Algo interesante que sucede con los objetos es que se activa un comando llamado "this", que hace referencia al objeto que posee dichas propiedades/metodos siempre y cuando se utilice dentro del mismo objeto. Esto es parte del concepto de programacion de js llamado "scope". 
        //Nos permite hacer operaciones como this.x += this.speed.x, que es una sintaxis mas corta para decir circulo.x += circulo.speed.x y que tiene otros usos que veremos mas adelante
    }
    
    draw: function(){
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
        
        //En esta funcion de render pueden apreciar como ademas de eer las propiedades del objeto usando "this", tambien leemos y ejecutamos los metodos/funciones del objeto, como updatePosition() 
    }

 
}




/*///// 2. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    circulo.draw();

    requestAnimationFrame(render);
}



/*///// 3. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);




/* Happy Coding! 👾 */

// Documentacion sobre this y el "scope" o contexto:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D