 let searchInput = document.getElementById("searchInput");
 let searchBtn = document.getElementById("searchBtn");

 
 const getData = async (searchValue) => {

    try{
        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
        let jsonData =await data.json();
        console.log(jsonData);
    
        document.querySelector(".text").innerHTML="";
        let div = document.createElement("div");
        div.classList.add("details");
        div.innerHTML=`
        <h2 id="word">Word : <span>${jsonData[0].word} </span></h2>
        <p id="type" ><span>${jsonData[0].meanings[0].partOfSpeech} </span></p>
        <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
        <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example === undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example}</span></p>
        <p>Synonyms : <span> ${jsonData[0].meanings[0].synonyms[0] === undefined ? "Not Found" : jsonData[0].meanings[0].synonyms[0]}</span></p>
        <a href=${jsonData[0].sourceUrls } target="_blank" >Read More</a>
        `
        document.querySelector(".text").appendChild(div);
    }
    catch(error){
        document.querySelector(".text").innerHTML="<h1>Not Found</h1>"
    }

 
 }

 searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    if(searchValue == ""){
        alert("First Enter Something")
    }else{
        getData(searchValue)
    }
 })
