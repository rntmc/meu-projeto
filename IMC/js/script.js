import { modal } from "./modal.js"
import { AlertError} from "./alert-error.js"
import {CalculateIMC, notANumber} from "./utils.js"

// Variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault() //padrao de um submit é enviar o formulario e recarregar a pagina

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = CalculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}

