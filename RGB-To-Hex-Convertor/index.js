let first = document.getElementById("fInput") ;
let sec = document.getElementById("sInput") ;
let third = document.getElementById("thInput") ;
 


function findHex(){
    
    let r = rgb(first.value*1) ;
    let g = rgb(sec.value*1);
    let b = rgb(third.value*1);
    console.log("#"+r+g+b); 
    let convert = "#" + r + g + b;
    let upper = convert.toUpperCase();
    document.getElementById("output").value=upper;
    document.body.style.backgroundColor=upper
    console.log(upper);

    function rgb(rgb){
        console.log(rgb);
        let get = Number(rgb).toString(16);
        return get;
       

    }
 
     
}
 