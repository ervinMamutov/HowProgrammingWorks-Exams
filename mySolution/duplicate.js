'use strict';
// Return and array with duplicates

const duplicate = (value, n) => {
  if (n <= 0) return [];

  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(value);
  }
  return res;
};

require('../Tests/duplicate.js')(duplicate);
