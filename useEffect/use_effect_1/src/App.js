import React,{useState} from 'react'
import Timer from "./components/Timer/Timer"
import './App.scss';


function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
       <button onClick={()=>{setShowComponent(!showComponent)}}>Stop Timer</button>
     {showComponent ?  <Timer  />  : <div/>}
    </div>
  );
}
export default App;
