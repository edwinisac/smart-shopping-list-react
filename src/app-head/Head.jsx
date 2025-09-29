import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import Style from "./Head.module.css";
function Head() {
  return (
    <>
      <div className={Style.head_container}>
        <h2 className={Style.head_name}>Smart Shopping List</h2>
        <i className={`${Style.head_icon} ${Style.head_icon_moon}`}>
          <FontAwesomeIcon icon={faMoon} />
        </i>
        <i className={`${Style.head_icon} ${Style.head_icon_settings}`}>
          <FontAwesomeIcon icon={faGear} />
        </i>
      </div>
    </>
  );
}
export default Head;
