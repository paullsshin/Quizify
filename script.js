var start = $("#start");
var game = $("#game");
var questions = $("#questions");
var timer = $("#timer");
var choices = $("#choices");
var score = $("#score");
var optionA = $("#A");
var optionB = $("#B");
var optionC = $("#C");
var optionD = $("#D");
var score = 0;

var questions = [
    {
        question : "What toy was the very first toy to be advertised on TV?",
        optionA : "Toy Gun",
        optionB : "Bow and Arrow",
        optionC : "Mr.Potato Head",
        optionD : "Cabbage Patch Kids",
        answer : C
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
    if (questions == ) {
        return "Correct!";
    } else {
        return "Wrong!";
    }
};

console.log(startQuiz());