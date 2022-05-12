const contact=document.querySelector('.contact-container')
const addContact=document.querySelector('.user-form')
let output=''
function renderUser(data){
    data.map((item)=>{
        output+=` <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">User ID${item.id}</div>
        <div class="card-body">
          <h5 class="card-title">Username:${item.fname}</h5>
          <p class="card-text">Email:${item.email}</p>
          <p class="card-text">Email:${item.role}</p>
          <button class="btn btn-info">edit</button>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>`
      contact.innerHTML=output
    })
}
fetch("http://localhost:3001/empDetails").then((res)=>res.json()).then((data)=>{renderUser(data)}).catch((err)=>console.log(err))

addContact.addEventListener('submit',(e)=>{
    e.preventDefault()
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
        }).then((res)=>{return res.json()}).then((data)=>console.log(data)).catch((err)=>console.log(err))
    })
