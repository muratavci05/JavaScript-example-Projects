const table= document.getElementById("userTable");


// Get işlemi >>>>>>>
function getUserList(){

    fetch("https://reqres.in/api/users")
    .then(res=>res.json())
    .then(data=>{
       console.log(data)
        for(user of data.data)
        {
           // console.log(user);
            table.innerHTML+=`
                         <tr>
                        <td><input type="text" class="form-control" id="first_name_${user.id}" value="${user.first_name}" /></td>
                        <td><input type="text" class="form-control" id="last_name_${user.id}" value="${user.last_name}" /></td>
                        <td><input type="text" class="form-control" id="email_${user.id}" value="${user.email}" /></td>
                        <td>
                            <a href="" class="btn btn-warning" 
                            onclick="updateUser(${user.id})"
                            >Güncelle</a>
                            <a href="" class="btn btn-danger" 
                            onclick="deleteUser(${user.id})"
                            >Sil</a>

                        </td> 
                        </tr>
                        `
        }
    })
        
    
}
getUserList();

// <<<<



//Kullanıcı Oluştur 

function createUser()
{
    let data={
        first_name:document.getElementById("first_name").value || "",
        last_name:document.getElementById("last_name").value || "",
        email:document.getElementById("email").value || "",
    };
    fetch("https://reqres.in/api/users",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
             body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        table.innerHTML+=`
        <tr>
        <td><input type="text" class="form-control" id="" value=${data.first_name} /></td>
        <td><input type="text" class="form-control" id="" value=${data.last_name} /></td>
        <td><input type="text" class="form-control" id="" value=${data.email} /></td>
        <td>
            <a href="" class="btn btn-warning"
            onclick="updateUser(${data.id})"
            >Güncelle</a>
            <a href="" class="btn btn-danger" 
            onclick="deleteUser(${data.id})"
            >Sil</a>

        </td> 
        </tr>
        `
    })
  .catch((err)=>{
    console.log("Data Error >:",err)
  })
}

//Güncelleme

function updateUser (id){
    //console.log("güncelleme id is önemli >>>",id);

        let data={
            first_name:document.getElementById("first_name_"+id).value || "",
            last_name:document.getElementById("last_name_"+id).value || "",
            email:document.getElementById("email_"+id).value || "",

        };
        
      //  console.log(data);
        fetch("https://reqres.in/api/users",{
            
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(veri=>{
            console.log("kullanıcı güncellendi",veri)
        })
        .catch((err)=>
            console.log("güncelleme hatası",err)
        
        )
    
}

//delete
function deleteUser(id){
    fetch("https://reqres.in/api/users/"+id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    .then(res=>console.log(res))
    .then(data=>{
        console.log("kullanıcı silindi",data)
})
    .catch((err)=>console.log(err));
}