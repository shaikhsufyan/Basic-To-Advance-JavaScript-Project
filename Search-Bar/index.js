function myFun() {
  let searchVal = document.getElementById("inp").value.toUpperCase();
  let tab = document.getElementById("table");
  let tr = tab.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let text = td.innerHTML || td.innerText || td.textContent;
      if (text.toUpperCase().indexOf(searchVal) > -1) {
        tr[i].style.display = ""
        console.log(tr[i].style.display = "");
      } else {
        tr[i].style.display = "none";
      }
    }
  }


}