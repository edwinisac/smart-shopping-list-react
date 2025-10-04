import style from "./select.module.css";

function Select() {
  return (
    <div className={style.select_container}>
      <h2>Select category</h2>
      <ul className={style.category_list}>
        <li className={style.item}>
          <button className={style.btn} data-category="food">
            Food
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="fashion">
            Fashion
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="crockery">
            Crockery
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="pet">
            Pet Care
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="electronics">
            Electronics
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="vehicle">
            Vehicle
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="kids">
            Kids
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn} data-category="others">
            Others
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Select;
