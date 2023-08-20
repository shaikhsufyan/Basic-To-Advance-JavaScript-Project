 let trains = document.getElementById("trains");
 let connects = document.getElementById("connects");
 let members = document.getElementById("members");
 let programs = document.getElementById("programs");

 trains.addEventListener("click", function(){
    trains.style.color="rgb(2, 253, 2)";
    members.style.color="white";
    programs.style.color="white";
    connects.style.color="white";

 })
 
 programs.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="white";
    programs.style.color="rgb(2, 253, 2)";
    connects.style.color="white";

 })
 
 members.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="rgb(2, 253, 2)";
    programs.style.color="white";
    connects.style.color="white";

 })
 
 connects.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="white";
    programs.style.color="white";
    connects.style.color="rgb(2, 253, 2)";

 })


 let mainBtn = document.getElementById("mainBtn");
 mainBtn.addEventListener("click", function(){
    document.querySelector(".join").style.display="block";
 })


 let join = document.getElementById("join");

 join.addEventListener("click", function(){
    let names = document.getElementById("names");
    let number = document.getElementById("number");

    if(names.value == "" && number.value == ""){
        alert("please Enter Name and Number")
    }else{
        alert("Thanks for Joining");
    document.querySelector(".join").style.display="none";

    }

 })


//  slide

let slide = document.querySelectorAll(".slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

console.log(slide);

let count = 0;

next.addEventListener("click", function(){
    count++;
    if(count == slide.length-2){
        count=0;
    }
    myFun();
})

prev.addEventListener("click", function(){
    count--;
    if(count == -1){
        count=slide.length-3;
    }
    myFun();
})
function myFun(){
    slide.forEach(function(curImg){
        curImg.style.transform = `translateX(-${count * 114}%)`
    })
}


// connect js

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){

    let name = document.getElementById("name");
    let pass = document.getElementById("pass");

    
    if(name.value == "" && pass.value == ""){
        alert("please Enter Name and Password")
    }else{
        alert("Thanks for Connecting");
     

    }
})