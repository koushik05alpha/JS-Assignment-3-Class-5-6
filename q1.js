

// function reverseWords(sentence) {
//   sentence.split();
// }

// console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"



// const sentence = "Hello world";




// function reverseWords(sentence) {
//   // Split the sentence into words
//   const words = sentence.split(" ");
//   // Reverse each word and join them back with spaces
//   const reversedSentence = words.map(word => word.split("").reverse().join("")).join(" ");
//   return reversedSentence;
// }


// console.log(reverseWords(sentence)); // Output: "olleH dlrow"


function reverseWords(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(' ');

  console.log(words)

  // Reverse each word in the array
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a sentence
  return reversedWords.join(' ');
}

// Example usage:
const sentence = "hello world how are you";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "olleh dlrow woh era uoy"


