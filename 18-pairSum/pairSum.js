function pairSum(nums, target) {
  // Insert code here;
  var isSum =false;
  for(let i=0;i<(nums.length)-1;i++){
    for(let j=i+1;j<(nums.length);j++){
      if(nums[i]+nums[j]===target){
        isSum =true;
      }
    }
  }
  return isSum;
}

// Do not edit this line;
module.exports = pairSum;