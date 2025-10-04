import Button from "../modal_parts/buttons/Buttons.jsx"
import Select from "../modal_parts/categories/Select.jsx"
import Form from "../modal_parts/form/Form"
import style from "./update.module.css"




function Update(){
    return(
        
         <div className={style.update_container}>
            <h1 className={style.heading}>Update Item</h1>
            <Form/>
            <Select/>
            <Button/>
        </div>
        
    )
}
export default Update