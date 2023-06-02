 let hr = 0;
 let min = 0;
 let sec = 0;
 let milli = 0;

 let timer = false;

 function start(){
    timer = true;
    stopwatch()

 }

 
 function stop(){
    timer = false;
    
 }

 
 function reset(){
    // timer = false;

    // hr=0
    // min=0;
    // sec=0;
    // milli=0;

    //     document.getElementById("milli").innerHTML= "00" ;     
    //     document.getElementById("sec").innerHTML= "00" ;
    //     document.getElementById("min").innerHTML="00"; 
    //     document.getElementById("hr").innerHTML="00"; 
    location.reload();
 }


 function stopwatch(){
     
    if(timer == true){

       milli = milli + 1;
       if(milli == 100){
        sec = sec +1;
        milli=0
       }
        // sec = sec +1;
       
 
        if(sec == 60){
            min = min+1;
            sec=0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
        } 
        
        var getHr = hr;
        var getMin = min;
        var getS = sec;

        if(hr<10){
            getHr = "0"+ hr;
        }
        if(min<10){
            getMin = "0"+ min;
        }
        if(sec < 10){
            getS = "0"+ sec;
        }

 
        document.getElementById("sec").innerHTML= getS ;
        document.getElementById("min").innerHTML=getMin; 
        document.getElementById("hr").innerHTML=getHr; 
        document.getElementById("milli").innerHTML=milli; 



       let timeOut = setTimeout("stopwatch()", 8);
        
    }
 }
 