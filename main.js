import "./style.css";
import { createElement } from "./lib/elements";
import { createHeaderElement } from "./components/headerComponent.js";
import createQuoteCard from "./components/quoteCard.js";
import { createButtonComponent } from "./components/buttonComponent";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();

  const response = await fetch(
    "https://cors.machens.koeln/https://zenquotes.io/api/quotes"
  );
  const quotes = await response.json();
  const quoteCards = quotes.map((quote) => createQuoteCard(quote));

  async function handleOnClick() {
    const response = await fetch(
      "https://cors.machens.koeln/https://zenquotes.io/api/random/"
    );
    const random = await response.json();
    createQuoteCard(random);
    mainElement.innerHTML = "";
    mainElement.append(random);
  }

  const randomQuote = createButtonComponent(handleOnClick);

  const mainElement = createElement(
    "main",
    {
      className: "main",
    },
    quoteCards
  );

  appElement.append(headerElement, randomQuote, mainElement);
}

renderApp();
