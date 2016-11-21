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
    var a = [];
  
    let total = 0
    let middleIndex = 0
    let length = 0
    let newValue = 0
    for(var i = 0; i < n; i++){
       newValue = parseInt(readLine());
      
       for(var j = 0; j <= i; j++) {
         if(j === i) {
           a.push(newValue)
           break
         } else if(newValue < a[j]) {
           a.splice(j, 0, newValue)
           break
         }
       }
       
       length = i + 1
       middleIndex = Math.floor(length/2)
       
       if(length % 2 === 0) {
         total = (a[middleIndex - 1] + a[middleIndex])/2        
       } else {
         total = a[middleIndex]
       }

       console.log(total.toFixed(1))
    }
}