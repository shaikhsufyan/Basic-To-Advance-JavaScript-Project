let submit = document.getElementById("submit");
let bar = document.getElementById("bar");
let cvBtn = document.getElementById("cvBtn");


let ul = document.querySelector("ul");
bar.addEventListener("click", function(){
     ul.classList.toggle("showData");
    if(ul.className == "showData"){
        bar.className="fa-solid fa-xmark";
    }else{
        bar.className="fa-solid fa-bars";

    }

})

cvBtn.addEventListener("click", function(){
    alert("Downlode Succesfully")
})

submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let mess = document.getElementById("mess");

    if(email.value == "" && pass.value == "" && mess.value == ""){
        alert("Please Fill Detail")
    }else{
        alert("You Logged IN")
        email.value="";
        pass.value="";
        mess.value="";

    }

})