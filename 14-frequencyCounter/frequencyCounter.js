function frequencyCounter(word) {
  // Insert code here;
  const chArr={};
  for(let i=0;i<word.length;i++){
    const ch=word[i];
    if(!chArr[i]){
      chArr[ch]=0;
    }
    chArr[ch]++;
  }
  return chArr;
}

// Do not edit this line;
module.exports = frequencyCounter;