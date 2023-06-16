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


 function generateNumber(data){
    return data[Math.floor(Math.random()*data.length)];
 }
  
 function generate(password=""){
    if(upper.checked){
       password += generateNumber(upperData)
    }
    if(lower.checked){
        password += generateNumber(lowerData)
     }
     if(num.checked){
        password += generateNumber(numData)
     }
     if(sym.checked){
        password += generateNumber(symData)
     }
     if(password.length<passwordLength.value){
       return generate(password)
        
     }
     
     console.log(password);
     passwordInput.value= password;

      
      
 }

 function myFun(){
 generate()
 }

 function copied(){
    alert("Text Copied")
 }