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
const scoreContainer = document.getElementById("score");
var score = 0;
const timerContainer = document.getElementById("timer");
var timeLeft = 60;
var timerInterval

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

// variables for questions array reference
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

// beginning timer function
function setTime() {
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

function isCorrect(){
    score++;
    setScore();
};

function isWrong(){
    timeLeft -= 10;
};

function endQuiz(){
    timerContainer.style.display = "none";
    scoreContainer.style.display = "none";
    answerContainer.style.display = "none";
    questionContainer.textContent = "All Done! You got " + score + " out of 5 questions correct.";
    scoreboard.style.display = "block";
    // create text box for name
    var createTextBox = document.createElement("INPUT");
    createTextBox.setAttribute("type","text");
    document.getElementById("scoreboard").appendChild(createTextBox);
    // create submit button for name
    var createButton = document.createElement("Button");
    createButton.innerHTML = "submit"
    document.getElementById("scoreboard").appendChild(createButton);
    // add name and score to list
    createButton.addEventListener("click",addName);
    function addName(){
        var add = document.createElement("div");
        add.innerHTML = createTextBox.value + " - " + score;
        document.getElementById("list").appendChild(add);
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