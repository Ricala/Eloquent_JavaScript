// Returns minimum number
function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// Checks if number is even or odd
function evenOrOdd(num) {
  if (num % 2 == 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

// Counts how many letter B's are in a string
function countBs(str) {
  let bCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      bCount += 1;
    }
  }
  return bCount;
}

// Counts how many specific chars are in a string
function countChar(str, char) {
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      charCount += 1;
    }
  }
  return charCount;
}
