import { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() =>
  import("../../pages/FavoritePage/FavoritePage")
);

const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const ShowMoreModal = lazy(() => import("../ShowMoreModal/ShowMoreModal"));

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
          <Route path="/favorites" element={<FavoritePage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
