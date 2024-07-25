import { useState,useContext } from "react";
import { LOGO_URL } from "../Helper/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Helper/UseOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../Helper/UserContext";

export const Header = () => {

  const[btnNameReact,setbtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) =>store.cart.items)

    return (
      <div className="flex flex-wrap mx-auto items-center justify-between p-6 lg:px-8 text-white bg-teal-700">
        <div>
          <img
            className="w-[100px]"
            src= {LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul className="flex flex-wrap m-1 p-1">
            <li className="p-2">
              online status :{onlineStatus === true ? "🟢" : "🔴" }
            </li>

            <li className="p-2">
              <Link to="/">Home</Link>
              </li>
            <li className="p-2">
              <Link to="/about">about us</Link>
            </li>

            <li className="p-2">
              <Link to="/contact"> contact us</Link>
            </li>

            <li className="p-2">
              <Link to="/cart">Cart</Link>
            </li>

            <li className="p-2">
            <Link to="/grocery">Grocery</Link>
            </li>


            <li className="p-2 font-bold"> <Link to="/cart">
            Cart : {cartItems.length}</Link>
            </li>

            <button className="login-btn" onClick={() =>{
              btnNameReact === "login" ?  setbtnNameReact("logout") : setbtnNameReact("login") ;
          }}>{btnNameReact}</button>
          
                <li className="p-2 font-bold">{loggedInUser}</li>
          </ul>
  
        </div>
      </div>
    )
  }


  export default Header;