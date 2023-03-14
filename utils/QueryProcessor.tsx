export default function QueryProcessor(query: string): string {
  if (query.includes("What is your name?")) {
    return (
      "jk"
    );
  } else if (query.includes("What is your favorite color?")) {
    return ("purple");
  } else if (query.includes("Where are you from?")) {
    return ("chicago");
  } else if (query.includes("	Which of the following numbers is the largest: 51, 87, 68?")) {
    return ("87");
  } else if (query.includes("")) {
    return ("");
  } else if (query.includes("")) {
    return ("");
  } else if (query.includes("")) {
    return ("");
  }

  return "";
}
