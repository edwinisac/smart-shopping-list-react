import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark} from "@fortawesome/free-regular-svg-icons";

import style from "./search.module.css"
function Search() {
  return (
    <div className={style.search_div}>
    <i className={`${style.search_div_icon} ${style.search_div_search}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
    <input type="text"  className={style.search_input} placeholder="Search items..." />
    <i className={`${style.search_div_icon} ${style.search_div_close}`}><FontAwesomeIcon icon={faCircleXmark} /></i>
    
    </div>
  )
}
export default Search