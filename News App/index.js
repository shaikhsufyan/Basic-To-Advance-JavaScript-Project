let key = "a13d2ccbcd9f45d98699f485b9cd2b55";

let dataCard = document.querySelector(".dataCard");
let search = document.getElementById("searchBtn");
let inputDatas = document.getElementById("inputData");

let category = document.getElementById("type");

let myFun = async (input) => {
  let data = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await data.json();
  console.log(jsonData);

  category.innerHTML = "Search : " + input;
  dataCard.innerHTML = "";
  inputDatas.value = "";
  jsonData.articles.forEach((curVal) => {
    console.log(curVal);

    let divs = document.createElement("div");
    divs.classList.add("cards");
    dataCard.appendChild(divs);

    divs.innerHTML = `

        <img src="${curVal.urlToImage}" alt="">
        <h3>${curVal.title}</h3>
        <p>${curVal.description}</p>
        
        `;
    divs.addEventListener("click", function () {
      window.open(curVal.url, "_blank");
    });
  });
};
window.addEventListener("load", myFun("India"));

function getData() {
  let inputVal = inputDatas.value;
  if (inputVal == "") {
    alert("Please Search");
  } else {
    myFun(inputVal);
  }
}

function navItem(navValue) {
  if (navValue == "politics") {
    document.getElementById("politics").classList.add("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("technology").classList.remove("active");
  }
  if (navValue == "sports") {
    document.getElementById("politics").classList.remove("active");
    document.getElementById("sports").classList.add("active");
    document.getElementById("technology").classList.remove("active");
  }
  if (navValue == "technology") {
    document.getElementById("politics").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("technology").classList.add("active");
  }

  myFun(navValue);
}
