import { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import Navigation from "../Navigation/Navigation";
import CarCard from "../CarCard/CarCard";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}>
            <Route path=":id" element={<CatalogPage />} />
            <Route path=":features" element />
            <Route path=":reviews" element />
          </Route>
          <Route path="/favorites" element />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
