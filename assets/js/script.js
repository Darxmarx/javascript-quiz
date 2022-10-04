var quizStartBtn = document.querySelector("#quiz-start-btn");
var questionLocation = document.querySelector("#question-location");
var timeRemaining = document.querySelector("#time-remaining");
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

var secondsLeft = 75; //start quiz with 75 seconds
var timeInterval;

//countdown active while playing, lose 15 seconds on wrong answer
function quizStart() {
    quizStartBtn.disabled = true; //disables start quiz button while quiz is active
    secondsLeft = 75;

    timeRemaining.textContent = "Seconds left: " + secondsLeft;

    generateQuestionOne();

    timeInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft >= 1) {
            timeRemaining.textContent = "Seconds left: " + secondsLeft;
        } else {
            timeRemaining.textContent = "Out of time!";
            clearInterval(timeInterval);
        }
    }, 1000);
    
    

}

function generateQuestionOne() {
    question.textContent = quizContents[0].question;
    answerOne.textContent = quizContents[0].options.a1;
    answerTwo.textContent = quizContents[0].options.a2; //correct
    answerThree.textContent = quizContents[0].options.a3;
    answerFour.textContent = quizContents[0].options.a4;
    
    answerTwo.addEventListener("click", generateQuestionTwoCorrect);
    answerOne.addEventListener("click", generateQuestionTwoWrong);
    answerThree.addEventListener("click", generateQuestionTwoWrong);
    answerFour.addEventListener("click", generateQuestionTwoWrong);
}

function generateQuestionTwoCorrect() {
    answerCheck.textContent = "Correct!";

    question.textContent = quizContents[1].question;
    answerOne.textContent = quizContents[1].options.a1;
    answerTwo.textContent = quizContents[1].options.a2;
    answerThree.textContent = quizContents[1].options.a3; //correct
    answerFour.textContent = quizContents[1].options.a4;

    answerThree.addEventListener("click", generateQuestionThreeCorrect);
    answerOne.addEventListener("click", generateQuestionThreeWrong);
    answerTwo.addEventListener("click", generateQuestionThreeWrong);
    answerFour.addEventListener("click", generateQuestionThreeWrong);
}

function generateQuestionTwoWrong() {
    secondsLeft -= 15;
    answerCheck.textContent = "Wrong!";

    question.textContent = quizContents[1].question;
    answerOne.textContent = quizContents[1].options.a1;
    answerTwo.textContent = quizContents[1].options.a2;
    answerThree.textContent = quizContents[1].options.a3; //correct
    answerFour.textContent = quizContents[1].options.a4;

    answerThree.addEventListener("click", generateQuestionThreeCorrect);
    answerOne.addEventListener("click", generateQuestionThreeWrong);
    answerTwo.addEventListener("click", generateQuestionThreeWrong);
    answerFour.addEventListener("click", generateQuestionThreeWrong);
}

function generateQuestionThreeCorrect() {
    answerCheck.textContent = "Correct!";

    question.textContent = quizContents[2].question;
    answerOne.textContent = quizContents[2].options.a1;
    answerTwo.textContent = quizContents[2].options.a2;
    answerThree.textContent = quizContents[2].options.a3;
    answerFour.textContent = quizContents[2].options.a4; //correct

    answerFour.addEventListener("click", generateQuestionFourCorrect);
    answerOne.addEventListener("click", generateQuestionFourWrong);
    answerTwo.addEventListener("click", generateQuestionFourWrong);
    answerThree.addEventListener("click", generateQuestionFourWrong);
}

function generateQuestionThreeWrong() {
    secondsLeft -= 15;
    answerCheck.textContent = "Wrong!";

    question.textContent = quizContents[2].question;
    answerOne.textContent = quizContents[2].options.a1;
    answerTwo.textContent = quizContents[2].options.a2;
    answerThree.textContent = quizContents[2].options.a3;
    answerFour.textContent = quizContents[2].options.a4; //correct

    answerFour.addEventListener("click", generateQuestionFourCorrect);
    answerOne.addEventListener("click", generateQuestionFourWrong);
    answerTwo.addEventListener("click", generateQuestionFourWrong);
    answerThree.addEventListener("click", generateQuestionFourWrong);
}

function generateQuestionFourCorrect() {
    answerCheck.textContent = "Correct!";

    question.textContent = quizContents[3].question;
    answerOne.textContent = quizContents[3].options.a1;
    answerTwo.textContent = quizContents[3].options.a2;
    answerThree.textContent = quizContents[3].options.a3; //correct
    answerFour.textContent = quizContents[3].options.a4;

    answerThree.addEventListener("click", generateQuestionFiveCorrect);
    answerOne.addEventListener("click", generateQuestionFiveWrong);
    answerTwo.addEventListener("click", generateQuestionFiveWrong);
    answerFour.addEventListener("click", generateQuestionFiveWrong);
}

function generateQuestionFourWrong() {
    secondsLeft -= 15;
    answerCheck.textContent = "Wrong!";

    question.textContent = quizContents[3].question;
    answerOne.textContent = quizContents[3].options.a1;
    answerTwo.textContent = quizContents[3].options.a2;
    answerThree.textContent = quizContents[3].options.a3; //correct
    answerFour.textContent = quizContents[3].options.a4;

    answerThree.addEventListener("click", generateQuestionFiveCorrect);
    answerOne.addEventListener("click", generateQuestionFiveWrong);
    answerTwo.addEventListener("click", generateQuestionFiveWrong);
    answerFour.addEventListener("click", generateQuestionFiveWrong);
}

function generateQuestionFiveCorrect() {
    answerCheck.textContent = "Correct!";

    question.textContent = quizContents[4].question;
    answerOne.textContent = quizContents[4].options.a1; //correct
    answerTwo.textContent = quizContents[4].options.a2;
    answerThree.textContent = quizContents[4].options.a3;
    answerFour.textContent = quizContents[4].options.a4;

}

function generateQuestionFiveWrong() {
    secondsLeft -= 15;
    answerCheck.textContent = "Wrong!";

    question.textContent = quizContents[4].question;
    answerOne.textContent = quizContents[4].options.a1; //correct
    answerTwo.textContent = quizContents[4].options.a2;
    answerThree.textContent = quizContents[4].options.a3;
    answerFour.textContent = quizContents[4].options.a4;

}

//upon clicking start quiz button, the quiz begins
quizStartBtn.addEventListener("click", quizStart);
