import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import AvisoPrivacidad from './components/pages/AvisoPrivacidad';
import Premium from './components/Premium/Premium';
import Empresas from './components/Empresas/Empresas';
import HomeRedirect from './components/HomeRedirect';
import Landing from './components/Landing/Landing';

const App = () => {
  return ( 
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomeRedirect />}/>
        <Route path='/acerca-tarjet' element={<Home />}/>
        <Route path='/aviso-de-privacidad' element={<AvisoPrivacidad />}/>
        <Route path='/hazte-premium' element={<Premium />}/>
        <Route path='/empresas' element={<Empresas />}/>
        <Route path='/landing-one' element={<Landing />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;