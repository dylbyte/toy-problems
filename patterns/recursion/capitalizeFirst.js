/* 
  Given an array of strings, capitalize the first letter of each string in the array.
*/
function capitalizeFirst(arr) {
  let cap = [];
  function capitalize(arr) {
    if (!arr.length) return;
    const s = arr[0];
    cap = cap.concat(s[0].toUpperCase() + s.substring(1));
    capitalize(arr.slice(1));
  }
  capitalize(arr);
  return cap;
}

module.exports = capitalizeFirst;
