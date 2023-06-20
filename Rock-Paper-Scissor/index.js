 // let a = Math.random();
// let b = a * 3;
// let c = Math.floor(b);
// console.log(c);
 
function myFun1() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    console.log(c);
   
    let rock = (document.getElementById("user").src = "rock.png");
    if (c == 0) {
        let rock = (document.getElementById("comp").src = "rock.png");
        if (rock && rock) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "paper.png");
        if (rock && paper) {
            let result = (document.getElementById("result").innerHTML = "User You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "scissor.png");
        if (rock && scissor) {
            let result = (document.getElementById("result").innerHTML = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    }
}


function myFun2() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    console.log(c);
    

    let paper = (document.getElementById("user").src = "paper.png");

    if (c == 0) {
        let rock = (document.getElementById("comp").src = "rock.png");
        if (rock && paper) {
            let result = (document.getElementById("result").innerHTML = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "paper.png");
        if (paper && paper) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "scissor.png");
        if (paper && scissor) {
            let result = (document.getElementById("result").innerHTML = "You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    }
}


function myFun3() {
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    console.log(c);
     
    let scissor = (document.getElementById("user").src = "scissor.png");

    if (c == 0) {
        let rock = (document.getElementById("comp").src = "rock.png");
        if (scissor && rock) {
            let result = (document.getElementById("result").innerHTML = "You Lost");
            let score = document.querySelector("#comScore").innerHTML;
            score++;
            document.querySelector("#comScore").innerHTML = score;
        }
    } else if (c == 1) {
        let paper = (document.getElementById("comp").src = "paper.png");
        if (scissor && paper) {
            let result = (document.getElementById("result").innerText = "You Win");
            let score = document.querySelector("#myscore").innerHTML;
            score++;
            document.querySelector("#myscore").innerHTML = score;
        }
    } else if (c == 2) {
        let scissor = (document.getElementById("comp").src = "scissor.png");
        if (scissor && scissor) {
            let result = (document.getElementById("result").innerHTML = "Draw");
        }
    }
}



  
 
 
 
