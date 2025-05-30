import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} /> {/* Show NotFound for unknown routes */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
