/**
 * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
 * this requirement below (highest priority from above).
 *
 * Muliples of 4 or 7: "fizz buzz"
 * Odd sequence: "fizz"
 * Even sequence: "buzz"
 *
 * @param {number} sequence
 */
function generateFizzBuzz(sequence) {
  // write your code here
  return [];
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  const sequence = event.target["sequence"].value;
  const result = generateFizzBuzz(sequence);

  document.getElementById("result").textContent = JSON.stringify(result);
}
