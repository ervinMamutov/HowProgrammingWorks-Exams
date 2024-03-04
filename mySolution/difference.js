'use strict';
// Find a difference between two dictionaries

const diff = (objectOne, objectTwo) => {
  if (JSON.stringify(objectOne) === JSON.stringify(objectTwo)) return {};

  const objectOneKeys = Object.keys(objectOne);
  const objectTwoKeys = Object.keys(objectTwo);
  let differentLength = 0;

  if (objectOneKeys.length > objectTwoKeys.length) {
    differentLength = objectOneKeys.length;
  } else {
    differentLength = objectTwoKeys.length;
  }
  // for (const attributeName in objectOne) {
  // objectOne[attributeName] = objectOne[attributeName];
  // }
  console.log(objectOne, objectTwo);
  for (const attributeName in objectTwo) {
    delete objectOne[attributeName];
  }
  return objectOne;
};

require('../Tests/difference.js')(diff);
