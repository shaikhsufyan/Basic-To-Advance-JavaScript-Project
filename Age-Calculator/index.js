 



let getDate = new Date();
let curDate = getDate.getDate();
let curMonth = getDate.getMonth();
let curYear = getDate.getFullYear();
 

function get(){
let dat = document.getElementById("dates").value;
 
    let year = parseInt(dat.substring(0,4));
    let month = parseInt(dat.substring(5,7));
    let date = parseInt(dat.substring(8,10));

//  calculation for year
  let yrResult = curYear-(year+1);
   console.log("Age in Years : "+yrResult);


//  calculation for month
let mnResult = 12-month;
let yrs = yrResult*12;
console.log("Age in Months : "+(yrs+mnResult));
 
  
    
//  calculation for Date
let totaldys = 365;
let day = 30;

let dtResult = yrResult*365;
// console.log(dtResult);
let newMonth = mnResult*30
// console.log(newMonth);
let newDate = 30-date;
// console.log( +newDate);
let final = dtResult+(newMonth-newDate);
console.log("Age in Days : "+final);
 
}




