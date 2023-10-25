let addCart = document.querySelectorAll("#addCart");
let removeCart = document.querySelectorAll("#removeCart");
let cartNum = document.getElementById("cartNum");
let chefs = document.querySelectorAll(".chefCard");
let user = document.getElementById("user")

let num = 0;

addCart.forEach(function(addToCart){
    addToCart.addEventListener("click", function(){
        num++;
        cartNum.innerHTML=num;
    })
})


removeCart.forEach(function(removeToCart){
    removeToCart.addEventListener("click", function(){
        num--;
        if(num > 0){
        cartNum.innerHTML=num;
        }
    })
})

// chefs
chefs.forEach(function(card){
    card.addEventListener("click", function(){
        console.log(card);

        let div = document.createElement("div");
        div.classList.add("textChef");
        document.querySelector(".chefData").style.display="block"
        document.querySelector(".chefDetail").innerHTML=""
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <p>Our Top Chefs</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est fugiat velit sed, optio atque officiis voluptatibus dolorem ab nisi blanditiis. Labore?</p>

        </div>
        `
        document.getElementById("closeBtn").addEventListener("click", function(){
            document.querySelector(".chefData").style.display="none"
        })
        document.querySelector(".chefDetail").appendChild(div)
    })
})

// login
user.addEventListener("click", function(){
     document.querySelector(".loginPage").classList.toggle("showData")

})

document.getElementById("loginBtn").addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" & pass.value == ""){
        alert("Enter Detail")
    }else{
        alert("You Logged IN")
    }

})