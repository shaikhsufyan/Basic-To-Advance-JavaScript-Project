 function myFun(){
    let searchval = document.getElementById("inp").value.toUpperCase();
    console.log(searchval);
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".mainPage");

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toUpperCase().indexOf(searchval) > -1){
                tr[i].style.display=""
                front.style.display="none"
            }else{
                tr[i].style.display="none"
                 


            }
        }
    }

    if(searchval == ""){
        front.style.display="flex"

    }
 }


//  nav

function showLogin(){
    let login = document.querySelector(".log");
    login.style.display="block"
    let nav = document.querySelector(".nav");
    nav.style.display="none"


}


function showNav(){
    let nav = document.querySelector(".nav");
    nav.style.display="block"
    let login = document.querySelector(".log");
    login.style.display="none"

}

function login(){
    let login = document.querySelector(".log");
    login.style.display="none"
}


function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="none"
}



//  IMAGE SLIDER

let cust = document.querySelectorAll(".customer");
let count = 0;
console.log(cust);

cust.forEach(function(review, index){
    review.style.left=`${index * 100}%`
    console.log(review);
    console.log(index);

})


function prev(){
    count --;
    if(count == -1){
        count = cust.length - 1;
    }
    slide();

}

function next(){
    count ++;
    if(count == cust.length){
        count=0;
    }
    slide();
}

function slide(){
    cust.forEach(function(review){
        review.style.transform=`translateX(-${count * 100}%)`;
        console.log( review.style.transform=`translateX(-${count * 100}%)`);
    })
}