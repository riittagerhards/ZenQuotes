import "./style.css";
import { createElement } from "./lib/elements";
import { createHeaderElement } from "./components/headerComponent.js";
import createQuoteCard from "./components/quoteCard.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();

  const response = await fetch(
    "https://cors.machens.koeln/https://zenquotes.io/api/quotes"
  );

  const quotes = await response.json();

  const quoteCards = quotes.map((quote) => createQuoteCard(quote));

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    quoteCards
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
