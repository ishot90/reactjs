import styles from "./styles";


const Tasks = (props) => {
const {tasks,setShowComment,setTaskId} = props;

  const addComment = (id) => {
      setTaskId(id);
      setShowComment(true);
  }
    return (
        <div>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>

                {tasks.map((t) => {
                    return(
                        <tr key={t.id}>
                            <td style={styles.thd}>{t.id}</td>

                            <td style={styles.thd}>
                                {/*1. Make function for this*/}
                                {t.user.name} {t.user.surname}
                            </td>
                            <td style={styles.thd}>{t.status}</td>
                            <td style={styles.thd}>{t.description}</td>
                            <td style={styles.thd}>
                                <button
                                    style={styles.button}
                                    onClick={() => addComment(t.id)}
                                >Add Comment</button>
                                <button style={styles.button}>Edit</button>
                                <button style={styles.button}>Delete</button>
                                <button style={styles.button}>DeActive</button>
                                <button style={styles.button}>Active</button>
                                <button style={styles.button}>Done</button>
                            </td>

                        </tr>
                    )

                })}
                </thead>


            </table>
        </div>
    )
}


export default Tasks;