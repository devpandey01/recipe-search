import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

const APP_ID = 'f664b58c';
const APP_KEY = '2fa280a4d73e7726030ab7af4e50ff22';
const BASE_URL = 'https://api.edamam.com/search';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY
      }
    });
    setRecipes(response.data.hits);
  };

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} onSelect={handleSelect} />
      <RecipeDetails recipe={selectedRecipe} />
    </div>
  );
};

export default App;
