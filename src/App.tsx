import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import ScrollToTop from './common/ScrollToTop';
import Home from './pages/Home';
// import Services from './pages/Services';
// import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import GalleryPage from './pages/Gallery';
import ContactMe from './pages/ContactMe';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/about-me" element={<AboutMe />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;