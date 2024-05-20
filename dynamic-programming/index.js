/*

    * Dynamic Programming Table
        ? Memoization
            keys will be arguments to function, value will be the return value

            ! Memoization Recipe
                1. Make it work.
                    - Visualize the problem as a tree
                    - Implement the tree using recursion
                    - Test it


                2. Make it efficient.
                    - add a memo object
                    - add a base case to return memo values
                    - store return values into the memo



        ? Tabulation

    
    




*/


const fib = (n, memo = {}) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    
    return memo[n];
};

const res = fib(50);
console.log(res);


const gridTraveler = (m , n, memo = {}) => {
    const pos1 = m + ',' + n;
    const pos2 = n + ',' + m;
    if (pos1 in memo || pos2 in memo) return memo[pos1] || memo[pos2];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[pos1] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    memo[pos2] = memo[pos1];

    return memo[pos1];
};


const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;


    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        };
    }

    return false;
};


const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const res = howSum(remainder, numbers, memo)
        if (!res) {
            memo[targetSum] = [...res, num]
            return [...res, num]
        }
    }

    memo[targetSum] = null;
    return null;
}