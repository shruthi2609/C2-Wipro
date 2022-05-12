/*function getData(){
 fetch("http://localhost:3001/empDetails/1").then((res)=>{
     return res.json()
 }).then((res)=>console.log(res)).catch((err)=>console.log(err))
}
getData()
//post using fetch
function postData(){
    const url="http://localhost:3001/empDetails"
    const data={
        id:13,
        fname:"newjoinee",
        email:"trainee@gmail.com",
        role:"trainee"
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
postData()
function updateDetails(){
    const url="http://localhost:3001/empDetails/1"
    const data={
        email:"Joe@gmail.com",
    }
    fetch(url,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
updateDetails()
function updateDetails(){
    const url="http://localhost:3001/empDetails/1"
    const data={
        fname:'joe',
        email:"Joe@gmail.com",
        role:"Admin"
    }
    fetch(url,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
updateDetails()
//deleting a resource
function deleteData(){
    fetch("http://localhost:3001/empDetails/12",{
        method:'DELETE'
    }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
}
deleteData()*/

