import { createElement } from "../lib/elements";
import styles from "./button.module.css";

export function createButtonComponent(onSubmit) {
  const quoteButton = createElement("button", {
    className: styles.button,
    type: "submit",
    textContent: "Click here for a random quote",
    onclick: function (event) {
      event.preventDefault();
      onSubmit();
    },
  });
  return quoteButton;
}
