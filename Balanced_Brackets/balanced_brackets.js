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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var e = readLine().split("");
        
      let arr = []
      let ans = 'YES'
      const length = e.length
        for(let i = 0; i < length; i++) { 
          if(e[i] ==='[' || e[i] === '{' || e[i] ==="(") {
            arr.push(e[i])
          } else {
            if(checkBracket(e[i], arr)) {
              arr.pop()
            } else {
              ans = 'NO'
              break
            }
         }
        }
      if(arr.length !== 0) {
        ans = 'NO'
      }
      console.log(ans)

   }
}

function checkBracket(bracket, arr) {
  const opening = ["{", "[", "("]
  const closing = ["}", "]", ")"]
  
  for(let i = 0; i < 3; i++) {
    if(closing[i] === bracket) {
      if(opening[i] === arr[arr.length - 1]) {
         return true
      } 
      return false
    }
  }
    
}