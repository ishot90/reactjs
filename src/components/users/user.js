import {styles} from "./styles";
import {Comment} from "../comment/Comment";

export const User = ({ user, num, ...props }) => {

    const handleDelete = () => {
        props.onDeleteUser(user.id)
    }

   const handleEdit = () =>{

   }

   const handleAddTask = () => {
  props.setSelectedUserId(user.id);
   }

   const handleActivityChange = (event)  => {
        props.onUserStatusChange(user.id, event.target.value )
   }


    return (
        <div>
            <header style={styles.header}>
                <div>{num}</div>
                <div>{user.fullName}</div>
                <div>{user.description}</div>
                <div style={styles.actions}>
                    <button onClick={handleDelete}>Del</button>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleAddTask}>Add Task</button>
                    <select value={user.status} onChange={handleActivityChange} name="activity">
                        <option value="active">active</option>
                        <option value="diactive">diactive</option>
                    </select>
                </div>
            </header>
            <ol>
                {user.comments.map((comment) => {

                    return (
                       <Comment key={comment.id} comment={comment} onDelete={ props.onDeleteComment}/>
                    )
                })}
            </ol>
        </div>
    )
}