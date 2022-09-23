//******************************************
//Author: Ibrahim Dayax    Date: 22/09/22  *
//Title: Symmetric Difference Algorithm    *
//Github: https://github.com/ibrahimdayax  *
//******************************************

function sym(...args){
  return [...args.reduce(reducer, new Set())]
}

const reducer = (result, arr) => {
  for(let element of new Set(arr))
    	result.has(element) ? result.delete(element) : result.add(element);
    	
  return result;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // Result should be [ 7, 4, 6, 2, 5, 9, 8, 1 ]


//Code Explanation: 
/*
I collected all the array arguments into a single array (args) using the rest operator then I used the array.reduce() method to iterate over the args array. I then set the initial value of the result parameter to a new empty Set().

Due to hashing, objects in Javascript don’t have to be looped through in order to retrieve a value. In ES6, the Set datastructure takes advantage of a similar strategy to be able to determine if an item is or isn’t included in it in O(1) (constant) time. in addition, we can both add and remove items from a set in O(1) time. That's why I used a Set.
 
I used the Set both to remove duplicates and to quickly do the equivalent of an includes check without having to iterate over everything. It computes in O(n) (linear) time. The difference here is that, rather than maintaining an Array of all the values that  
meet the criteria for symmetric difference, I did so with a Set, which I will later convert back to an Array.

I then used a for-of loop to iterate over every sub array in the args array and converted every sub array into a Set to remove duplicates to allow quicker acces to the elements of each array. I then used a single line ternary operator to determine whether to delete each array element from the result set or add it into the result set. If the result set already contains the same value as the current array element then delete that value of the result set if not then add that element to the set. Finally the result Set is returned as the final value of the reduce method which is in turn converted into an array using the spread operator and returned as the final value of the algorithms.

NOTE: I got the main idea of this algorithm from a freeCodeCamp article and simply improved it a bit by removing unncessary variables (to reduce memory usage) and using a ternary statement instead of an if-else to reduce the lines of code.
*/

