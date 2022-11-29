// Uso dos colchetes=>
 let frutas:string[]=['mamão', 'abacaxi','manga','banana']

 console.log(frutas)

 
// Map
 frutas.map((item)=>(
    console.log(item)
 ))

 // Array Object =>
 let frutasObject:Array<string>=['mamão', 'abacaxi','manga','banana']

 // Metodo Push => Adiciona Item no Array
 let idiomas : Array<string> = ['Portugues', 'Inglês', 'Espanhol', 'Italiano']
idiomas.push('Frances')
console.log(idiomas)

// Método Length
console.log(`Você sabe falar ${idiomas.length} idiomas.`)

//Spread Operator

let listaNum =[1,2,3,4,5]
listaNum =[...listaNum, 6,7,8,9,10]