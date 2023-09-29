 let slides  = document.querySelectorAll(".crd");
 let search = document.getElementById("search");
 let user = document.getElementById("user");
 let bar = document.getElementById("bar");
 let logBtn = document.getElementById("logBtn");


 let count = 0;
 
 slides.forEach(function(slide, index){
   slide.style.left = `${index * 100}%`
 })

 function myFun(){
   slides.forEach(function(curVal){
      curVal.style.transform = `translateX(-${count * 100}%)`
   })
 }

 setInterval(function(){
   count++;
   if(count == slides.length){
      count=0;
   }
   myFun();
 }, 2000)

 search.addEventListener("click", function(){
   document.querySelector(".searchBar").classList.toggle("active1")
 })

 
 user.addEventListener("click", function(){
   document.querySelector(".loginPage").classList.toggle("active2")
 })


 
 logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
      alert("Fill Detail")
    }else{
      alert("You Logged IN");
       document.querySelector(".loginPage").style.display="none"
    }

 })



 
 
 
 bar.addEventListener("click", function(){
   document.querySelector("ul").classList.toggle("showData")
 })

