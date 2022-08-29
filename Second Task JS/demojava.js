var arr = ["mahmoud", "mohamed", "ahmed", "youssif", "sayed", "ali", "amany", "rahma", "khaled", "hossam"];
var array = arr[Math.floor(Math.random() * arr.length)]
document.write(array)

///////////////////////////////////////////////////////////////////////////////////////////

function date() {

    var date = new Date();
    document.write(date);
}
////////////////////////////////////////////////////////////////////////////////////////////

function val() {
    var mail = prompt(" Please Enter Your Mail ");

    if (mail[0] != '@' && mail[mail.length - 1] != '@' && mail.includes('@') == 1) {
        alert("Valid");
    }
    else {
        alert("Not Valid");
    }

}
val();

/////////////////////////////////////////////////////////////////////////////////////////////
var students = [
    {
        "name": "Mahmoud",
        "degree": "95"
    },
    {
        "name": "Mohamed",
        "degree": "85"
    },
    {
        "name": "ali",
        "degree": "75"
    },
    {
        "name": "khaled",
        "degree": "55"
    }
]
//////////////////////////////////////////////////////////////////////////////////////


function stud(students) {
    if (students.degree >= 90 && students.degree <= 100) {
        return true;
    }
}

console.log(students.find(stud));


///////////////////////////////////////////////////////////////////////////////////////
// const result = students.filter(student => stud.degree < 60);

// console.log(result);


function deg(students) {
    if (students.degree <= 60 )
    {
        return true;
    }
}

console.log(students.filter(deg));

////////////////////////////////////////////////////////////////////////////////////////


var student1 =
{
    "name": "sayed",
    "degree": "70"
}
students.push(student1);

for (const key in students) {
        console.log(students[key]);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////

students.pop();
console.log(students);

////////////////////////////////////////////////////////////////////////////////////////

students.sort((a, b) => a.name.localeCompare(b.name))
console.log(students)