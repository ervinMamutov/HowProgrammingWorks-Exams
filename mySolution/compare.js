'use strict';

// Compare two dictionaries

const compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const a = Object.keys(firstValues);
  const b = Object.keys(secondValues);
  if (a.join('-') !== b.join('-')) return false;
  let e = true;
  for (const c of a) {
    if (firstValues[c] === secondValues[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

require('../Tests/compare.js')(compare);
