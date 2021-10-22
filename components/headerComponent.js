import { createElement } from "../lib/elements";

export function createHeaderElement() {
  const headerElement = createElement("header", {}, [
    createElement("img", {
      className: "titlePic",
      src: "https://freesvg.org/img/Prismatic-Lotus-Flower-12-No-Background.png",
      alt: "",
    }),

    createElement("h1", {
      className: "headerText",
      textContent: "Zen Quotes for Busy Coders",
    }),
  ]);

  return headerElement;
}

// https://pic.onlinewebfonts.com/svg/img_313925.png
