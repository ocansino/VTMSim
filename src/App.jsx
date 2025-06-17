import React from 'react';
import { createRoot } from 'react-dom/client';  // <-- import this
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import Map from './pages/Map';
import ChroniclePage from './pages/ChroniclePage';
import Quest from './pages/Quest';
import Layout from './components/Layout';
import TestChronicle from './pages/TestChronicle';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CharacterPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/chronicle" element={<TestChronicle />} />
          <Route path="/quest" element={<Quest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Mount the app to the DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

