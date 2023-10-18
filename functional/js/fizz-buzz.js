/**
 * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
 * this requirement below (highest priority from above).
 *
 * Muliples of 4 or 7: "fizz buzz"
 * Odd sequence: "fizz"
 * Even sequence: "buzz"
 *
 * @param {number} sequence
 * @returns {("fizz buzz" | "fizz" | "buzz")[]}
 */
function generateFizzBuzz(sequence) {
  let fizzBuzzSeries = [];
  let fizzBuzz;
  for (let i = 1; i < sequence; i++) {
    fizzBuzz =
      i % 4 == 0 || i % 7 == 0 ? "fizz buzz" : i % 2 == 0 ? "buzz" : "fizz";
    fizzBuzzSeries.push(fizzBuzz);
  }
  return fizzBuzzSeries;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const fizzBuzzs = generateFizzBuzz(sequence);

    document.getElementById("result").innerHTML = fizzBuzzs
      .map(
        (fizzBuzz, index) =>
          `<div class="result-item-fizzbuzz bg-${
            {
              "fizz buzz": "red",
              fizz: "blue",
              buzz: "green",
            }[fizzBuzz]
          }">${index + 1} ${fizzBuzz}</div>`,
      )
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
