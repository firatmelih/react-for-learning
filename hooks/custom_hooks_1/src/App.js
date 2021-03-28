import React from 'react';
import './App.css';
import {useInput} from './hooks/useInput'

function App() {

  const [inputs, setInputs] = useInput();

  
  return (
    <div className="App">
     <div className="form">
       <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={setInputs}/>
       </label>
       <label htmlFor="age">
          age: <input name="age" value={inputs.age} onChange={setInputs}/>
       </label>
       <label htmlFor="email">
          email: <input name="email" value={inputs.email} onChange={setInputs}/>
       </label>
 {console.log(inputs)}
     </div>
    </div>
  );
}

export default App;
