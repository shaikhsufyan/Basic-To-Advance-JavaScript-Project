let slide  = document.querySelectorAll(".reviewCard");
let dark = document.getElementById("dark");
let user = document.getElementById("user");
let bar = document.getElementById("bar");
let logBtn = document.getElementById("logBtn");
let bookBtn = document.getElementById("bookBtn");



console.log(slide);
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`;
})

 
function myFun(){
    slide.forEach(function(data){
        data.style.transform = `translateX(-${count * 100}%)`
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
    document.querySelector("body").classList.toggle("active1")
})


user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active2")
});

logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Fill Detail");
    }else{
        alert("Thanks You Logged In");
        document.querySelector(".loginPage").style.display="none"
    }

})

bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData")
});


bookBtn.addEventListener("click", function(){
    let placeName = document.getElementById("place");

    if(placeName.value == ""){
        alert("Please Fill Details")
    }else{
        alert(placeName.value + "Tour Booked");
    }
});