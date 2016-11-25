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
    var n = parseInt(readLine());
    var a = readLine().split(' ');
    a = a.map(Number); 
    var numberOfSwaps = 0
  
  for (let i = 0; i < n; i++) {  
    for (let j = 0; j < n - 1; j++) {      
        if (a[j] > a[j + 1]) {
            const temp = a[j + 1]
            a[j + 1] = a[j]
            a[j] = temp
            numberOfSwaps++
        }
    }   
    if (numberOfSwaps == 0) {
        break
    }
  }
  console.log('Array is sorted in ' + numberOfSwaps + ' swaps.')
  console.log('First Element: ' + a[0])
  console.log('Last Element: ' + a[a.length-1])
}