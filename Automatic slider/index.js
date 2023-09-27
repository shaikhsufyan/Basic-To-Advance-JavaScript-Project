let cards = document.querySelectorAll(".card");

let count = 0;

cards.forEach(function(slide, index){
    slide.style.left=`${index*100}%`

})

setInterval(function(){
    count++;
    if(count == cards.length){
        count=0;
    }
    myFun()
},2000)

function myFun(){
    cards.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`;
         

    })
}