import logo from './logo.svg';
import './App.css';
import Adddata from './components/Adddata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import Searchdata from './components/Searchdata';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Adddata/>}/>
  <Route path='/s' element={<Searchdata/>}/>
  <Route path='/d' element={<Delete/>}/>
  <Route path='/v' element={<Viewall/>}/>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
