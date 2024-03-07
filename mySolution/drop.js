'use strict';
// Delete listed keys from dictionary

const drop = (dictionary, ...deleteKeys) => {
  const keys = Object.keys(dictionary);
  for (const key of keys) {
    if (deleteKeys.includes(key)) {
      delete dictionary[key];
    }
  }
  return dictionary;
};

require('../Tests/drop.js')(drop);
