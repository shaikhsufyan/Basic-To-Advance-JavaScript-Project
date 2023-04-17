document.getElementById("img").src = "of.png";
document.getElementById("of").style.backgroundColor = "rgb(245, 188, 0)";
document.getElementById("of").style.color = "white";

function myFun() {
  let img = (document.getElementById("img").src = "on.png");
  document.getElementById("span").innerHTML = "On";
  document.getElementById("on").style.backgroundColor = "rgb(245, 188, 0)";
  document.getElementById("of").style.backgroundColor = "white";
  document.getElementById("on").style.color = "white";
  document.getElementById("of").style.color = "black";
}

function btnOf() {
  let imgs = (document.getElementById("img").src = "of.png");
  document.getElementById("span").innerHTML = "Of";
  document.getElementById("on").style.backgroundColor = "white";
  document.getElementById("of").style.backgroundColor = "rgb(245, 188, 0)";
  document.getElementById("of").style.color = "white";
  document.getElementById("on").style.color = "black";
}
