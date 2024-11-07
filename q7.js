function findMax(arr) {
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 10, 1];
console.log(findMax(numbers)); // Output: 10
