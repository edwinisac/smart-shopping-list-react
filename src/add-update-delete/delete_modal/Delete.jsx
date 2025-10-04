import Button from "../modal_parts/buttons/Buttons"
import style from "./delete.module.css"

function Delete(){
    return(
        <div className={style.delete_container}>
            <p className={style.confirm}>Confirm Delete</p>
            <Button/>

        </div>

    )
}
export default Delete