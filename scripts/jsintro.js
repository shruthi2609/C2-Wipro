/*console.log(alert("hey"))
console.log(confirm("proceed?"))
console.log(prompt("enter a value"))

let b
b=20

console.log("global outside",b)
{
    let a=20
    console.log("local inside",a)
}
//console.log("local outside",a)
const PI=3.14
console.log(PI)
let fname="john"
let marks=100
let backlogs=false
console.log("the student"+ fname+" has scored"+ marks +"marks")
//template literals
console.log(`the student ${fname} has scored ${marks} and has ${backlogs}`)

let studentDetails=["john",21,"CS","Wipro",false]
console.log(studentDetails[0])

let studentInfo=[{
    fname:"john",
    age:21,
    stream:"CS",
    company:"Wipro",
    backlogs:false
},{
    fname:"peter",
    age:21,
    stream:"CS",
    company:"Wipro",
    backlogs:false
},
]
console.log(studentInfo[1].fname)
let b=+prompt("enter age")
console.log(typeof b)*/

function sample(a,b=0){
    return a+b
}
console.log(sample(10,4))







