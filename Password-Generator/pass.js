let upperData =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerData = "abcdefghijklmnopqrstuvwxyz";
let numData = "1234567890";
let symData = "!@#$%^&*()";

let lower = document.getElementById("low");
let upper = document.getElementById("up");
let num = document.getElementById("num");
let sym = document.getElementById("sym");
let passLength = document.getElementById("length")
let pasInput = document.getElementById("pass")



function randomNum(data){
    return data[Math.floor(Math.random()*data.length)];
    
    
}

function generatePass(password=""){
 if(lower.checked){
   password += randomNum(lowerData)
 }
 if(upper.checked){
    password += randomNum(upperData)
 }
 if(num.checked){
    password += randomNum(numData)
 }
 if(sym.checked){
    password += randomNum(symData)
 }
 
 if(password.length < passLength.value){
    return generatePass(password)
 }
 console.log(password);
 pass.value=password
}

function clicked(){
    generatePass();
}

let copy =  document.getElementById("copy");

function copied(){
    if(pasInput.value !=""){
    alert("Text Copied");
    }
    

}