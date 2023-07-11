const counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue + 1;
});

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue - 1;
});
