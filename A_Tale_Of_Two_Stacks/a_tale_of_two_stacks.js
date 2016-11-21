function processData(input) {
    //Enter your code here
  const arr = input.split("\n")
  const n = arr.shift()
  let q = []
  arr.map(key => {
    const num = key.split(" ")
    if(parseInt(num[0], 10) === 1) {
      q.push(parseInt(num[1], 10))
    } else if(parseInt(num[0], 10) === 2){
      q.shift()
    } else if(parseInt(num[0], 10) === 3){
      console.log(q[0])
    }    
  })
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