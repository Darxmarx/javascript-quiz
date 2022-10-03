var quizStartBtn = document.querySelector("#quiz-start-btn");
var questionLocation = document.querySelector("#question");

//all question contents stored here
var quizContents = [
    {
        question: "Commonly used data types do NOT include:",
        answer: "booleans",
        options: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
            ]
    },
    {
        question: "The condition in an if / else statement is enclosed within::",
        answer: "curly brackets",
        options: [
            "quotes",
            "parantheses",
            "curly brackets",
            "square brackets"
            ]
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer: "all of the above",
        options: [
            "numbers",
            "strings",
            "other arrays",
            "all of the above"
            ]
    },
    {
        question: "When being assigned to variables, string values must be enclosed with:",
        answer: "quotes",
        options: [
            "commas",
            "curly brackets",
            "quotes",
            "parantheses"
            ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "console.log",
        options: [
            "console.log",
            "for loops",
            ".gitignore",
            "JavaScript"
            ]
    }
];

function quizStart() {
    var secondsLeft = 120; //start quiz with 120 seconds


}










//upon clicking start quiz button, the quiz begins
quizStartBtn.addEventListener("click", quizStart);
