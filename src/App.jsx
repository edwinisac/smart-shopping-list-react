import { Home } from './home/Home';
import { AddItem } from './add-item/AddItem';
import { Error } from './pageError/Error';

import { Routes,Route} from 'react-router-dom';
import './App.css'






function App() {

  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddItem/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
