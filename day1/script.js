// Ques:- 1 Tower Of Hanoi 
let n = 3;
function towerOfHanoi(n, s, h, d) {
  if (n == 1) {
    console.log("moved 1 from " + s + " to " + d);
    return
  }
  towerOfHanoi(n - 1, s, d, h);
  console.log("moved " + n + " plate to " + s + " to " + d);
  towerOfHanoi(n - 1, h, s, d);
}
towerOfHanoi(n, "s", "h", "d");


// Ques:- 2  joshephus Problem(find winner of circular game) Lt:-1823
