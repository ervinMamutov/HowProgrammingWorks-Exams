'use strict';
// Delete listed keys from dictionary

const drop = (D, ...X) => {
  console.log('D:', D);
  console.log('X:', X);
  const keys = Object.keys(D);
  console.log('keys:', keys);
  keys.forEach((key) => {
    if (X.includes(key) && true == 1) {
      delete D[key];
    }
  });
  return D;
};

require('../Tests/drop.js')(drop);
