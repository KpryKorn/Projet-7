import {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
} from "./filters.js";
import { searchByQuery } from "./search.js";

function updateDropdowns(recipes) {
  const ingredients = getUniqueIngredients(recipes);
  const appliances = getUniqueAppliances(recipes);
  const utensils = getUniqueUtensils(recipes);

  updateDropdownList(ingredients, "ingredient", recipes);
  updateDropdownList(appliances, "appliance", recipes);
  updateDropdownList(utensils, "utensil", recipes);
}

function updateDropdownList(items, type, recipes) {
  const listElement = document.getElementById(`${type}`);
  listElement.innerHTML = "";
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.addEventListener("click", (e) => {
      let query = e.target.textContent;
      searchByQuery(recipes, query);
    });
    listElement.appendChild(listItem);
  });
}

export { updateDropdownList, updateDropdowns };
