 let lowerData = "abcdefghijklmnopqrstuvwxyz";
 let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let numData = "1234567890";
 let symData = "!@#$%^&*()";

 let passwordInput = document.getElementById("passwordInput");
 let passwordLength = document.getElementById("passwordLength");
 let upper = document.getElementById("upper");
 let lower = document.getElementById("lower");
 let num = document.getElementById("num");
 let sym = document.getElementById("sym");

function randomNumber(data){
     
   return data[Math.floor(Math.random()*data.length)];
}
 

function generatePass(password = ""){
    if(upper.checked){
       password += randomNumber(upperData)
    }
    if(lower.checked){
        password += randomNumber(lowerData)
     }
     if(num.checked){
        password += randomNumber(numData)
     }
     if(sym.checked){
        password += randomNumber(symData)
     }
    
     if(password.length < passwordLength.value){
        generatePass(password)
         
     }
     passwordInput.value=password
     console.log(password);

}
function myFun(){
   
    generatePass()
}