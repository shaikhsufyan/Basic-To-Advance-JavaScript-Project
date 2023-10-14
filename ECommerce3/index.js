let trends = document.querySelectorAll(".trends");
let card = document.querySelectorAll(".card");
let bar = document.getElementById("bar");

let count = 0;

trends.forEach(function(slide, index){
    slide.style.left=`${index * 100}%`
})

setInterval(function(){
    count++;
    if(count == trends.length){
        count=0;
    }
    myFun()
}, 2000)
function myFun(){
    trends.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);
        
       document.querySelector(".cardPage").style.display="flex";
       document.querySelector("#men").style.display="none";
       document.querySelector("#women").style.display="none";
       document.querySelector("#trending").style.display="none";
       document.querySelector(".cardImg").appendChild(cards)
       document.querySelector(".main").style.display="none";


        
    })
})

bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
})