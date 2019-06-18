'use strict';

const BinarySearch = require('./bst');

const BST = new BinarySearch();

BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}


console.log(tree(BST));

function height(t, counter = 0) {
  if (!t) {
    return 0;
  }
  counter++;
  let left = counter;
  let right = counter;
  if (t.left) left = height(t.left, counter);

  if (t.right) right = height(t.right, counter);

  return left > right ? left : right;
}

function trubst(t) {
  if (!t) {
    return null;
  }
  //traverse tree left and right
  //if value is lower on left and on right is higher true, else false;
  let leftCondition;
  let rightCondition;
  if (t.left < t) {
    leftCondition = trubst(t.left);
  } else {
    return false;
  }

  if (t.right > t) {
    rightCondition = trubst(t.right);
  } else {
    return false;
  }
  return !leftCondition || !rightCondition ? false : true;
}
// console.log(height(BST));

function isValidBST(node, min = null, max = null) {
  //if there is not node, return true
  if (!node) return true;

  //if max not null and current node.data is greater than max
  if (max !== null && node.key >= max) {
    return false;
  }
  //if max not null and current node.data is less than min
  if (min !== null && node.key <= min) {
    return false;
  }

  //calling valid on left side and valid on right side.
  const leftSide = isValidBST(node.left, min, node.key);
  const rightSide = isValidBST(node.right, node.key, max);

  return leftSide && rightSide;
}

function thirdlargest(t, largest=[]) {
    if (!t) {
      return false;
    }

    largest.push(t.key)

    if (t.left) largest = thirdlargest(t.left, largest);
    if (t.right) largest = thirdlargest(t.right, largest);
    return largest;
  }

  let unsorted = thirdlargest(BST);
  unsorted.sort((a, b) => a < b);



