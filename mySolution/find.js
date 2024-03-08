'use strict';
// Find key by value

const find = (object, ...rest) => {
  const keys = Object.keys(object);
  const value = rest.pop(0);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
};

require('../Tests/find.js')(find);
