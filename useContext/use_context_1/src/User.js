import React, {useContext} from 'react'
import {UserContext} from './contexts/UserContext'

const User = ({user}) =>
{
    const change = useContext(UserContext)
    return(
        <div style={{background:user.color}}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            Color: {" "}
            
            <input
            value={user.color}
            onChange={e=>change(user.id, e.target.value)}
            />
        </div>
    )
}

export default User