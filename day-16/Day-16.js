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
   //Had to use a 'Hack' to get around JS dynamic typing as parseInt doesn't throw an exception just NaN and no conditionals were supposed to be used
   
    var S = readLine();
    var hack = 1
    try { 
      hack.toString(parseInt(S) * 0 + 2) 
      console.log(S)
    } catch (error) {
      console.log("Bad String")
    }
    
}