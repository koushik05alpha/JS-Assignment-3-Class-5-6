function sumArray(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
