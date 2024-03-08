'use strict';
// Copy all values from dict except listed

const except = (incomingValuesArray, ...no) => {
  const keys = Object.keys(incomingValuesArray);

  for (const key of keys) {
    if (no.includes(key)) {
      delete incomingValuesArray[key];
    }
  }

  // keys.forEach((variable) => {
  //   if (no.includes(variable)) {
  //     delete incomingValuesArray[variable];
  //     return;
  //   } else {
  //     return;
  //   }
  // });
  return incomingValuesArray;
};

require('../Tests/except.js')(except);
