const buttons = document.querySelectorAll('.leagues button');
const ucl = document.querySelector('.championsleague-js');


const UCLquestions = [
  {
    question: 'Which team was the first to win the European Cup (now Champions League)?',
    answer: [
      { text: 'AC Milan', correct: false },
      { text: 'Real Madrid', correct: true },
      { text: 'Benfica', correct: false },
      { text: 'Bayern Munich', correct: false }
    ]
  },
  {
    question: 'Which player scored a hat-trick in the 2019 Champions League semi-final comeback vs Barcelona?',
    answer: [
      { text: 'Mohamed Salah', correct: false },
      { text: 'Sadio Mane', correct: false },
      { text: 'Divock Origi', correct: false },
      { text: 'Georginio Wijnaldum', correct: true }
    ]
  },
  {
    question: 'Which club did José Mourinho manage when he won the 2004 Champions League?',
    answer: [
      { text: 'Chelsea', correct: false },
      { text: 'Inter Milan', correct: false },
      { text: 'Porto', correct: true },
      { text: 'Real Madrid', correct: false }
    ]
  },
  {
    question: 'Which goalkeeper has the most clean sheets in Champions League history?',
    answer: [
      { text: 'Gianluigi Buffon', correct: false },
      { text: 'Iker Casillas', correct: true },
      { text: 'Manuel Neuer', correct: false },
      { text: 'Petr Čech', correct: false }
    ]
  },
  {
    question: 'Which team defeated Bayern Munich in the 2012 Champions League final?',
    answer: [
      { text: 'Chelsea', correct: true },
      { text: 'Barcelona', correct: false },
      { text: 'Real Madrid', correct: false },
      { text: 'Manchester United', correct: false }
    ]
  },
  {
    question: 'Who scored the fastest goal in Champions League final history?',
    answer: [
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Paolo Maldini', correct: true },
      { text: 'Didier Drogba', correct: false },
      { text: 'Steven Gerrard', correct: false }
    ]
  },
  {
    question: 'Which club has lost the most Champions League finals?',
    answer: [
      { text: 'Juventus', correct: true },
      { text: 'AC Milan', correct: false },
      { text: 'Bayern Munich', correct: false },
      { text: 'Liverpool', correct: false }
    ]
  },
  {
    question: 'Which player has the most assists in Champions League history?',
    answer: [
      { text: 'Lionel Messi', correct: false },
      { text: 'Cristiano Ronaldo', correct: true },
      { text: 'Xavi', correct: false },
      { text: 'Andrés Iniesta', correct: false }
    ]
  },
  {
    question: 'Which club did not win the Champions League despite reaching the final in 2006?',
    answer: [
      { text: 'Arsenal', correct: true },
      { text: 'Barcelona', correct: false },
      { text: 'AC Milan', correct: false },
      { text: 'Chelsea', correct: false }
    ]
  },
  {
    question: 'Which team completed the treble (league, cup, UCL) in 2010 under José Mourinho?',
    answer: [
      { text: 'Barcelona', correct: false },
      { text: 'Inter Milan', correct: true },
      { text: 'Bayern Munich', correct: false },
      { text: 'Chelsea', correct: false }
    ]
  }
];
const questionElement = document.querySelector('.ques');
const answerElement = document.querySelector('.answers');
const nextbutton = document.querySelector('.next');

let currentquestionindex = 0;
let score = 0;

function StartQuiz(){
    resetState()
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = 'NEXT'
    showQuestion();



}

function resetState(){
        nextbutton.style.display = 'none';
        while(answerElement.firstChild){
            answerElement.removeChild(answerElement.firstChild)
        }
    }

function showQuestion(){
    let currentQue = UCLquestions[currentquestionindex];
    let questionNo = currentquestionindex+1;
    questionElement.innerHTML = questionNo + '. ' + currentQue.question;

    currentQue.answer.forEach(answer=>{
        const button1 = document.createElement('button');
        button1.innerHTML = answer.text;
        button1.classList.add('btn');
        answerElement.appendChild(button1);
        if(answer.correct){
            button1.dataset.correct = answer.correct;
        }
        button1.addEventListener('click',selectAnswer);

    })


}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;

    });
    nextbutton.style.display = 'block'



}

function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${UCLquestions.length}.`
    nextbutton.innerHTML = 'Play Again'
    nextbutton.style.display ='block';

}

function handleNextButton(){
    currentquestionindex++
    if(currentquestionindex<UCLquestions.length){
        resetState()
        showQuestion();
    }
    else{
        showscore();
    }

}

nextbutton.addEventListener('click',()=>{
    if(currentquestionindex < UCLquestions.length){
        handleNextButton(); 
    }
    else{StartQuiz();}
})
StartQuiz()