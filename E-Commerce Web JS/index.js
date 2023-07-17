let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");




function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}


function blog() {

   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 

function showCard(img){
   let newImg = document.getElementById("cartImg");
   newImg.src=img.src;
   document.querySelector(".fullPage").style.display="flex";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

 



}
 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}