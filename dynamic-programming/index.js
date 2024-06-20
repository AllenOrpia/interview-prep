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


    ! Time Com - O(n^m * m)
        Improve Time Com with memo - O(n * m *m) => O(n * m^2)
    ! Space Com - O(m)
        memoized space 0(m^2)
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


/*
    Write a function that takes in a target and an array of numbers as args

    The function should return an array containing the shortest combination of numbers that add up to exactly the target

    if there is any tie for the shortest combination, you may return any one of the shortest


    ! Time Complexity - O(m^2 * n)
    ! Space Complexity - O(m^2)

*/

const bestSum = (target, numbers) => {
    if (target === 0) return [];
    if (target < 0) return null;

    let min = null;

    for (let num of numbers) {
        const remainder = target - num;
        const res = bestSum(remainder, numbers, memo);

        if (res !== null) {
            const combination = [...res, num]

            if (min === null || combination.length < min.length) min = combination
        }
    }


    memo[target] = min;
    return min
}


/*
    Write a function that accepts a target string and an array of strings

    The function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array

    You may reuse elements of the wordBank as many times as needed

    ! To approach this problem, we only branch out if we do have a prefix

    ! Time Complexity - O(n^m * m)
        - Memoized Time Complexity - O(n * m^2)
    ! Space Complexity - O(m * m)
        - Memoized Space - O(m^2)

*/


const canConstruct = (wordBank, target, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '' ) return true;

    for (let word of wordBank) {
        // This indicates if the word starts at 0 of the target, in other words if it is a prefix
        if (target.indexOf(word) === 0) {
            // Obtain the string starting after the word
            const suffix = target.slice(word.length);
            if (canConstruct(wordBank, target, memo) === true) {
                memo[target] = true;
                return memo[target];
            }
        }
    }

    memo[target] = false;

    return memo[target];
}


/*

Write a function that accepts a target string and an array of strings

The function should return the number of ways that the target can be constructed by concatenating elements
of the wordBank arry

You may reuse elements of the wordbank as many times as needed

    ! Time Complexity 
        brute force -> O(n^m * m)
        memoized -> O(n * m^2)
    ! Space Complexity 
        brute force -> O(m^2)
        memoized -> O(m^2)

*/

const countConstruct = (wordBank, target, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '' ) return 1;
    let count = 0;

    for (let word of wordBank) {

        // Check if the word is a prefix
        if (target.indexOf(word) === 0) {
            // Obtain the suffix, the string without of the target minus the prefix
            // Slice means everything after the word/length
            const suffix = target.slice(word.length);

            count += countConstruct(wordBank, suffix, memo);
        }
    }

    memo[target] = count;
    return memo[target]
}



/*

Write a function that accepts a target string and an array of strings

The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array. Each element of the 2D array should represent one combination that constructs the target


You may reuse elements as many times as needed

    ! Time complexity
        brute force - O(n ^ m )
        memoized -  O(m)
    ! Space complexity
        brute force - O(n^m)
        memoized -  O(m)
*/      


const allConstruct = (wordBank, target, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const res = [];

    for (let word of wordBank) {

        // Check if the word is a prefix
        if (target.indexOf(word) === 0) {
            
            // Get the suffix, string of target without the prefix
            const suffix = target.slice(word.length);
            // Obtain all the possible ways of constructing the suffix
            const suffixWays = allConstruct(wordBank, suffix);

            // Obtain all the ways of obtaining the target and add the current word/edge to each possible combination
            const targetWays = suffixWays.map( (way) => [ word, ...way] )

            res.push(...targetWays);
            
        }
    }

    memo[target] = res;
    return res;
}
