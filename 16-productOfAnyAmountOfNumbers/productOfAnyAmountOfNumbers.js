function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var len =args.length;
  var count=1;
  for(let i=0;i<len;i++){
  	count*=args[i];
  }
  return count;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;