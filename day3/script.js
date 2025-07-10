// Ques:-1 Subsets II Lt:-90
function solve(nums,ans,curr,i) {
  if (i === nums.length) {
    ans.push([...curr])
    return 
  }

  //pick
  curr.push(nums[i])
  solve(nums, ans, curr, i+1)
  curr.pop()
  //not pick
  while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
    i++
  }
  solve(nums, ans, curr, i+1);
}
function subset(nums) {
  nums.sort((a, b) => a - b);
  let ans = []
  let curr = []
  solve(nums, ans, curr, 0)
  return ans
}
console.log(subset([1, 2, 2]));