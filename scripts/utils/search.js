import { displayRecipes } from "../ui/display.js";

function searchByQuery(recipes, query) {
  if (query.length <= 2) return recipes; // vérifie si la query fait au moins 2 caractères

  let filteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    if (
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
      ) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    ) {
      filteredRecipes.push(recipe);
    }
  }
  displayRecipes(filteredRecipes);
}

export { searchByQuery };
