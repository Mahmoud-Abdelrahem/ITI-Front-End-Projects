// function ascii(event)
// {
//     var unicode= event.which;
//   alert(unicode);
// }
document.getElementById("asci").addEventListener("keypress",function (event){
    var unicode= event.keyCode;
    alert(unicode);
})

document.getElementById("asci").addEventListener("mouseup",function (pres)
{
    if(pres.button==0)
    {
        alert("Left button clicked")
    }
    else if(pres.button==1)
    {
        alert("Middel button clicked")
    }
    else if(pres.button==2)
    {
        alert("Right button clicked")
    }
})

document.getElementById("name").addEventListener("focus",function(){

    this.getElementsById("name").styly()    
})
