var start = $("#start");
var startIt = $("#start-it");
var game = $("#game");
var questions = $("#questions");
var timer = $("#timer");
var choices = $("#choices");
var score = $("#score");
var optionA = $("#A");
var optionB = $("#B");
var optionC = $("#C");
var optionD = $("#D");
var choice = $(".choice");
var score = 0;
var seconds = 100;
var questionTracker = 0;

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
    // if (questions == ) {
    //     return "Correct!";
    // } else {
    //     return "Wrong!";
    // }
    document.getElementById("timer").innerHTML = "Timer:" + seconds;
    renderQuestion();
    
    for ( var i = 0; i > 100; i--) {
        $("timer").html()
    }
};

function renderQuestion(){
    
    document.getElementById("questions").innerHTML = questions[questionTracker].question;

    for (var i = 0; i < 4; i++) {
        console.log(questions[questionTracker].responses[i]);
        // $(".choice").attr("data-id" + 0)(questions[questionTracker].responses[i]);
        // // document.querySelector('[data-id="[i]"]').innerHTML = (questions[questionTracker].responses[i]);
        // $(`.choice[data-id=${i}]`).html(questions[questionTracker].responses[i])
        $(`.choice[data-id=${[i]}]`).html(questions[questionTracker].responses[i])

    }

};

document.getElementById("start-it").addEventListener("click", startQuiz);

function nextQuestion() {
    questionTracker++;
    renderQuestion();
};

console.log(startIt);

// console.log(startQuiz());
// next question will only be displayed based on postition of array of questions that im currently showing

// create timer