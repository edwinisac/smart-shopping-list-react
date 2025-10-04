import Select from "../modal_parts/categories/Select.jsx"
import Form from "../modal_parts/form/Form"
import style from "./additem.module.css"



function Additem(){
    return(
        
         <div className={style.add_container}>
            <h1 className={style.heading}>Add Item</h1>
            <Form/>
            <Select/>
        </div>
        
    )
}
export default Additem