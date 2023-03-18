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
var choicesEl = document.querySelector('#answer-buttons');

var countDown = 60;
var indexOfCurrentQuestion = 0;

function renderNextQuestion() {
  contentEl.innerHTML = '';
  var currentQuestion = questions[indexOfCurrentQuestion];

    titleQuestionsEl.textContent = currentQuestion.title;


    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonEl = document.createElement('button');
        // var choice = currentQuestion.choices[i];
        buttonEl.setAttribute('class', 'choice');
        // buttonEl.setAttribute('value', choice);
        buttonEl.textContent = currentQuestion.choices[i];
        contentEl.appendChild(buttonEl);
    }
}

startButtonEl.addEventListener('click', function (event) {
    event.preventDefault();

    timer = setInterval(function () {

        countDownEl.textContent = countDown;
        countDown--;

        if (countDown <= 0) {
            // function to close out game, game lost, 
            //score, change page to result page and see score
        }

    }, 1000);

    renderNextQuestion();
});

// When user clicks on choice button

contentEl.addEventListener('click', function(event) {
    var currentQuestion = questions[indexOfCurrentQuestion];

    event.preventDefault();

    if (event.target.matches('.choice')) {
        
    }

    if (event.target.textContent === currentQuestion.answer) {
        // increae current score
       
    } else {
        // decrease timer 10 seconds
        // increase indexOf Current
        // render next qurstion
    }
}
)





function answerQuestion(event) {

    var btnEl = event.target;

    if (btnEl.value !== questions[indexOfCurrentQuestion].answer) {

        // indexOfCurrentQuestion++;

        renderNextQuestion();

        countDown = countDown - 10;

    } else {
        // indexOfCurrentQuestion++;
        renderNextQuestion();
    }

     // increase the indexOfCurrentQuestion
        // render next question();
}

choicesEl.onclick = answerQuestion;



//event listener for user clicks button if wrong subrtract 10 seconds
