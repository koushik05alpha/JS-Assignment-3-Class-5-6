function sumMixedArray(arr) {
  return arr
    .filter(item => typeof item === 'number' || !isNaN(parseFloat(item)))
    .reduce((sum, num) => sum + Number(num), 0);
}

// Example usage:
const mixedArray = [1, '2', true, '3.5', false, 'hello', 4, null, undefined];
console.log(sumMixedArray(mixedArray)); // Output: 10.5
