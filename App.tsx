
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  Users, 
  Menu, 
  X, 
  Gift, 
  HandHeart, 
  Trophy,
  Info,
  Camera,
  MessageCircle
} from 'lucide-react';
import Home from './pages/Home';
import SubmitWish from './pages/SubmitWish';
import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import WishDetail from './pages/WishDetail';
import Volunteer from './pages/Volunteer';
import CorporatePartners from './pages/CorporatePartners';
import FinancialTransparency from './pages/FinancialTransparency';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Experiences from './pages/Experiences';
import Auth from './pages/Auth';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import BecomeStar from './components/BecomeStar';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAdminPage = location.pathname.startsWith('/management-portal');

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <Navbar />}
      <main className={`flex-grow ${!isAdminPage ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-wish" element={<SubmitWish />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/transparency" element={<FinancialTransparency />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/wish/:id" element={<WishDetail />} />
          <Route path="/auth" element={<Auth />} />
          {/* Secret Admin Route */}
          <Route path="/management-portal-v2" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {isHomePage && <BecomeStar />}
      {isHomePage && <Partners />}
      
      {!isAdminPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
