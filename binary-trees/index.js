
/*
    ? Tree - Trees contain many nodes that point to other nodes
        - Nodes can store values
        ? Root - Will be a node with no parents
            - Binary trees will typically have 1 root node
        ? Leafs - Nodes with 0 children


    ? Binary Tree 
        * At most 2 children
        * Exactly 1 root
        * Exactly 1 path b/w root and any node 
        ! Empty trees are considered binary trees



        




*/


class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    };



};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
                 a
               /  \
              b    c 
            /  \    \
           d    e    f
*/


const depthFirstValues = (root) => {
    if (!root) return [];
    const stack =  [root];
    const valuesArray = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        valuesArray.push(currentNode.value)
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);

    };

    return valuesArray;

};

const depthFirstValuesRecursive = (root) => {
    if (!root) return [];
    const left = depthFirstValuesRecursive(root.left);
    const right = depthFirstValuesRecursive(root.right);
    return [ root.val, ...left, ...right];

};


const BFSValues = (root) => {
    if (!root) return [];
    const queue = [ root ];
    const result = [];

    while(queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    };

    return result;
};


// ! We use a bfs so that we can check from left to right
// If we have a target that is on the right side and we use a dfs, it could potentially take too long which is why a bfs is a good approach

const treeIncludesBFS = (root, target) => {
    if (!root) return false;
    if (root === target) return true;

    const queue = [ root ];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode.value === target) return true;
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    };
    

    return false;


};

const treeIncludesDFS = (root, target) => {
    if (!root) return false;
    if (root == target) return true;


    return treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target);
};


const treeSum = (root, sum = 0) => {
    if (!root) return 0;

    sum += treeSum(root.left, sum);
    sum += treeSum(root.right, sum);

    return root.val + sum;
};

const treeSum2 = (root) => {
    if (!root) return 0;

    let left = treeSum(root.left);
    let right = treeSum(root.right);

    return root.val + left + right;
};

const treeSum3 = (root,target) => {
    if (!root) return 0;

    return root.value + treeSum3(root.left) + treeSum3(root.right)
};


const treeMinValue = (root) => {
    if (!root) return Infinity;

    let left = treeMinValue(root.left);
    let right = treeMinValue(root.right);

    return Math.min(root.value, left, right)

};


const treeMinValue2 = (root) => {
    const stack = [ root ];
    let min = Infinity;

    while (stack.lenght > 0) {
        const currentNode = stack.pop();
        min = Math.min(min, currentNode.value);
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
    };

    return min;
};


const maxRootToLeafPathSum = (root) => {
    if (!root) return -Infinity
    if (!root.left && !root.right) return root.val;
    const left = maxRootToLeafPathSum(root.left);
    const right = maxRootToLeafPathSum(root.right);

    return Math.max(left, right) + root.val;
}