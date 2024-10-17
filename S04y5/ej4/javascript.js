const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize(){
    CANVAS.width = getBoundingClientRect().width;
    CANVAS.height = getBoundingClientRect().height;
}

let speed = {
    x1: 2,
    y1: 1
};

let imagePos = {
    x1: 0,
    y1: 0
};

//Crear la variable que va a recibir la informacion de la imagen a renderizar
let downloadingImage;

//Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame()
function renderImage(){
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    /*Secuencia de comandos para dibujar una imagen
    1.La imagen debe ser descargada por el navegador paea utilizarse
    2.A diferencia de las figuras que hemos dibujado hasta ahora que requieren estilo y declarar el inicio del trazo, para las imagenes solo necesitamos llamar la funcion haciendo referencia a la img que queremos renderizar.
    La sintaxis basica de la funcion es:
        drawImage(image, dx, dy). Estos 3 parametros son obligatorios:
        image: se refiere al codigo de la imagen cargada por el navegador
        dx: posicion en el eje x, partiendo de la esquina superior izquierda de la imagen.
        dy: posicion en el eje y, partiendo de la esquina superior izquierda de la imagen.

        Tambien puede recibir parametros adicionales para generar "spritesheets", como lo son: drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    */

    CTX.drawImage(downloadingImage, imagePos.x1, imagePos.y1);

    //Actualizar la posicion de la imagen antes de llamar renderImage en el siguiente frame

    imagePos.x1 = imagePos.x1 + speed.x1;
    imagePos.y1 = imagePos.y1 + speed.y1;

    requestAnimationFrame(renderImage);
}

//Inicializar nuestro codigo
window.addEventListener("resize", updateCanvasSize);

//Para renderizar una imagen en el canvas, el archivo conteniendo dicha imagen debe ser descargada por el navegador para poder utilizarse. Dependiendo del size del archivo y la velocidad del internet, esto puede tardar unos segundos (o minutos si no tenemos cuidado). Por ello, iniciaremos el loop de requestAnimationFrame hasta que la imagen haya sido descargada y este lista para usarse.

//Cargar image y crear variable conteniendo nuestra iamgen utilizando el constructor Image()
downloadingImage = new Image();

//Definir que queremos que suceda cuando termine de cargar la imagen
downloadingImage.onload = function(){
    requestAnimationFrame(renderImage);
};

//Asignar el "origen" o "source" de la imagen que queremos cargar, esto va a disparar inmediatamente la descarga (o "loading") y cuando termine,como si fuera un evento, disparara la funcion onload() que creamos en el paso anterior
downloadingImage.src = "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
