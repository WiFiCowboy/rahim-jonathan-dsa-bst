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

function largestA(t, largest = []) {
  if (!t) {
    return false;
  }
  largest.push(t.key);
  if (t.left) largest = largestA(t.left, largest);
  if (t.right) largest = largestA(t.right, largest);
  return largest;
}

function returnthird(t) {
  let unsorted = largestA(t);
  unsorted.sort((a, b) => a < b);
  return unsorted[2];
}

function balanced(t, count = 0) {
  if (!t) {
    return count;
  }

  if (t !== null) {
    count++;
    let left = 0;
    let right = 0;
    //traverse right count nodes until null.  return bounce
    right = balanced(t.right, count);
    if (right === false) {
      return false;
    }
    //traverse left counting nodes
    left = balanced(t.left, count);
    if (left === false) {
      return false;
    }
    //if left or right is greater by more than 1, true, else false
    return Math.abs(left - right) > 1 ? false : right + left;
  }

  //if the differnce between right and left is not greater than 1, return count.
}

// console.log(returnthird(BST));
//console.log(balanced(BST));

let arr1 =[3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];



function findhighest(arr1, value)
{
    if (!arr1)
      return;
    if (arr1[0]>value)
      return arr1[0];
  
    if (arr1[1])
      return findhighest(arr1.slice(1), value);
    return;
}


function comparetwoBST(arr1, arr2)
{
  // compare starting nodes
  for (let i=0; i++; i<arr1.length)
  {
    let highest = findhighest(arr1, arr1[i]);
    if ( highest !== findhighest(arr2.slice((arr2.indexOf(highest))), arr1[i]))
    {
      return false;
    }
  }
  return true;
}

 console.log(comparetwoBST(arr1, arr2));



function BSTIdentical(arr1, arr2) {


  if (arr1[0]!==arr2[0])
    return false;

  arr1.sort();
  arr2.sort();
  if(arr1.length !== arr2.length)
      return false;
  for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
          return false;
  }
 
  

}
