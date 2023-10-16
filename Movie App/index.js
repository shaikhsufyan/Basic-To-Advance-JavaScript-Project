let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let APIKey = "17f8307a";

const getData = async (movie) => {
    try{
  let data = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`);
  let jsonData = await data.json();

  document.querySelector(".card").innerHTML = "";
  searchInput.value=""
  console.log(jsonData.Error == "Movie not found!");
  console.log(jsonData.Ratings[0].Value);

 
    
  let div = document.createElement("div");
  div.classList.add("movieCard");
  div.innerHTML = `
    <img src=${jsonData.Poster} alt="">
    <div class="cardText">
        <h1> ${jsonData.Title}</h1>
        <p class="rating">Rating : <span>${jsonData.Ratings[0].Value.slice( 0, 3)}</span> </p>
        <a href="" class="types">${jsonData.Genre}</a> 
        <p>Released : <span>${jsonData.Released}</span> </p>
        <p>Duration : <span>${jsonData.Runtime}</span> </p>
        <p>Plot : <span>${jsonData.Plot}</span> </p>
         

    </div>
    `;
  document.querySelector(".card").appendChild(div);
  }
  catch(error){
    document.querySelector(".card").innerHTML="<h1>Movie Not Found</h1>";
    console.log(error);
  }
  
}
document.querySelector(".card").innerHTML="<h1>Search Movie Information Here.</h1>";


searchBtn.addEventListener("click", function () {
  let movieName = searchInput.value;
  if (movieName != "") {
    getData(movieName);
  } else {
    document.querySelector(".card").innerHTML="<h1>Search Movie Name</h1>";

  }
});
