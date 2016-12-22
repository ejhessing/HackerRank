function processData(input) {
    //Enter your code here
   const temp = input.split('\n');
   const t = parseInt(temp[0], 10);
   for(let i = 1; i <= t; i++) {
     let num = temp[i];
     let half = Math.ceil(num/2);
     console.log(half*(num-half));
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
