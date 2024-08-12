// src/components/RecipeDetails.js
import React from 'react';


const RecipeDetails = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-details">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <div>
        {recipe.ingredientLines && recipe.ingredientLines.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
      </div>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">Full Recipe</a>
    </div>
  );
};

export default RecipeDetails;
