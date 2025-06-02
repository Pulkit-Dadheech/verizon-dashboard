import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import { MainDashboard } from './components/MainDashboard';
import { SidebarProvider } from './context/SidebarContext';

function App() {

  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard/>} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} /> {/* Show NotFound for unknown routes */}
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
