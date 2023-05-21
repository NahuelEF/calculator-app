const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".keys__number");
const operators = document.querySelectorAll(".keys__operator");
const decimal = document.querySelector(".keys__decimal");
const del = document.querySelector(".keys__delete");
const equal = document.querySelector(".keys__equal");

const handleClick = (item) => {
  item.addEventListener("click", () => {
    screen.value += item.textContent;
  });
};

numbers.forEach((number) => {
  handleClick(number);
});

operators.forEach((operator) => {
  handleClick(operator);
});

handleClick(decimal);

del.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
});

equal.addEventListener("click", () => {
  screen.value = eval(screen.value);
});
