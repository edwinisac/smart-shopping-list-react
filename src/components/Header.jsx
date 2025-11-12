import logo from "../assets/images/logo-small.png";
import "./header.css";
import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="image not found" />
      <p className="logo-text">SMART CART</p>
      <div className="search-container">
        <input type="text" />
        <div className="search-icon">
          <Search color="grey" size="30px" />
        </div>
      </div>
      <div className="categories">
        <select name="select" id="">
          <option className="values"value="All">All</option>
          <option className="values" value="food">Food</option>
          <option  className="values" value="clothing">Clothing</option>
          <option className="values" value="beuty">Beuty</option>
          <option className="values" value="electronics">Electronics</option>
          <option className="values" value="kids">Kids</option>
          <option className="values" value="vehicles">Vehicles</option>
        </select>
      </div>
    </div>
  );
}
