let joke = document.getElementById("joke");
 
async function getJoke(){
    let getting = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            accept :" application/json" ,
        },
    });
    let res =await getting.json();
    let jk = res.joke;
    joke.innerHTML=jk;
    
}
getJoke();