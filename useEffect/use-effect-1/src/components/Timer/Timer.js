import React,{useState, useEffect} from 'react'
import "./Timer.scss";

function Timer()
{
    const [timer, setTimer] = useState(0);
    
    /*
    at return we clean interval to stop an error than can be caused of removen component still trying to work.
    end of useEffect in an array we call the parameter that we want to run our code if it changed
    so also it automatically makes our timer counts to be resetted.
    */
    useEffect(()=>
    {
        const myTimer = setInterval(()=>{
            setTimer(timer=>timer+1);
        },1000);

        return() => {clearInterval(myTimer);                  
            }
    },[timer]);


    useEffect(()=>
    {
        console.log(`timer ticking: ${timer}`);
    });


    return(
        <div className="Timer">  
            <h1>Check console with F12</h1>
        </div>
    )
}

export default Timer