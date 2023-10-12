let slide = document.querySelectorAll("#brand");
let cards = document.querySelectorAll(".card");

let bar = document.getElementById("bar");

let count = 0;




slide.forEach(function(slides,index){
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
        count=0;
    }
    myFun()
},2000)


bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
})


cards.forEach(function(card){
    card.addEventListener("click", function(){
        window.open("https://www.wakefit.co/search-result?q=sofa", "_blank")
    })
})