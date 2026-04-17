const PLquestions = [
  {
    question: 'Which club has the most Premier League titles?',
    answer: [
      { text: 'Chelsea', correct: false },
      { text: 'Manchester United', correct: true },
      { text: 'Manchester City', correct: false },
      { text: 'Arsenal', correct: false }
    ]
  },
  {
    question: 'Which team went unbeaten in the 2003–04 Premier League season?',
    answer: [
      { text: 'Chelsea', correct: false },
      { text: 'Arsenal', correct: true },
      { text: 'Manchester United', correct: false },
      { text: 'Liverpool', correct: false }
    ]
  },
  {
    question: 'Who has the most Premier League goals of all time?',
    answer: [
      { text: 'Wayne Rooney', correct: false },
      { text: 'Alan Shearer', correct: true },
      { text: 'Harry Kane', correct: false },
      { text: 'Sergio Agüero', correct: false }
    ]
  },
  {
    question: 'Which goalkeeper has the most clean sheets in Premier League history?',
    answer: [
      { text: 'Petr Čech', correct: true },
      { text: 'David de Gea', correct: false },
      { text: 'Alisson', correct: false },
      { text: 'Edwin van der Sar', correct: false }
    ]
  },
  {
    question: 'Which club was promoted and then won the Premier League in 2015–16?',
    answer: [
      { text: 'Leicester City', correct: true },
      { text: 'West Ham', correct: false },
      { text: 'Tottenham', correct: false },
      { text: 'Everton', correct: false }
    ]
  },
  {
    question: 'Which manager has won the most Premier League titles?',
    answer: [
      { text: 'Pep Guardiola', correct: false },
      { text: 'Sir Alex Ferguson', correct: true },
      { text: 'José Mourinho', correct: false },
      { text: 'Arsène Wenger', correct: false }
    ]
  },
  {
    question: 'Which club has the most Premier League goals in a single season?',
    answer: [
      { text: 'Manchester City', correct: true },
      { text: 'Liverpool', correct: false },
      { text: 'Chelsea', correct: false },
      { text: 'Arsenal', correct: false }
    ]
  },
  {
    question: 'Who scored the fastest Premier League goal?',
    answer: [
      { text: 'Shane Long', correct: true },
      { text: 'Sadio Mané', correct: false },
      { text: 'Alan Shearer', correct: false },
      { text: 'Wayne Rooney', correct: false }
    ]
  },
  {
    question: 'Which club is known as “The Red Devils”?',
    answer: [
      { text: 'Liverpool', correct: false },
      { text: 'Manchester United', correct: true },
      { text: 'Arsenal', correct: false },
      { text: 'Chelsea', correct: false }
    ]
  },
  {
    question: 'Which team won the Premier League in the 2019–20 season?',
    answer: [
      { text: 'Manchester City', correct: false },
      { text: 'Liverpool', correct: true },
      { text: 'Chelsea', correct: false },
      { text: 'Leicester City', correct: false }
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

    const currentQue = PLquestions[currentquestionindex];
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
    questionElement.textContent = `You scored ${score} out of ${PLquestions.length}.`;
    nextbutton.innerHTML = 'Play Again';
    nextbutton.style.display = 'block';
}

function handleNextButton() {
    currentquestionindex++;

    if (currentquestionindex < PLquestions.length) {
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
