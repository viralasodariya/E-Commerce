import './App.css';
import Navbar from './componets/navbar/navbar';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Shopcategories from './pages/Shopcategories';
import Shop from './pages/shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsingup from './pages/loginsingup';
import Footers from './componets/footer/Footer';
import men_banner from"./componets/Assets/banner_mens.png"
import women_banner from "./componets/Assets/banner_women.png"
import kids_banner from "./componets/Assets/banner_kids.png"


function App() {
  return (
    <div >
      <BrowserRouter >
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategories banner={men_banner} category="men"/>} />
          <Route path='/womens' element={<Shopcategories banner={women_banner}category="women"/>} />
          <Route path='/kids' element={<Shopcategories banner={kids_banner} category="kid"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':PorductId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsingup/>} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
}

export default App;
