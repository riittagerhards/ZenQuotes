import { createElement } from "../lib/elements";

export function createScrollComponent(onClick) {
  const scrollButton = createElement("button", {
    type: "submit",
    textContent: "Back to top ↑",
    onclick: function (event) {
      event.preventDefault();
      onClick();
    },
  });
  return scrollButton;
}
