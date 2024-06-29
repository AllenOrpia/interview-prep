

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



/*
    ? Check Permutation - Given two strings, write a method to decide if one is a permutation of the other

    ! Basically look for an anagram of one string in the other string
        ! Hints of using a sliding window problem

    * Brute force 
        - I can use a hash to store the values of the first string and its counters
        - I can then iterate through the second string 
        - At every index I look at a window that is of the same length as the first string
        - For each window I create a temporary copy of the first strings hashmap counter
        - I iterate over that window and decrement the counters at the new hash
        - If the new counter reaches the end of the window without breaking then I found a matching string permutation

        - At the very end I return a false, 


    * 

    ! I can sort the 2 strings and iterate and compare both strings at that point


*/

const checkPermutation = (s1, s2) => {
    const hash = {};

    for (let c of s1) {
        if (hash[c]) hash[c]++
        else hash[c] = 1;
    }

    let m = s2.length; 
    let n = s1.length;

    for (let i = 0; i <= m - n; i ++) {
        let temp = { ...hash };
        let j = 0;

        // Iterate over the new window and decrement the counters
        for (j = i; j < i + n; j++) {
            let c = s2[j];
            if (temp[c] && temp[c] > 0) temp[c]--
            else break
         }

        //  If j === i + n, that means we were able to go through the whole window, that means there were matching character counts, we return an early true
        if (j === i + n) return true
    }

    return false;
}