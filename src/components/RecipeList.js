// src/components/RecipeList.js
import React from 'react';


const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item" onClick={() => onSelect(recipe.recipe)}>
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
