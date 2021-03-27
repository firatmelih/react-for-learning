import React, {useContext} from 'react'
import {UserContext} from './contexts/UserContext'

const User = ({user,changeColor}) =>
{
    const value = useContext(UserContext)
    console.log(value)
    return(
        <div style={{background:user.color}}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            Color: {" "}
            
            <input
            value={user.color}
            onChange={e=>changeColor(user.id, e.target.value)}
            />
        </div>
    )
}

export default User