function sortArray(arr) {
  const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(oddNumbers.shift());
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
