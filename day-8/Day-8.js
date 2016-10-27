function processData(input) {
  const arr = input.split("\n")
  const number = arr.shift()
  
  const names = arr.splice(number)
  let phoneBook = {}
  
  arr.map(data => {
    const split = data.split(' ')
    phoneBook[split[0]] = split[1]
  })
  
  
  names.map(data => {
    if(phoneBook[data]) {
      console.log(`${data}=${phoneBook[data]}`)
    } else {
      console.log('Not found')
    }
  })
}

//Code given
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
