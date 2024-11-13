

var fizzBuzz = function (n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzBuzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else if (i % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(i.toString());
    }
  }

  console.log(output);
  return output;
};
fizzBuzz(20)