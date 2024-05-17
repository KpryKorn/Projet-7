import { displayCount } from "./recipesCount";

function displayRecipes(recipes) {
  const template = document.querySelector("#recipeCard");
  const container = document.querySelector("#recipes");
  container.innerHTML = "";
  displayCount(recipes);

  if (recipes.length > 0) {
    recipes.forEach((recipe) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(
        ".card-img-top"
      ).src = `./assets/img/Recettes/Resized/${recipe.image}`;
      clone.querySelector(".card-img-top").alt = recipe.name;
      clone.querySelector(".badge").textContent = `${recipe.time} min`;
      clone.querySelector(".card-title").textContent = recipe.name;
      clone.querySelector(".card-text").textContent = recipe.description;

      // Afficher les ingrédients de la recette dans le DOM de la carte
      const ingredientsListElement = clone.querySelector("#ingredientsList");
      recipe.ingredients.forEach((ingredient) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${ingredient.ingredient}: ${
          ingredient.quantity || ""
        } ${ingredient.unit || ""}`;
        ingredientsListElement.appendChild(listItem);
      });
      container.appendChild(clone);
    });
  } else {
    container.innerHTML = "<p>Aucune recette trouvée.</p>";
  }
}

export { displayRecipes };
