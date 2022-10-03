var quizStartBtn = document.querySelector("#quiz-start-btn");
var questionLocation = document.querySelector("#question-location");
var question = document.querySelector("#question");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var answerCheck = document.querySelector("#answer-check");
var nameForm = document.createElement("form");

//all question contents stored here
var quizContents = [
    {
        question: "Commonly used data types do NOT include:",
        answer: "2. booleans",
        options: {
            a1: "1. strings",
            a2: "2. booleans",
            a3: "3. alerts",
            a4: "4. numbers"
        }
    },
    {
        question: "The condition in an if / else statement is enclosed within::",
        answer: "3. curly brackets",
        options: {
            a1: "1. quotes",
            a2: "2. parantheses",
            a3: "3. curly brackets",
            a4: "4. square brackets"
        }
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer: "4. all of the above",
        options: {
            a1: "1. numbers",
            a2: "2. strings",
            a3: "3. other arrays",
            a4: "4. all of the above"
        }
    },
    {
        question: "When being assigned to variables, string values must be enclosed with:",
        answer: "3. quotes",
        options: {
            a1: "1. commas",
            a2: "2. curly brackets",
            a3: "3. quotes",
            a4: "4. parantheses"
        }
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "1. console.log",
        options: {
            a1: "1. console.log",
            a2: "2. for loops",
            a3: "3. HTML",
            a4: "4. all of the above"
        }
    }
];

//countdown active while playing, lose 15 seconds on wrong answer
function quizStart() {
    var secondsLeft = 75; //start quiz with 120 seconds

    question.textContent = quizContents.question;
    answerOne.textContent = quizContents[0].options.a1;
    answerTwo.textContent = quizContents[0].options.a2;
    answerThree.textContent = quizContents[0].options.a3;
    answerFour.textContent = quizContents[0].options.a4;

}

//upon clicking start quiz button, the quiz begins
quizStartBtn.addEventListener("click", quizStart);
