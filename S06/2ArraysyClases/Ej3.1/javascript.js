const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


//Definición del círculo como una "Clase" capaz de utilizarse como template para crear múltiples objetos, en este caso "círculos" ///*/
class Circulo {
    constructor(params = {}){
        //Estamos definiendo que la funcion "circulo" va a recibir sus paramedtros por medio de un solo objetos, sin necesidad de un orden especifico
        //Estamos definiendo un valor igual a un objeto vacio "{}", en caso de que no definamos ese parametro al invocar la funcion, se realizara la asignacion automatica "params = {}"
        this.borderColor = params.borderColor || "#00ff99";
        this.borderWidth = 4;

        //Math random genera un valor aleatorio entre 0 y 1, para ampliarlo lo multiplicamos 
        this.x = Math.random() * 200;
        this.y = Math.random() * 200;

        this.speed = {
            x: Math.random() * 0.7,
            y: 0.3
        }
    }


    // El método updatePosition() se define sin usar el comando "function" y sin usar una variable, simplemente está dentro de la definición de la clase y fuera del constructor()
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
        
        // Para invocar el método "updatePosition()" dentro de funciones en la clase tenemos que hacer referencia a la clase u objeto mismo por medio de "this".
    
    };
}

//Creemos un circulo usando la funcion "generadora" que acabamos de definir por medio del comando "new", guardandolo en variables para terner registro del circulo y actualizar su pos poco a poco en cada frame.
let circulo1 = new Circulo();

//Definimos la funcion de renderizado que estaremos repitiendo usando requestAnimationFrame()
function render(){
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    //Usamos un ciclo for para crear nuevos circulos
    for (let 1 = 0; 1 < 5; i++){
        //Definimos un param de color del borde para que los nuevos circulos sean deferentes al que creamos fuera del for
        let nuevoCirculo = new Circulo({borderColor: "ff6600"});

        //Importante llamar a la funcion que esta renderizando el objeto "circulo" en el canvas
        nuevoCirculo.draw();
    }
    
    //renderizamos nuestro circulo og que guardamos en circulo1
    circulo1.draw();

    requestAnimationFrame(render);
}



// 6. Ejecutar nuestro código 
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);