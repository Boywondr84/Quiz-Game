document.getElementById("button1").addEventListener("click", function() {
    console.log("Button1 works");
});

document.getElementById("button2").addEventListener("click", function() {
    console.log("Button2 works");
});

// Start button functionality
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

// Start Game: when clicked first question appears and timer begins countdown
function startGame() {
    console.log("started");
    timerCountdown();
}

// Timer - triggered by start button click instead of browser load
var timerEl = document.getElementById("timerCountdown");

    function timerCountdown() {
        var timeLeft = 60; // need to slow down timer speed
        
        var timeRemaining = setInterval (function() {
            if (timeLeft > 1) {
                timeLeft--;
                timerEl.textContent = (timeLeft + ' seconds remaining. ');
            }
            else if (timeLeft === 1) {
                timeLeft--;
                timerEl.textContent = (timeLeft + ' second remaining. ');
            }
            else {
                clearInterval (timeRemaining);
                timerEl.textContent = (' Time is up! ');
            }
        }, 1000);
    };
    
var questionContainerElement = document.getElementById("question-box");
// Questions - how to place these in id=questions?

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
    }
]
console.log(questions);
//debugger;
