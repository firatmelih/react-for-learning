import React, { useEffect } from 'react';
import './App.css';
import { useInput } from './hooks/useInput'

function App() {

   // WITH THIS localStorage we can give a memory to our website. and we can see a website how we left.
   const localStorageInputs = JSON.parse(localStorage.getItem('inputs'));
   const INITIAL_STATE =
   {
      name: '',
      age: '',
      email: ''
   }


   const [inputs, setInputs] = useInput(localStorageInputs || INITIAL_STATE);

   useEffect(() => {
      localStorage.setItem('inputs', JSON.stringify(inputs))

   }, [inputs])

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
