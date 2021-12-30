function fizzBuzz(start, end) {
  // Insert code here;
  var len=(end-start)+1;
  var newArr= new Array();
  for(let i=0;i<len;i++){
    newArr[i]=start+i;
    if(newArr[i]%3===0){
      newArr[i]="Fizz";
    }
    if(newArr[i]%5===0){
      newArr[i]="Buzz";
    }
  }
  return newArr;
}

// Do not edit this line;
module.exports = fizzBuzz;