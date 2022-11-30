/* Deve usar o unknown no lugar do any quando não se declara o tipo explícito, unknown fará uma verificação antes de realizar qualquer operação quando for executar.
Todos os tipos podem ser atrabuídos como unknown
*/

// exemplo

let valorVariavel: unknown;
valorVariavel = true
valorVariavel= 123
valorVariavel='Olá'

console.log(valorVariavel)

