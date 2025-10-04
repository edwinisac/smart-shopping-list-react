import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import style from "./buttons.module.css"

function Button(){
    return(
        <div className={style.button_container}>
            <button value="cancel" className={`${style.btn} ${style.cancel}`}><FontAwesomeIcon icon={faXmark} /></button>
            <button value="submit" className={`${style.btn} ${style.submit}`}><FontAwesomeIcon icon={faCheck} /></button>

        </div>
    )
}
export default Button