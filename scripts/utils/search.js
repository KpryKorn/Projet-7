import { displayRecipes } from "./display.js";
import { updateDropdowns } from "./dropdowns.js";

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
  updateDropdowns(filteredRecipes);
  console.log("query: ", query);
  console.log("recettes: ", filteredRecipes);
  return filteredRecipes;
}

function searchByTags(recipes, query, type) {
  filteredRecipes = recipes.filter((recipe) => {
    switch (type) {
      case "ingredient":
        return recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
        );
      case "utensil":
        return recipe.ustensils.some((utensil) =>
          utensil.toLowerCase().includes(query.toLowerCase())
        );
      case "appliance":
        return recipe.appliance.toLowerCase().includes(query.toLowerCase());
      default:
        return false;
    }
  });
  displayRecipes(filteredRecipes);
  updateDropdowns(filteredRecipes);
  console.log("query: ", query);
  console.log("ingrédients: ", filteredRecipes);
  return filteredRecipes;
}
export { searchByQuery, searchByTags };
