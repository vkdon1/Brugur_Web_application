function addIngredient(ingredient) {
  // Adding ingredient display
  const burgerDiv = document.getElementById("burger");
  const ingredientDiv = document.createElement("div");
  ingredientDiv.textContent = ingredient;
  ingredientDiv.style.padding = "5px";
  ingredientDiv.style.fontSize = "1.2rem";
  ingredientDiv.style.border = "1px solid #ddd";
  ingredientDiv.style.margin = "5px";
  ingredientDiv.style.borderRadius = "5px";
  burgerDiv.appendChild(ingredientDiv);

  // Adding ingredient to the ingredient list
  const ingredientList = document.getElementById("ingredient-list");
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  ingredientList.appendChild(listItem);
}

function clearBurger() {
  const burgerDiv = document.getElementById("burger");
  burgerDiv.innerHTML = ""; // Clears all ingredients from the burger display

  const ingredientList = document.getElementById("ingredient-list");
  ingredientList.innerHTML = ""; // Clears all ingredients from the ingredient list
}
