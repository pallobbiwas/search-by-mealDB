import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const searchResult = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);

  return (
    <div className="container mx-auto text-white bg-gray-800 mt-3 py-2">
      <h1 className="text-4xl text-orange-500 font-mono font-bold">
        Search your favorite food
      </h1>
      <div className="mt-4">
        <input
          onChange={searchResult}
          className="w-1/3 h-8 rounded-3xl text-black text-center"
          type="text"
        />
        <button className="px-6 py-2 bg-orange-400 rounded-full ml-8">
          Search
        </button>
      </div>
      <div>
        <h1>Search found: {meals.length}</h1>
        <div className="grid gap-4 grid-cols-4">
        {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
