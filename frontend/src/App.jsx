import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Donar from './pages/Donar/Donar';
import DonarList from './pages/Donarlist/DonarList';
import ContactUs from './pages/Contact us/ContactUs';


function App() {
  return (
    <>
      <Navbar />
      <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/donar' element={<Donar/>}></Route>
          <Route path='/see-donar' element={<DonarList/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>



      </Routes>
    
    </>
  );
}

export default App;
