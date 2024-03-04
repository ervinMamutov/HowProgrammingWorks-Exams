'use strict';

// Return an array without duplicates

const distinct = (data) => {
  const duplicateData = data.slice();
  const arr = new Set();
  let key = 0;

  for (const a of duplicateData) {
    if (arr.has(a)) {
      delete duplicateData[key];
    } else {
      arr.add(a);
    }
    ++key;
  }

  return duplicateData.filter((x) => typeof x === 'number');
};

require('../Tests/distinct.js')(distinct);
