const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const listIngredients = ingredients.map((ingredient) => {
  const listIngredient = document.createElement("li");
  listIngredient.classList.add("item");
  listIngredient.textContent = ingredient;
  return listIngredient;
});

const ulIngredients = document.querySelector("ul");

ulIngredients.append(...listIngredients);
