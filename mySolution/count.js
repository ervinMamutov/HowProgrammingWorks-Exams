'use strict';
// Sum all number values in dict

const count = (obj) => {
  console.log(obj);
  let sum = 0;

  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }

  // keys.forEach((key) => {
  //   const value = obj[key];
  //   if (typeof value === 'number') sum += value;
  // });
  return sum;
};

require('../Tests/count.js')(count);
