import usersData from "./usersData";
import styles from "./styles";

const UsersTable = () => {

    const setEditableUser = (id) => {
        console.log(id);
        return {
            setEditableUser,
        };
    };

    return (
        
        <div>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.tdh}>ID</th>
                    <th style={styles.tdh}>Name</th>
                    <th style={styles.tdh}>Surname</th>
                    <th style={styles.tdh}>Actions</th>
                </tr>

                {usersData.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td style={styles.tdh}>{user.id}</td>
                            <td style={styles.tdh}>{user.name}</td>
                            <td style={styles.tdh}>{user.surname}</td>
                            <td style={styles.tdh}>
                                <button onClick={() => setEditableUser(user.id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}

                </thead>
            </table>
        </div>
    )
}
export default UsersTable;