import React, { useEffect, useState } from "react";
import "./userList.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "username", headerName: "Username", width: 130 },
    {
      field: "phone",
      headerName: "Phone",
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  const rows =
    users &&
    users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        phone: user.phone,
        email: user.email,
      };
    });
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
