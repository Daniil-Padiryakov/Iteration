'use strict';

const sum = (...args) => {
  let k = 0;
  let res = 0;
  while (k < args.length) {
    res += args[k];
    k++;
  }
  return res;
};

module.exports = { sum };
