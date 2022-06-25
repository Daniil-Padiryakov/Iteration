'use strict';
// todo
const max = (matrix) => {
  let res = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = row[j];
      if (res < cell) res = cell;
    }
  }
  return res;
};

module.exports = { max };
