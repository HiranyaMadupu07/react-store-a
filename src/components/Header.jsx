import "./Header.css";
import { Link } from "react-router-dom"
import { useContext, useMemo } from "react"
import { appContext } from "../App"

export default function Header() {
  const {user, setUser, cart} = useContext(appContext);

  // Calculate total items in cart
  const cartItemCount = useMemo(() => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  }, [cart]);

  return (
    <div className="App-Header-Row">
      <div>My React Store</div>
      <div className="App-Header-Links">
        <Link to="home">Home</Link> |
        <Link to="cart">Cart {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}</Link> |
        {user.email === "" ? (
          <Link to="login">Login</Link>
        ) : (
          <Link to="login" onClick={() => setUser({ ...user, name:"", email: "", password:"" })}>
            Logout
          </Link>

        )}
      </div>
    </div>
  );
}