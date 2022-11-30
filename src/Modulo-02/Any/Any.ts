// Tipo Any
const a:any=888
const b:any=['Jhow']
// No exemplo não irá apresentar erro, pois any pode ser todos os tipos.
const resultado = a + b

//Quando usar? =>

const formulario :{[camposForm:string]:any} ={ // o retorno é any, pois possui diferentes tipos, ex: Nome = string, idade= number
nome:'Jhow',
sobrenome:'Rodrigues',
idade:29
}