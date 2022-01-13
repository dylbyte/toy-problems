function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
	
	while (currentNode.next) {
		let next = currentNode.next;
		
		if (next.value === currentNode.value) {
			// modify next pointer -> removes duplicate node
			currentNode.next = next.next;
		} else {
			currentNode = currentNode.next;
		}
	}
  return linkedList;

}

module.exports = removeDuplicatesFromLinkedList;