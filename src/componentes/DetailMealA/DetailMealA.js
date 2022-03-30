import React from "react";
import { Link } from "react-router-dom";

const DetailMealA = ({ meal }) => {

  return (
    <div className="w-3/4 mx-auto mt-5 bg-slate-800 text-white p-4">
      <h1>name: {meal.strMeal}</h1>
      <img className="w-full my-2" src={meal.strMealThumb} alt="" />
      <p>About: {meal.strInstructions}</p>
      <Link className="underline text-blue-800" to='/'>go home</Link>
    </div>
  );
};

export default DetailMealA;
