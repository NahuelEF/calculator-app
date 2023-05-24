const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
const themes = document.querySelectorAll("input[name='theme']");
const body = document.querySelector("body");

buttons.forEach((key) => {
  key.addEventListener("click", () => {
    screen.value === "Error" || screen.value === "undefined"
      ? (screen.value = "")
      : "";
    const keyValue = key.textContent;
    switch (keyValue) {
      case "x":
        screen.value += "*";
        break;

      case "del":
        screen.value = screen.value.slice(0, -1);
        break;

      case "=":
        try {
          screen.value = eval(screen.value);
        } catch {
          screen.value = "Error";
        }
        break;

      default:
        screen.value += keyValue;
        break;
    }
  });
});

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    body.classList.replace(`${body.className}`, `${theme.id}`);
  });
});
