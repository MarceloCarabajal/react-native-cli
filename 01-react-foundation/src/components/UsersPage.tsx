import type { User } from "../interfaces";
import { useUsers } from "../hooks/useUsers";
import { UsersRow } from "./UserRow";

export const UsersPage = () => {

    const { users, nextPage, prevPage } = useUsers();

    return (
        <>
            <h3>Usurios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UsersRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button onClick={nextPage}>Prev</button>
                <button onClick={prevPage}>Next</button>
            </div>
        </>
    )
};