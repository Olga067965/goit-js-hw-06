const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const listMarkup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

ingredientsList.innerHTML = listMarkup;
