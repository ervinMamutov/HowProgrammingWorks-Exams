'use strict';

// Compare two dictionaries

const compare = (firstValues, ...parametersList) => {
  console.log(firstValues);
  const secondValues = parametersList[0];
  if (JSON.stringify(firstValues) !== JSON.stringify(secondValues)) {
    return false;
  } else {
    return true;
  }
};

require('../Tests/compare.js')(compare);
