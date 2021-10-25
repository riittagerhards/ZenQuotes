import { createElement } from "../lib/elements";

export function createHeaderElement() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("img", {
      className: "titlePic",
      src: "https://freesvg.org/img/Emerald-Lotus-Flower-No-Background.png",
      alt: "",
    }),

    createElement("h1", {
      className: "headerText",
      textContent: "Zen Quotes for Busy Coders",
    }),
  ]);

  return headerElement;
}
