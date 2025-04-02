import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Orders from "./components/orders";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const products = [
    { id: 1, name: "Coffee", price: 30 },
    { id: 2, name: "Pizza", price: 40 },
    { id: 3, name: "Mocktails", price: 45 },
    { id: 4, name: "Breads", price: 95 },
    { id: 5, name: "Pasta", price: 70 },
    { id: 6, name: "Cheesecakes", price: 25 },
  ];
  return (
    <BrowserRouter>
      <appContext.Provider value={{ users, setUsers, user, setUser, products, cart, setCart }}>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="home" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
        <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;