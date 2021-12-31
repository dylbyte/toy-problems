function preorderTraversal(node, array = []) {
  if (!node) return array;
  array.push(node.value);
  array = preorderTraversal(node.left, array);
  array = preorderTraversal(node.right, array);
  return array;
}

function inorderTraversal(node, array = []) {
  if (!node) return array;
  array = inorderTraversal(node.left, array);
  array.push(node.value);
  array = inorderTraversal(node.right, array);
  return array;
}

function postorderTraversal(node, array = []) {
  if (!node) return array;
  array = postorderTraversal(node.left, array);
  array = postorderTraversal(node.right, array);
  array.push(node.value);
  return array;
}

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
}

const preorder = preorderTraversal(tree, []);
console.log("Preorder traversal result: ", preorder);

const inorder = inorderTraversal(tree, []);
console.log("Inorder traversal result: ", inorder);

const postorder = postorderTraversal(tree, []);
console.log("Postorder traversal result: ", postorder);
