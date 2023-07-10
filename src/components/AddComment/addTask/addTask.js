import {useState} from "react";
import {styles} from "./styles";

export const AddTask = ({user,onClose,onAddTask}) => {

    const [title,setTitle]= useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAddTask = () => {
        onAddTask({userId:user.id,title});
        onClose();
    }


    return(
        <div>
            <div style={styles.task}>
                <div>{user.fullName}</div>
                <div>{user.description}</div>
            </div>
            <div>
                <input value={title} onChange={handleTitleChange} type="text"/>
                <button onClick={handleAddTask}>add</button>
                <button onClick={onClose}>close</button>
            </div>
        </div>
    )
}