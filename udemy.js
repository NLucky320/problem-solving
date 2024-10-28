function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }

  /**************Don't change the code below****************/
}

let output = [];
let count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 == 0) {
    output.push("fizbuzzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }

  count++;
  console.log(output);
}
