// constants for HTML references
const questionContainer = document.getElementById("question");
const answerContainer = document.getElementById("answers");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const scoreContainer = document.getElementById("score");
const timerContainer = document.getElementById("timer");

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
        question: "const variables can neither be updated nor re-declared",
        answerA: "True",
        answerB: "False",
        correct: "a"
    },
];

var score = 0;

// variables for array reference
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

// event listener for beginning the quiz
start.addEventListener("click",startQuiz);

// this function runs when the start quiz button is clicked
function startQuiz(){
    start.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
};

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
    // }else{
    //     answerIsWrong();
    // }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}
}


// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response === questions[i].answer) {
//         score++;
//     }
// }
// alert("you got " + score + "/" + questions.length);