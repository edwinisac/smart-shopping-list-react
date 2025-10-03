import style from "./total.module.css"
function Total() {
  return (
    <>
      <div className={style.total_container}>
           <p className={style.quantity}><span className={style.items}>Items:</span>&nbsp; 3</p> 
           <p className={style.total_section}><span className={style.total}>Total:</span>&nbsp; ₹510</p> 

      </div>
    </>
  );
}
export default Total
