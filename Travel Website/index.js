let user = document.getElementById("user");
let logBtn = document.getElementById("logBtn");
let place = document.getElementById("place");
let member = document.getElementById("member");
let submit = document.getElementById("submit");
let bestPlaces = document.querySelectorAll(".places");

bestPlaces.forEach(function(curPlace){
    curPlace.addEventListener("click", function(){
        window.open("https://www.airbnb.co.in/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-10-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A677", "_blank")
    })
})



user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})

logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Enter Details");
    }else{
        alert("Thanks : You Logged IN");
        document.querySelector(".loginPage").style.display="none";
    }

})

submit.addEventListener("click", function(){
    if(place.value == "" ){
        alert("First Enter Detail")
    }else{
        alert(place.value+" Tour Booked")
        place.value=""
    }
})