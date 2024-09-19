import React from 'react';
import{ Routes, Route, HashRouter} from 'react-router-dom';
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export function App() {
    return (
        <>
            <div>
                <HashRouter>
                    <Routes >
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                    </Routes>
                </HashRouter>
            </div>
        </>
    )
}
