const questionText = document.querySelector(".question-text");
const inforText = document.querySelector(".infor-text")
const optionBox= document.querySelector(".option-box");
const resultBtn = document.querySelector(".result-btn");
const resultBox = document.querySelector(".result-box");
const showInforBtn = document.querySelector(".more-infor-btn");
const showInforBox = document.querySelector(".flip-container");
const correctAnswerDescription = document.querySelector(".correct-answer-description");
const wrongAnswerDescription = document.querySelector(".wrong-answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn")
// const answerDescription2 = document.querySelector(".answer-description2")
let questionIndex = 0;
var i=0;

myApp = [
    {   
        id : 1,
        question: "apple",
        option: ["táo","cam","bưởi","quả dưa hấu"],
        answer: 0 ,
        description: "a round fruit with shiny red or green skin that is fairly hard and white inside"
        

    },
    {   
        id : 2,
        question: "green",
        option: ["màu xanh lá cây","màu hồng","màu đỏ","màu trắng"],
        answer: 0 ,
        description: "having the colour of grass or the leaves of most plants and trees"
        

    },
    {   
        id : 3,
        question: "cactus",
        option: ["cây xương rồng","cây táo","cây ổi","cây mận"],
        answer: 0 ,
        description: "a plant that grows in hot dry regions, especially one with thick stems covered in spines but without leaves"
        

    },
    {   
        id : 4,
        question: "cat",
        option: ["chuột","mèo"],
        answer: 1 ,
        description: "a small animal with soft fur that people often keep as a pet. Cats catch and kill birds and mice."
        

    },


]

function load(){
    questionText.innerHTML = myApp[questionIndex].question;
    inforText.innerHTML = myApp[questionIndex].description;
    createOption();
}


function createOption(){
    optionBox.innerHTML="";
    for( i=0; i<myApp[questionIndex].option.length; i++){
        const option = document.createElement("div");
          option.innerHTML = myApp[questionIndex].option[i];
          option.classList.add("option");
          option.id=i;
          option.setAttribute("onclick", "check(this)");
          optionBox.appendChild(option);
}
}

function check(ele){
    const id = ele.id;
    if(id==myApp[questionIndex].answer){
        ele.classList.add("correct");  
         showCorrectAnswerDescription()  
    } else {
        ele.classList.add("wrong");
        showWrongAnswerDescription();
        for(let i=0; i<optionBox.children.length;i++){
        if(optionBox.children[i].id==myApp[questionIndex].answer){
            optionBox.children[i].classList.add("show-correct")
        }
        }

    }
    disableOptions();

}

function showWrongAnswerDescription(){
    wrongAnswerDescription.classList.add("show");
}
function removeWrongAnswerDescription(){
    correctAnswerDescription.classList.remove("show");
}
function showCorrectAnswerDescription(){
    correctAnswerDescription.classList.add("show");
}
function removeCorrectAnswerDescription(){
    wrongAnswerDescription.classList.remove("show");
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length;i++){
        optionBox.children[i].removeAttribute("onclick");
    }
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion(){
    questionIndex++
    load();
    removeCorrectAnswerDescription();
    removeWrongAnswerDescription();
}

// button result
resultBtn.addEventListener("click", showResult);

function showResult(){
    resultBox.classList.toggle("show-result-box")
}

// button more infor
showInforBtn.addEventListener("click", showInfor);

function showInfor(){
    showInforBox.classList.toggle("hover");   
}

window.onload=()=>{
    load();

}