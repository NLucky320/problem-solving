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
 */
function positiveSum(arr) {
  return arr.reduce(
    (accumulator, currentValue) =>
      currentValue > 0 ? accumulator + currentValue : accumulator,
    0
  );
}

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
  
      total += arr[i];
    }
  }
  return total; 
}
console.log(positiveSum([]));
