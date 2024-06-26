
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