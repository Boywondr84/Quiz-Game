var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var questionH2 = document.getElementById("questions")


button1.addEventListener("click", renderNextQuestion);

button2.addEventListener("click", renderNextQuestion);

button3.addEventListener("click", renderNextQuestion);

button4.addEventListener("click", renderNextQuestion);


var timeLeft = 60
var score = 0;
var timeRemaining;
// Timer - triggered by start button click instead of browser load
var timerEl = document.getElementById("timerCountdown");

    function timerCountdown() {
        timeRemaining = setInterval (function() {
            if (timeLeft > 1) {
                timeLeft--;
                timerEl.textContent = (timeLeft + ' seconds remaining.');
            }
            else if (timeLeft === 1) {
                timeLeft--;
                timerEl.textContent = (timeLeft + ' second remaining.');
            }
            else {
                clearInterval (timeRemaining);
                timerEl.textContent = (' Time is up! ');
            }
        }, 1000);
    };
var scoreDiv = document.querySelector(".score-box");
var questionDiv = document.querySelector(".question-box");
var listDiv = document.querySelector("#score-display");
// Questions - how to place these in id=questions?
var questionCounter = 0;
var questions = [
    {
        id: 0,
        q: "Inside which HTML element do we put the Javascript?",
        a: [{ text: "<js>", isCorrect: false },
        { text: "<scripting>", isCorrect: false },
        { text: "<javascript>", isCorrect: false },
        { text: "<script>", isCorrect: true }
        ]
    }, {
        id: 1,
        q: "Where is the correct place to insert a Javascript link in index.html?",
        a: [{ text: "The <head> section", isCorrect: false },
        { text: "Both the <head> section and the <body> section are correct", isCorrect: false },
        { text: "The <body> section", isCorrect: true },
        { text: "Anywhere on the html is fine", isCorrect: false }
        ]
    }, {
        id: 2,
        q: "Arrays in Javascript can be used to store which of the following?",
        a: [{ text: "Numbers and strings", isCorrect: false },
        { text: "Other arrays", isCorrect: false },
        { text: "Booleans", isCorrect: false },
        { text: "All of the above", isCorrect: true }
    ]
    }, {
        id: 3,
        q: "Commonly used data types DO NOT include which of the following?",
        a: [{ text: "Strings", isCorrect: false },
        { text: "Booleans", isCorrect: false },
        { text: "Alerts", isCorrect: true },
        { text: "Numbers", isCorrect: false },
    ]
    }
]
// Scoring
// var scoring = function() {
//         if (isCorrect === true) {
//         var score += 10;
//     }else {
//         timeLeft -= 5;
//     }
// };

console.log(questions);
//debugger;

// Start button functionality
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

// Start Game: when clicked first question appears and timer begins countdown
function startGame() {
    questionDiv.classList.remove("hidden");
    scoreDiv.classList.add("hidden");
    listDiv.classList.add("hidden");
    timeLeft = 60;
    console.log("started");
    timerCountdown();
    questionH2.innerText = questions[0].q;
    for (var i=0; i < 4; i++) {
        var btn = document.getElementById("button"+(i+1));
        btn.innerText = questions[0].a[i].text;
        btn.value = questions[0].a[i].isCorrect;
    }
    questionCounter++;
}

function renderNextQuestion (event) {
    //Scoring
    //console.log(event.target);
        if (event.target.value == "true") {
        score += 10;
        console.log(score);
    }else {
        timeLeft -= 5;
    }
    if (questionCounter == questions.length) {
        endGame();
    }else {
    questionH2.innerText = questions[questionCounter].q;
    for (var i=0; i < 4; i++) {
        var btn = document.getElementById("button"+(i+1));
        btn.innerText = questions[questionCounter].a[i].text;
        btn.value = questions[questionCounter].a[i].isCorrect;
    }
    questionCounter++;
    }
};

function endGame() {
    questionDiv.classList.add("hidden");
    scoreDiv.classList.remove("hidden");
    clearInterval (timeRemaining);
}
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];


var buttonSave = document.getElementById("save-score");
buttonSave.addEventListener("click", function() {
    var data = {
        initials: document.getElementById("initials").value,
        score: score
    }
    console.log(data);
    highScores.push(data);
    localStorage.setItem('highscores', JSON.stringify(highScores));
})

function renderScores() {
    questionDiv.classList.add("hidden");
    scoreDiv.classList.add("hidden");
    listDiv.classList.remove("hidden");
    var ul = document.getElementById("score-list");
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li")
        li.innerText = `initials: ${highScores[i].initials} score: ${highScores[i].score}`
        ul.appendChild(li);
    }
}

document.getElementById("Scores").addEventListener("click", renderScores);
