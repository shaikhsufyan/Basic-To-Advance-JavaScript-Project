 
 let myScore = document.getElementById("myScore").innerHTML;
 let comp = document.getElementById("comp").innerHTML;

 function myFun1(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let rocks = document.getElementById("userImg").src="rock.png";

    if(c == 0){
        let rock = document.getElementById("compImg").src="rock.png";
        if(rocks && rock){
            document.getElementById("result").innerHTML="Math DRAW"
        }
    }
    if(c == 1){
        let paper = document.getElementById("compImg").src="paper.png";
        if(rocks && paper){
            document.getElementById("result").innerHTML="User Loss"
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
    if(c == 2){
        let scissor = document.getElementById("compImg").src="scissor.png";
        if(rocks && scissor){
            document.getElementById("result").innerHTML="User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;

        }
    }

 }
 function myFun2(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let papers = document.getElementById("userImg").src="paper.png";

    if(c == 0){
        let rock = document.getElementById("compImg").src="rock.png";
        if(papers && rock){
            document.getElementById("result").innerHTML="User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;
        }
    }
    if(c == 1){
        let paper = document.getElementById("compImg").src="paper.png";
        if(papers && paper){
            document.getElementById("result").innerHTML="Math Draw"
        }
    }
    if(c == 2){
        let scissor = document.getElementById("compImg").src="scissor.png";
        if(papers && scissor){
            document.getElementById("result").innerHTML="User Loss"
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
    
 }
 function myFun3(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b)
    console.log(c);
    let scissors = document.getElementById("userImg").src="scissor.png";

    if(c == 0){
        let rock = document.getElementById("compImg").src="rock.png";
        if(scissors && rock){
            document.getElementById("result").innerHTML="User Loss"
            comp++;
            document.getElementById("comp").innerHTML=comp;
        }
    }
    if(c == 1){
        let paper = document.getElementById("compImg").src="paper.png";
        if(scissors && paper){
            document.getElementById("result").innerHTML="User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML=myScore;
        }
    }
    if(c == 2){
        let scissor = document.getElementById("compImg").src="scissor.png";
        if(scissors && scissor){
            document.getElementById("result").innerHTML="Math DRAW"
        }
    }
 }