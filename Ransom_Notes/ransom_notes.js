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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    
    // Enter your code
    let mag = {}
  
    magazine.map(key => {
      if(mag.hasOwnProperty(key)) {
        mag[key] += 1 
      } else {
        mag[key] = 1
      }
    })
      
    console.log(canMakeNote(ransom, mag))

}

function canMakeNote (ransom, mag) {
  let isThere = true
  ransom.map(key => {
      if(mag.hasOwnProperty(key) && mag[key] >= 1) {
        mag[key] -= 1
      } else {
        isThere = false
      }
  })
  return isThere ? 'Yes' : 'No'
}