import { Home } from './home/Home';
import { AddItem } from './add-item/AddItem';
import { Update } from './update-item/Update';
import { Error } from './pageError/Error';

import { Routes,Route} from 'react-router-dom';
import './App.css'
import { useState ,useEffect} from 'react';
import axios from 'axios';







function App() {

  const [items, setitems] = useState([]);

  const fetchItemData = async () => {
    const res = await axios.get("http://localhost:5000/items");
    setitems(res.data);
  };

  useEffect(() => {
    fetchItemData();
  },[]);


  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<Home items={items} fetchItemData={fetchItemData}/>}/>
        <Route path="/add" element={<AddItem items={items} fetchItemData={fetchItemData}/>}/>
        <Route path="/update/:id" element={<Update items={items} fetchItemData={fetchItemData}/>}/>
        <Route path="*" element={<Error/>}/>
        
      </Routes>
    </div>
  )
}

export default App
