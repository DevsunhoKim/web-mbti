import { questions } from './data.js'

const proressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''


function renderQuestion() {
const question =questions[currentNumber]
numberEl.innerHTML =question.number
questionEl.innerHTML = question.question
choice1El.innerHTML = question.choices[0].text
choice2El.innerHTML = question.choices[1].text
proressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

renderQuestion()