import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { fetchCarWithTopic } from "../../api.js";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchCarWithTopic("Road");
  //       console.log(data);
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, []);
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element />
        <Route path="/favorites" element />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
