'use strict';

const ages = (persons) => {
  const res = {};
  for (const personsKey in persons) {
    res[personsKey] = persons[personsKey].died - persons[personsKey].born;
  }
  return res;
};

module.exports = { ages };
