import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Episodes from "./pages/Episodes";
import Location from "./pages/Locations";
import NavBar from "./components/navbar/navbar";
import CardsDetails from "./components/Cards/CardsDetails";

function PathRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<CardsDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardsDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
}

export default PathRoutes;
