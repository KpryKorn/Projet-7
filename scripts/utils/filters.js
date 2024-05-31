// Retourne un tableau de tous les ingrédients uniques du fichier data des recettes
function getUniqueIngredients(recipes) {
  const allIngredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      allIngredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  return Array.from(allIngredients);
}

// pareil pour les appareils
function getUniqueAppliances(recipes) {
  const allAppliances = new Set();
  recipes.forEach((recipe) => {
    allAppliances.add(recipe.appliance.toLowerCase());
  });
  return Array.from(allAppliances);
}

// pareil pour les ustensiles
function getUniqueUtensils(recipes) {
  const allUtensils = new Set();
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      allUtensils.add(utensil.toLowerCase());
    });
  });
  return Array.from(allUtensils);
}

// renvoie un tableau des ingrédients filtrés sur les recettes de l'input
function getFilteredIngredients(filteredRecipes) {
  const allIngredients = new Set();
  filteredRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      allIngredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  return Array.from(allIngredients);
}

export {
  getUniqueIngredients,
  getUniqueAppliances,
  getUniqueUtensils,
  getFilteredIngredients,
};
