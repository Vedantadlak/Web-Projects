import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Body/>}  exact/>
      <Route path='/dashboard' element={<Dashboard/>} exact />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
