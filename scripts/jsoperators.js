/*let a=10
let b="10"
let str1="Zoom"
let str2="Zoo"
console.log(str1===str2)
console.log(str1>=str2)

/*x=(a!==undefined&&a!==null)?a:"ten"
console.log(x)
let a=10;
console.log(a&&"ten"&&false)
let a;
a=a??"ten"

if(a>=0){
    console.log("+ve")
}
else if(a==0){
console.log("0")
}
let a=7;
switch(a){
    case 0:
        console.log("0");
        break
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("above 0")
        break
   
    default:
        console.log("exceeded the limit")
}
//loops in arrays:
//for of variant 
let studentDetails=["john","CS",9.0,"Wipro"]
console.log(studentDetails)
studentDetails[4]=false
console.log(studentDetails)
let studentDetails=["john","CS",9.0,"Wipro"]
for(let studentInfo of studentDetails){
    if(studentInfo===9.0){
        continue
    }
    console.log(studentInfo)
}
console.log("++++++++++++++++++++")
studentDetails.forEach(
    function(item,index){
        if(item===9.0){
            break
        }
        console.log(item)
    }
)*/
let studentNames=["john","peter","henry","john",9.0]
const res=studentNames.map(
    function(item,index){
        return item+"is the candidate at"+index+" s.No"
    }
)
console.log(res)

const res1=studentNames.find(
    function(item){
        return item===9.0
    }
)
const res2=studentNames.filter(
    function(item){
        return item==="john"
    }
)
const student=[{
    fname:"peter",
    age:20
},
{
    fname:"peter",
    age:21
},
]
const res4=student.find(
    (item)=>{
        return item.fname==="peter"
    }
)
console.log(res4)
console.log(res1)
console.log(res2.length)









