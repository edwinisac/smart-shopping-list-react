import { Pen, Trash2, Check } from "lucide-react";

export function List({item,handleClick,handleUpdateButton,handleDeleteButton}){
    return(
        <li
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
    )
}