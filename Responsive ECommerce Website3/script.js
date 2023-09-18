let cards = document.querySelectorAll(".cards");
let cardContent = document.querySelector(".cardContent");
let cardDetail = document.querySelector(".cardDetail");
 
let closeBtn = document.getElementById("close");
let navBtn = document.getElementById("navBtn");
 

 
 cards.forEach((card)=>{
     card.addEventListener("click", ()=>{
    cardDetail.style.display="block";

    
        cardContent.innerHTML=`
        
        <h3>${card.lastElementChild.innerHTML}</h3>
        <img src="${card.firstElementChild.src}"></img>
        <h3>Offer's :</h3>
        <p>Special PriceGet extra 5% off (price inclusive of cashback/coupon)<p/>
        <p>Bank OfferFlat ₹1,250 off on OneCard Credit Card EMI Transactions on <p/>
        <p>Bank OfferExtra ₹1,000 off on OneCard Credit Card EMI Transactions<p/>
        <p>Bank Offer10% Instant Discount on Canara Bank Credit Card Txns<p/>
        <h3>Product Detail :</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas. Non molestias, et necessitatibus neque minus veniam, accusantium totam velit sapiente eius reiciendis labore hic eum pariatur alias officiis aspernatur eveniet maxime impedit iste dolorem, voluptatibus cumque vel. Rem culpa odio dignissimos provident adipisci.</p>
 


        `
        
         
         
     })
 })

 closeBtn.addEventListener("click", ()=>{
    cardDetail.style.display="none";

 })

 navBtn.addEventListener("click", () =>{
    document.getElementById("loginPage").style.display="block";

 })

  
  
loginBtn.addEventListener("click", ()=>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if(name.value == "" && email.value == "" && pass.value == ""){
        alert("Please Fill Detail")

    }else{
        alert("You Logged In")
        document.getElementById("loginPage").style.display="none";

    }

})