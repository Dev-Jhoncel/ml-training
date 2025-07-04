/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

const mergeArrays = (arr1,arr2) => {
    let merge_arrays = [...arr1,...arr2]
    let removeDuplicate = [];
    for(let num of merge_arrays)
    {
      if(!(removeDuplicate.includes(num)))
      {
        removeDuplicate.push(num)
      }
    }
return removeDuplicate;
} 
console.log(mergeArrays([1, 2, 3],[2, 3, 4]));