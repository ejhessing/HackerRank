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
  var arr = parseInt(readLine(), 10).toString(2).split('')
  var count = 0
  var current = 0
  
  arr.map(key => { 
    if(parseInt(key, 10) === 1) {
      current++
      if(current >= count) {
         count = current
      }
    } else {
       current = 0
    }
   
  }) 
  console.log(count)
}