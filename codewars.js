/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
 */
/* function greetings(name) {
  return `Hello, ${name} how are you doing today?`;
}

let greet = greetings("lucky");
console.log(greet); */

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

/* Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1. */


/* function oddOne(arr) {
  // Code here
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0) {
      return i;
    } 
  }
      return -1;
    
}
function oddOne(arr) {
  return arr.findIndex((x) => x % 2 != 0);
}
console.log(oddOne([2, 4, 6, 7, 10]));
console.log(oddOne([2, 16, 98, 10, 13, 78]));
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]));
console.log(oddOne([2, 4, 6, 8]));
 */


/* Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given. */

/* function booleanToString(b) {
  //your code here
 return b.toString();
}
console.log(booleanToString(true)) */

/* Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
 */

/* function twoDecimalPlaces(n) {
  // Your code here/* 
  // return n.toFixed(2); 
  // return Number(n.toFixed(2));
  return Math.round(n * 100) / 100;
}
console.log(twoDecimalPlaces(4.659725356));
console.log(twoDecimalPlaces(-3.3424)); */

/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow. */

/* function updateLight(current) {
  //your code here!
  if (current == 'green') {
    return 'yellow'
  }
  else if (current == 'yellow') {
    return 'red'
  }
  else if (current == 'red') {
    return 'green'
  }
  else {
    return ''
  }
} */
/* 
function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}
 */

// console.log(updateLight('green'))
// console.log(updateLight('yellow'));
// console.log(updateLight('red'))

/* Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */


/* 
function countPositivesSumNegatives(input) {
  // your code here
  if (!input || input.length === 0) {
    return [];
  }
  let countPositives = 0;
  let sumNegatives = 0;
  for (let i = 0; i < input.length; i++){
 
    if (input[i] > 0) {

      countPositives++;
    }
    else if(input[i]<0) {
    sumNegatives+=input[i]
    }
  }
  return [countPositives,sumNegatives];

} */

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );


/* Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5 */

/* var min = function (list) {
  let minValue = list[0]; 
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i]; 
    }
  }
  return minValue;
};

var max = function (list) {
  let maxValue = list[0]; 
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i]; 
    }
  }
  return maxValue;
};
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110])); */

/* 
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

/* 
function otherAngle(a, b) {

  return (180 - (a + b));
  
}
console.log(otherAngle(10,20)) */


/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

/* function cockroachSpeed(s) {
  //Good Luck!
  return Math.trunc(s * 100000 / 3600);
}
  const cockroachSpeed = (s) => Math.floor(s / 0.036);

console.log(cockroachSpeed(1.08))
console.log(cockroachSpeed(1.09))
console.log(cockroachSpeed(0))
 */


/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

/* var number = function (array) {
  //your awesome code here
    return array.map((item, index) => {
      return `${index + 1}: ${item}`;
    });
};

console.log(number(["a", "b", "c"])) */

/* This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */

/* function simpleMultiplication(number) {
  // your code........
  if (number % 2 == 0) {
    return number * 8;
}
  else {
    return number * 9;
}
}
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1)) */

/* 
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

/* var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  let sqrt = Math.sqrt(n);
  return sqrt===Math.floor(sqrt)
};

function isSquare(n) {
  if (n < 0 || !Number.isInteger(n)) return false;
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(-1)); 
console.log(isSquare(0)); 
console.log(isSquare(3)); 
console.log(isSquare(4)); 
console.log(isSquare(26));  */
/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

/* function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str){
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
} */

/* Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */


/* function shortcut(string) {

return string.replace(/[aeiou]/ig, '');
} */


// console.log(shortcut('Hello'))

/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!) */

function vowelIndices(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let indices = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      indices.push(i + 1); 
    }
  }

  return indices;
}

console.log(vowelIndices("orange"));  
console.log(vowelIndices("super"));   
console.log(vowelIndices("Mmmm"));  
console.log(vowelIndices("Apple"));  





/* function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}
console.log(getCount('abcdefghijklmnopqrstuvwxyz')) */
/* 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests. */
var summation = function (num) {
  // Code here
};