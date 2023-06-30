
import UsersTable from "./UsersTable";
import UsersData from "./UsersData";
import {useState} from "react";

const Main = () => {

const [users,setUsers] = useState(UsersData)
    localStorage.setItem("users", JSON.stringify(UsersData));

    return (
        <UsersTable users = {users}  setUsers={setUsers}/>

    )
}

export default Main;
