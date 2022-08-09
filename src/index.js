module.exports = function towelSort (matrix = []) {
  let sorted = [];
   for (let i = 0; i < matrix.length; i++) {
    if  ((i + 1) % 2 !== 0)
      for (let j = 0; j < matrix[i].length; j++) {
        sorted.push(matrix[i][j]);
        console.log(matrix[i][j]);
      }
    else if ((i + 1) % 2 == 0)
      for (let j = matrix[i].length-1; j >= 0; j--)
          sorted.push(matrix[i][j]);
  }
  return sorted;
}
