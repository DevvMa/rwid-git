/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 * @param {boolean}
 */
function isPalindromeUsingReverse(value) {
  let word = Array();

  for (let character of value) word.unshift(character);

  word = word.join("");

  return value === word ? true : false;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindromeUsingLoop(value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[value.length - 1 - i]) continue;
    else return false;
  }
  return true;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 * @returns {boolean}
 */
function isPalindromeUsingRecursive(value, index = 0) {
  if (index == value.length) return true;

  if (value[index] === value[value.length - 1 - index])
    return isPalindromeUsingRecursive(value, (index += 1));
  else return false;
}

/**
 * Return palindrome human-readable description.
 *
 * @param {string} word
 * @param {"reverse" | "loop" | "recursive"} method
 * @throws {Error}
 */
function generatePalindromeStatus(word, method) {
  let isPalindrome;

  if (method === "reverse") {
    isPalindrome = isPalindromeUsingReverse(word);
  } else if (method === "loop") {
    isPalindrome = isPalindromeUsingLoop(word);
  } else if (method === "recursive") {
    isPalindrome = isPalindromeUsingRecursive(word);
  } else {
    throw new Error("Method must be reverse, loop, or recursive.");
  }

  return isPalindrome
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = generatePalindromeStatus(word, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
