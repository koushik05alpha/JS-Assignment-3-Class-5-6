function squareAndSum(arr) {
  return arr.map(num => num ** 2).reduce((sum, square) => sum + square, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(squareAndSum(numbers)); // Output: 30
