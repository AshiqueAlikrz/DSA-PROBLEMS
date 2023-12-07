// Fibonacci Sequence

function Fibonacci(Number) {
  let arry = [0, 1];
  for (i = 2; i < Number; i++) {
    arry[i] = arry[i - 1] + arry[i - 2];
  }
  return arry;
}

console.log(Fibonacci(3));
