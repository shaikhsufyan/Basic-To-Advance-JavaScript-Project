let cards = document.querySelectorAll(".cards");
let cardDetails = document.querySelector(".cardDetails");
let closeBtn = document.getElementById("close");
let navBtn = document.getElementById("navBtn");
let loginBtn = document.getElementById("loginBtn");




console.log(cardDetails);
cards.forEach((card)=>{
    card.addEventListener("click", function(){
        document.querySelector(".details").style.display="block";
        cardDetails.innerHTML=`
        <h3>${card.lastElementChild.innerHTML}</h3>
        <img src="${card.firstElementChild.src}"/>
        <h3>Offer's</h3>
        <p>Special PriceGet extra 5% off (price inclusive of cashback/coupon)</p>
        <p>Bank OfferFlat ₹1,250 off on OneCard Credit Card EMI Transactions on</p>
        <p>Bank OfferExtra ₹1,000 off on OneCard Credit Card EMI Transactions</p>
        <p>Bank OfferExtra ₹1,000 off on OneCard Credit Card EMI Transactions</p>
        <h3>Product Details</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Non molestias, et necessitatibus neque minus veniam, accusantium totam velit sapiente eius reiciendis labore hic eum pariatur alias officiis aspernatur eveniet maxime impedit iste dolorem, voluptatibus cumque vel. Rem culpa odio dignissimos provident adipisci.</p>
        




       
        `
    })
})

closeBtn.addEventListener("click", ()=>{
    document.querySelector(".details").style.display="none";
    
     
})

navBtn.addEventListener("click", ()=>{
    document.querySelector(".loginPage").style.display="block"
})

loginBtn.addEventListener("click", ()=>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(name.value == "" && email.value == "" && pass.value == ""){
        alert("Fill Detail Please")
    }else{
        alert("You Logged IN");
    document.querySelector(".loginPage").style.display="none"


    }

})