import React, {useContext} from 'react'
import { UserContext } from './contexts/UserContext'
import User from './User'

const UserList = ({users}) =>
{
    const context = useContext(UserContext)
    return(
        <div>
            {context.users.map(user =>(
                <User key={user.name} user={user}  />
            ))}
        </div>
    )
}

export default UserList