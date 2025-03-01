import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/public/Login';
import Signup from './components/public/Signup';
import Dashboard from './components/private/Dashboard';

import Footer from './components/private/Footer';
import Navbar from './components/private/Navbar';

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
        {/* Dashboard Route with Navbar and Footer */}
        <Route 
          path="/dashboard" 
          element={
            <>
              <Navbar />       {/* Ensure Navbar is correctly implemented */}
              <Dashboard />    
              <Footer />       {/* Ensure Footer is correctly implemented */}
            </>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;