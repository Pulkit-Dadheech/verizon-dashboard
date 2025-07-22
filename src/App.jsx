import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SidebarProvider } from './context/SidebarContext';

const MainDashboard = lazy(() => import('./components/MainDashboard'));
const NotFound = lazy(() => import('./NotFound'));

const routeComponentMap = {
  '/': MainDashboard,
  '/dashboard': MainDashboard,
};

const DynamicComponent = ({ entryUrl }) => {
  const MatchedComponent = routeComponentMap[entryUrl?.toLowerCase()] || MainDashboard;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MatchedComponent />
    </Suspense>
  );
};

const AppInnerContent = ({ entryUrl }) => {
  const location = useLocation();
  return (
    <>
      {entryUrl && location.pathname === '/' ? (
        <Routes>
          <Route path="*" element={<DynamicComponent entryUrl={entryUrl} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

function App(props) {
  return (
    <SidebarProvider>
      <BrowserRouter basename={props?.basename || '/'}>
        <AppInnerContent entryUrl={props?.entryUrl} />
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
