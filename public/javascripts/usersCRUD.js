/* add new user */ 
function addUser(){
    const form = document.getElementById("addUser");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        var user = {};
        formData.forEach(function(value, key){
            user[key] = value;
        });

        console.log(user);
        addUserToDB(user);
    })
}

async function addUserToDB(user){
    await fetch('http://localhost:3000/users',{
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body : JSON.stringify(user)
        }).then(response => response.json())
        .then((data) => {
            alert(data.msg);
        })
        .catch(function(res){ console.log(res) })

        location.reload();
        //getAll();

}

/* get User By ID */
function getID(){
    const searchform = document.getElementById("search");
    const path = 'http://localhost:3000/users/'+searchform.value;
    fetch(path)
    .then(response => response.json())
    .then((data) => {
        const found = `
        <i class="fas fa-check"></i>
        ${data.username} => ID = ${data.id}, @ = ${data.email}, Role = ${data.role}`;
        
        var user = document.createElement("div");
        user.setAttribute("class","alert alert-success");
        user.setAttribute("role","alert");
        user.innerHTML = found;
        document.getElementById("searchBox").appendChild(user);
            
    }).catch(err => {
        const found = `
        <i class="fas fa-exclamation"></i>
        User not Found ! Try Again`;

        var user = document.createElement("div");
        user.setAttribute("class","alert alert-danger");
        user.setAttribute("role","alert");
        user.innerHTML = found;
        document.getElementById("searchBox").appendChild(user);
    })
}

/* update user */ 
function updateUser(id,username,email,password,role){

    /* set values on the form */
    document.getElementById("username").setAttribute("value",username);
    document.getElementById("email").setAttribute("value",email);
    document.getElementById("password").setAttribute("value",password);
    document.getElementById("role").setAttribute("value",role);

    const form = document.getElementById("UpdateUser");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        var user = {};
        formData.forEach(function(value, key){
            user[key] = value;
        });
        console.log(user);

        const path = 'http://localhost:3000/users/'+id;
        fetch(path, {
            method : 'PUT',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : JSON.stringify(user)
        })
        .then(response => response.json())
        .then((data) => {
            alert(data.msg);
        }).catch(err => {
            console.log(err);
            
        })
        location.reload();
        
    })
}


/* delete user */ 
function deleteUser(id){
    console.log(id);
    const path = 'http://localhost:3000/users/'+id;
    fetch(path, {
        method : 'DELETE'
    })
    .then(response => response.json())
    .then((data) => {
        alert(data.msg);
    }).catch(err => {
        console.log(err);
        
    })
       location.reload();
}
