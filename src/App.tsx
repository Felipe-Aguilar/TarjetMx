import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import AvisoPrivacidad from './components/pages/AvisoPrivacidad';
import Premium from './components/Premium/Premium';

const App = () => {
  return ( 
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aviso-de-privacidad' element={<AvisoPrivacidad />}/>
        <Route path='/hazte-premium' element={<Premium />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;