import { useEffect, useState } from "react";
import { fetchAllCars } from "../../api.js";
import toast from "react-hot-toast";
import CarCard from "../../components/CarCard/CarCard.jsx";
import css from "./HomePage.module.css";

const HomePage = () => {
  const itemsPerPage = 4;
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const loadCars = async (page) => {
    setLoading(true);
    try {
      const fetchedCars = await fetchAllCars();
      const totalPages = Math.ceil(fetchedCars.length / itemsPerPage);
      setTotalPages(totalPages);
      setCars((prevCars) => [
        ...prevCars,
        ...fetchedCars.slice((page - 1) * itemsPerPage, page * itemsPerPage),
      ]);
    } catch (error) {
      console.error("Error fetching", error);
      setError(true);
      toast.error("Ooooops something went wrong, please reload the page 😞");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars(currentPage);
  }, [currentPage]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error loading cars.</p>;
  }

  //   const startPage = (currentPage - 1) * itemsPerPage;
  //   const currentItems = cars.slice(startPage, startPage + itemsPerPage);
  //   const totalPages = Math.ceil(cars.length / itemsPerPage);

  return (
    <div>
      {cars.map((car) => (
        <CarCard key={car.id} item={car} />
      ))}
      {currentPage < totalPages && (
        <button
          className={css.btnLoad}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;
