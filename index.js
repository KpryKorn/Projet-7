import { recipes } from "../data/recipes.js";
import { displayRecipes } from "./ui/display.js";
import {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
} from "./utils/filters.js";

// Récupération des recettes initiales
function getInitialRecipes() {
  return recipes;
}

function init() {
  getInitialRecipes();
  getUniqueIngredients(getInitialRecipes());
  getUniqueAppliances(getInitialRecipes());
  getUniqueUtensils(getInitialRecipes());
  // Affichage initial des recettes
  displayRecipes(getInitialRecipes());
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener("DOMContentLoaded", init);
