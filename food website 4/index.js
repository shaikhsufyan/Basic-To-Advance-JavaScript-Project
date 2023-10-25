let cartBtns = document.querySelectorAll("#cartBtn");
let removeBtn = document.querySelectorAll("#removeBtn");
let loginBtn = document.getElementById("loginBtn");
let user = document.getElementById("user");
let chefs = document.querySelectorAll(".chefCard");

chefs.forEach(function(chef){
    chef.addEventListener("click", function(){
        document.querySelector(".detail").innerHTML=""
        document.querySelector(".chefData").style.display="block"

        console.log(chef.firstElementChild.src);
        let div = document.createElement("div");
        div.classList.add("chefDetail")
        div.innerHTML=`
        <img src=${chef.firstElementChild.src} alt="">
        <div>
        <p>Top Chef's</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio assumenda, modi ut consectetur, quod illo perspiciatis officiis officia possimus voluptates nisi amet!</p>

        </div>
        `
        document.querySelector(".detail").appendChild(div);
         
        document.getElementById("closeBtn").addEventListener("click", function(){
        document.querySelector(".chefData").style.display="none"

        })
    })
    
})



user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("showPage")
})
loginBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == ""){
        alert("Enter : Email Passowrd")
    }else{
        alert("Thanks You Logged :");
        document.querySelector(".loginPage").style.display="none"
    }
})

let num = 0 ;
cartBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        num++;
         document.getElementById("cartNum").innerHTML=num;
    })
})

removeBtn.forEach(function(remove){
    remove.addEventListener("click", function(){
        if(num > 0){
            num--;
            document.getElementById("cartNum").innerHTML=num;
        }
        
    })
})