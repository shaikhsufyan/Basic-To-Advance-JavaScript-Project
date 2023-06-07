let data = [
    {
        Q : "Q : What is JS ?",
        a : "Client side language",
        b : "Server side language",
        c : "object oriented",
        d : "programing language",
        ans : "ans2",

    },
    {
        Q : "Q : Fullform of JS ?",
        a : "JavaScript",
        b : "JavaSience",
        c : "JavaS",
        d : "Javasecure",
        ans : "ans1",

    },
    {
        Q : "Q : who developed JS ?",
        a : "santa",
        b : "brenden Eich",
        c : "george",
        d : "Neck",
        ans : "ans2",

    },
    {
        Q : "Q : When JS develope ?",
        a : "1995",
        b : "1990",
        c : "1999",
        d : "1892",
        ans:"ans1"

    }
] 
;
let question = document.getElementById("question");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let nextBtn=document.getElementById("next");
let answer = document.querySelectorAll(".option");

let num = 0;
var  score = 0;
let myScore = document.querySelector(".score");
let showScore = document.querySelector(".showScore");

question.innerText=data[num].Q;
option1.innerText=data[num].a;
option2.innerText=data[num].b;
option3.innerText=data[num].c;
option4.innerText=data[num].d;

function checkingAns(){
    let ans;
answer.forEach((curElement)=>{
    if(curElement.checked){
        ans = curElement.id; 
    }
})
return ans;
}

function disSelect(){
    answer.forEach((curElement)=>{
    curElement.checked=false;
    })
}

function next(){
  
  
 let checkedAns=checkingAns();
 

 if(checkedAns == data[num].ans){
  score++;
  

}
 

num++;
disSelect();
if(num < data.length){

    question.innerText=data[num].Q;
    option1.innerText=data[num].a;
    option2.innerText=data[num].b;
    option3.innerText=data[num].c;
    option4.innerText=data[num].d;
    
    
  } else{
       showScore.innerHTML=`You Scored <br/> ${score}/${data.length} <br/><br/>
       <button onclick="location.reload()">Play Again </button>`;
       nextBtn.style.display="none";
       showScore.style.backgroundColor="aqua"

 }

}
 