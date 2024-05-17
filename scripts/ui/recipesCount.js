function displayCount() {
  document.getElementById(
    "totalRecipes"
  ).textContent = `${recipes.length} recettes`;
}

export { displayCount };
