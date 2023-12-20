function mergeArray(arr1, arr2) {
  return arr1.concat(arr2).filter(value => value > 0).sort((a, b) => a - b);
}

console.log(mergeArray([3, 3, 2, 1, 2, 0, 0, 3, 4], [3, 4, 2, 4, 0, 0]));
