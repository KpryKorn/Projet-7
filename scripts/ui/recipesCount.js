function displayCount(recipes) {
  document.getElementById(
    "totalRecipes"
  ).textContent = `${recipes.length} recettes`;
}

export { displayCount };
