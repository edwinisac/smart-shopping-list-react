import "./header.css";
import logo from "../assets/images/logo-small.png";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Header({currentPage}) {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="image not found" />
      </Link>
      <p className="logo-text">SMART CART</p>
  

      <div className="search-container">
        <input type="text" disabled={currentPage==="add" || currentPage==="update"} />
        <div className="search-icon">
          <Search color="grey" size="30px" />
        </div>
      </div>
      <div className="categories">
        <select name="select" id="" disabled={currentPage==="add" || currentPage==="update"} >
          <option className="values" value="All">
            All
          </option>
          <option className="values" value="food">
            Food
          </option>
          <option className="values" value="clothing">
            Clothing
          </option>
          <option className="values" value="beauty">
            Beuty
          </option>
          <option className="values" value="electronics">
            Electronics
          </option>
          <option className="values" value="kids">
            Kids
          </option>
          <option className="values" value="vehicles">
            Vehicles
          </option>
        </select>
      </div>
    </div>
  );
}
