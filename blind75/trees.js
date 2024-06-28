
// ? Maximum depth of Binary Tree - 

/*
    * Can use a classic dfs approach
    * Recurse through the left and right branches and return the longest

*/
const maxDepth = (root) => {
    // Base cases
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    

    // Recursive cases
    const left = maxDepth(root.left) + 1;
    const right = maxDepth(root.right) + 1;


    // After going down both branches of the current root, we return their largest number and bubble it up to the very top
    return Math.max(left, right);

}



// ? Same Tree - Given the roots of two binary trees p and q, write a function to check if they are the same or not

/*
    * Can use a classic dfs approach for both binary trees
    * As we traverse we check if both nodes are equal
    * If they are we continue
    * otherwise we return false


*/


const isSame = (p, q) => {
    // base cases
    if (!p && !q) return true;
    if (!p || !q || p !== q) return false
 
   

    // Recursive case
    const left = isSame(p.left, q.left);
    const right = isSame(p.right, q.right);

    // After traversing every node we return if its true that they are the same
    // If both branches are true then the trees are the same, if one returns false then they are not the same
    return left && right;

}


// ? Invert Binary Tree - Given the root of a binary tree, invert the tree and return its root

/*
    * Classic dfs approach
    * At every subroot I invert the values of the left and right branches

*/


const invertTree = (root) => {
    // Base cases
    if (!root) return null;

    // Recursive case
    // For every branch we change the values to the inverted branch
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)
    ]

    // Return the root
    return root
}


// ? Subtree of another tree - Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise

/*
    * classic dfs approach
    * traverse down the root tree and for every subroot compare and check if they are equal'
    * if they are we can do an early return true
    * We would need a second helper function that would check for comparisons

*/


const isSubtree = (root, subRoot) => {

    const isSame = (node1, node) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node || node1.val !== node2.val) return false;

        if (node1.val === node2.val) {
            return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
        }

        return false;
    }
    

    const dfs = (node) => {
        // Base case
      if (!node) return false;

        // Early return case, if we find one true we just return
      if (isSame(node, subRoot) === true) return true;

    //   recursive case
    return dfs(node.left, subRoot) || dfs(node.right, subRoot)

    }

   return  dfs(root)
}



// ? Binary Tree Level Order Traversal - Given the root of a binary tree, return the level order traversal of its node's values, (i.e from left to right, level by level)

const levelOrder = (root) => {
    const q = [ root ];
    const res = [];

    while ( q.length > 0) {
        const len = q.length;
        const level = [];

        for (let i = 0; i < len; i++) {
            const current = q.shift();
            level.push(current.val);

            if (current.left) q.push(current.left);
            if (current.right) q.push(current.right);

        }

        if (level.length > 0) res.push([...level]);
    }

    return res;
}


const isValidBST = (root) => {

    const dfs = (node, left, right) => {
        if (!root) return true;
        if ( (root.val < right && root.val > left) === false) return false;

        // Left range - -Infinity to root.val
        //  right range - root.val to Infinity
        const left = dfs(root.left, left, root.val);
        const right = dfs(root.right, root.val, right);

        return left && right;
    }

    return dfs(root, -Infinity, Infinity);
}


// ? Kth Smallest Element in a BST - Given the root of a BST, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree

/*
    ! BST's are organized in a way that the left most is the smallest and goes in ascending order from left - root - right

    * I can use an inOrder DFS approach and go to the very left branch then right
    * I keep a counter and once counter = k we return the current node value


*/

const kthSmallest = (root, k) => {
    // Since it is 1 indexed we start at 1
    let counter = 1;
    const result = null;

    const dfs = (node) => {
            // Base case if we hit a null node we are at the very bottom and we return
            if (!node) return null;

            // traverse to the very left
            dfs(node.left);
            if (counter === k) result = node.val;
            counter++
            
            // traverse to the very right
            dfs(node.right)

            return;
    }

    dfs(root);

    return result;

}