'use strict';

const sum = (...args) => {
  let k = 0;
  let res = 0;
  if (args.length === 0) return 0;
  do {
    res += args[k];
    k++;
  } while (k < args.length);
  return res;
};

module.exports = { sum };
