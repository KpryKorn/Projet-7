import { displayRecipes } from "./display.js";
import { getFilteredIngredients } from "./filters.js";

let filteredRecipes = [];

function searchByQuery(recipes, query) {
  if (query.length < 2) return recipes; // vérifie si la query fait au moins 3 caractères

  filteredRecipes = recipes.filter((recipe) => {
    return (
      // Vérifier si le nom, les ingrédients ou la description de la recette inclut la query
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
      ) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    );
  });
  displayRecipes(filteredRecipes);
  console.log(
    "Ingrédients des recettes post-filtrage:",
    getFilteredIngredients(filteredRecipes)
  );
  return filteredRecipes;
}

export { searchByQuery };
