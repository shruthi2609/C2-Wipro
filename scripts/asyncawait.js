/*async function findUser(){
    let user;
    if(user){
        return user
    }
    else{
        return new Error("no user found")
    }
    
}
findUser().then((result)=>console.log(result)).catch((err)=>console.log(err.message))
async function caller(){
    try{
    let result=await findUser()
    console.log(result)}
    catch(err){
        console.log(err.message)
    }
    finally{
        console.log("end")
    }
}
caller()*/
function findUser(){
    let user={fname:"joe",email:"joe@gmail.com"};
    return new Promise(
        (resolve,reject)=>{
            user?resolve(user):reject(new Error("no user found"))
        }
    ) 
}
async function caller(){
    try{
    let result=await findUser()
    console.log(result)}
    catch(err){
        console.log(err.message)
    }
    finally{
        console.log("end")
    }
}
caller()

