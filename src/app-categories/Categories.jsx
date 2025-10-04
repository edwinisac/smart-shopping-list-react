import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.category_container}>
      <ul className={styles.category_list}>
        <li className={styles.item}>
          <button className={styles.btn} data-category="all">
            All
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="food">
            Food
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="fashion">
            Fashion
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="crockery">
            Crockery
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="pet">
            Pet Care
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="electronics">
            Electronics
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="vehicle">
            Vehicle
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="kids">
            Kids
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn} data-category="others">
            Others
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Categories;
