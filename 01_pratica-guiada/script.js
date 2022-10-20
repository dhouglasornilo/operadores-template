// Exercício de Operadores Aritméticos

let saldo = 15 + 22.40
console.log("Seu saldo inicial é:", saldo)

saldo = saldo - 12.34
console.log("Saldo atual:", saldo)

saldo = saldo / 3
console.log("O valor recebido por cada irmão é:", saldo)

saldo = saldo * 3.42
console.log("O valor do rendimento somado ao investimento foi de:", saldo)

saldo = saldo % 3
console.log("O valor restante para comprar o chicletinho é de:", saldo)

const multESoma = 2*2+2
console.log("Seu primeiro teste de multiplicação é:", multESoma)

const multESoma2 = 2*(2+2)

console.log("Seu segundo teste de multiplicação é:", multESoma2)

// Exercício de Operadores Relacionais

// = atribuição
// == valor
// === valor e tipo
// !== valor e tipo diferente

const comparacaoIgual = 5 === 5
console.log("5 === 5", comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log("5 !== 5", comparacaoDiferente)

const comparacaoTipo1 = 5 !== "5"
console.log("5 !== '5'", comparacaoTipo1)

const comparacaoTipo2 = "5" === "cinco"
console.log('"5" === "cinco"', comparacaoTipo2)

// number === number
const comparacaoTipo3 = typeof 5 === typeof 20
console.log('typeof 5 === typeof 20', comparacaoTipo3)


// string === string
const comparacaoTipo4 = typeof "5" === typeof "cinco"
console.log('typeof "5" === typeof "cinco"', comparacaoTipo4)


let num1 = 2
let num2 = 8
let resultado

resultado = num1 === num2
console.log("O primeiro número é igual ao segundo?", resultado)

resultado = num1 <= num2
console.log("O primeiro número é menor ou igual ao segundo?", resultado)

resultado = num1 > num2
console.log("O primeiro número é maior que o segundo?", resultado)

resultado = num1 < num2
console.log("O primeiro número é menor que o segundo?", resultado)


// Exercício de operadores lógicos

const a = "Quero dirigir um Celta 2012"
const b = "Sou maior de idade"
const c = "Consigo comprar o Celta por 22.000 reais"
const d = "Consigo alugar o Celta"
const e = "Tenho carteira de motorista"

// Quero dirigir o Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta

a
!b
b && !e
b && (c || d)
(b && e) && !e