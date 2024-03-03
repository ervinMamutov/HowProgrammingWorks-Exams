'use strict';
// Find a difference between two dictionaries

const diff = (objectOne, objectTwo) => {
  for (const attributeName in objectOne) {
    objectOne[attributeName] = objectOne[attributeName];
  }
  if (objectOne in objectTwo) return false;
  for (const attributeName in objectTwo) {
    objectOne[attributeName] = objectTwo[attributeName];
    delete objectOne[attributeName];
  }
  return objectOne;
};

require('../Tests/difference.js')(diff);
