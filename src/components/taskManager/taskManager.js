import {useUsers} from "../../hooks/useUsers";
import {useTasks} from "../../hooks/useTasks";
import {useMemo, useState} from "react";
import {AddUserForm} from "../addUserForm/addUserForm";
import {User} from "../users/user";
import {AddTask} from "../AddComment/addTask/addTask";



export const TaskManager = () => {

    const { users, addUser, deleteUser,activityChange} = useUsers();
    const { tasks,  addComment, deleteTask } = useTasks();  //  toggleTask, editTaskTitle,

    const [selectedUserId, setSelectedUserId] = useState(null);
    const [comment, setComment] = useState('');


    const data = useMemo( () => users.map((u) => {
        return {
            ...u,
            comments: tasks.filter(t => t.userId === u.id)
        }
    }),[users,tasks])


    const selectedUser = useMemo(() => {
        return users.find((u) => u.id === selectedUserId)
    },[selectedUserId,users])
    return (
        <div>
            {selectedUserId ?  <AddTask
                onAddTask={addComment}
                onClose={() => setSelectedUserId(null)}
                user={selectedUser}
            /> :  <AddUserForm onAddUser={addUser} /> }


            {data.map((u, i) => {
                return (
                    <User
                        setSelectedUserId={setSelectedUserId}
                        key={u.id}
                        user={u}
                        num={i + 1}
                        onDeleteUser={deleteUser}
                        onUserStatusChange={activityChange}
                        onDeleteComment={deleteTask}
                    />
                )
            })}

            {selectedUserId && (
                <div>
                    <input
                        type="text"
                        name="comment"
                        onChange={({target: {value}}) => setComment(value)}
                        value={comment}
                    />
                    <button onClick={() => {
                        addComment({userId: selectedUserId, title: comment})
                        setSelectedUserId(null);
                        setComment('');
                  }}>
                        add comment
                    </button>
                </div>
            )}
        </div>
    )
}