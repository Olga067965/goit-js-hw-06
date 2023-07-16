const categoriesList = document.querySelector("#categories");
const items = categoriesList.children;

console.log("Number of categories:", items.length);

Array.from(items).forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryElements);
});
