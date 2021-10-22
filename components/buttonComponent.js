import { createElement } from "../lib/elements";

export function createButtonComponent(onClick) {
  const quoteButton = createElement("button", {
    type: "submit",
    textContent: "Press here for a random quote",
    onclick: function (event) {
      event.preventDefault();
      onClick();
    },
  });
  return quoteButton;
}
