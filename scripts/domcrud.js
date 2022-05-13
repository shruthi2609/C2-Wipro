const contact=document.querySelector('.contact-container')
const addContact=document.querySelector('.user-form')
const username=document.getElementById('fname')
let output=''
function renderUser(data){
    data.map((item)=>{
        output+=` <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">User ID${item.id}</div>
        <div class="card-body" data-id=${item.id}>
          <h5 class="card-title">${item.fname}</h5>
          <p class="card-text1">Email:${item.email}</p>
          <p class="card-text2">Email:${item.role}</p>
          <button class="btn btn-info" id="edit-button">edit</button>
          <button class="btn btn-danger" id="delete-button">delete</button>
        </div>
      </div>`
      contact.innerHTML=output
    })
}
fetch("http://localhost:3001/empDetails").then((res)=>res.json()).then((data)=>{renderUser(data)}).catch((err)=>console.log(err))

addContact.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("inside post")
    console.log(document.getElementById('fname').value)

        const url="http://localhost:3001/empDetails"
        const data={
            id:14,
            fname:document.getElementById("fname").value,
            email:"trainee@gmail.com",
            role:"trainee"
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{return res.json()}).then((data)=>location.reload()).catch((err)=>console.log(err))
    })
contact.addEventListener('click',(e)=>{
e.preventDefault()
console.log(e.target.id)
if(e.target.id==='delete-button'){
    const parent=e.target.parentElement
const userid=parent.dataset.id
fetch(`http://localhost:3001/empDetails/${userid}`,{
    method:'DELETE'
}).then((res)=>{return res.json()}).then((data)=>location.reload()).catch((err)=>console.log(err))
}
if(e.target.id==='edit-button'){
const parent=e.target.parentElement
const data=parent.querySelector('.card-title').textContent
username.value=data
const userid=parent.dataset.id
console.log(userid)
addContact.addEventListener('submit',(e)=>{

    console.log(username.value)
e.preventDefault()
const url=`http://localhost:3001/empDetails/${userid}`
    const data={
        fname:username.value,
    }
    fetch(url,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{return res.json()}).then((data)=>location.reload()).catch((err)=>console.log(err))
})
}
    })