let slides = document.querySelectorAll(".slide");
console.log(slides);
let count = 0;

slides.forEach(function(images, index){
    images.style.left = `${index * 100}%`;
    console.log(images);
    console.log(index);

})

function next(){
    count++;
    if(count == slides.length){
        count=0;
    }
    console.log(count);
    myFun()

}

function pre(){
    count--;
    if(count == -1){
        count = slides.length-1;
    }
    myFun()
}

function myFun(){
    slides.forEach(function(length){
        length.style.transform=`translateX(-${count * 100}%)`;
        console.log(length);

    })
}