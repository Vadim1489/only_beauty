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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/über-uns' element={<AboutUsPage />} />
        <Route path='/preiseliste' element={<PricePage />} />
        <Route path='/kontakt' element={<ContactPage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/behandlung' element={<ServicePage />} />
        <Route path='/impressum' element={<ImpressumPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
