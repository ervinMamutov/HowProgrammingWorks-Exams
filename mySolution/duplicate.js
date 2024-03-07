'use strict';
// Return and array with duplicates

const duplicate = (value, n) => {
  const res = [];
  if (n <= 0) return [];
  else {
    for (let i = 0; i < n; i++) {
      res[i] = value;
    }
    console.log(res);
    return res;
  }
};

require('../Tests/duplicate.js')(duplicate);
