import React from 'react'
import User from './User'

const UserList = ({users, changeColor}) =>
{
    return(
        <div>
            {users.map(user =>(
                <User key={users.name} user={user} changeColor={changeColor} />
            ))}
        </div>
    )
}

export default UserList