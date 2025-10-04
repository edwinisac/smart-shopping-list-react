import Additem from "./add-update-delete/add_modal/AddItem"
import Delete from "./add-update-delete/delete_modal/Delete"
import Update from "./add-update-delete/update_modal/Update"
import Add from "./add/Add"
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
      <Add/>
      {/* <Additem/> */}
      {/* <Update/> */}
      {/* <Delete/> */}

    </div>
  )
}
export default App