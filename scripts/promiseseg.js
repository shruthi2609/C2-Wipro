/*let fetchUser=new Promise(
(resolve,reject)=>{
let user;
user?resolve(user):reject(new Error("no data received"))
}
).then((result)=>{
    console.log(result)
}
).catch((err)=>console.log(err.message))
//consumers - > then catch finally

let fetchUser=new Promise(
    (resolve,reject)=>{
    let user={
        fname:"joe",
        email:"joe@gmail.com",
        role:"trainee"
    };
    user?resolve(user):reject(new Error("no data received"))
    }
    ).then(
    (result)=>{
        return result
    }
    ).then(
        (result)=>{
           if(result.role==="trainee"){
              return "not allowed"
           }
           if(result.role==="admin"){
             return "allowed"
           }
        }
    ).then(
        (result)=>{
            console.log("third level",result)
        }
    ).
    catch((err)=>console.log(err.message))


    

        let pr=new Promise(
        (resolve,reject)=>{
        setTimeout(()=>resolve("done done"),3000)
        setTimeout(()=>resolve("done"),4000)
        }
        ).then(res=>console.log(res))

        let fetchUser=new Promise(
            (resolve,reject)=>{
            let user={
                fname:"joe",
                email:"joe@gmail.com",
                role:"trainee",
                yoe:2
            };
            user?resolve(user):reject(new Error("no data received"))
            }
            ).then(
                (result)=>{
                   if(result.role==="trainee"){
                      return new Promise(
                        (resolve,reject)=>{
                          if(result.yoe>=2){
                              resolve("allowed in exception case : yoe satisfies")
                          }
                          else{
                              reject(new Error("not allowed in exception cases too"))
                          }
                        }
                    )
                   }
                   if(result.role==="admin"){
                     return "allowed"
                   }
                }
            ).then(
                (result)=>{
                    console.log(result)
                }
            ).
            catch((err)=>console.log(err.message)).finally((res)=>console.log("end"))
            */
    


