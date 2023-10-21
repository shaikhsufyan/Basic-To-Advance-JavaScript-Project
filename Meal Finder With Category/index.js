let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let dishs = document.querySelectorAll(".dish");
let  dishName = document.querySelectorAll(".dishName");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
console.log(prevBtn);

let count = 0;

 console.log(dishs);
const getData = async (value) =>{
   try{
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    let jsonData = await data.json()
 
    document.querySelector(".showMeal").innerHTML=""
    console.log(jsonData.meals);
    
    jsonData.meals.forEach(function(curData){
        console.log(curData);

        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
        <img src=${curData.strMealThumb} alt="">
            <p>${curData.strMeal}</p>
            <button>Show More</button>

        `
        document.querySelector(".showMeal").appendChild(div)
    })
   }catch(error){
    document.querySelector(".showMeal").innerHTML="<h1>Meal Not Find</h1>"
   }
}


searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value ;
    if(searchValue == ""){
        alert("SearchValue First")
    }else{
    getData(searchValue)
    }
})

 

dishs.forEach(function(name){
    name.addEventListener("click", function(){
        console.log(name.value);
        getData(name.value)
    })
})


// slider
dishName.forEach(function(dish, index){
    dish.style.left=`${index * 100}%`;
});

function myFun(){

    dishName.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
} 
 

nextBtn.addEventListener("click", function(){
    count++;
    if(count == dishName.length){
        count=0;
    }
    myFun();
})
console.log(document.querySelector("#prevBtn").value);

prevBtn.addEventListener("click", function(){
    count--;
    if(count == -1){
        count= dishName.length-1;
    }
    myFun();
     
})