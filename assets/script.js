document.getElementById("button1").addEventListener("click", function() {
    console.log("Button1 works");
});

document.getElementById("button2").addEventListener("click", function() {
    console.log("Button2 works");
});

// Start button functionality
var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

var questionContainerElement = document.getElementById("question-box");
// Start Game: when clicked first question appears and timer begins countdown
function startGame() {
    console.log("started");
}

// Timer
var timerEl = document.getElementById("timerCountdown");

    function timerCountdown() {
        var timeLeft = 60;
        
        var timeRemaining = setInterval (function() {
            if (timeLeft > 1) {
                timeLeft--;
                timerEl.textContent = (timeLeft + ' seconds remaining. ');
            }
            else if (timeLeft === 1) {
                timerEl.textContent = (timeLeft + ' second remaining. ');
            }
            else {
                clearInterval; timeRemaining;
                //timerEl.textContent = ("");
                displayMessage = (' Time is up! ');
            }
        })
};

// Questions

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
        q: "Where is the correct place to insert a Javascript?",
        a: [{ text: "The <head> section", isCorrect: false },
        { text: "Both the <head> section and the <body> section are correct", isCorrect: false },
        { text: "The <body> section", isCorrect: true },
        { text: "Anywhere on the html is fine", isCorrect: false }
        ]
    }
]
console.log(questions);

timerCountdown();