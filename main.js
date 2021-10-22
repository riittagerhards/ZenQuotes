import "./style.css";
import { createElement } from "./lib/elements";
import { createHeaderElement } from "./components/headerComponent.js";
import createQuoteCard from "./components/quoteCard.js";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    [createQuoteCard()]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
