import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MouseParticles from "react-mouse-particles";
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';

function App() {
    return (
        <>
            <MouseParticles
                g={1}
                color="rgb(255,255,255)"
                num={4}
                radius={5}
                life={1}
            />

            <Router basename="/Portifolio">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/projetos' element={<Projetos />} />
                    <Route path='/contato' element={<Contato />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;