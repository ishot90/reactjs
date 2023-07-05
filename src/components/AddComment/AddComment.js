const AddComment = (props) => {

    const {taskId} = props;
    console.log(taskId);
    const add = () => {
        console.log(taskId);

    };
    return (
        <div>
            <input type="text"/>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default AddComment;