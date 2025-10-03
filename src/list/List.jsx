import style from "./list.module.css";
import Item from "../list-item/Item";

function List() {
  return (
    <div className={style.list_container}>
      <ul className={style.list_group}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>


      </ul>
    </div>
  );
}
export default List;
