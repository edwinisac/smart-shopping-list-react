import Categories from "./app-categories/Categories"
import Head from "./app-head/Head"
import Search from "./search/Search"



function App(){
  return(
    <div className="main_container ">

      <Head/>
      <Categories/>
      <Search/>


    </div>
  )
}
export default App