//inspo ej3.2-s6 y ej4-s6.3

//la idea aqui es que el canvas cambie de color si un elemento del array sale del mismo, no estoy segura de que funcione como quiero apreciaria ayuda :)

//isnpo ej3.2-s6 y ej4-s6.3

const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

class Circulo {
    constructor(params = {}) {
        this.fillStyle =  "#d22f86"; 
        this.borderWidth = 7;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speed = {
            x: Math.random() * 5,
        }
    }
    
    updatePosition() {
        this.x += this.speed.x;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 50, 2, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}

let circulo1 = new Circulo();

let misCirculos = [];

for (let i = 0; i < 20; i++) {
    let nuevoCirculo = new Circulo({ borderColor: "orange" }); 
    misCirculos.push(nuevoCirculo);
}




misCirculos[2].borderColor = "#d22f86"




function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    
    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
      
      if (misCirculos[10].positionX > window.innerWidth){
      CANVAS.fillStyle = "#ff0000";
      }else{
      CANVAS.fillStyle = "#0000ff";
      }
  
    }
    requestAnimationFrame(render);
}


window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);

