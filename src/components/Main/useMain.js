
import {useEffect, useState} from "react";
const useMain = () => {

    const [tasks, setTasks] = useState([]);
    const [showComment, setShowComment] = useState(false);
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        const tasksData = localStorage.getItem('tasks');
        setTasks(JSON.parse(tasksData) || []);
    }, []);

    return {
        tasks,
        taskId,
        setTaskId,
        showComment,
        setShowComment,

    };
};


export default useMain;