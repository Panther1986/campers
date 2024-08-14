import { useEffect, useState } from "react";
import { fetchAllCars } from "../../api.js";
import toast from "react-hot-toast";
import CarCard from "../../components/CarCard/CarCard.jsx";

const HomePage = () => {
  const [car, setCar] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await fetchAllCars();
        setCar(car);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching", error);
        toast.error("Ooooops something went wrong, please reload the page 😞");
      }
    };
    fetchCar();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return toast.error({ error });
  }

  return (
    <div>
      <CarCard items={car} />
    </div>
  );
};

export default HomePage;
