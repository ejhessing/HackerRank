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
    var words = {}
    var ans = ''
    var find = ''
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
      
      if(op === 'add') {
        words[contact[0]] = words[contact[0]] || ''
        words[contact[0]] += '|' + contact
      } else {
        find = words[contact[0]] || ''
        console.log(find.split('|' + contact).length - 1) 
      }
    }

}