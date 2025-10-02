import Categories from "./app-categories/Categories"
import Head from "./app-head/Head"
import List from "./list/List"
import Search from "./search/Search"
import Total from "./total/Total"




function App(){
  return(
    <div className="main_container ">

      <Head/>
      <Categories/>
      <Search/>
      <List/>
      <Total/>


    </div>
  )
}
export default App