# Find the biggest square

Given an matrix that contain 1 and 0, find the biggest square of consecutive 1 inside the matrix.

Example:
```javascript
var testData = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(findBiggestSquare(testData));
// Outputs 6 on the console

testData = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(findBiggestSquare(testData));
// Outputs 3 on the console
```