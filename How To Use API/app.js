let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (searchValue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    let jsonData = await data.json();

    document.querySelector(".text").innerHTML=""
    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=`
            <h2>Word : <span>${jsonData[0].word}</span></h2>
            <p>${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition   }</span></p>
            <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example   }</span></p>
            <p>Synonyms : <span>${jsonData[0].meanings[0].synonyms}</span></p>
            <a href=${jsonData[0].sourceUrls[0]    } target="_blank">Read More</a>
    `
    document.querySelector(".text").appendChild(div)
    console.log(jsonData);
    console.log(jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition       );

}

searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    if(searchValue == ""){
        alert("First Enter Word")
    }else{
        getData(searchValue)
    }
})
