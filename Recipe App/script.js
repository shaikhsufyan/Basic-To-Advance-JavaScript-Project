let searchBtn = document.getElementById("search");
let input = document.getElementById("input");
let cardContainer = document.querySelector(".card-container");
let foodContent = document.getElementById("foodContent");

// console.log(input.value);
const renderFood = async (search) => {
  document.getElementById("head").innerHTML = "Fetching Your Request...";
  let get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`);
  let jsonData = await get.json();
  console.log(jsonData.meals);

   

  search.value="";
  cardContainer.innerHTML = "";
  if (jsonData.meals !== null) {
    document.getElementById("head").innerHTML = "Best Dishes Ever";
    jsonData.meals.forEach((meal) => {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("foodCard");
        cardContainer.appendChild(cardDiv);
        cardDiv.innerHTML = `
          <img src="${meal.strMealThumb}"/>
          <h2>${meal.strMeal}</h2>
          <p>${meal.strArea} <span>Dish</span></p>
          <p>${meal.strTags}</p>
   
          `;
  
         let moreBtn = document.createElement("button");
         moreBtn.setAttribute("id","viewMore");
         moreBtn.innerText="View More"
         cardDiv.appendChild(moreBtn);
  
        moreBtn.addEventListener("click", function(){
            showContent(meal);
          
         })
       })
      
 
  }else {
    document.getElementById("head").innerHTML = "Please Enter Valid Dish Name";
  }

   
 
};

function ingredient(meal){
    let list = "";
    for(let a=1; a<=20; a++){
          let data = meal[`strIngredient${a}`];
          if(data){
            list+=`<li>${data}</li>`
          }else{
            break;
          }
    }
    return list;
}
function showContent(meal){
     foodContent.innerHTML=`
     <h2>${meal.strMeal}</h2>
     <h3>Ingrediant's :</h3>
     <ul>${ingredient(meal)}</ul>
     <h3>Instruction's :</h3>
     <p>${meal.strInstructions}</p>
     `
     document.querySelector(".content").style.display="block"
}

let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function(){
    document.querySelector(".content").style.display="none"

})

searchBtn.addEventListener("click", function () { 
  renderFood(input);
});