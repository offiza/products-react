import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { NavBar } from './components/NavBar/NavBar';
import { CardsPage } from './components/CardsPage/CardPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<CardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
