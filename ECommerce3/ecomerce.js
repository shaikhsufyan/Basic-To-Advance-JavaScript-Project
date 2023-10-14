 let trends = document.querySelectorAll(".trendsCard");
 let card = document.querySelectorAll(".card");
 let bar = document.getElementById("bar")

 let count = 0;

 trends.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
 })

 function myFun(){
    trends.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
 }

 setInterval(function(){
    count++;
    if(count == trends.length){
        count=0;
    }
    myFun()
 }, 2000)


 card.forEach(function(cards){
    cards.addEventListener("click", function(){
        document.querySelector(".cardPage").style.display="block"
        document.querySelector(".main").style.display="none";
        document.querySelector("#women").style.display="none";
        document.querySelector("#men").style.display="none";
        document.querySelector("#trending").style.display="none";
        document.querySelector(".cardImg").appendChild(cards)



    })
 })

 bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData")
 })