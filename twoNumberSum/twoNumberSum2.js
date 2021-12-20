const twoNumberSum2 = (array, targetSum) => {
	const hash = {};
	for (let i = 0; i < array.length; i++) { // O(n) TS
		let current = array[i];
		let key = targetSum - current;
		if (hash[key]) {
			return hash[key].concat(current);
		}
		hash[current] = [current];
	}
	return [];
}

module.exports = twoNumberSum2;