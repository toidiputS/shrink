import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import LandingPage from './components/LandingPage.tsx';
import './index.css';

import { AuthProvider } from './context/AuthContext';

import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app/*" element={<App />} />
        </Routes>
        <Analytics />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
