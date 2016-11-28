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
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        console.log(stairs(n))
    }

}

function stairs (num) {
  if (num === 1) {
     return 1
   } else if (num === 2) {
     return 2
   } else if (num === 3) {
     return 4
   } else {
     return stairs(num - 1) + stairs(num - 2) + stairs(num - 3)
   }  
}
