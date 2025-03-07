import React from "react";
import { useState } from "react";
export default function App6() {
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [text, setText] = useState();
  const handleSubmit = () => {
    setItem([...item, text]);
  };
  
  return (
    <div>
        <h2>SUPER MARKET</h2>
      <p><input
        type="text"
        placeholder="Item name"
        onChange={(event) => setText(event.target.value)}
      ></input></p>
      <p><input
        type="text"
        placeholder="Price"
        onChange={(event) => setText(event.target.value)}
      ></input></p>
      <p><input
        type="text"
        placeholder="Quantity"
        onChange={(event) => setText(event.target.value)}
      ></input></p>
      <button onClick={handleSubmit}>Add</button>
      <hr></hr>
      {item && item.map((value, index) => <li key={index}>{value}</li>)}
    </div>
  );
}