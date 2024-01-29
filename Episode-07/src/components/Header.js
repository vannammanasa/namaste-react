import {LOGO_URL} from "../utils/constants";
import  {useState} from "react";
import {Link} from  "react-router-dom";

const Header = () =>{
  const [btnNameReact,setBtnNameReact] = useState("Login");


  //console.log("header renedered");



  /*useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);

  */

  return (
    //<div>
    <div className = "header">
      <div className = "logo-container">
        <img className = "logo" src={LOGO_URL}/>
      </div>
      <div className = "nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>

        <button className="login" onClick={() =>{
          btnNameReact === "Login"?setBtnNameReact("Logout"):setBtnNameReact("Login"); //ternary operator
        }

        }
        >{btnNameReact}</button>

        </ul>
      </div>
    
    </div>
    
  //</div>
  );
};

export default Header;
