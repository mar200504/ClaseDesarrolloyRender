const mouse_x_dom_element = document.getElementById("x-target");
const mouse_y_dom_element = document.getElementById("y-target");

let x_coordinates = 0;
let y_coordinates = 0;

const x_base_string = 'Mouse X:';
const y_base_string = 'Mouse Y:';

let x_final_string = '';
let y_final_string = '';

function printCoordinatesInDom(event) {
    x_coordinates = event.clientX;
    x_coordinates = x_coordinates.toString();

    x_final_string = x_base_string + x_coordinates;
    mouse_x_dom_element.innerText = x_final_string;

    y_coordinates = event.clientY;
    y_coordinates = y_coordinates.toString;

    y_final_string = y_base_string + y_coordinates;
    mouse_y_dom_element.innerText = y_final_string;

}

document.addEventListener("mousemove", printCoordinatesInDom);