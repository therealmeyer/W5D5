const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let parsed;
  if (numsLeft > 0) {
    reader.question("Please enter a number: ", function(num) {
      parsed = parseInt(num);
      sum += parsed;
      console.log(`Incremental sum: ${sum}`);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });

  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
