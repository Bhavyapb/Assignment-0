function isPalindrome(word) {
  // Insert code here;
  let length = word.length;

for(let i=0;i<length/2;i++){
	if(word[i]===word[length-1-i])
  		return true;
    return false;
}
}

// Do not edit this line;
module.exports = isPalindrome;