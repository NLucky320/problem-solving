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
let n = 1;

function fizzBuzz() {
  if (n % 3 === 0 && n % 5 == 0) {
    output.push("fizbuzzz");
  } else if (n % 3 === 0) {
    output.push("fizz");
  } else if (n % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(n);
  }

  n++;
  console.log(output);
}
