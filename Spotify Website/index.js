let song = new Audio("5.mpeg");
let range = document.getElementById("range");
let playBtn = document.getElementById("playBtn");
let gif = document.getElementById("gif");
let upperAudio = document.querySelectorAll(".audio");
let items = document.querySelectorAll(".items");
let addName = document.getElementById("name");

let album = [
  { songName: "Arman Malik" },
  { songName: "Second Song" },
  { songName: "Third Song" },
  { songName: "Fourth Song" },
  { songName: "Fifth Song" },
];

playBtn.addEventListener("click", function () {
  if (song.paused || song.currentTime <= 0) {
    song.play();
    gif.style.opacity = "1";
    console.log(song.duration / 60);

    playBtn.classList.remove("fa-circle-play");
    playBtn.classList.add("fa-circle-pause");

    setInterval(function () {
         // convert Duration into Percentage
      var percent = (song.currentTime / song.duration) * 100;
      console.log(percent);
      range.value = percent;
    }, 1000);
  } else {
    song.pause();
    playBtn.classList.remove("fa-circle-pause");
    playBtn.classList.add("fa-circle-play");
    gif.style.opacity = "0";
    gif.style.transition = "0.3s";
  }
});

// convert percent into duration
range.addEventListener("click", function () {
  song.currentTime = (range.value * song.duration) / 100;
});



// upperAudio.forEach(function(element){
//   element.addEventListener("click", function(e){

//     let index = parseInt(e.target.id) ;
//     element.classList.remove("fa-circle-play");
//     element.classList.add("fa-circle-pause");

//     song.src=`songs/${index+1}.mpeg`;
//     song.play();
//     song.currentTime=0;
//     range.value=0;
//     addName.innerText=element.parentElement.previousElementSibling.innerText;
//     gif.style.opacity = "1";

//     playBtn.classList.remove("fa-circle-play");
//     playBtn.classList.add("fa-circle-pause");

//   })
// })








 

upperAudio.forEach(function (element) {
  console.log(element.classList);

  element.addEventListener("click", function (e) {
    if (element.classList[2] == "fa-circle-play") {
    

      let index = parseInt(e.target.id);
      element.classList.remove("fa-circle-play");
      element.classList.add("fa-circle-pause");

      song.src = `songs/${index + 1}.mpeg`;
      song.play();
      song.currentTime = 0;
      range.value = 0;
      addName.innerText = element.parentElement.previousElementSibling.innerText;
      gif.style.opacity = "1";

      playBtn.classList.remove("fa-circle-play");
      playBtn.classList.add("fa-circle-pause");
    }else{
      song.pause();
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");

      playBtn.classList.remove("fa-circle-pause");
      playBtn.classList.add("fa-circle-play");
      gif.style.opacity = "0";

    }
  });
});
