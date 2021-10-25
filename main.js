import "./style.css";
import { createElement } from "./lib/elements";
import { createHeaderElement } from "./components/headerComponent.js";
import createQuoteCard from "./components/quoteCard.js";
import { createButtonComponent } from "./components/buttonRandomComponent.js";
import createScrollComponent from "./components/buttonScrollComponent.js";
import { fetchApi } from "./lib/api.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();

  async function handleOnSubmit() {
    const response = await fetch(
      "https://cors.machens.koeln/https://zenquotes.io/api/random/"
    );
    const randomQuotes = await response.json();
    const randomCard = randomQuotes.map((random) => createQuoteCard(random));

    mainElement.innerHTML = "";
    mainElement.append(...randomCard);
  }
  const randomQuote = createButtonComponent(handleOnSubmit);

  const quotes = await fetchApi();
  const quoteCards = quotes.map((quote) => createQuoteCard(quote));

  const mainElement = createElement("main", { className: "main" }, quoteCards);

  const scrollButton = createScrollComponent();

  appElement.append(headerElement, randomQuote, mainElement, scrollButton);
}

renderApp();
