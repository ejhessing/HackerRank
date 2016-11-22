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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
   // Code below this line    
  var count = -9 * 7  //Lowest possible combination 
  
  for(var i = 1; i < arr.length -1; i++) {
    for(var j = 1; j < arr[i].length -1; j++) {
      const current = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
                               + arr[i][j]
              + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
      
      if(current > count) {
        count = current
      }
    }
  }
  console.log(count)
}