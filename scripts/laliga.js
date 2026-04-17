const LALIGAquestions = [
  {
    question: 'Which club has won the most La Liga titles?',
    answer: [
      { text: 'FC Barcelona', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'Atlético Madrid', correct: false },
      { text: 'Valencia', correct: false }
    ]
  },
  {
    question: 'Which player has scored the most goals in La Liga history?',
    answer: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Telmo Zarra', correct: false },
      { text: 'Karim Benzema', correct: false }
    ]
  },
  {
    question: 'Which team broke the Real Madrid–Barcelona dominance by winning La Liga in 2013–14?',
    answer: [
      { text: 'Sevilla', correct: false },
      { text: 'Atlético Madrid', correct: true },
      { text: 'Valencia', correct: false },
      { text: 'Real Sociedad', correct: false }
    ]
  },
  {
    question: 'Which stadium is the home of Atlético Madrid?',
    answer: [
      { text: 'Camp Nou', correct: false },
      { text: 'Santiago Bernabéu', correct: false },
      { text: 'Metropolitano Stadium', correct: true },
      { text: 'Mestalla', correct: false }
    ]
  },
  {
    question: 'Which player scored 50 goals in a single La Liga season?',
    answer: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Luis Suárez', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'David Villa', correct: false }
    ]
  },
  {
    question: 'Which club is known as “Los Blancos”?',
    answer: [
      { text: 'Barcelona', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'Valencia', correct: false },
      { text: 'Sevilla', correct: false }
    ]
  },
  {
    question: 'Which club won La Liga unbeaten in the 2017–18 season?',
    answer: [
      { text: 'Real Madrid', correct: false },
      { text: 'Atlético Madrid', correct: false },
      { text: 'Barcelona', correct: true },
      { text: 'Sevilla', correct: false }
    ]
  },
  {
    question: 'Which player has the most assists in La Liga history?',
    answer: [
      { text: 'Xavi', correct: false },
      { text: 'Andrés Iniesta', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Cristiano Ronaldo', correct: false }
    ]
  },
  {
    question: 'Which club has the nickname “Los Colchoneros”?',
    answer: [
      { text: 'Sevilla', correct: false },
      { text: 'Atlético Madrid', correct: true },
      { text: 'Valencia', correct: false },
      { text: 'Athletic Bilbao', correct: false }
    ]
  },
  {
    question: 'Which team won La Liga in the 2020–21 season?',
    answer: [
      { text: 'Real Madrid', correct: false },
      { text: 'Barcelona', correct: false },
      { text: 'Atlético Madrid', correct: true },
      { text: 'Sevilla', correct: false }
    ]
  }
];

const questionElement = document.querySelector('.ques');
const answerElement = document.querySelector('.answers');
const nextbutton = document.querySelector('.next');

let currentquestionindex = 0;
let score = 0;

function StartQuiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = 'NEXT';
    showQuestion();
}

function resetState() {
    nextbutton.style.display = 'none';

    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}

function showQuestion() {
    resetState();

    const currentQue = LALIGAquestions[currentquestionindex];
    const questionNo = currentquestionindex + 1;

    questionElement.textContent = `${questionNo}. ${currentQue.question}`;

    currentQue.answer.forEach((answer) => {
        const button1 = document.createElement('button');
        button1.textContent = answer.text;
        button1.classList.add('btn');
        answerElement.appendChild(button1);

        if (answer.correct) {
            button1.dataset.correct = answer.correct;
        }

        button1.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerElement.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextbutton.style.display = 'block';
}

function showscore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${LALIGAquestions.length}.`;
    nextbutton.innerHTML = 'Play Again';
    nextbutton.style.display = 'block';
}

function handleNextButton() {
    currentquestionindex++;

    if (currentquestionindex < LALIGAquestions.length) {
        showQuestion();
    } else {
        showscore();
    }
}

nextbutton.addEventListener('click', () => {
    if (nextbutton.innerHTML === 'Play Again') {
        StartQuiz();
        return;
    }

    handleNextButton();
});

StartQuiz();
