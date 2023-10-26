let slide = document.querySelectorAll(".slideCard");
let cards = document.querySelectorAll(".card");
let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000);

// show card details
cards.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard.firstElementChild.src);

        document.querySelector(".container").style.display="none"
        document.querySelector("nav").style.display="flex"

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <img src=${curCard.firstElementChild.src} alt="">
        <div class="detailText">
            <h2>Top trending Hoodies</h2>
            <h3>30% OFF onTrends Wear</h3>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i><br/>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>

        </div>
        `
        document.querySelector("body").appendChild(div)

        // document.querySelector(".container").style.display="none";

    })
})