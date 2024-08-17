import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
