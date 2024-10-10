

//Este ejemplo imprime los valores en el DOM para facilita la previsualizacion, pero lo importante es lo que esta sucediendo en js

const TITLE1 = document.getElementById("console1");
const TITLE2 = document.getElementById("console2");
const TITLE3 = document.getElementById("console3");
const TITLE4 = document.getElementById("console4");
const TITLE5 = document.getElementById("console5");
const TITLE6 = document.getElementById("console6");
const TITLE7 = document.getElementById("console7");

//Ejemplos de resultados de Operadores Matematicos

//"**" es referente a elevar a una potencia, en este caso seria 2 a la 3 o 2 al cubo
let ejemplo1 = 2 ** 3;
TITLE1.innerText = ejemplo1;

//"+=" es una abreviacion para sumar a una variable, tambien hay abreviaciones para otras operaciones matematicas como: +=, -=, *=, /=

ejemplo1 += 5;
TITLE2.innerText = ejemplo1;

//El operador de suma (+) puede usarse para unir cadenas de texto
let ejemploA = "Soy un texto.";
let ejemploB = "Y yo oyto texto.";
let ejemploC = ejemploA + ejemploB;

TITLE3.innerText = ejemploC;

//Ejemplos de resultados de Operadores de Comparacion

//">" compara 2 valores de una manera que se traduciria como el valor a la izq del simbolo > es mayor que el valor a la der? 
let ejemplo2 = 30;
let booleano1 = ejemplo1 > ejemplo2;

TITLE4.innerText = booleano1;

//"typeof", es un comando especial que nos permite saber el tipo de dato de una variable:numero, texto, booleano, etc.
TITLE5.innerText = typeof ejemplo1;

TITLE6.innerText = typeof booleano1;

let booleano2 = typeof ejemplo1 == typeof ejemplo2;
TITLE7.innerText = booleano2;

