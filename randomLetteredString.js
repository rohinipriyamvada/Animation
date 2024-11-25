const length = prompt("Enter length:");
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function generateRandomString(length) {
  if (length === 0) {
    return '';
  }

  let index = Math.round(Math.random() * 25);

  const char = alphabet[index];

  return char + generateRandomString(length - 1);
}

console.log(generateRandomString(length));
console.log();
console.log("😅Fun challenge: !!!Try pronouncing it!!!😅")
