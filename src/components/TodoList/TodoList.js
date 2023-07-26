import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos,onDelete,onChange}) => {


    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo = {todo}
                            onChange={onChange}
                            onDelete={onDelete}


                        />
                        // stexcumenq todo-n
                    )
                })
            }
        </div>
    )
}

export default TodoList;