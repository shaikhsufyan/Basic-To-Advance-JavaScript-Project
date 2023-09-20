let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

for(listItem of lists){
    listItem.addEventListener("dragstart", function(e){
        let selected = e.target;
        

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected)
            console.log(rightBox.appendChild(selected));
            selected=null;
        })

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected)
            // console.log(rightBox.appendChild(selected));
            selected=null;
        })

    })
}
