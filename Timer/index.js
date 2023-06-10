
var min = 5;
var sec = 60;
var run = false;


function start(){
   run = true;
   timer();
   



}


function stop(){
    run = false;

}


function reset(){
    run = false;
    sec = 60;
    min = 5;
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="05";

}

function timer(){
    if(run == true){
        console.log(sec);
    sec = sec-1;
    console.log(sec);
    if(sec == 0){
        min = min -1;
        sec = 60;
    }
    if(min == 0){
         
        console.log("DD");
        if(sec == 1){
            run = false;
            alert("Timer Completed")
            sec="00";

        }
    }

    
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML="0"+min;

    setTimeout("timer()",10)
    }
}