function capitalizeWords(sentence) {
  return sentence
    .split(' ') // Split the sentence into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a single string
}

// Example usage:
const sentence = "hello world, how are you?";
console.log(capitalizeWords(sentence)); // Output: "Hello World, How Are You?"
