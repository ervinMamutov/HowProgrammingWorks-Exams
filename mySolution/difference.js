'use strict';
// Find a difference between two dictionaries

const diff = (objectOne, objectTwo) => {
  for (const attributeName in objectTwo) {
    delete objectOne[attributeName];
  }
  return objectOne;
};

require('../Tests/difference.js')(diff);
