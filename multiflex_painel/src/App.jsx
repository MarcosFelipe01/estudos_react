import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Cabecalho from './layout/Cabecalho';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/pages/login" element={<Login />} />
            <Route path="/pages/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
