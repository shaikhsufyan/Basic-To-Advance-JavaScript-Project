let item = document.getElementsByClassName("container");
let show = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");


for(let i=0; i<item.length; i++){
    item[i].addEventListener("click", () =>{
        let res = item[i].classList.toggle("active");
        if(res == true){
            show[i].style.display="none";
            hide[i].style.display="block";

        }else{
            show[i].style.display="block";
            hide[i].style.display="none";
        }
    })
}