import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Start from "../pages/Start";
import PlayGame from "../pages/PlayGame";
import Results from "../pages/Results";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/start" element={<Start />} />
                <Route path="/play" element={<PlayGame />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
