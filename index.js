import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./scripts/utils/display.js";
import { updateDropdownLists } from "./scripts/utils/dropdowns.js";
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
  updateDropdownLists(getInitialRecipes());
  displayRecipes(getInitialRecipes());

  search();
}

// lance les fonctions précédentes après chargement du DOM
window.addEventListener("DOMContentLoaded", init);
