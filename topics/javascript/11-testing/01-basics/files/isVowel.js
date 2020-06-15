// Archivo `isVowel.js`:

// const isVowel = char => ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
const isVowel = char => 'aeiou'.includes(char);

module.exports = isVowel;
