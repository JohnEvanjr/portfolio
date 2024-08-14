import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
// import About from './About';
// import Education from './Education';

export default function Main() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/education" element={<Education />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
