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
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(query)
      )
    );
    sessionStorage.setItem("filteredRecipes", JSON.stringify(filteredRecipes));
    updateDropdownList(results, "ingredient", filteredRecipes);
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
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(query)
    );
    sessionStorage.setItem("filteredRecipes", JSON.stringify(filteredRecipes));
    updateDropdownList(results, "appliance", filteredRecipes);
  });
}

function searchUtensil(recipes) {
  const input = document.querySelector('input[name="utensilField"]');
  const uniqueUtensils = getUniqueUtensils(recipes);

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const results = uniqueUtensils.filter((utensil) => utensil.includes(query));
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ustensils.some((utensil) => utensil.toLowerCase().includes(query))
    );
    sessionStorage.setItem("filteredRecipes", JSON.stringify(filteredRecipes));
    updateDropdownList(results, "utensil", filteredRecipes);
  });
}

function searchByQuery(query) {
  let recipesToSearch =
    JSON.parse(sessionStorage.getItem("filteredRecipes")) ||
    getInitialRecipes();

  if (query.length < 3 || query.length <= 1) return recipesToSearch; // FIX: soit on saisi rien, soit 3 caractères

  let filtered = recipesToSearch.filter((recipe) => {
    return (
      // Vérifier si le nom, les ingrédients ou la description de la recette inclut la query
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(query.toLowerCase())
      ) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    );
  });
  displayRecipes(filtered);
  updateDropdowns(filtered);
  return filtered;
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

  sessionStorage.setItem("filteredRecipes", JSON.stringify(filteredRecipes));
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
