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


/* const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l == w) {
    return l * w;
  }
  else {
    return (2 * (l + w));
  }
};
console.log(areaOrPerimeter(6, 10)); */
/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

/* function makeNegative(num) {
  // Code?
  if (num == 0) {
    return num;
  }
  else if (num > 0) {
    return -num;
  }
  else {
    return num;
  }
} */

/* function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
 */
/* function makeNegative(num) {
  return num > 0 ? -num : num;
} */
/* function makeNegative(num) {
  return -Math.abs(num);
} */
/* console.log(makeNegative(0))
console.log(makeNegative(-5));
console.log(makeNegative(1));
console.log(makeNegative(0.12)); */

/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great' */

/* function smash (words) {
  return words.join(' ');
}; */
// console.log(smash(["hello", "world", "this", "is", "great"]));

/* We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100" */

/* function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}
console.log(numberToString(-100));
console.log(5) */

/* We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */

/* const stringToNumber = function (str) {
  // put your code here
  return Number(str);
};
console.log(stringToNumber("-7"));
 */
/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

/* function findSmallestInt(arr) {
  //your code here
return arr.reduce(
    (smallestValue, currentValue) =>
      currentValue < smallestValue ? currentValue : smallestValue
  );
} */

/* class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
} */

// console.log(findSmallestInt([34, -345, -1, 100]));
/*   Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
 */

// function past(h, m, s) {
//   //#Happy Coding! ^_^


// }

// Write a function which converts the input string to uppercase.
/* function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}
console.log(makeUpperCase('lucky')) */

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }
  else {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
  }
}
console.log(findAverage([])) */

/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

/* function removeExclamationMarks(s) {
  // return s.replace("!","");
  //  return s.replace(/!/g, "");
  return s.replaceAll("!", "");
}
console.log(removeExclamationMarks("Hello World!")) */

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

/* function check(a, x) {
  // your code here
  for (let i = 0; i < a.length; i++){
    if (a[i]===x) {
      return true;
    }   
  }
      return false; 
} */

/* function check(a,x){
  return a.includes(x);
};
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))
console.log(check(["t", "e", "s", "t"], "e")); */