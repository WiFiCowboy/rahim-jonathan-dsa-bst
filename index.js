'use strict';

const BinarySearch = require('./bst');

const BST = new BinarySearch();
console.log(BST);
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);

console.log(BST);


function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

console.log(tree(BST))

function height(t, counter = 0){
    if(!t){
        return 0;
    }
    counter++;
    let left = counter;
    let right = counter;
    if (t.left)
        left = height(t.left, counter)

    if (t.right)
        right = height(t.right, counter)

    return left > right ? left: right;
}

console.log(height(BST))
