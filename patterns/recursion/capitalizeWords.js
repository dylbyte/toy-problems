/* 
  Write a function that accepts an array of words and returns a new array containing each word capitalized.
*/
function capitalizeWords(arr) {
  // do stuff
  let caps = [];
  function helper(words) {
    if (!words.length) return [];
    caps.push(words[0].toUpperCase());
    helper(words.slice(1));
  }
  helper(arr);
  return caps;
}

module.exports = capitalizeWords;
