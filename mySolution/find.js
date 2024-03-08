'use strict';
// Find key by value

const find = (object, ...rest) => {
  console.log(object, rest);
  const value = rest.pop(0);
  const keys = Object.keys(object);
  console.log(keys);
  console.log(value);
  for (const key in object) {
    if (object[key] === value) return key;
  }
};

require('../Tests/find.js')(find);
