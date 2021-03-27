import logo from './logo.svg';
import {useState} from 'react'
import UserList from './UserList'
import './App.css';
import { UserContext } from './contexts/UserContext'

const data = [
  {id: 1, name: "Melih", email: "melih@mail.com", color: "gray"},
  {id: 2, name: "İbrahim", email: "ibrahim@mail.com", color: "darkgray"},
  {id: 3, name: "Arif", email: "arif@mail.com", color: "lightblue"}
];


function App() {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
  setUsers(
    users.map(user=> (user.id === id ? {...user, color: color } : user))
  );

    return (
      <UserContext.Provider value="Value">
        <div className="App">
            <UserList users={users} changeColor={changeColor} />
        </div>
      </UserContext.Provider>
    
  );
}

export default App;
