'use strict';

const BinarySearch = require('./bst');

const BST = new BinarySearch();
console.log(BST);
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);

console.log(BST);
