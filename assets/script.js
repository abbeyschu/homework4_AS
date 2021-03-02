// constants for HTML references
const questionContainer = document.getElementById("question");
const answerContainer = document.getElementById("answers");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const scoreboard = document.getElementById("scoreboard");
const textbox = document.getElementById("textbox");
const submit = document.getElementById("submit");
const restart = document.getElementById("restart");
const list = document.getElementById("list");
const scoreContainer = document.getElementById("score");
var score = 0;
const timerContainer = document.getElementById("timer");
var timeLeft = 60;
var timerInterval;

// questions to ask in the quiz
const questions = [
    {
        question: "Inside which HTML element does the Javascript go? <______>",
        answerA: "java",
        answerB: "script",
        answerC: "link",
        answerD: "footer",
        correct: "b"
    },
    {
        question: "How do you write \"hello world\" in an alert box?",
        answerA: "window(\"hello world\")",
        answerB: "message(\"hello world\")",
        answerC: "alert(\"hello world\")",
        answerD: "show(\"hello world\")",
        correct: "c"
    },
    {
        question: "How do you create a variable called \"myVariable\"?",
        answerA: "var myVariable",
        answerB: "var \"myVariable\"",
        answerC: "variable myVariable",
        answerD: "variable \"myVariable\"",
        correct: "a"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answerA: "-",
        answerB: "~",
        answerC: ":",
        answerD: "=",
        correct: "d"
    },
    {
        question: "Which of the following can neither be updated nor re-declared?",
        answerA: "const",
        answerB: "num",
        answerC: "var",
        answerD: "let",
        correct: "a"
    },
];

const lastQuestion = questions.length - 1;
var runningQuestion = 0;

// function for showing a question and answers
function showQuestion(){
    var q = questions[runningQuestion];
    questionContainer.innerHTML = q.question;
    a.innerHTML = q.answerA;
    b.innerHTML = q.answerB;
    c.innerHTML = q.answerC;
    d.innerHTML = q.answerD;
};

//timer function
function setTime() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
    timeLeft--;
    timerContainer.textContent = timeLeft + " seconds left";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    };
},1000);
};

// beginning score function
function setScore(){
    scoreContainer.textContent = "Number Correct: " + score
};

// event listener for beginning the quiz
start.addEventListener("click",startQuiz);

// this function runs when the start quiz button is clicked
function startQuiz(){
    start.style.display = "none";
    quiz.style.display = "block";
    timerContainer.style.display = "block";
    scoreContainer.style.display = "block";
    showQuestion();
    setTime();
    setScore();
};

// add to score if answer is correct
function isCorrect(){
    score++;
    setScore();
};

// subtract time if answer is wrong
function isWrong(){
    timeLeft -= 10;
};

function endQuiz(){
    // hide/show certain html elements
    timerContainer.style.display = "none";
    scoreContainer.style.display = "none";
    answerContainer.style.display = "none";
    questionContainer.textContent = "All Done! You got " + score + " out of 5 questions correct.";
    scoreboard.style.display = "block";
    list.style.display = "block";

    // add name and score to list (button)
    submit.addEventListener("click",addName);
    function addName(){
        var add = document.createElement("div");
        add.innerHTML = textbox.value + " - " + score;
        document.getElementById("list").appendChild(add);
    }
    // restart game (button)
    restart.addEventListener("click", restartQuiz);
        function restartQuiz(){
            scoreboard.style.display = "none";
            answerContainer.style.display = "block";
            runningQuestion = 0
            score = 0
            timeLeft = 60
            startQuiz();
        };
    };

// this function determines what is done after an answer is selected
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        isCorrect();
        nextQuestion();
    } else {
        isWrong();
        nextQuestion();
    }
};

// function to determine end of quiz
function nextQuestion(){
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    } else{
        endQuiz();
    }
};