function Form() {
  return (
    
      <div>
        <input type="text" placeholder="Enter product name...." />
        <input type="number" min={0} step={0.1} placeholder="Enter product price...."/>
        <input type="number" min={0} step={0.1} placeholder="Enter product quantity...."/>

      </div>
    
  );
}
export default Form;
