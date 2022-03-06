import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/pages/Inicio';
import GTAV from './components/pages/GTAV';
import Discord from './components/pages/Links/Discord';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Inicio />} />
                    <Route path='/gtav' element={<GTAV />} />
                    <Route path='/discord' element={<Discord />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
