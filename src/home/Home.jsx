import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

import "./home.css";
import { Pen, Trash2, Check, Plus } from "lucide-react";
import axios from "axios";
import { useState } from "react";

export function Home({ items, fetchItemData }) {
  let quantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    quantity += Number(item.qty);
    totalPrice += Number(item.qty * item.price);
  });

  const handleClick = async (item) => {
    await axios.patch(`http://localhost:5000/items/${item.id}`, {
      status: !item.status,
    });
    await fetchItemData();
  };

  const navigate = useNavigate();
  const handleUpdateButton = (item) => {
    navigate(`/update/${item.id}`);
  };

  const handleDeleteButton = async (item) => {
    await axios.delete(`http://localhost:5000/items/${item.id}`);
    await fetchItemData();
  };

  const [search, setSearch] = useState("");
  const [searchIsOn, setSearchIsOn] = useState(false);

  const searchIconClick = () => {
    setSearchIsOn(!searchIsOn);
  };

  return (
    <>
      <title>smart cart</title>
      <Header
        currentPage="home"
        setSearch={setSearch}
        search={search}
        searchIconClick={searchIconClick}
      />
      <div className="home-container">
        <ul className="list">
          {searchIsOn &&
            (() => {
              const foundItem = items.find((item) => item.name === search);
              return(
                foundItem? <p>{foundItem.name}</p> : <p>Not Found</p>
              )
            })()}


                     {items.map((item) => {
            return (
              <li
                key={item.id}
                className={`${item.status && "item-checked"} list-item `}
              >
                {/*add class name item-checked to lis-item for checked features  */}
                <div
                  className="checkbox"
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  {/* add this button for showing check mark */}
                  {item.status && (
                    <Check color="green" size="20px" strokeWidth="4px" />
                  )}
                </div>
                <p
                  className="item-name"
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  {item.name}
                </p>
                <p className="item-quantity">
                  {item.qty} <span className="quantity-symbol">x</span>
                </p>
                <p className="item-price">
                  <span className="price-symbol">₹</span> {item.price}
                </p>
                <button
                  className="update-button list-button"
                  onClick={() => handleUpdateButton(item)}
                >
                  <Pen size="20px" color="blue" />
                </button>
                <button
                  className="delete-button list-button"
                  onClick={() => handleDeleteButton(item)}
                >
                  <Trash2 size="20px" color="red" />
                </button>
              </li>
            );
          })}   

          {/* <li className="list-item item-checked">
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
          </li> */}
        </ul>
        <hr className="horizontal-line" />
        <div className="home-panel">
          <p>count: {quantity}</p>
          <Link to="/add">
            {" "}
            <button className="addbtn">
              <Plus size="36px" strokeWidth="4px" color="grey" />
            </button>
          </Link>
          <p>
            Total: <span className="price-symbol">₹</span> {totalPrice}
          </p>
        </div>
      </div>
    </>
  );
}
