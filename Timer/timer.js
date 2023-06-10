let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
 
var run = false;

function start(){
    run = true;
    timer();
}
function stop(){
 run=false;
 
}
function reset(){
    location.reload();
} 

function timer(){
    if(run == true){
         
        sec.value  = sec.value  -1 ;
        if(sec.value == 0){
            min.value=min.value-1; 
            
            sec.value  = 60
          
        }
        if(min.value == 0){
          
         
                if(sec.value == 1){
                    run=false;
                    sec.value="00"
                }
            
            //  if(sec.value == 1){
            //     run=false;
            //     sec.value="00"
            // }
        }
                 
    }
       
    setTimeout("timer()", 100)
}
// timer();