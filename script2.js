/* function myFunction() {
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

document.getElementById("date").innerHTML = Date(); */


/* Set the width of the side navigation to 250px */


function changetabcontent(evt, menuItemName){
    var i, tabcontent, menuitems;
    menuitems = document.getElementsByClassName("menu-items");
    tabcontent = document.getElementsByClassName("tabcontent");

    //Hide all tabs
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    //Hide all menuitems
    for(i=0; i<menuitems.length; i++){
        menuitems[i].className.replace("menu-items active","menu-items");
    }

    //Show current item
    document.getElementById(menuItemName).style.display = 'block';
    evt.currentTarget.className += " active";
}

/* Set the width of the side navigation to 0 */
// function closeNav(closebutton) {
// }

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}


