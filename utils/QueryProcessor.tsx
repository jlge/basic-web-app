export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "jk"
    );
  }

  return "";
}
