function anyNegative(arr) {
  return arr.some(num => num < 0);
}

// Example usage:
const numbers = [3, 5, -7, 2, 8, 10, 1];
console.log(anyNegative(numbers)); // Output: true

const allPositive = [3, 5, 7, 2, 8, 10, 1];
console.log(anyNegative(allPositive)); // Output: false
