import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const  navigate = useNavigate();

  const details = () => {
      const path = `/home/${meal.idMeal}`
      navigate(path);
  }

  return (
    <div >
      <div className="bg-indigo-900 p-3">
          <h1 className="text-xl">name: {meal.strMeal.slice(0,12)}</h1>
          <img className="my-2" src={meal.strMealThumb} alt="" />
          <p>about:{meal.strInstructions.slice(0, 100)}</p>
          <button onClick={details} className="w-full bg-orange-400 mt-2 py-1 rounded-lg">details</button>
      </div>
      
    </div>
  );
};

export default Meal;
