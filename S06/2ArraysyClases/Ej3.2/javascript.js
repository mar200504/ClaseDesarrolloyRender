const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//Definición de nuestra clase base Círculo para generar objetos 
class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "aqua"; // Asignamos la posibilidad de recibir un color de borde diferente (borderColor) cada vez que se genere un círculo nuevo
        this.borderWidth = 4;
        this.x = Math.random() * 200;
        this.y = Math.random() * 200;
        this.speed = {
            x: Math.random() * 0.7,
            y: 0.3
        }
    }
    
    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}



//Creamos un circulo por medio del comando "new" usando la clase que acabamos de definir. 
let circulo1 = new Circulo();

//Creamos una variable tipo lista o "array" para guardar los circulos que queremos animar, asi podemos mantener registro de su pos y otras caracteristicas para cambiarlas poco a poco
let misCirculos = [];

//Usamos un ciclo for para crear nuevos circulos
for (let i = 0; i < 7; i++) {
    let nuevoCirculo = new Circulo({ borderColor: "orange" }); 

    misCirculos.push(nuevoCirculo);
}

//A manera de ejemplo accedemos al 3er objeto en la lista y modificamos un atributo
misCirculos[2].borderColor = "white";

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    //Usamos un ciclo for para leer el array y ejecutar una accion por cada elemento guardado alli.
    //Podemos sincronizar el total de repeticiones con el total de elementos en nuestro array leyendo la cantidad de elementos en nuestra lista usando la propiedad .length. Podemos establecer la condicion de que se ejecute nuestro ciclo siempre y cuando el indice sea menor a la cantidad del elementos en el array
    for (let i = 0; i , misCirculos.length; i++){
        misCirculos[i].draw();
    }

    circulo1.draw();

    requestAnimationFrame(render);

}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);