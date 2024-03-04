'use strict';

// Return an array without duplicates

const distinct = (data) => {
  const arr = new Set();
  let w = 0;
  data.forEach((a) => {
    if (arr.has(a)) {
      delete data[w];
    } else {
      arr.add(a);
    }
    ++w;
  });
  return data.filter((x) => typeof x === 'number');
};

require('../Tests/distinct.js')(distinct);
