process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
  var mealCost = parseFloat(readLine())
  var tipPercent = parseFloat(readLine())
  var taxPercent = parseFloat(readLine())

  var tip = mealCost * tipPercent/100
  var tax = mealCost * taxPercent/100
  var totalCost = (mealCost + tip + tax).toFixed(0)
  
  console.log("The total meal cost is " + totalCost + " dollars.")
  
}