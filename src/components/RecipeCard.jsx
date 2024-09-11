import { Heart, HeartPulse, Soup } from "lucide-react";
import React, { useState, useEffect } from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const [isFav, setFav] = useState(localStorage.getItem("favorites")?.includes(recipe.label));


  const addRecipeToFavourite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isRecipeAlreadyInFav = favorites.some((fav) => fav.label === recipe.label);
    
    if (isRecipeAlreadyInFav) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setFav(false);
    } else {
      favorites.push(recipe);
      setFav(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <img
          src={recipe.image}
          alt={recipe.label}
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 rounded-full p-1 cursor-pointer bg-white flex items-center gap-1 text-sm">
          <Soup /> {recipe.yield} serving
        </div>
        <div
          className="absolute top-1 right-2 rounded-full p-1 cursor-pointer bg-white"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavourite();
          }}
        >
          {!isFav ? (
            <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
          ) : (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">{recipe.cuisineType} Kitchen</p>
      <div className="flex gap-2 mt-auto">
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <HeartPulse size={16} />
          <span className="text-sm font-semibold">Gluten-free</span>
        </div>
        {/* Add more tags here if needed */}
      </div>
    </div>
  );
};

export default RecipeCard;
