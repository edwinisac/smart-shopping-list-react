import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import style from "./item.module.css";
function Item() {
  return (
    <li className={style.list_item}>
      <input type="checkbox" className={style.list_checkbox} />
      <div className={style.custom_checkbox}>
        <i className={style.check}>
          <FontAwesomeIcon icon={faCheck} />
        </i>
      </div>
      <div className={style.name_container}>
        <h1 className={style.item_name}>Banana</h1>
        <h2 className={style.item_category}>Food</h2>
      </div>
      <p className={style.price}>2 * ₹30</p>
      <i className={`${style.list_actions} ${style.edit}`}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </i>
      <i className={`${style.list_actions} ${style.delete}`}>
        <FontAwesomeIcon icon={faTrashCan} />
      </i>
    </li>
  );
}
export default Item;
