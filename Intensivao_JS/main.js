/*
alert(  "Hello World!")

let Number1 = Number(prompt("Insira o primeiro numero"))
let Number2 = Number(prompt("Insira o segundo numero"))

let sum = Number1 + Number2
alert(`A soma e ${sum}`)

let type = prompt("Insira algo:")

alert(typeof(type))

if (typeof(type) == "string") {
  alert("E uma string")
} else {
  alert("Nao e uma string!")
}

*/

let Number1 = Number(prompt("Insira o primeiro numero"))
let Number2 = Number(prompt("Insira o segundo numero"))

let sub = Number1 - Number2
alert(`A subtracao e ${sub}`)

let mult = Number1 * Number2
alert(`A multiplicacao e ${mult}`)

let div = Number1 / Number2
alert(`A divisao e ${div}`)

let checkEven = Number1 % 2

if (checkEven != 0) {
  alert("O numero inserido para a primeira variavel e impar")
} else {
  alert("O numero inserido para a primeira variavel e par")
}