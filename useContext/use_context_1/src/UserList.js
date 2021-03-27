import React from 'react'
import User from './User'
const UserList = ({users}) =>
{
    return(
        <div>
            {users.map(user =>(
                <User key={user.name} user={user}  />
            ))}
        </div>
    )
}

export default UserList