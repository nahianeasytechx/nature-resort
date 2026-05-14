import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import Project from './pages/Project/Project';
import Ownership from './pages/Ownership/Ownership';
import Financial from './pages/Financial/Financial';
import Legal from './pages/Legal/Legal';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Amenities from './pages/Amenities/Amenities';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ownership" element={<Ownership />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
