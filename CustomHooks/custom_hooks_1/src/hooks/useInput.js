import {useState} from 'react';
export const useInput = () =>
{
    // IF YOU LEAVE  useState empty, instead of keys with empty inputs, you will get AN OBJECT CHANGING FROM UNCONTROLLED TO CONTROLLED
    // TO AVOID THIS WARNING PUT INITIAL VALUES TO YOUR OBJECT. like this:
    // {name:'', age: '', email: ''}
    // visit firatmelih.github.io        github.com/firatmelih             linked.in/firatmelih
    const [inputs, setInputs] = useState({name:'', age: '', email: ''});

    const handleChange = event => {
        setInputs({...inputs, [event.target.name]: event.target.value});
    }

    return [inputs, handleChange]
}