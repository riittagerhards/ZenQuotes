export async function fetchApi() {
  const response = await fetch(
    "https://cors.machens.koeln/https://zenquotes.io/api/quotes"
  );
  const quotes = await response.json();
  return quotes;
}
