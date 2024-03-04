'use strict';
// Find a difference between two dictionaries

const diff = (objectOne, objectTwo) => {
  if (JSON.stringify(objectOne) === JSON.stringify(objectTwo)) return {};

  console.log(objectOne, objectTwo);
  for (const attributeName in objectTwo) {
    delete objectOne[attributeName];
  }
  return objectOne;
};

require('../Tests/difference.js')(diff);
