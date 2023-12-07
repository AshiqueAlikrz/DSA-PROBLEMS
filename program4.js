function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (i = 2; i < num; i++) {
    if (i % num === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(7));
