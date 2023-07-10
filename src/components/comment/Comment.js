export const Comment = ({comment,...props}) => {

    const handleDelete = () => {
        props.onDelete(comment.id);
    }

    return (
        <li>
            <div>
                <input type="checkbox" checked={comment.isDone}/>
                <span>{comment.title}</span>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}