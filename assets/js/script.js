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
var dividerEl = document.querySelector('divider');
var rightwrongEl = document.querySelector('#rightwrong');


var countDown = 60;
var indexOfCurrentQuestion = 0;
var score = [];
var timeSubtraction = 10;

//View High Scores

var viewHighScores = document.createElement

function viewScores() {
    document.querySelector("#viewhighscores").addEventListener("click", highScoresEl);
}

//Start Game

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
    countDownEl.textContent = countDown;

    event.preventDefault();

    var timer = setInterval(function () {
        countDown--;
        countDownEl.textContent = countDown;

        if (countDown === 0) {
            //  countDownEl.textContent = 0;
            clearInterval(timer);
            // endGame();
            // function to close out game, game lost, 
            //score, change page to result page and see score
            //sendMessage();
        }

    }, 1000);

    // function sendMessage () {
    //    highScoresEl.textContent = ' ';
    //    var 
    // }

    renderNextQuestion();
});

// When user clicks on choice button

contentEl.addEventListener('click', function (event) {
    var currentQuestion = questions[indexOfCurrentQuestion];
    event.preventDefault();

    if (event.target.matches('.choice')) {
        var yesno = document.createElement('p');
        yesno.classList.add('p', 'p-answer');

        if (event.target.textContent === currentQuestion[index].answer) {
            score++;
            yesno.setAttribute("check", "Correct!");
            indexOfCurrentQuestion++;
            renderNextQuestion();
        } else {
            countDown = countDown - timeSubtraction;
            yesno.setAttribute("check", "Wrong!");
            yesno.textContent = currentQuestion[index];
            yesno.appendChild(answer);
            indexOfCurrentQuestion++;
            renderNextQuestion();
        }

       



    }
}
)

function answerQuestion(event) {

    var btnEl = event.target;

    if (btnEl.value !== questions[indexOfCurrentQuestion].answer) {

        indexOfCurrentQuestion++;

        renderNextQuestion();

        // countDown = countDown - 10;

    } else {
        indexOfCurrentQuestion++;
        renderNextQuestion();
    }

    //increase the indexOfCurrentQuestion
    //rendernextquestion();
}


//choicesEl.onclick = answerQuestion;



//event listener for user clicks button if wrong subrtract 10 seconds
