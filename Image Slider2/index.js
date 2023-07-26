 let slides = document.querySelectorAll(".slide");
 console.log(slides);
 let count = 0 ;

 slides.forEach(function(slides, index){
   slides.style.left = `${index * 100}%`
 })

 function next(){
   count++;
   if(count == slides.length){
      count=0;
   }
   myFun()
 }

 function prev(){
   count--;
   if(count == -1){
      count = slides.length-1;
   }
   myFun();
 }

 function myFun(){
   slides.forEach(function(slides){
      slides.style.transform = `translateX(-${count * 100}%)`
   })
 }