import { displayRecipes } from "./display.js";

function searchByQuery(recipes, query) {
  if (query.length < 3) return recipes; // vérifie si la query fait au moins 3 caractères

  const filteredRecipes = recipes.filter((recipe) => {
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
}

export { searchByQuery };
