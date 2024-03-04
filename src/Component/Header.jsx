import { logo1 } from "../utiles/logo";
import {  useState } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utiles/useOnLineStatus";
import UserContext from "../utiles/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

   const OnLineStatus = useOnLineStatus()
   const {loggedUer} = useContext(UserContext)

   const cartItems = useSelector((store)=>store.cart.items)
   console.log(cartItems)
   


  return (
    <div className="flex justify-between to-blue-300 shadow-lg">
      <div className="logo-container">
        <img className="w-28" alt="logo" src={logo1}/>
      </div>
      <div className="font-bold cursor-pointer">
        <ul className="flex my-6 py-6">
          <li className="mx-2">OnLineStatus : {OnLineStatus ?  "✅" : "🔴"} </li>
          <li className="font-bold px-2 mx-2"><Link to="/">Home</Link></li>
          <li className="font-bold px-2 mx-2"><Link to="/about">About</Link></li>
          <li className="font-bold px-2 mx-2"><Link to="/grocery">Grocery</Link></li>
          <li className="font-bold px-2 mx-2"><Link to="/contact">Contact Us</Link></li>
          <li className="font-bold px-2 mx-2 text-lg"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <li className="font-bold px-2 mx-2">{loggedUer}</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
