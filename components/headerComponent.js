import { createElement } from "../lib/elements";

export function createHeaderElement() {
  const headerElement = createElement("header", {}, [
    createElement("img", {
      className: "titlePic",
      src: "https://pic.onlinewebfonts.com/svg/img_313925.png",
      alt: "",
    }),

    createElement("h1", {
      className: "headerText",
      textContent: "Zen Quotes for Busy Coders",
    }),
  ]);

  return headerElement;
}
