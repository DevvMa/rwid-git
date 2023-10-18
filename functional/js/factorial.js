/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialUsingLoop(n) {
  let factorial = 1;
  for (let i = n; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
}

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialUsingRecursive(n) {
  let factorial = n;

  if (n > 1) factorial *= countFactorialUsingRecursive(n - 1);

  return factorial;
}

/**
 * Count factorial number from the given "n" value.
 *
 * @param {number} n
 * @param {"loop" | "recursive"} method
 * @throws {Error}
 */
function countFactorial(n, method) {
  if (method == "loop") {
    return countFactorialUsingLoop(n);
  } else if (method == "recursive") {
    return countFactorialUsingRecursive(n);
  } else {
    throw new Error("Method must be loop or recursive.");
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = countFactorial(n, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
