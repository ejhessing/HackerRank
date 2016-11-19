function processData(input) {
    //Enter your code here

    const arr = input.split("\n")
    const num = arr.shift()
    arr.map(data => { 
      const letters = data.split("")
      let currentLetter = ''
      let deletions = 0
      
      const ans = letters.map(key => {
        if(currentLetter !== key) {
          currentLetter = key
          return key
        }
        deletions++
      })
      console.log(deletions)
    
    })
  
} 

/////////////// ignore below this line ////////////////////

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
