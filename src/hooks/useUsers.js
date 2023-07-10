import {useState} from "react";
import {uuidv4} from "../helpers/helpers";

export const Users_Storage_Key = "USERS_STORAGE_KEY";
export const useUsers = () => {
    const [users, _setUsers] = useState(() => {
        const data = localStorage.getItem(Users_Storage_Key);
        if (data) {
            return JSON.parse(data)
        }
        return [];
    });

    const setUsers = (usersData) => {
        _setUsers(usersData);
        localStorage.setItem(Users_Storage_Key, JSON.stringify(usersData));
    }

    const addUser = (fullName, description) => {

        const user = {
            id: uuidv4(),
            fullName,
            description,
            status: "active",
        }

        setUsers(users.concat(user));
    }

    const deleteUser = (userId) => {
        // const newList = users.filter((u) => u.id !== userId);
        setUsers(users.filter((u) => u.id !== userId));
    }

    const activityChange = (userId,status) => {
            const user = users.find((u) => u.id === userId);
            user.status = status;
            setUsers([...users]);
    }
    return {users, addUser, deleteUser, activityChange}
}

