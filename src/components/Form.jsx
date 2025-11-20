import "./form.css";
export function Form({ currentPage, items, id }) {
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
      />
      <label htmlFor="price">Product Price</label>
      <input
        type="number"
        step={0.1}
        className="item-price field"
        id="price"
        placeholder="Enter the price"
        defaultValue={currentPage==="update" ? selectedItem?.price : ""}
      />
      <label htmlFor="category">Select Category</label>
      <select className="category-selector" id="category">
        <option value="select">--select--</option>
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

      <button
        className={`action-button ${
          currentPage === "update" ? "update-button" : ""
        }`}
      >
        {currentPage === "add" ? "ADD" : "UPDATE"}
      </button>
    </div>
  );
}
