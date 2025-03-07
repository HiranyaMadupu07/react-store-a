import React from 'react';
import {useState} from "react";
import "./App5.css"
export default function App5(){
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count+1)
    };
    return(
        <div className="container">
        <div>{count}</div>
        <p><button onClick={increment} style={{backgroundColor:'pink',border:'none',borderRadius:'5px',padding:'10px',fontSize:'30px'}}>Click</button></p>
        </div>
    )
}