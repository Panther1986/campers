import { Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import Navigation from "../Navigation/Navigation";
import CarCard from "../CarCard/CarCard";
import ShowMoreModal from "../ShowMoreModal/ShowMoreModal";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}>
            <Route path="/catalog/:id/" element={<ShowMoreModal />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="/favorites" element />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
