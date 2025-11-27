import { Header } from "../components/Header";
import { SearchResult } from "./SearchResult";
import { Link, useNavigate } from "react-router-dom";

import "./home.css";
import {  Plus } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { AllItems } from "./AllItems";
import { CategoryFilter } from "./CategoryFilter";

export function Home({ items, fetchItemData }) {
  let quantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    quantity += Number(item.qty);
    totalPrice += Number(item.qty * item.price);
  });

  const handleClick = async (item) => {
    await axios.patch(`http://localhost:3000/items/${item.id}`, {
      status: !item.status,
    });
    await fetchItemData();
  };

  const navigate = useNavigate();
  const handleUpdateButton = (item) => {
    navigate(`/update/${item.id}`);
  };

  const handleDeleteButton = async (item) => {
    await axios.delete(`http://localhost:3000/items/${item.id}`);
    await fetchItemData();
  };

  const [search, setSearch] = useState("");
  const [searchIsOn, setSearchIsOn] = useState(false);

  const searchIconClick = () => {
    searchIsOn && setSearch("");
    setSearchIsOn(!searchIsOn);
  };

  const [categoryValue, setCategoryValue] = useState("all");

  const categoryFilterdArray = items.filter(
    (item) => item.category?.toLowerCase() === categoryValue.toLowerCase()
  );

  return (
    <>
      <title>smart cart</title>
      <Header
        currentPage="home"
        setSearch={setSearch}
        search={search}
        searchIconClick={searchIconClick}
        searchIsOn={searchIsOn}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <div className="home-container">
        <ul className="list">
          {searchIsOn ? (
            <SearchResult
              items={items}
              search={search}
              handleClick={handleClick}
              handleDeleteButton={handleDeleteButton}
              handleUpdateButton={handleUpdateButton}
              searchIsOn={searchIsOn}
            />
          ) : categoryValue === "all" ? (
            <AllItems
              items={items}
              handleClick={handleClick}
              handleDeleteButton={handleDeleteButton}
              handleUpdateButton={handleUpdateButton}
            />
          ) : categoryFilterdArray.length > 0 ? (
            <CategoryFilter
              categoryFilterdArray={categoryFilterdArray}
              handleClick={handleClick}
              handleDeleteButton={handleDeleteButton}
              handleUpdateButton={handleUpdateButton}
            />
          ) : (
            <p className="not-found">Not Found</p>
          )}
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
