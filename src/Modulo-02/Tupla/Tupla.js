"use strict";
// Tuplas simples 
let people;
people = ['Jhow Rodrigues', 'front end developer', 29];
// Outra forma de usar Tuplas
let pessoa2 = ['Jhow Rodrigues', 'front end developer', 29];
// tuplas com spreak operator - Indica que o todos possui o mesmo type, independente do tamanho da Tupla
let listFrutas = ['mamão', 'Maçã', 'Melancia'];
console.log(...listFrutas);
// Lista Hetegênea de Tupla
let listaFrutas2 = [5, true, ...listFrutas];
// Tuplas em funções
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let result = listarPessoas(['Jhow', 'Maria'], [34, 68]);
