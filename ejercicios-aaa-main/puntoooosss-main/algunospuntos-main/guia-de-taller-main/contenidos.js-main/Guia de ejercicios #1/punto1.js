'use strict';
let num1;
let num2;

num1=parseFloat(prompt("Ingrese un número"));
num2=parseFloat(prompt("Ingrese un número"));

function suma (num1,num2){
     return num1 + num2;

}
function resta (num1,num2){
    return num1 - num2;

}
function multiplicacion (num1,num2){
    return num1 * num2;

}
function division (num1,num2){
     return num1 / num2;

}

suma =suma(num1,num2);
resta =resta(num1,num2);
multiplicacion =multiplicacion(num1,num2);
division =division(num1,num2);

console.log(suma, resta, multiplicacion, division);