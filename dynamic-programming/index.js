/*

    * Dynamic Programming Table
        ? Memoization
            keys will be arguments to function, value will be the return value


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
}