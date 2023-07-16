let counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
