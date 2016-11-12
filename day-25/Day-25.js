function processData(input) {
    //Enter your code here
 
  var arr = input.split('\n')
  var first = arr.shift()
  arr.map(key => {
    if(primeNum(key)) {
      console.log('Prime')
    } else {
      console.log('Not prime')
    }     
  })
  
  function primeNum (key) {
     if(key <= 1 ) {
      return false
    } else if (key <= 3 ) {
       return true
    } else if (key % 2 === 0 || key % 3 === 0) {
      return false
    }
    var max = Math.sqrt(key)
    for(let i = 5; i <= max; i += 2) {
      if(key % i === 0) {
        return false
      }
    }
    return true
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