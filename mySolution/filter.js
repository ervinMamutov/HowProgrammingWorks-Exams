'use strict';
// Filter array by type name

const filter = (array, type) => {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== type) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
};

require('../Tests/filter.js')(filter);
