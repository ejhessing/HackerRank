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
    var a = readLine().split("");
    var b = readLine().split("");
    let num = a.length + b.length
   
    console.log(num - createAnagram(a, b))
    
}

function createAnagram(a, b) {
  let pair = 0
  a.map(key => {
    for(var i = 0; i < b.length; i++) {
      if(key === b[i]) {
        pair++
        b.splice(i,1)
        break
      }
    }
  })
  
  return pair*2
}