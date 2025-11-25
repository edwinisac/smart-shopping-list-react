import "./header.css";
import logo from "../assets/images/logo-small.png";
import { Search, BadgeX } from "lucide-react";
import { Link } from "react-router-dom";

export function Header({
  currentPage,
  setSearch,
  search,
  searchIconClick,
  searchIsOn,
  categoryValue,
  setCategoryValue
}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

const handleCtgryChange=(e)=>{
  setCategoryValue(e.target.value)
}

const handleKeyPress=(e)=>{
  console.log(e.key)
  if(!searchIsOn && e.key==="Enter"){
    searchIconClick();
  }
  if(e.key==="Escape"){
    !searchIsOn ? setSearch(""): searchIconClick();

  }
}

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="image not found" />
      </Link>
      <p className="logo-text">SMART CART</p>

      <div className="search-container">
        <input
          type="text"
          value={search}
          disabled={currentPage === "add" || currentPage === "update"}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <div
          className="search-icon"
          onClick={currentPage === "home" ? searchIconClick : undefined}
        >
          {searchIsOn ? (
            <BadgeX
              color="grey"
              size="30px"
            />
          ) : (
            <Search color="grey" size="30px" />
          )}
        </div>
      </div>
      <div className="categories">
        <select
          name="select"
          id=""
          value={categoryValue}
          disabled={currentPage === "add" || currentPage === "update"}
          onChange={handleCtgryChange}
        >
          <option className="values" value="all">
            All
          </option>
          <option className="values" value="food">
            Food
          </option>
          <option className="values" value="clothing">
            Clothing
          </option>
          <option className="values" value="beauty">
            Beauty
          </option>
          <option className="values" value="electronics">
            Electronics
          </option>
          <option className="values" value="kids">
            Kids
          </option>
          <option className="values" value="party">
            party
          </option>
          <option className="values" value="vehicles">
            Vehicles
          </option>
        </select>
      </div>
    </div>
  );
}
