

import Tasks from "../Tasks/Tasks";
import AddComment from "../AddComment/AddComment"
import useMain from "./useMain";



const Main = () => {


    const {
        tasks,
        taskId,
        setTaskId,
        showComment,
        setShowComment
    } = useMain();



    return(
        <div>
            {/*filtering*/}
            <Tasks  tasks={tasks} setShowComment={setShowComment} setTaskId={setTaskId} />

            {showComment && <AddComment  taskId={taskId} />}
            {/*create*/}
        </div>
    )
}

export default Main;