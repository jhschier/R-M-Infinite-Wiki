import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import NavBar from "./components/navbar/navbar";

function PathRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default PathRoutes;
