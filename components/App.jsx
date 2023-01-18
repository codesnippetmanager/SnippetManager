import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar.jsx';
import LoginPage from './LoginPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
