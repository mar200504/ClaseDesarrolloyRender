const element = document.getElementById("tester");
let start;
let offset = 0;

function move(timeStamp){
    //timeStamp es un "dato" que nos devuelve a forma de "parametro" la funcopn request animation frame automaticamente, e indica cuanto tiempo ha pasado desde la primera vez que se cargo el sitio.

    if (start === undefined){
        start = timeStamp;
    }
    //"start"  lo estamos usando como un marcador para calcular cuanto tiempo ha pasado desde la primera vez que se invoco la funcion requestAnimationFrame y el momento presente

    const elapsed = timeStamp - start;
    offset = Math.min(0.1 * elapsed, 500);
    //Math.min() es usado aqui para asegurarnosd que el elemento se detenga a los 500 px

    element.style.transform = `translateX(${offset}px)`;


    requestAnimationFrame(move);
}

requestAnimationFrame(move);
