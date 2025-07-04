// Ques :- 1 Subsets Lt:- 78

let arr = [1, 2, 3];
function solve(arr,ans,cur,i) {
  if (i === arr.length) {
    ans.push([...cur]);
    return
  }
  //pick
  cur.push(arr[i]);
  solve(arr, ans, cur, i + 1);
  cur.pop();
  //not pick
  solve(arr, ans, cur, i + 1);
}
function subset(arr) {
  let ans = []
  let cur = []
  solve(arr, ans, cur, 0);
  return ans
}
console.log(subset(arr))


