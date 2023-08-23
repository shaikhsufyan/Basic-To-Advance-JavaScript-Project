 
 let searchInput = document.getElementById("searchInput");
 let searchBtn = document.getElementById("searchBtn");
 let foodContainer = document.querySelector(".food-container");
 let heading = document.getElementById("heading");
let contentText = document.querySelector(".contentText");

 let renderFood = async(searchData) =>{
    heading.innerHTML="Fetching Your Request ..."
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData.value}`);
    let jsonData = await data.json();
    console.log(jsonData.meals);

    heading.innerHTML="Best Dishes Ever"
    searchData.value=""
    foodContainer.innerHTML=""
    jsonData.meals.forEach((meal) => {
       let divs = document.createElement("div");
       divs.classList.add("food-card");
       foodContainer.appendChild(divs);

    divs.innerHTML=`
    <img src="${meal.strMealThumb}"/>
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea} <span>Dish</span></p>
    <p>${meal.strTags}</p>

    `
    
    let button = document.createElement("button");
    button.setAttribute("id", "viewMore");
    button.innerText="View More";
    divs.appendChild(button);

    button.addEventListener("click", function(){
        showContent(meal)
    }) 


    })

    
 
         
   
     
     
    

 }

 function ingredient(meal){
    let list = "";
  

    for(let a=1; a<=20; a++){
        let data = meal[`strIngredient${a}`];
 
        if(data){
            list+= `<li>${data}</li>`
        }else{
            break;
        }
    }  
    return list;
 }

 function showContent(meal){
    contentText.innerHTML=`
    <h2>${meal.strMeal}</h2>
    <h3>Ingredients :</h3>
    <ul>${ingredient(meal)}</ul>
    <h3>Instruction :</h3>
    <p>${meal.strInstructions}<p/>
        `

        document.querySelector(".content").style.display="block"
 }
 
 document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".content").style.display="none"

 })
searchBtn.addEventListener("click", function(){
     renderFood(searchInput);
} )
  