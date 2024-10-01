import { User } from "../interfaces";

interface Props {
    user: User;
}

export const UsersRow = ({user}: Props) => {
    const { avatar, first_name, last_name, email } = user;
  return (
    <tr key={user.id}>
        <td><img style={{width: '50px'}} src={avatar} alt={first_name} /></td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
    </tr>
  )
}