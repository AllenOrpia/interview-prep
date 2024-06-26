
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