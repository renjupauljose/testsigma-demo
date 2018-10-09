function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "Alert accepted";
    } else {
        txt = "Alert dismissed";
    }
    document.getElementById("Alertbtn").innerHTML = txt;
}
function onChange(){
   
   document.getElementById("id").setAttribute("id","afterclick");

}
function double(){

document.getElementById("dbclick").innerHTML="doubleclick is Done";
}

document.getElementById("date").innerHTML = Date();
