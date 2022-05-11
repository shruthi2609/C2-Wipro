/*function getData(){
  /* xhr req without promise  
  const xhr=new XMLHttpRequest()
    xhr.open('GET','http://localhost:3001/empDetails/1')
    xhr.responseType="json"
    xhr.onload=function(){
        //console.log(JSON.parse(xhr.response))
        console.log(xhr.response)
    }
    xhr.onerror=function(){
        console.log("netwrok error")
    }
    xhr.send()
    // with promises
    const promise=new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
    xhr.open('GET','http://localhost:3001/empDetails/1')
    xhr.responseType="json"
    xhr.onload=function(){
        //console.log(JSON.parse(xhr.response))
        
       resolve(xhr.response)
    }
    xhr.onerror=function(){
        reject(new Error("network error"))
    }
    xhr.send()
    })
    return promise

}
getData().then((res)=>console.log(res)).catch((err)=>console.log(err))*/


function postData(){
    /** not using promises 
    const xhr=new XMLHttpRequest()
    xhr.open('POST','http://localhost:3001/empDetails')
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload=function(){
        //console.log(JSON.parse(xhr.response))
        console.log(xhr.response)
    }
    xhr.onerror=function(){
        console.log("netwrok error")
    }
    const data={
        id:10,
        fname:"suresh",
        email:"suresh@gmail.com",
        role:"HR"
    }
    xhr.send(JSON.stringify(data))*/
    const promise=new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.open('POST','http://localhost:3001/empDetails')
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload=function(){
            //console.log(JSON.parse(xhr.response))
           resolve(xhr.response)
        }
        xhr.onerror=function(){
            reject(new Error("netwrok error"))
        }
        const data={
            id:11,
            fname:"kamala",
            email:"kamala@gmail.com",
            role:"Trainer"
        }
        xhr.send(JSON.stringify(data))

    })
    return promise
}
postData().then((res)=>console.log(res)).catch((err)=>console.log(err))