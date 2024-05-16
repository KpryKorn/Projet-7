import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./scripts/ui/display.js";
import {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
} from "./scripts/utils/filters.js";
import { searchByQuery } from "./scripts/utils/search.js";

function getInitialRecipes() {
  return recipes;
}

function search() {
  const searchBar = document.querySelector("#searchbar");
  const searchInput = searchBar.querySelector("input");
  const searchClose = searchBar.querySelector("svg");

  searchClose.style.display = searchInput.value ? "block" : "none";
  // à chaque nouvel input, lance la recherche en fonction de la query
  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value;
    console.log(
      "Début du filtrage des recettes selon la recherche :",
      searchValue
    );
    searchClose.style.display = searchValue ? "block" : "none";
    searchByQuery(recipes, searchValue);
  });

  searchClose.addEventListener("click", () => {
    searchInput.value = "";
    searchClose.style.display = "none";
    displayRecipes(getInitialRecipes());
  });
}

function init() {
  getInitialRecipes();
  getUniqueIngredients(getInitialRecipes()); // récupère les ingrédients, basés sur le tableau inital de recettes, etc
  getUniqueAppliances(getInitialRecipes());
  getUniqueUtensils(getInitialRecipes());
  displayRecipes(getInitialRecipes());

  search();
}

// Appel de la fonction d'initialisation après chargement du DOM
window.addEventListener("DOMContentLoaded", init);
