import "./style.css";
import { createElement } from "./lib/elements";
import { createHeaderElement } from "./components/headerComponent.js";
import createQuoteCard from "./components/quoteCard.js";
import { createButtonComponent } from "./components/buttonRandomComponent.js";
import { createScrollComponent } from "./components/buttonScrollComponent.js";

async function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();

  const response = await fetch(
    "https://cors.machens.koeln/https://zenquotes.io/api/quotes"
  );
  const quotes = await response.json();
  const quoteCards = quotes.map((quote) => createQuoteCard(quote));

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

  const mainElement = createElement("main", { className: "main" }, quoteCards);

  function handleOnClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  const scrollButton = createScrollComponent(handleOnClick);

  appElement.append(headerElement, randomQuote, mainElement, scrollButton);
}

renderApp();
