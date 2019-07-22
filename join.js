// Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you will always get an array.

const words = ['hello', 'world', 'this', 'is', 'great'];

let smash = words.join(' '); 

// function smash(array) {
//   let sentence = array.join('')
// }

console.log(smash); // returns "hello world this is great