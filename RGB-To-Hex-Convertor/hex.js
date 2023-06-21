let r = document.getElementById("red");
let g = document.getElementById("green");
let b = document.getElementById("blue");

function myFun(){

    r = convertor(r.value);
    g = convertor(g.value);
    b = convertor(b.value);
    let add = "#"+r+g+b;
    let upper = add.toUpperCase();
    document.getElementById("hexValue").value=upper;
    document.body.style.backgroundColor=upper;
    console.log(r+g+b);
    
    document.getElementById("red").value="";
    document.getElementById("green").value="";
    document.getElementById("blue").value="";

 
    function convertor(rgb){
        let get = Number(rgb).toString(16);
        return get;

    }
    
}    