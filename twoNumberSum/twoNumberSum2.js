const twoNumberSum2 = (array, targetSum) => {
	const nums = {};
	for (const num of array) { // O(n) TS
		const potentialMatch = targetSum - num;
		if (potentialMatch in nums) {
			return [potentialMatch, num];
		}
		nums[num] = true;
	}
	return [];
}

module.exports = twoNumberSum2;