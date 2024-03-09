'use strict';
// Increment all numbers in dictionary

const incrementNumbers = (formatComplete, ...restVariables) => {
  console.log('formatComplete:', formatComplete);
  console.log('restVariables:', restVariables);
  for (const deleteFile in formatComplete) {
    if (typeof formatComplete[deleteFile] === 'number') {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

require('../Tests/inc.js')(incrementNumbers);
