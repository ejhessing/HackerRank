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

/////////////// ignore above this line ////////////////////

function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
      
        // Enter your code
        if(primeNum(n)) {
          console.log('Prime')
        } else {
          console.log('Not prime')
        }
    }

}

function primeNum (num) {
  if(num <= 1) {
    return false
  } else if (num <= 3) {
    return true
  } else if (num % 2 === 0) {
    return false
  }
  
  let max = Math.sqrt(num)
  for(var i = 3; i <= max; i += 2) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}