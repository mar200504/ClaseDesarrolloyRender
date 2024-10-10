//Ejemplo de ciclo "for" aka "for loop"
//Puedes intentar modificar el numero 5 por 10 o 200 para probar

for (let index = 0; index < 5; index++){
    const DOM_ELEMENT = document.createElement("h1");
    DOM_ELEMENT.innerText = `Element index: ${index}`;
    document.body.appendChild(DOM_ELEMENT);
}

//Ejemplo de ciclo "while"
let saludo = "Hola"

const DOM_ELEMENT_2 = document.createElement("p");
DOM_ELEMENT_2.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_2);

const DOM_ELEMENT_3 = document.createElement("p");
DOM_ELEMENT_3.innerText = `saludo.length (o cantidad de caracteres): ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_3);

while (saludo.length < 20) {
    saludo += "a";
}

/*Hay 2 cosas interesantes oasando aqui: 
    1 la sintaxis saludo.lenght
    2 el operador matematico o aritmetico en una variable de texto y no numerica

Sobre la sintaxis "saludo.lenght":
Cada tipo de dato tiene funciones y propiedades incluidas por defecto, sin que nosotros los agreguemos y similar a la sintaxis de los objetos, podemos acceder a ellos por medio del punto "."
En ste caso, la propiedad "length" de un tipo de dato "texto" o " string" hace referencia a la cantidad de caracteres que tiene esa variable. "Hola" tiene 4 caracteres, entonces lo que esta ejecutando este bloque de codigo es agregarle la letra "a" al final del texto hasta cumplir la condicion de que la longitud de la cadena de texto sea menor a 20 se deje de cumplir.

Sobre el operador matematico:
A este uso del operador con variables de texto se le llama "concatenacion", que basicamente se trata de "unir" textos, y esta union la realiza al final de la primera variable.
En este ejemplo al conectar "hola" + "a" resulta en "holaa"'
*/

const DOM_ELEMENT_4 = document.createElement("p");
DOM_ELEMENT_4.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_4);

const DOM_ELEMENT_5 = document.createElement("p");
DOM_ELEMENT_5.innerText = `saludo.length (o cantidad de caracteres) después de modificarla en el ciclo while: ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_5);