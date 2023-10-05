let searchVal = document.getElementById("search");
let button = document.getElementById("searchBtn");
let showData = document.querySelector(".showData");
let showMore = document.querySelector("#showMore");

let page = 1;

var  Acces_Key = "H3s0Ay26iI-x_wZp9C2ly-Y91pIs_pENS1eN1YbKN2g";

const getData = async (searchValue, pageNo) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=${pageNo}age&client_id=${Acces_Key}`);
    let jsonData = await fetching.json();

    let results = jsonData.results;
    console.log(jsonData);
     console.log(pageNo);
      
     if(pageNo === 1){
        showData.innerHTML="";
     } 
     
     if(searchVal.value == ""){
        showData.innerHTML=`
        <h1>Please Search</h1>
        `
    }else{
        document.querySelector(".moreBtn").style.display="block"
    }
//    searchVal.value=""
    results.forEach(function(data){
        console.log(data);

        let card = document.createElement("div");
        card.classList.add("card")
        showData.appendChild(card);
        card.innerHTML=`
         
           <img src=${data.urls.small} alt="">
           <a href=${data.links.html} target="_blank">${data.alt_description}</a>
        
        `
    })

    
    
}

button.addEventListener("click", function(){
    let searchValue = searchVal.value ;
    getData(searchValue , 1)
})
 
showMore.addEventListener("click", function(){
getData(searchVal.value, ++page)
})