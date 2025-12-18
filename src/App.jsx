import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import { Home } from './Components/Home';

function App() {
  const handleLogin = () => alert('Login clicked');
  const handleSignup = () => alert('Sign Up clicked');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home onLoginClick={handleLogin} onSignupClick={handleSignup} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
