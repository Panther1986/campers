import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarOfId } from "../../redux/operations/operations";

const Reviews = ({ id: carId, items }) => {
  const { id: paramId } = useParams();
  const id = carId || paramId;
  const [camp, setCamp] = useState([]);

  useEffect(() => {
    const fetchcamp = async () => {
      try {
        const campData = await fetchCarOfId();
        console.log(campData);
        setCamp(campData);
      } catch (error) {}
    };
  }, [id]);

  return (
    <div>
      <h2>Reviews</h2>
    </div>
  );
};

export default Reviews;
