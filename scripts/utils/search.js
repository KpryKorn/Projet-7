import { getInitialRecipes } from "../../index.js";
import {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
} from "./filters.js";
import { displayRecipes } from "./display.js";
import { updateDropdowns, updateDropdownList } from "./dropdowns.js";

let filteredRecipes = [];

function searchIngredient(recipes) {
  const input = document.querySelector('input[name="ingredientField"]');
  const uniqueIngredients = getUniqueIngredients(recipes);

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = uniqueIngredients.filter((ingredient) =>
      ingredient.includes(query)
    );
    updateDropdownList(results, "ingredient", recipes);
  });
}

function searchAppliance(recipes) {
  const input = document.querySelector('input[name="applianceField"]');
  const uniqueAppliances = getUniqueAppliances(recipes);

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = uniqueAppliances.filter((appliance) =>
      appliance.includes(query)
    );
    updateDropdownList(results, "appliance", recipes);
  });
}

function searchUtensil(recipes) {
  const input = document.querySelector('input[name="utensilField"]');
  const uniqueUtensils = getUniqueUtensils(recipes);

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = uniqueUtensils.filter((utensil) => utensil.includes(query));
    updateDropdownList(results, "utensil", recipes);
  });
}

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

  searchIngredient(filteredRecipes);
  searchAppliance(filteredRecipes);
  searchUtensil(filteredRecipes);
  displayRecipes(filteredRecipes);
  updateDropdowns(filteredRecipes);
  return filteredRecipes;
}

searchIngredient(getInitialRecipes());
searchAppliance(getInitialRecipes());
searchUtensil(getInitialRecipes());
export { searchByQuery, searchByTags, filteredRecipes };
