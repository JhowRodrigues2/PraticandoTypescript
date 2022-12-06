// exemple01

interface Carro{
    marca:string
    modelo:string
    ano:number
    placa:string
}

function detalheCarro(carro:Carro){
    return `Marca:${carro.marca}, Modelo:${carro.modelo},
     ano:${carro.ano}, placa:${carro.placa}`
}

const infoCarro = {
    marca:'Fiat',
    modelo:'Punto',
    ano:2013,
    placa:'PZZ5864'
}
console.log(detalheCarro(infoCarro))

//exemple02 - props opicionais
interface Livro{
    titulo:string
    autor:string
    pag?:number
}
const livro:Livro={
    titulo:'Clean Code',
    autor:'Robert Martin'
}
console.log(livro)