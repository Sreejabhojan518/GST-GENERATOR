var inpval = document.getElementById("inputbox")
var resval = document.getElementById("result")

var box = document.getElementById("box")


var res = document.getElementById("ello")

function upload(){
    resval.textContent=inpval.value
}


function change(){
    box.style.backgroundColor="red"
}

function update(){
    var itmlis = document.createElement("h3")
    itmlis.textContent="Hello"
    res.append(itmlis)
}


function tabelfun(){
    var newqty = document.getElementById("newqty").value;
    var newrate = document.getElementById("newrate").value;
    var newsgs = document.getElementById("newsgs").value;
    var newcgst = document.getElementById("newcgst").value;
    var tabellen=(tabel.rows.length)-1;
    var row=tabel.insertRow(tabellen).outerHTML="<TR id='+tabellen'">
}
