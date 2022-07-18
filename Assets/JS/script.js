var start = document.getElementById("#start");
var startIt = document.getElementById("#start-it");
var game = document.getElementById("#game");
var questions = document.getElementById("#questions");
var timer = document.getElementById("#timer");
var choices = document.getElementById("#choices");
var score = document.getElementById("#score");
var optionA = document.getElementById("#A");
var optionB = document.getElementById("#B");
var optionC = document.getElementById("#C");
var optionD = document.getElementById("#D");
var choice = document.getElementById(".choice");
var seconds = 100;
var questionTracker = 0;

// var score = JSON.parse(localStorage.getItem("score")) || [];

var questions = [
    {
        question: "What toy was the very first toy to be advertised on TV?",
        responses: ["Toy Gun", "Bow and Arrow","Mr.Potato Head","Cabbage Patch Kids"],
        answer: "Mr.Potato Head"
    },
    {
        question: "What was the first soft drink in space?",
        responses: ["Pepsi", "Coca-Cola", "7UP", "Sprite"],
        answer: "Coca-Cola"
    },
    {
        question: "Which American football team is the only team to have gone a whole season undefeated, including the Super Bowl?",
        responses: ["Miami Dolphins", "Oakland Raiders", "Pittsburgh Steelers", "Dallas Cowboys"],
        answer: "Miami Dolphins"
    },
    {
        question: "Which country has a Unicorn as the national animal?",
        responses: ["england", "Switzerland", "Ireland", "Scotland"],
        answer: "Scotland"
    },
    
]

const op1 = document.getElementById("A");
const op2 = document.getElementById("B");
const op3 = document.getElementById("C");
const op4 = document.getElementById("D");

 console.log(questions);

function startQuiz () {
    seconds = 100;
    var timing = setInterval(function() {
    document.getElementById("timer").innerHTML = "Timer:" + seconds;
    seconds--;
    if (seconds <= 0) {
        clearInterval(timing);
        document.getElementById("timer").innerHTML = "GAME OVER"
        }
    }, 1000);
    
    renderQuestion();
    
    for ( var i = 0; i > 100; i--) {
        $("timer").html()
}

function renderQuestion(){
    
    document.getElementById("questions").innerHTML = questions[questionTracker].question;

    for (var i = 0; i < 4; i++) {
        console.log(questions[questionTracker].responses[i]);
        $(`.choice[data-id=${[i]}]`).html(questions[questionTracker].responses[i])
    }

    };
}

document.getElementById("choices").addEventListener("click", questions);

function chooseQuestion () {};

document.getElementById("start-it").addEventListener("click", startQuiz);

function nextQuestion() {
    questionTracker++;
    renderQuestion();
};

console.log(startIt);

document.getElementById("start-it").onclick = function () {
    document.getElementById("welcome").style.visibility = "visible";
}
document.getElementById("start-it").onclick = function () {
    document.getElementById("welcome").style.visibility = "hidden";
}
// thought I needed another "hide" function, but I just moved intro into the header element and it worked!
// document.getElementById("intro").onclick = function () {
//     document.getElementById("intro").style.visibility = "visible";
// }
// document.getElementById("start-it").onclick = function () {
//     document.getElementById("intro").style.visibility = "hidden";
// }

const btn = document.getElementById("start-it");

btn.addEventListener("click", () => {
    btn.style.display = "none";
});


// next question will only be displayed based on postition of array of questions that im currently showing

// create timer