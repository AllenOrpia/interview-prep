/* 
    ? Jump Game - You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

    ? Return true if you can reach the last index, or false otherwise


    * Brute force - i can use dp approach
    * I can start at the first position and branch out all the possible steps possible at that position
    * I can continue this until current position = target position
    

    * Greedy approach - I can start at the 2nd to last index
    * If i can get to the target at that current position, then I can adjust target to that current position
    * I keep doing this until target = the first index
    * If target  = first index then that means there was a possible route
*/


const canJump = (nums, currNum, memo = {}) => {
    if (currNum in memo) return memo[currNum];
    if (currNum === nums.length - 1) return true;
    if (currNum > nums.length - 1) return false;
    if (currNum < nums.length - 1 && nums[currNum] === 0) return false;

    for (let i = 1; i <= nums[currNum]; i++) {
        const newCurr = currNum + i;
        
        if (canJump(nums, newCurr, memo) === true) {
            memo[currNum] = true;
            return memo[currNum];
        }
    }

    memo[currNum] = false;
    return memo[currNum]
}

const canJumpGreedy = (nums) => {
    let target = nums.length - 1;

    for (let i = target - 1; i >= 0; i--) {
        if (i + nums[i] >= target) target = i;
    }

    return target === 0;
}