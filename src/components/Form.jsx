import { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Form({ currentPage, items, id, fetchItemData }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    qty: "",
    category: "",
  });

  const selectedItem = items.find((item) => item.id == id);

  useEffect(() => {
    if (currentPage === "update" && selectedItem) {
      setFormData({
        name: selectedItem.name,
        price: selectedItem.price,
        qty: selectedItem.qty,
        category: selectedItem.category,
      });
    }
  }, [currentPage, selectedItem]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const addButtonClick = async () => {
    await axios.post("http://localhost:5000/items", {
      ...formData,
    status:false
    });
    await fetchItemData();
    navigate("/");
  };

  const updateButtonClick = async () => {
    await axios.put(`http://localhost:5000/items/${id}`, {
      ...formData,
      status: selectedItem.status,
    });
    await fetchItemData();
    navigate("/");
  };

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
        value={formData.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="price">Product Price</label>
      <input
        type="number"
        step={0.1}
        className="item-price field"
        id="price"
        placeholder="Enter the price"
        value={formData.price}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label htmlFor="quantity">Product Quantity</label>
      <input
        type="number"
        step={1}
        className="item-quantity field"
        id="qty"
        placeholder="Enter quantity"
        value={formData.qty}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <label htmlFor="category">Select Category</label>
      <select
        className="category-selector"
        id="category"
        value={formData.category}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="">--select--</option>
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

      <button
        className={`action-button ${
          currentPage === "update" ? "update-button" : ""
        }`}
        onClick={currentPage === "add" ? addButtonClick : updateButtonClick}
      >
        {currentPage === "add" ? "ADD" : "UPDATE"}
      </button>
    </div>
  );
}
