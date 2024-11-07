function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);
}

// Example usage:
const sentence = "Hello, how are you?";
console.log(countVowels(sentence)); // Output: 7
