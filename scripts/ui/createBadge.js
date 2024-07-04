import { displayRecipes } from "../utils/display.js";
import { updateDropdowns } from "../utils/dropdowns.js";
import { filteredRecipes, searchByTags } from "../utils/search.js";

let selectedTags = [];

function createBadge(elementDropdownList, type, recipes) {
  const badgesContainer = document.getElementById("badgesContainer");
  const badge = document.createElement("div");
  badge.classList.add("badge");
  badge.textContent = elementDropdownList;
  badge.innerHTML = `${elementDropdownList} 
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 5px; cursor: pointer;">
  <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  badgesContainer.appendChild(badge);

  selectedTags.push({ value: elementDropdownList, type: type });

  const originalRecipes = [...recipes];

  badge.querySelector("svg").onclick = function () {
    badgesContainer.removeChild(badge);
    console.log("selectedTags avant: ", selectedTags);

    // Supprimer le tag de la liste des tags sélectionnés
    const index = selectedTags.findIndex(
      (tag) => tag.value === elementDropdownList && tag.type === type
    );
    if (index > -1) {
      selectedTags.splice(index, 1);
    }

    // Relancer la recherche avec les tags restants
    console.log("recipes: ", recipes);
    console.log("selectedTags après: ", selectedTags);
    console.log("type: ", type);

    const filteredRecipes = searchByTags(originalRecipes, selectedTags, type);
    displayRecipes(filteredRecipes);
  };
}

export { createBadge };
