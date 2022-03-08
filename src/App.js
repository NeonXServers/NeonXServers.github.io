import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/pages/Inicio';
import GTAV from './components/pages/GTAV/Inicio';
function App() {
    document.body.onscroll = () => hideCoverBar();
    document.body.onmousemove = () => hideCoverBar();
    var showTimeout;
    function hideCoverBar() {
        document.body.className = 'scrolling';
        clearTimeout(showTimeout);
        showTimeout = setTimeout(showCoverBar, 1000);
    }
    function showCoverBar() {
        document.body.className = '';
    }
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Inicio />} />
                    <Route path='/gtav' element={<GTAV />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
