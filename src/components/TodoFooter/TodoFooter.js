


const TodoFooter = ({todos,onClearCompleted
}) => {

    const completedLength = todos.filter((todo) => todo.isCompleted).length;

    return(
        <div>
            <span> {completedLength}/{todos.length} </span>
            <button onClick={onClearCompleted}> clear completed </button>
        </div>
    )
}

export default TodoFooter;