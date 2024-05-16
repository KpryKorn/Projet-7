function displayRecipes(recipes) {
  const template = document.querySelector("#recipeCard");
  const container = document.querySelector("#recipes");
  container.innerHTML = "";
  document.getElementById(
    "totalRecipes"
  ).textContent = `${recipes.length} recettes`;

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
      const ingredientsListElement = clone.querySelector("#ingredientsList");
      // Parcourir les ingrédients
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
