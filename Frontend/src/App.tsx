import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./components/Navbar"
import Masking from './pages/Masking';
import DesignWritePage from './pages/DesignBoard'; // 위치 확인 필요!


export default function App() {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/masking" element={<Masking />} />
                    {/* <Route path="/" element={<Commuity />} />  */}
                    <Route path="/design/write" element={<DesignWritePage />} />
                </Routes>
            </div>
        </>
    );
}