'use strict';
// Filter array by type name

const filter = (array, type) => {
  const remove = [];
  for (const value of array) {
    if (typeof value !== type) {
      console.log('array ', array, 'value ', value);
      console.log('index ', array.indexOf(value));
      remove.unshift(array.indexOf(value));
    }
  }
  for (const x of remove) array.splice(x, 1);
  return array;
};

require('../Tests/filter.js')(filter);
