// List of all questions, choices, and answers

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];


// Timer Coundown https://codepen.io/tutsplus/pen/WNzqPaL

//Variables


var highScoresEl = document.querySelector("#viewhighscores"); //Top Paragraph link showing scores when clicked
var countDownEl = document.querySelector("#countdown"); //Top right timer showing time left
var startButtonEl = document.querySelector("#start-btn"); // First page start button to click to start game
var titleQuestionsEl = document.querySelector("#titleandquestions"); //Used for quiz title and all questions in following pages
var contentEl = document.querySelector('#content');
var timer;

var countDown = 75;
var indexOfCurrentQuestion = 0;

function renderNextQuestion() {

    contentEl.innerHTML = ''; 

    var currentQuestion = questions[indexOfCurrentQuestion];

    titleQuestionsEl.textContent = currentQuestion.title;
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('class', 'choice');
        buttonEl.textContent = currentQuestion.choices[i];
        contentEl.appendChild(buttonEl);
    }
}

startButtonEl.addEventListener('click', function (event) {
    event.preventDefault();

    timer = setInterval(function () {
        timeLeft--;
        countDownEl.textContent = timeLeft;

        if (timeLeft === 0) {
            // function to close out game, game lost, 
            //score, change page to result page and see score
        }

    }, 1000);

    renderNextQuestion();
})

//event listener for user clicks button if wrong subrtract 10 seconds
