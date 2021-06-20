/* get Articles for the home page*/
let container = document.getElementById("articles_container");
fetch('http://localhost:3000/articles')
.then(response => response.json())
.then((data) => {
    const span = document.getElementById("number_articles");
    span.innerText=data.length;


       for(let i=0; i<data.length; i++){
        var maxLength = 200;
        var result = data[i].content.substring(0, maxLength) + '...'; // truncate text
       element = `
       <div class="card-header">
      Article N° ${data[i].id}
        </div>
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${result}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Read more <i class="fas fa-angle-right"></i>
        </button>
        </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${data[i].title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${data[i].content}
            </div>
            </div>
        </div>
        <br><hr><br>
       `; 
        let div = document.createElement("div");
        div.setAttribute("class","card");
        div.innerHTML = element;
        container.appendChild(div);
      }
    })

/*  get Articles for the table*/
let title = document.getElementById("title");
let tab_users = document.getElementById("tab_articles");
fetch('http://localhost:3000/articles')
.then(response => response.json())
.then((data) => {
title.innerHTML = title.innerText +"= "+ data.length;
for(let i=0; i<data.length; i++){
/* Use of `` to multi-line strings */
var maxLength = 75;
var result = data[i].content.substring(0, maxLength) + ' ...'; // truncate text
element = `<td> 
    ${data[i].id}
    </td>
    <td>
    ${data[i].title}
    </td>
    <td>
    ${result}
    </td>
    <td>
    ${data[i].published}
    </td>
    <td>
    ${data[i].UserId}
    </td>
    <br><button class="btn btn-success" data-toggle="modal" data-target="#updateModal" onclick="updateUser(${data[i].id},'${data[i].username}','${data[i].email}','${data[i].password}','${data[i].role}')"><i class="fas fa-edit"></i></button>
    &nbsp;&nbsp;
    <button class="btn btn-danger" onclick="deleteUser(${data[i].id})"><i class="fas fa-trash"></i></button>
    <br>
    `;
    
let row = document.createElement("tr");
row.innerHTML = element;
tab_users.appendChild(row);
}
})