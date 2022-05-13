import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/About/About';
import Profile from './components/Profile/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
);
