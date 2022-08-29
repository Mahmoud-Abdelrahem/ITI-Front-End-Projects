function sum(x,y){

    return x+y;
}
console.log(sum(3,4));


function Day(temp,feel)
{
    if(temp>=25 && temp<=30 && feel>=25 && feel<=30)
    {
        alert("normal");
    }
    else if(temp<25 && feel<25)
    {
        alert("Cold");
    }
    else if(temp>30 && feel>30)
    {
        alert("Hot");
    }
    else
    {
        alert("Ambiguous, can’t detec");
    }
}

var temp=parseInt(prompt("Enter Temp")) ;
var feel=parseInt(prompt("Enter Feel"))  ;
Day(temp,feel);


function eq()
{
    var equation="3+4*5/10*8";
    var result = eval(equation);
    alert(result);
}

function data()
{
    var name=prompt("Enter Your Name");

    while(isNaN(name)==false)
    {
        name=prompt("Enter Your Name Again");
    }
    var birth=prompt("Enter Your Birthday");
    while(isFinite(birth)==false || Number(birth) >= 2010)
    {
        birth=prompt("Enter Your Birthday Again");
    }
    var age=(2022-birth);


    alert("Name = " + name + "\n" + " Birthday : "+ birth + "\n"+ " Your Age : "+ age );
}

data();
