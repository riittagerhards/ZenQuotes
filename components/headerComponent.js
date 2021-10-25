import { createElement } from "../lib/elements";
import styles from "./header.module.css";

export function createHeaderElement() {
  const headerElement = createElement("header", { className: styles.header }, [
    createElement("img", {
      className: styles.titlePic,
      src: "https://freesvg.org/img/Emerald-Lotus-Flower-No-Background.png",
      alt: "",
    }),

    createElement("h1", {
      className: styles.headerText,
      textContent: "Zen Quotes for Busy Coders",
    }),
  ]);

  return headerElement;
}
