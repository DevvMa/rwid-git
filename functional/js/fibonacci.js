/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 * @returns {number[]}
 */
function generateFibonacciUsingLoop(sequence) {
  let fibonacciSeries = [0, 1];

  for (let i = 1; i < sequence; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i]);
  }
  return fibonacciSeries;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 * @returns {number[]}
 */
function generateFibonacciUsingRecursive(sequence) {
  let fibonacciSeries = [0, 1];

  if (sequence > 1) {
    fibonacciSeries = generateFibonacciUsingRecursive(sequence - 1);
    fibonacciSeries.push(
      fibonacciSeries[sequence - 2] + fibonacciSeries[sequence - 1],
    );
  }

  return fibonacciSeries;
}

/**
 * Create an array filled by fibonacci sequence.
 *
 * @param {number} sequence
 * @param {"loop"| "recursive"} method
 * @throws {Error}
 */
function generateFibonacci(sequence, method) {
  if (method === "loop") {
    return generateFibonacciUsingLoop(sequence);
  } else if (method === "recursive") {
    return generateFibonacciUsingRecursive(sequence);
  } else {
    throw new Error("Method must be loop or recursive.");
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const numbers = generateFibonacci(sequence, method);

    document.getElementById("result").innerHTML = numbers
      .map(number => `<div class="result-item-fibonacci">${number}</div>`)
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
