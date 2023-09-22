let icon = document.getElementById("icon");

icon.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");

    if(document.querySelector("body").className == "active"){
        icon.className="fa-solid fa-sun";
    }else{
        icon.className="fa-solid fa-moon";

    }
})