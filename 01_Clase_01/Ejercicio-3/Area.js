// 3 - Pedir el radio al usuario para calcular el área de un círculo.Buscad la fórmula para calcular la superficie del círculo y el valor de PI(con 4 decimales).

//  Mostrar el resultado del cálculo del área para ese radio, mediante la frase: “el área de un círculo con radio X es: XXX” . Debe haber tres variables: radio, pi y área. Test: para un radio de 22, el área es aprox. 1520.

// ----------------------------Version 1-------------------------

// let radio = prompt("Ingrese el radio, para calcular el área del círculo");
// let baseExp = Math.pow(radio, 2);
// let resArea = 0;

// resArea = Math.PI * baseExp;

// alert("El área de un círculo con radio X es: " + resArea.toFixed(4));


// -------------------Versión 2-------------------

let radio = prompt("Ingrese el radio, para calcular el área del círculo");

const pi = 3.1416;
let baseExp = radio * radio;

resArea = pi * baseExp;

alert("El área de un círculo con radio X es: " + resArea.toFixed(4));
