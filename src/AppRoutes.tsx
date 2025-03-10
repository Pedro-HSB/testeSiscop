import React, { JSX } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListaTarefa from './pages/listaTarefa/ListaTarefa';
import NovaTarefa from './pages/novaTarefa/NovaTarefa';
import Taboada from './pages/taboada/Taboada';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaTarefa />} />
        <Route path='/novaTarefa' element={<NovaTarefa />} />
        <Route path='/taboada' element={<Taboada />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
