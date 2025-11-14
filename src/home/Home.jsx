import { Header } from "../components/Header";
import { Link } from "react-router-dom";

import "./home.css";
import { Pen, Trash2, Check, Plus } from "lucide-react";

export function Home() {
  return (
    <>
      <Header disableHeader={false}/>
      <div className="home-container">
        <ul className="list">
          <li className="list-item ">
            {/*add class name item-checked to lis-item for checked features  */}
            <div className="checkbox">
              {/* add this button for showing check mark */}
              {/* <Check color="green" size="20px" strokeWidth="4px" /> */}
            </div>
            <p className="item-name">New Item </p>
            <p className="item-price">
              <span className="price-symbol">₹</span> 100
            </p>
            <button className="update-button list-button">
              <Pen size="20px" color="blue" />
            </button>
            <button className="delete-button list-button">
              <Trash2 size="20px" color="red" />
            </button>
          </li>

          <li className="list-item item-checked">
            <div className="checkbox">
              <Check color="green" size="20px" strokeWidth="4px" />
            </div>
            <p className="item-name">New Item </p>
            <p className="item-price">
              <span className="price-symbol">₹</span> 100
            </p>
            <button className="update-button list-button">
              <Pen size="20px" color="blue" />
            </button>
            <button className="delete-button list-button">
              <Trash2 size="20px" color="red" />
            </button>
          </li>
        </ul>
        <hr className="horizontal-line" />
        <div className="home-panel">
          <p>count: 2</p>
          <Link to="/add">
            {" "}
            <button className="addbtn">
              <Plus size="36px" strokeWidth="4px" color="grey" />
            </button>
          </Link>
          <p>
            Total: <span className="price-symbol">₹</span> 200
          </p>
        </div>
      </div>
    </>
  );
}
