import {styles} from "./styles";
import {useState} from "react";


export const AddUserForm = ({onAddUser}) => {

    const [fullName, setFullName] = useState("");
    const [description, setDescription] = useState("");

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    }
    const handleDescritionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        onAddUser(fullName, description);
        setFullName("");
        setDescription("");
    }



    return (
        <form onSubmit={handleAddUser} style={styles.content}>
            <div>

                <input required placeholder={"Full Name"} value={fullName} onChange={handleFullNameChange} type="text"
                       name={"fullName"}/>
            </div>
            <div>
                <select required value={description} onChange={handleDescritionChange} name="description">
                    <option value="">select position</option>
                    <option value="Barista">Barista</option>
                    <option value="Barman">Barman</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Manager">Manager</option>
                </select>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}