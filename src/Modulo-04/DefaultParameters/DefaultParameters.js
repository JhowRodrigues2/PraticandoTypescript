"use strict";
// exemple01 - desconto ja está explicito o seu valor
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
//exemple02 
function exibirMSG(msg, saudar = 'fala,pessoal!') {
    return saudar + ' ' + msg;
}
//exemple03
function exibirNome(nome, sobrenome = 'Rodrigues') {
    return nome + ' ' + sobrenome;
}
