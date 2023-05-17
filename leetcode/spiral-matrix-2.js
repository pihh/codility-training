var generateMatrix = function (n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));

  // Current value
  let value = 1;
  let xStart = 0;
  let xEnd = n - 1;
  let yStart = 0;
  let yEnd = n - 1;

  while (yStart <= yEnd && xStart <= xEnd) {
    // Traverse right
    for (let i = xStart; i <= xEnd; i++) {
      matrix[yStart][i] = value++;
    }
    yStart++;

    // Traverse down
    for (let i = yStart; i <= yEnd; i++) {
      matrix[i][xEnd] = value++;
    }
    xEnd--;

    if (yStart <= yEnd) {
      // Traverse left
      for (let i = xEnd; i >= xStart; i--) {
        matrix[yEnd][i] = value++;
      }
      yEnd--;
    }

    if (xStart <= xEnd) {
      // Traverse up
      for (let i = yEnd; i >= yStart; i--) {
        matrix[i][xStart] = value++;
      }
      xStart++;
    }
  }

  return matrix;
};
