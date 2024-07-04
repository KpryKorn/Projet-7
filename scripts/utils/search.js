import { getInitialRecipes } from "../../index.js";
import { displayRecipes } from "./display.js";
import { updateDropdowns } from "./dropdowns.js";

let filteredRecipes = [];

function searchByQuery(recipes, query) {
  if (query.length < 3 || query.length <= 1) return recipes; // FIX: soit on saisi rien, soit 3 caractères

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

function searchByTags(recipes, selectedTags, type) {
  // Si selectedTags est une chaîne de caractères, la convertir en un tableau à un seul élément
  if (typeof selectedTags === "string") {
    selectedTags = [{ value: selectedTags, type: type }];
  }

  if (selectedTags.length === 0) {
    displayRecipes(getInitialRecipes());
    updateDropdowns(getInitialRecipes());
    return getInitialRecipes();
  }

  let filteredRecipes = recipes;

  selectedTags.forEach(({ value, type }) => {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      switch (type) {
        case "ingredient":
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
          );
        case "utensil":
          return recipe.ustensils.some((utensil) =>
            utensil.toLowerCase().includes(value.toLowerCase())
          );
        case "appliance":
          return recipe.appliance.toLowerCase().includes(value.toLowerCase());
        default:
          return false;
      }
    });
  });

  console.log("searchByTags - recipes: ", recipes);
  console.log("searchByTags - selectedTags: ", selectedTags);
  console.log("searchByTags - type: ", type);

  displayRecipes(filteredRecipes);
  updateDropdowns(filteredRecipes);
  return filteredRecipes;
}
export { searchByQuery, searchByTags, filteredRecipes };
