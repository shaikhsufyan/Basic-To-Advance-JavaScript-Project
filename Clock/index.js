 
 setInterval(myFun, 1000);

 function myFun(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
 }