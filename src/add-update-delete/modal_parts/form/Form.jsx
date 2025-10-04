import style from "./form.module.css"
function Form() {
  return (
    
      <div className={style.form_container}>
        <input type="text" placeholder="Enter product name...." className={`${style.input_field}`}/>
        <input type="number" min={0} step={0.1} placeholder="Enter product price...." className={`${style.input_field}`}/>
        <input type="number" min={0} step={0.1} placeholder="Enter product quantity...." className={`${style.input_field}`}/>
        {/* <input type="text" placeholder="Enter instructions..." className={`${style.input_field}`} /> */}
        <textarea name="textarea" placeholder="Enter instructions..." className={`${style.input_field} ${style.text}`}></textarea>
      </div>
    
  );
}
export default Form;
