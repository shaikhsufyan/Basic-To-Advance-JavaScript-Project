 let slide  = document.querySelectorAll(".reviewCard");
 let login = document.getElementById("login");
 let loginBtn = document.getElementById("loginBtn");
 let card = document.querySelectorAll(".card");
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
        count=0;
    }
    myFun();
 }, 2000)


 login.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active");
 })

 
 loginBtn.addEventListener("click", function(){
    
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Enter Details")
    }else{
        alert("Thanks You Logged In")
    }

 })

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        window.open("https://www.airbnb.co.in/", "_blank")
    })
})




bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
 })
