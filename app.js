const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

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
