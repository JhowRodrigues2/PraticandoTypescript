"use strict";
// exemple01 - Named Function
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const res = somarNumeros(1, 3);
// exemplo02 - Funao anonima
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá Mundo'));
// exemplo03 - arrow function
const saudar_03 = (mensagem) => {
    return mensagem;
};
