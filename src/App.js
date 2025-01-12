import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import PricePage from './pages/PricePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ImpressumPage from './pages/ImpressumPage';
import ServicePage from './pages/ServicePage';
import { Context } from './context';
import { useState } from 'react';
import DatenschutzPage from './pages/DatenschutzPage';
import AgbPage from './pages/AgbPage';
import CookieBanner from './components/CookieBanner';

function App() {

  const [ menuActive, setMenuActive ] = useState(false);
  const openMenu = () => setMenuActive(true);
  const closeMenu = () => setMenuActive(false);

  return (
    <div>
      <Context.Provider value={{openMenu, closeMenu, menuActive}}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/über-uns' element={<AboutUsPage />} />
          <Route path='/preiseliste' element={<PricePage />} />
          <Route path='/kontakt' element={<ContactPage />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/behandlung' element={<ServicePage />} />
          <Route path='/impressum' element={<ImpressumPage />} />
          <Route path='/datenschutz' element={<DatenschutzPage />} />
          <Route path='/agb' element={<AgbPage />} />
        </Routes>
        <CookieBanner />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
