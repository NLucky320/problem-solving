/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
 */
function greetings(name) {
  return `Hello, ${name} how are you doing today?`;
}

let greet = greetings("lucky");
console.log(greet);

/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
//  */
// function positiveSum(arr) {
//   return arr.reduce(
//     (accumulator, currentValue) =>
//       currentValue > 0 ? accumulator + currentValue : accumulator,
//     0
//   );
// }

// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {

//     if (arr[i] > 0) {
  
//       total += arr[i];
//     }
//   }
//   return total; 
// }
// console.log(positiveSum([]));

/* Write a function that removes the spaces from the string, then return the resultant string. */
/* function noSpace(x) {
  const removeSpace = x.split(' ').join('')
  return removeSpace;
}
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
 */

/* 
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle. */


const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l == w) {
    return l * w;
  }
  else {
    return (2 * (l + w));
  }
};
console.log(areaOrPerimeter(6, 10));