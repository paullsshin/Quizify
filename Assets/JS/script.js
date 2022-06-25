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
var score = 0;
var seconds = 100;
var questionTracker = 0;

// var score = JSON.parse(localStorage.getItem("score")) || [];

var questions = [
    {
        question : "What toy was the very first toy to be advertised on TV?",
        // optionA : "Toy Gun",
        // optionB : "Bow and Arrow",
        // optionC : "Mr.Potato Head",
        // optionD : "Cabbage Patch Kids",
        responses : ["Toy Gun", "Bow and Arrow","Mr.Potato Head","Cabbage Patch Kids"],
        // answer : C
        answer : "Mr.Potato Head"
    },
    {
        question : "What was the first soft drink in space?",
        optionA : "Pepsi",
        optionB : "Coca-Cola",
        optionC : "7UP",
        optionD : "Sprite",
        answer : B
    },
    {
        question : "Which American football team is the only team to have gone a whole season undefeated, including the Super Bowl?",
        optionA : "Miami Dolphins",
        optionB : "Oakland Raiders",
        optionC : "Pittsburgh Steelers",
        optionD : "Dallas Cowboys",
        answer : A
    },
    {
        question : "Which country has a Unicorn as the national animal?",
        optionA : "England",
        optionB : "Switzerland",
        optionC : "Ireland",
        optionD : "Scotland",
        answer : D
    },
    
];
 console.log(questions);

function startQuiz () {
    seconds = 100;
    var timing = setInterval(function() {
    document.getElementById("timer").innerHTML = "Timer:" + seconds;
    seconds--;
    if (seconds < 0) {
        clearInterval(timing);
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

function hideOl () {
    document.getElementByClass("choice").style.display = "none;"
}

const btn = document.getElementById("start-it");

btn.addEventListener("click", () => {
    btn.style.display = "none";
});


// next question will only be displayed based on postition of array of questions that im currently showing

// create timer