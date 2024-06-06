import {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
} from "./filters.js";

function updateDropdownLists(recipes) {
  const ingredients = getUniqueIngredients(recipes);
  const appliances = getUniqueAppliances(recipes);
  const utensils = getUniqueUtensils(recipes);

  updateDropdownList(ingredients, "ingredient");
  updateDropdownList(appliances, "appliance");
  updateDropdownList(utensils, "utensil");
}

function updateDropdownList(items, type) {
  const listElement = document.getElementById(`${type}`);
  listElement.innerHTML = "";
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listElement.appendChild(listItem);
  });
}

export { updateDropdownList, updateDropdownLists };
