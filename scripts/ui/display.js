import { createRecipeCard } from "./recipesCard.js";
import { displayCount } from "./recipesCount.js";

function displayRecipes(recipes) {
  const container = document.querySelector("#recipes");
  container.innerHTML = "";
  displayCount(recipes);

  if (recipes.length > 0) {
    recipes.forEach((recipe) => {
      createRecipeCard(recipe);
    });
  } else {
    container.innerHTML = "<p>Aucune recette trouvée.</p>";
  }
}

export { displayRecipes };
