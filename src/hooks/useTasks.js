import {useState} from "react";
import {uuidv4} from "../helpers/helpers";
export const Task_Storage_Key = "TASK_STORAGE_KEY";
export const useTasks = () => {
    const [taskList,_setTaskList] = useState(() => {
        const data = localStorage.getItem(Task_Storage_Key);
        if (data) {
            return JSON.parse(data)
        }
        return [];
    });
    const setTaskList = (data) => {
        _setTaskList(data);
        localStorage.setItem(Task_Storage_Key, JSON.stringify(data) );
    }

    const toggleTask = (taskId) => {

        const task = taskList.find((t) => t.id === taskId);
        task.isDone = !task.isDone;
        setTaskList([...taskList]);  // change global referance for update

    }

    const editTaskTitle = (taskId, {title}) => {
       const task =  taskList.find((t) => t.id === taskId);
       task.title = title;
       setTaskList([...taskList]);
    }

    const addComment = ({userId,title}) => {

        const task = {
            userId,
            title,
            id: uuidv4(),
            isDone: false,
        }
        setTaskList(taskList.concat(task));   // puhsi reference changei poxaren concat
    }

    const deleteTask = (taskId) => {
        setTaskList(taskList.filter((t) => t.id !== taskId));
    }

    return {
        editTaskTitle,
        addComment,
        toggleTask,
        tasks: taskList,
        deleteTask,
    }
}
