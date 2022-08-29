/////////////////////////////////////////////////////////////////////////////////
var i=0;
    function check(){
        i++;
        alert("Score is :" + i)
    }
    document.getElementById("1").addEventListener("click",check)
    document.getElementById("2").addEventListener("click",check)
    document.getElementById("3").addEventListener("click",check)

////////////////////////////////////////////////////////////////////////////////////
function bye()
{
    alert("Game Over")
}

setTimeout(function(){

    document.getElementById("1").removeEventListener("click",check)
    document.getElementById("2").removeEventListener("click",check)
    document.getElementById("3").removeEventListener("click",check)
    document.getElementById("1").addEventListener("click",bye)
},3000)

////////////////////////////////////////////////////////////////////////////////////


var win;
function openwind(){
    win=open("advr.html","","width=500,hight=300");
}
function closewind(){
    win.close();
}