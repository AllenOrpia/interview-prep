// ? Merge Sorted Arrays - You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively

/*
    ? Merge nums1 and nums2 into a single array sorted in non-decreasing order
    ? The final sorted array should not be return by the function , but instead be stored inside the array nums1. To accomodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last elements n elements are set to 0 and should be ignored. Nums2 has a length of n

*/




/* 
    ? Container with most water - You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    ? Find two lines that together with the x-axis form a container, such that the container contains the most water.

    ? Return the maximum amount of water a container can store.

    * Brute force
        * I can use a double for loop with the second loop 1 index ahead
        * For each combination I can compute the current max and update the resulting max as I iterate

    * Better approach would be to use a double pointer
        * 1 left pointer at start and 1 right pointer at last index
        * I keep the pointer with the higher height, while i increment or decrement the other pointer
        * As long or while they left is less than right I keep iterating and updating the max
*/

const maxArea = (height) => {

    let max = 0;
    let left = 0;
    let right = 0;

    while (left < right) {
        if (height[left] > height[right]) {
            max = Math.max(max, height[right] * (right - left));
            right--;
        } else {
            max = Math.max(max, height[left] * (right - left));
            left++
        }
    }

    return max;
}