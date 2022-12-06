"use strict";
// exemple01
function detalheCarro(carro) {
    return `Marca:${carro.marca}, Modelo:${carro.modelo},
     ano:${carro.ano}, placa:${carro.placa}`;
}
const infoCarro = {
    marca: 'Fiat',
    modelo: 'Punto',
    ano: 2013,
    placa: 'PZZ5864'
};
console.log(detalheCarro(infoCarro));
const livro = {
    titulo: 'Clean Code',
    autor: 'Robert Martin'
};
console.log(livro);
