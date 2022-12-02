
// Tuplas simples 
let people: [string,string,number];
people=['Jhow Rodrigues','front end developer', 29]; 

// Outra forma de usar Tuplas
let pessoa2:[Nome:string, posicao:string, idade:number]=['Jhow Rodrigues','front end developer', 29]; 

// tuplas com spreak operator - Indica que o todos possui o mesmo type, independente do tamanho da Tupla
let listFrutas: [string,...string[]] = ['mamão','Maçã','Melancia']
console.log(...listFrutas)

// Lista Hetegênea de Tupla
let listaFrutas2:[number,boolean,...string[]]=[5,true,...listFrutas]

// Tuplas em funções

function listarPessoas(nomes:string[], idades:number[]){
return[...nomes,...idades]

}
let result = listarPessoas(['Jhow','Maria'],[34,68])