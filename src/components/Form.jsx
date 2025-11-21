
import { useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Form({ currentPage, items, id ,fetchItemData }) {


  const[name,setName]=useState("");
  const[price,setPrice]=useState(0);
  const[qty,setQty]=useState(0);
  const[ctgry,setCtgry]=useState("");



  const navigate=useNavigate();


  const handleChange=(e,element)=>{
    if(element==="name"){
      setName(e.target.value)
      console.log(name);
    }
    else if(element==="price"){
      setPrice(e.target.value)
      console.log(price);    }
    else if(element==="qty"){
      setQty(e.target.value)
      console.log(qty);    }
    else if(element==="category"){
      setCtgry(e.target.value)
      console.log(ctgry);    }
  }

  const addButtonClick=async()=>{
     await axios.post("http://localhost:5000/items",{
      name:name,
      price:price,
      qty:qty,
      category:ctgry,
      status:false
     });
     await fetchItemData();
     navigate("/")


  }

  const updateButtonClick=()=>{
    alert("update");
  }


  const selectedItem = items.find((item) => item.id == id);

  if (currentPage === "update" && !selectedItem) {
    return <p>Loading...</p>;
  }
  return (
    <div className="form-container">
      <label htmlFor="name">Product Name </label>
      <input
        type="text"
        className="item-name field"
        id="name"
        placeholder="Enter the products name"
        defaultValue={currentPage === "update" ? selectedItem?.name : ""}
        onChange={(e)=>{handleChange(e,"name")}}
      />
      <label htmlFor="price">Product Price</label>
      <input
        type="number"
        step={0.1}
        className="item-price field"
        id="price"
        placeholder="Enter the price"
        defaultValue={currentPage === "update" ? selectedItem?.price : ""}
        onChange={(e)=>{handleChange(e,"price")}}
      />

      <label htmlFor="price">Product Quantity</label>
      <input
        type="number"
        step={1}
        className="item-quantity field"
        id="quantity"
        placeholder="Enter quantity"
        defaultValue={currentPage === "update" ? selectedItem?.qty : ""}
        onChange={(e)=>{handleChange(e,"qty")}}

      />

      <label htmlFor="category">Select Category</label>
      <select
        className="category-selector"
        id="category"
        defaultValue={currentPage === "update" ? selectedItem?.category : ""}
        onChange={(e)=>{handleChange(e,"category")}}
      >
        <option value="">--select--</option>
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
        <option className="values" value="party">
          party
        </option>
        <option className="values" value="vehicles">
          Vehicles
        </option>
      </select>

      <button
        className={`action-button ${
          currentPage === "update" ? "update-button" : ""
        }`}
        onClick={currentPage==="add" ? addButtonClick : updateButtonClick}
      >
        {currentPage === "add" ? "ADD" : "UPDATE"}
      </button>
    </div>
  );
}
