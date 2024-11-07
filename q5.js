function filterPrimes(arr) {
  return arr.filter(isPrime);
}

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(filterPrimes(numbers)); // Output: [2, 3, 5, 7, 11]
