import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMealA from "../DetailMealA/DetailMealA";

const Details = () => {
  const idMeal = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal.idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMeal(data.meals))
  }, [idMeal]);
  return (
    <div>
      {
          meal.map(meal => <DetailMealA 
          key={meal.idMeal}
          meal = {meal}
          ></DetailMealA>)
      }
    </div>
  );
};

export default Details;
