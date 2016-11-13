function processData(input) {
    //Enter your code here
  const split = input.split("\n")
  const actual = split[0].split(" ").map(number)
  const expected = split[1].split(" ").map(number)
  let hackos = 0
  
  
  if(expected[2] == actual[2]) {
    
    if(expected[1] < actual[1]) {
      hackos = (actual[1] - expected[1]) * 500
    } else if(expected[1] == actual[1] && expected[0] < actual[0]) {
      hackos = (actual[0] - expected[0]) * 15
    }
    
  } else if(expected[2] < actual[2]) {
    hackos = 10000
  }
  
  console.log(hackos)

}

function number(item) {
    return parseInt(item, 10)
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
