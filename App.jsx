import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/public/Login';
import Signup from './components/public/Signup';
// import Navbar from './components/private/Navbar'; // Removed Navbar import
import Dashboard from './components/private/Dashboard';
import Footer from './components/private/Footer';
import BagGallery from './components/private/Bag';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/bag" element={<BagGallery/>}/>
      </Routes>
    </div>
  );
}

export default App;
