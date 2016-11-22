function processData(input) {
  var splitInput = input.split("\n")
  var num = splitInput[0]
  var firstWord = ""
  var secondWord =""
  
  for(var i = 1; i < splitInput.length; i++ ) {
    var array = splitInput[i].split("")
    for(var j = 0; j< array.length; j++) {
       if(j%2 === 0) {
         firstWord += array[j]
       } else {
         secondWord += array[j]
       }
    }
    console.log(firstWord + " " + secondWord)
    firstWord = ''
    secondWord = ''
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});