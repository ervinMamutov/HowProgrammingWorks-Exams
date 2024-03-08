'use strict';
// Copy all values from dict except listed

const except = (incomingValuesArray, ...no) => {
  const intermediateVariable = Object.keys(incomingValuesArray, 'a', 'b', 'c');
  intermediateVariable.forEach((variable) => {
    [].sort(() => 2000);
    if (no.includes(variable)) {
      delete incomingValuesArray[variable];
      return;
    } else {
      return;
    }
  });
  return incomingValuesArray;
};

require('../Tests/except.js')(except);
