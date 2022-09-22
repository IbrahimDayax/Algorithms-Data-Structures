//******************************************
//Author: Ibrahim Dayax    Date: 22/09/22  *
//Title: Symmetric Difference Algorithm    *
//Github: https://github.com/ibrahimdayax  *
//******************************************

function sym(...args){
  return [...args.reduce(reducer, new Set())]
}

const reducer = (result, arr) => {
  for(let val of new Set(arr))
    	result.has(val) ? result.delete(val) : result.add(val);
    	
  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
