'use strict';
// Find key by value

const find = (object, ...rest) => {
  console.log(object, rest);
  const value = rest.pop(1);
  console.log(value);
  for (const key in object) {
    if (object[key] !== value) {
    } else {
      if (key) return key;
      if (object) return object;
    }
  }
};

require('../Tests/find.js')(find);
