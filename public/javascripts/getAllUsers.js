let tab_users = document.getElementById("tab_users");
const nav = document.getElementById('paginate');

    fetch('http://localhost:3000/users/')
    .then(response => response.json())
    .then((data) => {
    const length = Math.ceil(data.length /5);// 5 == limit : number of rows
    for (let i = 1; i <=length; i++) { 
      const element = `<button class="page-link pagination" data-page="${i-1}">${i}</button>`;
      var item = document.createElement("li");
      item.setAttribute("class","page-item");
      item.innerHTML = element;
      nav.appendChild(item);
    }
       for(let i=0; i<data.length; i++){
       /* Use of `` to multi-line strings */
        element = `<td> 
          ${data[i].id}
          </td>
          <td>
          ${data[i].username}
          </td>
          <td>
          ${data[i].email}
          </td>
          <td>
          ${data[i].role}
          </td>
          <br><button class="btn btn-outline-success" data-toggle="modal" data-target="#updateModal" onclick="updateUser(${data[i].id},'${data[i].username}','${data[i].email}','${data[i].password}','${data[i].role}')"><i class="fas fa-edit"></i></button>
          &nbsp;&nbsp;
          <button class="btn btn-outline-danger" onclick="deleteUser(${data[i].id})"><i class="fas fa-trash"></i></button>
          <br>
          `;
          
        let row = document.createElement("tr");
        row.innerHTML = element;
        tab_users.appendChild(row);
      }
    })
