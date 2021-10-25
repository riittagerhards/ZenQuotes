import { createElement } from "../lib/elements";
import styles from "./button.module.css";

export default function createScrollComponent() {
  const scrollButton = createElement("button", {
    className: styles.button,
    textContent: "Back to top ↑",
    onclick: function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  });

  return createElement("div", {}, [scrollButton]);
}
