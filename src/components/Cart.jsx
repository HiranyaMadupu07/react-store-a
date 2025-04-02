import React from 'react'
import { useContext } from 'react';
import { appContext } from '../App';
import {useState,useEffect} from 'react';

export default function Cart() {
  const { products,cart,setCart } = useContext(appContext);
  const [orderValue, setOrderValue] = useState(0);
  const handleDelete = (id) =>{
    setCart({...cart,[id]: 0 });
  };

  const increment = (id) => {
    setCart({...cart,[id]: cart[id]+1});
  };

  const decrement = (id) => {
    setCart({...cart,[id]: cart[id]-1});
  };
  useEffect(() => {
    setOrderValue(products.reduce((sum,value)=>{
      return sum + value.price * (cart[value.id] ?? 0);
    },0));
  },[cart, products]);

  return (
    <div>
      <h1>Cart</h1>
      {products.map((value) => cart[value.id] > 0 && (
        <div key={value.id}>
          {value.name}-{value.price}-
          <button onClick={() => decrement(value.id)}>-</button>
          {cart[value.id]}-
          <button onClick={() => increment(value.id)}>+</button>
          {value.price * cart[value.id]}-
          <button onClick={() => handleDelete(value.id)}>Delete</button>
        </div>
      ))}
      <hr />
      <h2>OrderValue: {orderValue}</h2>
      <button>Place Order</button>
    </div>
  );
}