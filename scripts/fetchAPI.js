function getData(){
 fetch("http://localhost:3001/empDetails/1").then((res)=>{
     return res.json()
 }).then((res)=>console.log(res)).catch((err)=>console.log(err))
}
getData()