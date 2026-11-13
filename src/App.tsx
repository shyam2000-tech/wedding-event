import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import BottomNavbar from './components/BottomNavbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

// Scroll to top or scroll to hash target helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#262626] font-sans selection:bg-[#B59B72]/20 selection:text-[#262626]">
        {/* Navigation Header */}
        <Header />

        {/* Main Content View */}
        <main className="flex-1 w-full pb-16 sm:pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Redirect /contact to the integrated Contact section on About Us */}
            <Route path="/contact" element={<Navigate to="/about#contact" replace />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Curved Floating Bottom Navbar */}
        <BottomNavbar />

        {/* Floating Contact Icon Button */}
        <FloatingContactButton />
      </div>
    </BrowserRouter>
  );
}
