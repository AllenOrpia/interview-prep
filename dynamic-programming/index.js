/*

    * Dynamic Programming Table
        ? Memoization
            keys will be arguments to function, value will be the return value


        ? Tabulation

    

    * Memoization Recipe
        1. Make it work
            - Visualize the problem as a tree
            - Implement the tree using recursion
            - Test it

        2. Make it efficient.
            - Add a memo object
            - Add a base case to return memo values
            - Store return values into the memo




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


/*

    Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as 
    arguments

    The function should return a boolean indicationg whether or not it is possible to generate the 
    targetSum using numbers from the array


    ! Time Complexity - O(n ^ m )
        Improved time Complexity with memo
            O (m * n)
    ! Space Complexity - O(m)

*/


const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target < 0 ) return false;
    if (target === 0 ) return true;
    

    // Iterate over the numbers array and check whether the target is attainable
    for (let num of numbers) {
        const remainder = target - num;
        if ( canSum(remainder, numbers) === true)  {
            memo[target] = true;
            return memo[target];
        }
    };

    memo[target] = false;
    return memo[target];
}


/*
    Write a function howSum that takes in a targetSum and an array of numbers as args

    The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

    You may return any single combination

*/



const howSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target < 0 ) return null;
    if (target  === 0) return [];

    for (let num of numbers) {
        const remainder = target - num;
        const res = howSum(remainder, numbers);

        if (res !== null) {
            const combination = [...res, num];
            memo[target] = combination;
            return memo[target];
        }
    }

    memo[target] = null;
    return memo[target];
}

