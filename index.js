function maxSquareSize(sample, top, left, debug = false) {
  if (sample[top][left] == 0) return 0;
  var size = 0;
  let isSquare = true;
  while (isSquare) {
    try {
      size++;
      if (debug) console.log({ size }, "-----------");
      for (let i = 0; i <= size; i++) {
        if (debug) {
          console.log("Checking x");
          console.log({ y: size+top, x: i+left });
        }
        if (sample[size + top][i+left] == 0) {
          isSquare = false;
          break
        }
        if (debug) {
          console.log("Checking y");
          console.log({ y: i+top, x: size+left });
        }
        if(i == size) break
        if (isSquare && sample[i+top][size + left] == 0) {
          isSquare = false;
          break
        }
      }
    } catch {
      isSquare = false;
    }
  }
  return size;
}

function findBiggestSquare(sample) {
  let [maxSize, top, left] = [0, 0, 0];
  let end = false;
  while (!end) {
    let currentSize = maxSquareSize(sample, top, left);
    if (currentSize > maxSize) maxSize = currentSize;
    let limit = sample.length - 1 - maxSize;
    console.log({ maxSize, top, left, limit });
    top++;
    if (!(top <= limit)) {
      top = 0;
      left++;
    }
    if (!(left <= limit)) end = true;
  }
  return maxSize;
}

var testData = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(findBiggestSquare(testData));
//console.log(maxSquareSize(testData, 0, 1, true));
