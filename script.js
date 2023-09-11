const quizData = [
    {
        Question:"what is best programming language? ",
        a:"java",
        b:"c++",
        c:"javaScript",
        d:"c#",
        correct:"a"
    },
    {
        Question:"what is most programming language used in 2022? ",
        a:"java",
        b:"c++",
        c:"javaScript",
        d:"c#",
        correct:"c"
    },
    {
        Question:"what is most used in back end development? ",
        a:".NET",
        b:"Nodejs",
        c:"Laraval",
        d:"django",
        correct:"c"
    },
    {
        Question:"what is the  best front end framework? ",
        a:"Angular",
        b:"next.js",
        c:"Veu.js",
        d:"React.js",
        correct:"b"
    },
    {
        Question:"it is main thing in front-end ? ",
        a:"HTML",
        b:"c++",
        c:"dart",
        d:"c#",
        correct:"a"
    },
]

let quizEl = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer")
let QuestionEl = document.getElementById("question");
let a_Q = document.getElementById("a-Q");
let b_Q = document.getElementById("b-Q");
let c_Q = document.getElementById("c-Q");
let d_Q = document.getElementById("d-Q");
let submitBtn = document.getElementById("submit");
let currentQueiz = 0;
let score = 0;
loadQuize();



function loadQuize (){
        deselectAnser();

    const currentQueizData = quizData[currentQueiz];
    QuestionEl.innerText = currentQueizData.Question;
    a_Q.innerText = currentQueizData.a;
    b_Q.innerText = currentQueizData.b;
    c_Q.innerText = currentQueizData.c;
    d_Q.innerText = currentQueizData.d;

    // currentQueiz++;

}

function deselectAnser(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}
console.log(quizData.length)
submitBtn.addEventListener('click',() => {
    const  answer = getSelected();
   if(answer){
    if(answer === quizData[currentQueiz].correct){
        score++;
    }
    currentQueiz++;
    if(  currentQueiz < quizData.length ){
        loadQuize()
    }else{
       quizEl.innerHTML = `<h2>you answered ${score}/${quizData.length} questions</h2>`
    }
   }
})