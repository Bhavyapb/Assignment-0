class MySolution {
  countDownSum(num) {
    // Insert code here;
    var count =num;
	while(num!==0){
  	count=count+(num-1);
    num=num-1;
  }
	return count;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;