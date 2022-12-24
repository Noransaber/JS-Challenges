function convert(nums) {
  // convert the nums to string then arr
  let newArr = Array.from(String(nums));
  // console.log(newArr);
  // reverse it
  let reversearry = newArr.reverse();
  // console.log(reversearry);
  // empty arry
  let finalArr = [];
  // for loop to loop on the arrat and return arry of nums not string
  for (let i = 0; i < reversearry.length; i++) {
    finalArr.push(parseInt(reversearry[i]));
    //   console.log(finalArr);
  }
  return finalArr;
}

console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]

/**
 * make the function
 *make sure that the function take the parameter 
 convert the nums to array
 reverse
 return the array 
 */
