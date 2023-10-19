let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)


card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".content").style.display="block"
       document.querySelector(".contentDetail").innerHTML=`
        <img src=${cards.firstElementChild.src}>
        <div>
            <h1>DR Alexa Zoan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus labore perspiciatis ut ab beatae error. Perspiciatis ratione eos id minus reiciendis!</p>
        </div>

        `
        closeBtn.addEventListener("click", function(){
            document.querySelector(".content").style.display="none"

        })
    })
})

connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        email.value="";
        pass.value="";

    }

})