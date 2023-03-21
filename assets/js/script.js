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


var highScoresEl = document.querySelector('#viewhighscores'); //Top Paragraph link showing scores when clicked
var countDownEl = document.querySelector('#countdown'); //Top right timer showing time left
var startButtonEl = document.querySelector('#start-btn'); // First page start button to click to start game
var titleQuestionsEl = document.querySelector('#titleandquestions'); //Used for quiz title and all questions in following pages
var contentEl = document.querySelector('#content');
var timer;
var dividerEl = document.querySelector('#divider');
var questionAnswer = document.querySelector('.questionanswer');
var yesNo = document.querySelector('#rightwrong');



var countDown = 60;
var indexOfCurrentQuestion = 0;
var score = 0;
var timeSubtraction = 10;
var gameOver = document.querySelector('#endgame');

//High Score Page

var highScoreEl = document.getElementById('highscore');
var showHighScoreEl = document.getElementById('showhighscore');
var highScoreListEl = document.getElementById('highscorelist');
var buttonGoBack = document.getElementById('goback');
var buttonClearScore = document.getElementById('clearhighscores');
var startScreen = document.querySelector('.start-screen');



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
            
            clearInterval(timer);
        }

        if (countDown <= 0) {
            showHighScoreEl();
            clearInterval(timer);

        }

    }, 1000);


    renderNextQuestion();
});

// When user clicks on choice button

contentEl.addEventListener('click', function (event) {
    var currentQuestion = questions[indexOfCurrentQuestion];
    event.preventDefault();

    if (event.target.matches('.choice')) {
        var createAnswer = document.createElement('div');
        createAnswer.setAttribute('class', 'createDiv')

        if (event.target.textContent == currentQuestion.answer) {
            score++;
            createAnswer.textContent = "Correct!";
            indexOfCurrentQuestion++;
            renderNextQuestion();
        } else {
            countDown = countDown - timeSubtraction;
            createAnswer.textContent = "Wrong!";
            indexOfCurrentQuestion++;
            renderNextQuestion();
        }

        questionAnswer.appendChild(createAnswer);

    }

    // Asked ASKBot and got told to create variable for div and append child to div


  console.log(indexOfCurrentQuestion);
    if  (questions.length -1 === indexOfCurrentQuestion) {
        gameDone();
        createAnswer.textContent = "All done!" + "Your final score is:" + score + "." + questions.length;
    } else {
        gameOver = "true";
       // showHighScoreEl();
    }



    // End of the Quiz


    var showTheHighScoreEl = function () {
        startScreen.classlist.add('hide');

           
    }

    function gameDone() {
        console.log('Test');
        document.querySelector('.questionanswer').classList.add('hide');
        document.getElementById('endgame').classList.remove('hide');
       // gameOver.classList.remove('hide');
        countDownEl.innerHTML = "";

        var createAllDone = document.createElement('h2');
        createAllDone.setAttribute('id', 'createAllDone');
        createAllDone.textContent = "All Done!";

        questionAnswer.appendChild(createAllDone);
    }

    var createInitialsInput = document.createElement('input');
    createInitialsInput.type = "text";
    createInitialsInput.name = "initials";
    initialsForm.appendChild(createInitialsInput);

}
)






// I ran out of time to finish the assignment




