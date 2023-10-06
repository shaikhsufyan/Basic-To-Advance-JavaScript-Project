let slide = document.querySelectorAll(".reviewCard");
let dark = document.getElementById("dark");
let user = document.getElementById("user");
let bar = document.getElementById("bar");
let logBtn = document.getElementById("logBtn");
let placeName = document.getElementById("placeName");
let booked = document.getElementById("booked");




let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index *100}%`
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

dark.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active1");
})

user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active2");
})

bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
});


logBtn.addEventListener("click", function(){
   
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In");
        document.querySelector(".loginPage").style.display="none"
    }

});

booked.addEventListener("click", function(){
   if(placeName.value == ""){
    alert("please Fill Detail")
   }else{
    alert(placeName.value + " Tour Booked")
   }
});