

// ! Arrays and strings practice!

/*
    ? isUnique - Implement an algorithm to determine if a string has all unique characters. What if you cannot use addiontal data structures?

    * Brute force 
        - Iterate over the string and store the strings into hash
        - Keep a counter of the string or a boolean indicating it exists
        - If we run into the string again, then we ran into a duplicate we can return false early
        - Otherwise, we return true after iterating over the entire string
    
    * Worse Case, no additional data structures
        - We can convert the string into an array and sort it
        - We iterate over the array and compare the current element with the next element
        - If they are equal, we return an early false
        - Otherwise, we return true after iterating over the entire string
        ! Time complexity would be O(n log n + n)
*/

const isUnique = (str) => {
    const hash = {};

    for (s of str) {
        if (hash[s]) return false
        hash[s] = true;
    }

    return true;
}

const isUnique2 = (str) => {
    const arr = new Array(str.length + 1);
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    const newArr = arr.sort( (a,b) => a-b);

    for (let j = 0; j < newArr.length; j++) {
        if (j + 1 < newArr.length) {
            if (newArr[j] === newArr[j + 1]) return false;
        }
    }


    return true
}