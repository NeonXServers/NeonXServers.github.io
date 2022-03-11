import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './components/pages/Inicio';
import GTAV from './components/pages/GTAV/Inicio';
import GTAParches from './components/pages/GTAV/Parches';
import ScrollToTop from './components/ScrollToTop';
import Redirect from './components/Redirect';
function App() {
    document.body.onscroll = () => hideCoverBar();
    document.body.onmousemove = () => hideCoverBar();
    var showTimeout;
    function hideCoverBar() {
        document.body.classList.add('scrolling');
        clearTimeout(showTimeout);
        showTimeout = setTimeout(showCoverBar, 1000);
    }
    function showCoverBar() {
        document.body.classList.remove('scrolling');
    }

    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Inicio />} />
                    <Route path='/gtav' element={<GTAV />} />
                    <Route path='/gtav/patch-notes' element={<GTAParches />} />
                    {/* <Route
                        path='/a'
                        element={<Redirect url={'https://google.com'} />}
                    /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
