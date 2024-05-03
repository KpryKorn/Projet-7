export default function createRecipeElement(recipe) {
  return `<div id="card-container" class="col-12 col-lg-4">
                <article class="card border-0">
                    <img src="./assets/images/${recipe.image}" alt="photo de ${
    recipe.name
  }" class="card-img-top" height="253px">
                    <div class="card-body rounded-bottom">
                        <div id="recipe-name-time" class="d-flex flex-row justify-content-between">
                            <h2 class="card-title w-75">${recipe.name}</h2>
                            <div class="recipe-time text-nowrap">
                                <span id="timeValue" class="smallFont">${
                                  recipe.time
                                } min</span>
                            </div>
                        </div>
                        <div class="text-recette">
                            <p class="text-uppercase card-text">Recette</p>
                            <p class="card-text">${recipe.description}</p>
                        </div>
                        <div class="card-text py-2 heightFix">
                        <p class="text-recette text-uppercase mt-2">Ingrédients</p>
                            <ul class="ingredients-list flex">
                                ${recipe.ingredients
                                  .map((ingredient) => {
                                    return `<li class="ingr-flex">${
                                      ingredient.ingredient
                                    }: ${
                                      ingredient.quantity
                                        ? ingredient.quantity
                                        : ""
                                    } ${
                                      ingredient.unit ? ingredient.unit : ""
                                    }</li>`;
                                  })
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>        
    `;
}
