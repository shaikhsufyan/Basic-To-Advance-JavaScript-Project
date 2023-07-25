function myFun() {
    let inputVal = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementById("table");
    let tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let text = td.innerHTML || td.innerText || td.textContent;
            if (text.toUpperCase().indexOf(inputVal) > -1) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

