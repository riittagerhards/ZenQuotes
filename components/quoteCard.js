import { createElement } from "../lib/elements";
import styles from "./quoteCard.module.css";

export default function createQuoteCard({ q, a }) {
  const quoteCard = createElement("article", { className: styles.card }, [
    createElement("p", { className: styles.quote, textContent: `"${q}"` }),
    createElement("h4", { className: styles.author, textContent: `- ${a}` }),
  ]);

  return quoteCard;
}
