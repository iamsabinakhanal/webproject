import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/public/Login';
import Signup from './components/public/Signup';
import Homepage from './components/private/Homepage';
import Navbar from './components/private/Navbar';
import Footer from './components/private/Footer';
import Content from './components/private/Content';

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
