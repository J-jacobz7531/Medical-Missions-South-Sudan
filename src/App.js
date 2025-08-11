import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CMSProvider } from './contexts/CMSContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import AchievementsPage from './pages/AchievementsPage';
import GalleryPage from './pages/GalleryPage';
import DonatePage from './pages/DonatePage';
import AdminPage from './pages/AdminPage';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


// A helper component to conditionally render Header and Footer
const AppLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workflows" element={<OurWorkPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <CMSProvider>
      <Router>
        <AppLayout />
      </Router>
    </CMSProvider>
  );
}

export default App;