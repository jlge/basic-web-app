function isPrime (num: number) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
export default function QueryProcessor(query: string): string {
  if (query.includes("Which of the following numbers is the largest:")) {
    let splitted = query.substring(47).split(", ");
    let max = -1;
    for (let i = 0; i < 3; i++) {
      if (parseInt(splitted[i]) > max) {
        max = parseInt(splitted[i])
      }
    }
    return max.toString();    
  } else if (query.includes("plus")) {
    let s = query.substring(8);
    s = query.split(" ");
    let num1 = parseInt(s[s.length - 3]);
    let num2 = parseInt(s[s.length - 1].substring(0, (s[s.length - 1]).length));
    return (num1 + num2).toString();
  } else if (query.includes("multiplied")) {
    let s = query.split(" ");
    let num1 = parseInt(s[s.length - 4]);
    let num2 = parseInt(s[s.length - 1].substring(0, (s[s.length - 1]).length));
    return (num1 * num2).toString();
  } else if (query.includes("divided")) {
    let s = query.split(" ");
    let num1 = parseInt(s[s.length - 4]);
    let num2 = parseInt(s[s.length - 1].substring(0, (s[s.length - 1]).length));
    return (num1 / num2).toString();
  } else if (query.includes("What is your name?")) {
    return (
      "jk"
    );
  } else if (query.includes("Which of the following numbers is both a square and a cube: ")) {
    let splitted = query.substring(60).split(", ");
    for (let i = 0; i < splitted.length; i++) {
      let num = parseInt(splitted[i]);
      if ((Math.sqrt(num) % 1 === 0) && (Math.cbrt(num) % 1 === 0)) {
        return num.toString();
      }
    }
    return ("");
  } else if (query.includes("minus")) {
    let s = query.split(" ");
    let num1 = parseInt(s[s.length - 3]);
    let num2 = parseInt(s[s.length - 1].substring(0, (s[s.length - 1]).length));
    return (num1 - num2).toString();
  } else if (query.includes("Which of the following numbers are primes:")) {
    let splitted = query.substring(42).split(", ");
    for (let i = 0; i < splitted.length; i++) {
      let num = parseInt(splitted[i]);
      if (isPrime(num)) {
        return num.toString();
      }
    }
  } else if (query.includes("")) {
    return ("");
  } else if (query.includes("")) {
    return ("");
  } else if (query.includes("")) {
    return ("");
  }

  return "";
}
