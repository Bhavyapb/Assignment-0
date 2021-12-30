function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var low=arr[0]
  var high=arr[0]

  for(let i=1;i<arr.length;i++){
	  if(arr[i]<low){
		  low =arr[i];
	  }
    if(arr[i]>high){
  	  high =arr[i];
    }
  }
	return low+high;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;