let slides = document.querySelectorAll(".slide");
let buttons = document.getElementById("btn");

let user = document.getElementById("user");
let search = document.getElementById("search");
let barIcon = document.getElementById("bar");
let loginPage = document.querySelector(".login");
let loginBtn = document.getElementById("loginBtn");


console.log(slides);
let count = 0;

slides.forEach(function(slide, index){
    slide.style.left=`${index*100}%`;
})



function slider(){
    slides.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count*100}%)`;
        console.log(curVal);
    }) 
}

setInterval(function(){
    count++;
    if(count == slides.length){
        count=0;
     }
    
    slider();
},2000)


// login

user.addEventListener("click", function(){
 
    loginPage.classList.toggle("active1")

     

})

loginBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
       alert("Fill Detail");
    }else{
       alert("You LoggedIn")
    loginPage.style.display="none";

    }
})

// searchbar
search.addEventListener("click", function(){
    document.querySelector(".searchBox").classList.toggle("active")
})


// navbar

let ul = document.querySelector("ul");
barIcon.addEventListener("click", function(){
    ul.classList.toggle("showItem");

    if(ul.className == "showItem"){
        barIcon.className="fa-solid fa-xmark";
    }else{
        barIcon.className="fa-solid fa-bars";

    }
})