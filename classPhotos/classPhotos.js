// O(nlogn) time | O(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b) => b - a);
	blueShirtHeights.sort((a,b) => b - a);

	let backRowShirtColor;
	for (let i = 0; i < redShirtHeights.length; i++) { // O(n) worst case...
		const redHeight = redShirtHeights[ i];
		const blueHeight = blueShirtHeights[i];
		let taller;

		if (redHeight > blueHeight) taller = "red";
		else if (blueHeight > redHeight) taller = "blue";
		else return false; // heights cannot be the same

		// not on the first comparison
		if (backRowShirtColor && taller !== backRowShirtColor) {
			return false;
		}

		// first comparison
		if (!backRowShirtColor ) backRowShirtColor = taller;
	}
  return true;
}

module.exports = classPhotos;
