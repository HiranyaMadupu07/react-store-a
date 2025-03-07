import React from "react";
import { useState } from "react";
import "./App7.css"
export default function App6() {
  const [items, setItems] = useState([]); // Initialized with an empty array
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    const total = price * quantity;
    setItems([...items, { name, price, quantity, total }]);
    setName("");
    setPrice("");
    setQuantity("");
  
  };
  
  return (
    <div className="container">
    <div className="left-div">
        <h2>SUPER MARKET</h2>
      <p><input
        type="text"
        placeholder="Item name"
        onChange={(event) => setName(event.target.value)}
      ></input></p>
      <p><input
        type="text"
        placeholder="Price"
        onChange={(event) => setPrice(event.target.value)}
      ></input></p>
      <p><input
        type="text"
        placeholder="Quantity"
        onChange={(event) => setQuantity(event.target.value)}
      ></input></p>
      <button onClick={handleSubmit}>Add</button>
    </div>
    <div className="vertical-line" ></div>
    <div className="right-div">
      <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} , Price: {item.price} , Quantity: {item.quantity} => Total Cost:{" "}
              {item.total}
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
}