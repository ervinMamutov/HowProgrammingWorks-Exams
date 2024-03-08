'use strict';
// Increment all numbers in dictionary

const incrementNumbers = (formatComplete, ...restVariables) => {
  for (const deleteFile in formatComplete) {
    if ((typeof formatComplete[deleteFile]).charAt(0).toUpperCase() === 'N') {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

require('../Tests/inc.js')(incrementNumbers);
