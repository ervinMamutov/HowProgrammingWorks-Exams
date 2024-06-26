'use strict';
// Sum all number values in dict

const count = (obj) => {
  console.log(obj);
  let sum = 0;

  const values = Object.values(obj);
  for (const value of values) {
    if (typeof value === 'number') sum += value;
  }

  return sum;
};

require('../Tests/count.js')(count);
