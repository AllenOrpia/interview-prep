
// ? Maximum depth of Binary Tree

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