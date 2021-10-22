import "./style.css";
import { createHeaderElement } from "./components/headerComponent.js";

function renderApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderElement();
  appElement.append(headerElement);
}

renderApp();
