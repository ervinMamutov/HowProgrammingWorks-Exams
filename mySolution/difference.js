'use strict';
// Find a difference between two dictionaries

const diff = (objectOne, objectTwo) => {
  const newObjectOne = Object.assign({}, objectOne);
  const objectTwoKeys = Object.keys(objectTwo);

  for (const key of objectTwoKeys) {
    delete newObjectOne[key];
  }

  return newObjectOne;
};

require('../Tests/difference.js')(diff);
