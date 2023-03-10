import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='px-10' >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
    </Routes>

    </div>
  );
}

export default App;
