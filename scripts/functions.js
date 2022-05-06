/*function sample(){
    return "sample"
}

const clone=sample
console.log(clone())
console.log(sample())

console.log(sample)
function displayUser(username,role,email){

return {
    uname:username,
    desg:role,
    useremail:email
}
}

function displayNo(a,b,c)
{
    return [a,b,c]
    //return arguments.length
}
console.log(displayUser("john","admin","admin@gmail.com"))
console.log(displayNo(10,20,30))
let tax=20
function calculateGST(price){
    return price*(tax/100)+price
}
let price=2000
console.log(calculateGST(price))

//function expressions or NFE

function sample(){
    return "copy"
}

const copy=sample
console.log(copy())
console.log(sample())

const clone=function dummy(){
    console.log("clone")

}
clone()
const greet=function greetUser(fname){
    if(fname){
        console.log(`hello ${fname}`)
    }
    else{
        greetUser("anonymous")
    }
}
const greet=(fname)=>{
    if(fname){
        console.log(`hello ${fname}`)
    }
    else{
        console.log("please enter name")
    }
}
const sample=(fn,age)=>{
    console.log("data is processed")
    return "done"
}
console.log(sample("john",23))
function displayUser(uname,role='emp',shift='day'){
    console.log(`${uname} ${role} - ${shift}`)
}
displayUser("john","night")

function sample(data){
    console.log(data)
}
sample(["one","two","three"])

//callbacks

const evaluateWorkingHours=(func)=>{
const working=func("john","admin",5)
console.log(`john : admin - ${working}`)
}
const callBackFun=(fname,role,logIntime)=>{
    if(logIntime<9){
        return "underworking"
    }
    else{
        return "regular"
    }
}
evaluateWorkingHours(callBackFun)

//closures
function basicDetails(){
    let fname="john"
    let reg=827398273
    function contactDetails(mob){
        let phone=mob
        reg=12345
        console.log(`${fname} ${reg} :contact no:${phone}`)
    }
    fname="johan"
    console.dir(contactDetails)
    return contactDetails
    //console.dir(contactDetails)
    //contactDetails()
}
//console.dir(basicDetails)
const outsideLex=basicDetails()
outsideLex(82772637263)*/



