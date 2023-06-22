const API_key = `aebdd3f5c7fae4d6b3c580249b13df42`;
let search = document.getElementById("inp");
let deg = document.getElementById("degree");
let type = document.getElementById("type");

const get = async function (input) {
  let getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&units=metric`
  );
  console.log(getData);

  document.getElementById("city").innerHTML = input;
  let dt = await getData.json();
  console.log(dt);
  console.log(dt.cod);
  if (dt.cod == 400) {
    alert("Please Enter City Name");
  }
  if (dt.cod == 404) {
    alert("Please Enter Write City Name");
  }
  console.log(dt.main.temp);
  document.getElementById("degree").innerHTML = Math.round(dt.main.temp) + " ";
  document.getElementById("type").innerHTML = dt.weather[0].main;
  search.value = "";
  let weather = dt.weather[0].main;
  if (weather == "Clear") {
    document.getElementById("img").src = "clear-sky.png";
    document.body.style.backgroundImage = "url('clear.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Clouds") {
    document.getElementById("img").src = "clouds.png";
    document.body.style.backgroundImage = "url('cld.jpg')";
    document.body.style.backgroundSize = "100% 1";
  } else if (weather == "Rain") {
    document.getElementById("img").src = "rain.png";

    document.body.style.backgroundImage = "url('rn.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "strom") {
    document.getElementById("img").src = "strom.png";

    document.body.style.backgroundImage = "url('strom.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Haze") {
    document.getElementById("img").src = "clouds.png ";

    document.body.style.backgroundImage = "url('haze.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Snow") {
    document.getElementById("img").src = "rain.png ";

    document.body.style.backgroundImage = "url('snow.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  } else if (weather == "Smoke") {
    document.getElementById("img").src = "clouds.png ";
    document.body.style.backgroundImage = "url('haze.jpg')";
    document.body.style.backgroundSize = "100% 100%";
  }
};

function myFun() {
  let input = search.value;
  console.log(input);

  get(input);
}
