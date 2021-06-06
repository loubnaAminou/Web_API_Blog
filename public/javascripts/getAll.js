let title = document.getElementById("title");
    let tab_users = document.getElementById("tab_users");
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then((data) => {
    title.innerHTML = title.innerText +"= "+ data.length;
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
          ${data[i].password}
          </td>
          <td>
          ${data[i].role}
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