import React from 'react';
import './App.css';
import { useInput } from './hooks/useInput'

function App() {

   // IF YOU LEAVE  useState empty, instead of keys with empty inputs, you will get AN OBJECT CHANGING FROM UNCONTROLLED TO CONTROLLED
   // TO AVOID THIS WARNING PUT INITIAL VALUES TO YOUR OBJECT. like this:
   // {name:'', age: '', email: ''}
   // WITH THE HELP OF OUR CODE AT useLocalStorage if there is no data in local storage INITIAL_STATE will be usen.
   // visit firatmelih.github.io        github.com/firatmelih             linked.in/firatmelih

   const INITIAL_STATE =
   {
      name: '',
      age: '',
      email: ''
   }

   const [inputs, setInputs] = useInput('inputs', INITIAL_STATE);

   return (
      <div className="App">
         <div className="form">
            <label htmlFor="name">
               Name: <input name="name" value={inputs.name} onChange={setInputs} />
            </label>
            <label htmlFor="age">
               age: <input name="age" value={inputs.age} onChange={setInputs} />
            </label>
            <label htmlFor="email">
               email: <input name="email" value={inputs.email} onChange={setInputs} />
            </label>
            {console.log(inputs)}
         </div>
      </div>
   );
}

export default App;
