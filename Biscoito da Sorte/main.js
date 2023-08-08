/*Variaveis*/

const screen1 = document.querySelector(".container-front")
const screen2 = document.querySelector(".container-back")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")

let messages = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'Muita sorte na Vida', 'Siga seu caminho', 'Dinheiro e sempre bom']

/*Eventos*/

btnOpen.addEventListener('click',handleButtonOpening)
btnReset.addEventListener('click',handleResetClick)


/*Funcoes*/

function randomPhrase (messages) {
  return messages[Math.floor((Math.random()*messages.length))]
}

function handleButtonOpening() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
 
  screen2.querySelector('p').innerText = randomPhrase(messages)
}









