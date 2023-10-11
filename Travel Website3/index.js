let slide = document.querySelectorAll(".review");
let packages = document.querySelectorAll(".packCard");

let logBtn = document.getElementById("logBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");


let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count = 0;
    }
    myFun();
},2000)

logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})



submit.addEventListener("click", function(){
     let email = document.getElementById("email");

     if(email.value == "" && pass.value){
        alert("Enter Detail")
     }else{
        alert("You Logged In")
     }
})



bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
})


packages.forEach(function(packs){
    packs.addEventListener("click", function(){
        window.open("https://www.airbnb.co.in/", "_blank")
   })
})
 


