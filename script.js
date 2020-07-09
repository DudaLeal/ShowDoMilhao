//Criando variaveis 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex //variaveis constantes para embaralhar as ordem das perguntas

startButton.addEventListener('click', startGame) //quando o startButton for clidado iniciará o jogo
nextButton.addEventListener('click', () => {  //quando o nextButton for clidado 
  currentQuestionIndex++ //irá sortiar questão 
  setNextQuestion() // iniciar a função setNextQuestion()
})

//inciar o jogo
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//definir próxima questão
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//mostra a questão
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//voltar ao design padrão a cada pergunda
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

//Quando selecionamos uma resposta
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

//status do botão de acordo com a resposta
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

//limpar o status do da página- certo o toda vez que mudar a pergunda
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//questões do jogo
const questions = [
  {
    question: 'Que tipo de animal é o pateta?',
    answers: [
      { text: 'Cavalo', correct: false },
      { text: 'Cachorro', correct: true },
      { text: 'Raposa', correct: false },
      { text: 'Burro', correct: false }
    ]
  },
  {
    question: 'Que animal se transforma em príncipe quando é beijado pela princesa nos contos infantis?',
    answers: [
     { text: 'Gato', correct: false },
      { text: 'Cobra', correct: false },
      { text: 'Vaca', correct: false },
      { text: 'Sapo', correct: true }
    ]
  },
  {
    question: 'Qual fruto é conhecido no Norte e no Nordeste como Jerimum?',
    answers: [
      { text: 'Caju', correct: false },
      { text: 'Abóbora', correct: true },
      { text: 'Chuchu', correct: false },
      { text: 'Coco', correct: false }
    ]
  },
  {
    question: 'Qual o coletivo de cães?',
    answers: [
      { text: 'Matilha', correct: true },
      { text: 'Rebanho', correct: false },
      { text: 'Acaltéia', correct: false },
      { text: 'Manata', correct: false }
    ]
  },
  {
    question: 'Segundo a lenda, em que fase da lua aparece o lobsomem?',
    answers: [
      { text: 'Nova', correct: false },
      { text: 'Cheia', correct: true },
      { text: 'Minguante', correct: false },
      { text: 'Crescente', correct: false }
    ]
  },
  {
    question: 'Em que ano o presidente Getúlio Vargas se matou?',
    answers: [
     { text: '1966', correct: false },
      { text: '1956', correct: false },
      { text: '1954', correct: true },
      { text: '1964', correct: false }
    ]
  },
  {
    question: 'Qual foi o último estado criado no Brasil?',
    answers: [
      { text: 'Tocantins', correct: true },
      { text: 'Rondônia', correct: false },
      { text: 'Acre', correct: false },
      { text: 'Mato Grosso do Sul', correct: false }
    ]
  },
  {
    question: 'Em que ano foi morto Jonh Lennon?',
    answers: [
      { text: '1980', correct: true },
      { text: '1985', correct: false },
      { text: '1981', correct: false },
      { text: '1978', correct: false }
    ]
  },
  {
    question: 'Em que país nasceu Carmem Miranda?',
    answers: [
      { text: 'Brasil', correct: false },
      { text: 'Espanha', correct: false },
      { text: 'Portugal', correct: true },
      { text: 'Burro', correct: false }
    ]
  },
  {
    question: 'Qual desses profissionais utiliza o tarô?',
    answers: [
     { text: 'Engenheiro', correct: false },
      { text: 'Carpinteiro', correct: false },
      { text: 'Cartomante', correct: true },
      { text: 'Merceneiro', correct: false }
    ]
  },
  {
    question: 'Qual equipamento principal de um cinegrafista?',
    answers: [
      { text: 'Microfone', correct: false },
      { text: 'Rádio', correct: false },
      { text: 'Câmera', correct: true },
      { text: 'Computador', correct: false }
    ]
  },
  {
    question: '"Pula Fogueira" é o nome de uma música de que gênero?',
    answers: [
      { text: 'Junina', correct: true },
      { text: 'Trevo', correct: false },
      { text: 'Samba', correct: false },
      { text: 'Catira', correct: false }
    ]
  },
  {
    question: 'Qual dessas palavras não é sinônimo de "magia"?',
    answers: [
      { text: 'Bruxa', correct: false },
      { text: 'Curso', correct: true },
      { text: 'Atração', correct: false },
      { text: 'Ilusionismo', correct: false }
    ]
  },
  {
    question: 'Em qual país fica a maior muralha construída pelo homem?',
    answers: [
     { text: 'Japão', correct: false },
      { text: 'Afeganistão', correct: false },
      { text: 'Índia', correct: false },
      { text: 'China', correct: true }
    ]
  },
  {
    question: 'Qual dessas doenças está relacionada com a cabeça?',
    answers: [
      { text: 'Cólica', correct: false },
      { text: 'Enxaqueca', correct: true },
      { text: 'Tendinite', correct: false },
      { text: 'Cãimbra', correct: false }
    ]
  },
  {
    question: 'Quais são os tipos de divisões de células?',
    answers: [
      { text: 'Teitose e Titose', correct: false },
      { text: 'Neitose e Nitose', correct: false },
      { text: 'Mitose e Meiose', correct: true },
      { text: 'Beitose e Bitose', correct: false }
    ]
  }
    
]